alter table "public"."candidate_educations" alter column "id" set default gen_random_uuid();

alter table "public"."candidate_educations" alter column "id" drop identity;

alter table "public"."candidate_educations" alter column "id" set data type uuid using "id"::uuid;

alter table "public"."candidate_profiles" alter column "id" set default gen_random_uuid();

alter table "public"."candidate_profiles" alter column "id" drop identity;

alter table "public"."candidate_profiles" alter column "id" set data type uuid using "id"::uuid;

alter table "public"."candidate_work_experiences" alter column "id" set default gen_random_uuid();

alter table "public"."candidate_work_experiences" alter column "id" drop identity;

alter table "public"."candidate_work_experiences" alter column "id" set data type uuid using "id"::uuid;

CREATE UNIQUE INDEX candidate_educations_id_key ON public.candidate_educations USING btree (id);

CREATE UNIQUE INDEX candidate_profiles_id_key ON public.candidate_profiles USING btree (id);

CREATE UNIQUE INDEX candidate_work_experiences_id_key ON public.candidate_work_experiences USING btree (id);

alter table "public"."candidate_educations" add constraint "candidate_educations_id_key" UNIQUE using index "candidate_educations_id_key";

alter table "public"."candidate_educations" add constraint "candidate_educations_school_id_fkey" FOREIGN KEY (school_id) REFERENCES schools(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."candidate_educations" validate constraint "candidate_educations_school_id_fkey";

alter table "public"."candidate_profiles" add constraint "candidate_profiles_id_key" UNIQUE using index "candidate_profiles_id_key";

alter table "public"."candidate_work_experiences" add constraint "candidate_work_experiences_id_key" UNIQUE using index "candidate_work_experiences_id_key";
