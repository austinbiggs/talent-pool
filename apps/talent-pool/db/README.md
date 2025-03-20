# db

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test db` to execute the unit tests via [Jest](https://jestjs.io).

## Command Cheatsheet

A quick cheatsheet for common commands and operations.

| Operation 🛠️                                                                                                             | Terminal command ⌨️                                                           |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [Start Supabase](https://supabase.com/docs/reference/cli/introduction)                                                   | `db:supabase start`                                                    |
| [Check Supabase status](https://supabase.com/docs/reference/cli/introduction)                                            | `db:supabase status`                                                   |
| [Stop Supabase](https://supabase.com/docs/reference/cli/introduction)                                                    | `db:supabase stop`                                                     |
| [Sync Supabase schema](https://supabase.com/docs/reference/cli/supabase-db-dump)                                         | `db:supabase db dump -f supabase/schema.sql --schema public`           |
| [Sync Supabase data](https://supabase.com/docs/reference/cli/supabase-db-dump)                                           | `db:supabase db dump -f supabase/data.sql --data-only --schema public` |
| [Create a new Supabase migration](https://supabase.com/docs/guides/local-development/overview)                           | `db:supabase migration new <migration-name>`                           |
| [Reset the DB + Apply all Supabase migrations](https://supabase.com/docs/guides/local-development/overview)              | `db:supabase db reset`                                                 |
| [Print the diff between migrations and your local Supabase](https://supabase.com/docs/guides/local-development/overview) | `db:supabase db diff --schema public`                                  |
