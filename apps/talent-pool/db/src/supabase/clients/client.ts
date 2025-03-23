import { createBrowserClient } from '@supabase/ssr';
import { Database } from '../_generated/types';

const MISSING_SUPABASE_URL = 'MISSING_SUPABASE_URL';
const MISSING_SUPABASE_ANON_KEY = 'MISSING_SUPABASE_ANON_KEY';

const supabaseURL =
  process?.env?.['NEXT_PUBLIC_SUPABASE_URL'] || MISSING_SUPABASE_URL;
const supabaseAnonKey =
  process?.env?.['NEXT_PUBLIC_SUPABASE_ANON_KEY'] || MISSING_SUPABASE_ANON_KEY;

export function createClient() {
  if (supabaseURL == MISSING_SUPABASE_URL) {
    throw new Error('The Supabase URL is missing!');
  }

  if (supabaseAnonKey == MISSING_SUPABASE_ANON_KEY) {
    throw new Error('The Supabase Anon Key is missing!');
  }

  return createBrowserClient<Database>(supabaseURL, supabaseAnonKey);
}
