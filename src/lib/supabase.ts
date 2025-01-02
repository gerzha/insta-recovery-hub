import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qqxmqjfbxvxlxvvxvgzw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxeG1xamZieHZ4bHh2dnh2Z3p3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MjI0NzAsImV4cCI6MjAyNTM5ODQ3MH0.Hs-QcRXEGOqJBBl2QWbxBqHpxLRXZQQXyqDzUEwkYSc';

export const supabase = createClient(supabaseUrl, supabaseKey);