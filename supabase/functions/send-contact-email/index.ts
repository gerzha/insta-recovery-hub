import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    console.log('Initializing Supabase client...')
    const supabase = createClient(
      SUPABASE_URL!,
      SUPABASE_SERVICE_ROLE_KEY!
    )

    console.log('Parsing request body...')
    const { email, contact, name, message } = await req.json()

    console.log('Storing submission in database...')
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert([{ email, contact, name, message }])

    if (dbError) {
      console.error('Database error:', dbError)
      throw new Error('Failed to store contact submission')
    }

    // IMPORTANT: Replace 'your-verified-domain.com' with your actual verified domain from Resend
    const fromEmail = 'support@your-verified-domain.com' // Update this after verifying your domain

    console.log('Sending email via Resend...')
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: `InstaRevive <${fromEmail}>`,
        to: ['instarevived@gmail.com'],
        subject: 'New Contact Form Submission',
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name || 'Not provided'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact:</strong> ${contact}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      })
    })

    if (!res.ok) {
      const error = await res.text()
      console.error('Resend API error:', error)
      
      // Check if it's a domain verification error
      if (error.includes('verify a domain')) {
        throw new Error('Email service not properly configured. Please verify your domain in Resend dashboard.')
      }
      
      throw new Error('Failed to send email')
    }

    const emailData = await res.json()
    console.log('Email sent successfully:', emailData)

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error: any) {
    console.error('Error in send-contact-email function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    )
  }
})