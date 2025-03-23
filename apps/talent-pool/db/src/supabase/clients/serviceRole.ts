import { createBrowserClient } from '@supabase/ssr';
import { Database } from '../_generated/types';
import { HostType } from './types';

if (typeof window !== 'undefined') {
  throw new Error(
    'The service role Supabase client can only be called on the server',
  );
}

const MISSING_SUPABASE_URL = 'MISSING_SUPABASE_URL';
const MISSING_MISSING_SERVICE_ROLE_KEY = 'MISSING_SERVICE_ROLE_KEY';

const localSupabaseURL =
  process?.env?.['NEXT_PUBLIC_LOCAL_SUPABASE_URL'] || process?.env?.['LOCAL_SUPABASE_URL'] || MISSING_SUPABASE_URL;
const localSupabaseServiceRoleKey =
  process?.env?.['LOCAL_SUPABASE_SERVICE_ROLE_KEY'] ||
  MISSING_MISSING_SERVICE_ROLE_KEY;

const remoteSupabaseURL =
  process?.env?.['NEXT_PUBLIC_REMOTE_SUPABASE_URL'] || process?.env?.['REMOTE_SUPABASE_URL'] || MISSING_SUPABASE_URL;
const remoteSupabaseServiceRoleKey =
  process?.env?.['REMOTE_SUPABASE_SERVICE_ROLE_KEY'] ||
  MISSING_MISSING_SERVICE_ROLE_KEY;


const supabaseCredentials = {
  [HostType.local]: {
    supabaseURL: localSupabaseURL,
    supabaseServiceRoleKey: localSupabaseServiceRoleKey
  },
  [HostType.remote]: {
    supabaseURL: remoteSupabaseURL,
    supabaseServiceRoleKey: remoteSupabaseServiceRoleKey
  }
} as const;

export function createServiceRoleClient(host: HostType) {
  const { supabaseURL, supabaseServiceRoleKey } = supabaseCredentials[host];

  if (supabaseURL == MISSING_SUPABASE_URL) {
    throw new Error('The Supabase URL is missing!');
  }

  if (supabaseServiceRoleKey == MISSING_SUPABASE_URL) {
    throw new Error('The Supabase Service Role Key is missing!');
  }

  return createBrowserClient<Database>(supabaseURL, supabaseServiceRoleKey);
}
