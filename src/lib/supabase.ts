import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://hxeefuuqvagnjsvuxvtn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4ZWVmdXVxdmFnbmpzdnV4dnRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0NTQ4MDAsImV4cCI6MjAyMDAzMDgwMH0.qgYhVYcQGnFV0yxXM5IRjZd_Nk5_KWqHHmhFRwmxh8Q'
)