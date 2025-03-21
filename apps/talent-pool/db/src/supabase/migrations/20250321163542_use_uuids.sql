alter table "public"."candidate_educations" drop constraint "candidate_educations_candidate_id_fkey";

alter table "public"."candidate_profiles" drop constraint "candidate_profiles_candidate_id_fkey";

alter table "public"."candidate_work_experiences" drop constraint "candidate_work_experiences_candidate_id_fkey";



alter table "public"."candidate_educations" drop constraint "candidate_educations_pkey";

alter table "public"."candidate_profiles" drop constraint "candidate_profiles_pkey";

alter table "public"."candidate_work_experiences" drop constraint "candidate_work_experiences_pkey";



drop index if exists "public"."candidate_educations_pkey";

drop index if exists "public"."candidate_profiles_pkey";

drop index if exists "public"."candidate_work_experiences_pkey";


CREATE UNIQUE INDEX candidate_profiles_pkey ON public.candidate_profiles USING btree (id);

alter table "public"."candidate_profiles" add constraint "candidate_profiles_pkey" PRIMARY KEY using index "candidate_profiles_pkey";
