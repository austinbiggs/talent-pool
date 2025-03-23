import { createBrowserClient } from '@supabase/ssr';
import { Database } from '../_generated/types';

if (typeof window !== 'undefined')
  throw new Error(
    'The service role Supabase client can only be called on the server',
  );

const MISSING_SUPABASE_URL = 'MISSING_SUPABASE_URL';
const MISSING_MISSING_SERVICE_ROLE_KEY = 'MISSING_SERVICE_ROLE_KEY';

const supabaseURL =
  process?.env?.['NEXT_PUBLIC_SUPABASE_URL'] || process?.env?.['SUPABASE_URL'] || MISSING_SUPABASE_URL;
const supabaseServiceRoleKey =
  process?.env?.['SUPABASE_SERVICE_ROLE_KEY'] ||
  MISSING_MISSING_SERVICE_ROLE_KEY;

export function createServiceRoleClient() {
  if (supabaseURL == MISSING_SUPABASE_URL) {
    throw new Error('The Supabase URL is missing!');
  }

  if (supabaseServiceRoleKey == MISSING_SUPABASE_URL) {
    throw new Error('The Supabase Service Role Key is missing!');
  }

  return createBrowserClient<Database>(supabaseURL, supabaseServiceRoleKey);
}
