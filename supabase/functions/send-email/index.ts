import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { email, contact, name, message, to, subject } = await req.json()
    
    console.log('Processing email request:', { email, contact, name, message, to, subject })

    // Send email using SendGrid API
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('SENDGRID_API_KEY')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [{ 
          to: [{ email: to }] 
        }],
        from: { 
          email: 'your-verified-sender@yourdomain.com',  // Replace with your verified sender
          name: 'Instagram Account Recovery'
        },
        subject: subject,
        content: [{
          type: 'text/plain',
          value: `
New Account Recovery Request

From: ${name}
Email: ${email}
Contact (WhatsApp/Telegram): ${contact}

Message:
${message}

---
This email was sent from your Instagram Account Recovery contact form.
          `.trim()
        }]
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('SendGrid API error:', errorData)
      throw new Error('Failed to send email')
    }

    console.log('Email sent successfully')
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