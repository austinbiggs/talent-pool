import { createBrowserClient } from '@supabase/ssr';
import { Database } from '../_generated/types';
import { HostType } from 'talent:dbsupabase/clients/types';

const MISSING_SUPABASE_URL = 'MISSING_SUPABASE_URL';
const MISSING_SUPABASE_ANON_KEY = 'MISSING_SUPABASE_ANON_KEY';

const localSupabaseURL =
  process?.env?.['NEXT_PUBLIC_LOCAL_SUPABASE_URL'] || MISSING_SUPABASE_URL;
const localSupabaseAnonKey =
  process?.env?.['NEXT_PUBLIC_LOCAL_SUPABASE_ANON_KEY'] || MISSING_SUPABASE_ANON_KEY;

const remoteSupabaseURL =
  process?.env?.['NEXT_PUBLIC_REMOTE_SUPABASE_URL'] || MISSING_SUPABASE_URL;
const remoteSupabaseAnonKey =
  process?.env?.['NEXT_PUBLIC_REMOTE_SUPABASE_ANON_KEY'] || MISSING_SUPABASE_ANON_KEY;

const supabaseCredentials = {
  [HostType.local]: {
    supabaseURL: localSupabaseURL,
    supabaseAnonKey: localSupabaseAnonKey
  },
  [HostType.remote]: {
    supabaseURL: remoteSupabaseURL,
    supabaseAnonKey: remoteSupabaseAnonKey
  }
} as const;

export function createClient(host: HostType) {
  const { supabaseURL, supabaseAnonKey } = supabaseCredentials[host];

  if (supabaseURL == MISSING_SUPABASE_URL) {
    throw new Error('The Supabase URL is missing!');
  }

  if (supabaseAnonKey == MISSING_SUPABASE_ANON_KEY) {
    throw new Error('The Supabase Anon Key is missing!');
  }

  return createBrowserClient<Database>(supabaseURL, supabaseAnonKey);
}
