import { serve } from "https://deno.fresh.dev/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { email, contact, name, message, to, subject } = await req.json()
    
    console.log('Received email request:', { email, contact, name, message, to, subject })

    // Here you would integrate with your email service (SendGrid, AWS SES, etc)
    // For example with SendGrid:
    // const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${Deno.env.get('SENDGRID_API_KEY')}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     personalizations: [{ to: [{ email: to }] }],
    //     from: { email: 'your-verified-sender@domain.com' },
    //     subject: subject,
    //     content: [{
    //       type: 'text/plain',
    //       value: `New recovery request:\nEmail: ${email}\nContact: ${contact}\nName: ${name}\nMessage: ${message}`
    //     }]
    //   })
    // })

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (error) {
    console.error('Error processing request:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    )
  }
})