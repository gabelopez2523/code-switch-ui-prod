// src/utils/logPrompt.js
import { supabase } from '../lib/supabaseClient'

export async function logPrompt({ prompt, response, tone = '', language = '', scenario_context = '' }) {
  const { error } = await supabase.from('prompt_logs').insert([
    {
      prompt,
      response,
      tone,
      language,
      scenario_context,
    },
  ])

  if (error) {
    console.error('Error logging prompt:', error)
  }
}