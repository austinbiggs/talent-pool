create extension if not exists "cube" with schema "public" version '1.5';

create table "public"."candidate_educations" (
                                               "id" bigint generated by default as identity not null,
                                               "created_at" timestamp with time zone not null default now(),
                                               "candidate_id" uuid not null
);


alter table "public"."candidate_educations" enable row level security;

create table "public"."candidate_profiles" (
                                             "id" bigint generated by default as identity not null,
                                             "created_at" timestamp with time zone not null default now(),
                                             "candidate_id" uuid not null
);


alter table "public"."candidate_profiles" enable row level security;

create table "public"."candidate_work_experiences" (
                                                     "id" bigint generated by default as identity not null,
                                                     "created_at" timestamp with time zone not null default now(),
                                                     "candidate_id" uuid not null
);


alter table "public"."candidate_work_experiences" enable row level security;

create table "public"."candidates" (
                                     "id" uuid not null default gen_random_uuid(),
                                     "created_at" timestamp with time zone not null default now(),
                                     "first_name" text not null,
                                     "last_name" text not null
);


alter table "public"."candidates" enable row level security;

create table "public"."education_majors" (
                                           "id" uuid not null default gen_random_uuid(),
                                           "created_at" timestamp with time zone not null default now(),
                                           "name" text not null
);


alter table "public"."education_majors" enable row level security;

create table "public"."education_minors" (
                                           "id" uuid not null default gen_random_uuid(),
                                           "created_at" timestamp with time zone not null default now(),
                                           "name" text not null
);


alter table "public"."education_minors" enable row level security;

create table "public"."school_locations" (
                                           "id" uuid not null default gen_random_uuid(),
                                           "created_at" timestamp with time zone not null default now(),
                                           "city" text not null,
                                           "state" text not null
);


alter table "public"."school_locations" enable row level security;

create table "public"."schools" (
                                  "id" uuid not null default gen_random_uuid(),
                                  "created_at" timestamp with time zone not null default now(),
                                  "name" text not null
);


alter table "public"."schools" enable row level security;

CREATE UNIQUE INDEX candidate_educations_candidate_id_key ON public.candidate_educations USING btree (candidate_id);

CREATE UNIQUE INDEX candidate_educations_pkey ON public.candidate_educations USING btree (id);

CREATE UNIQUE INDEX candidate_pkey ON public.candidates USING btree (id);

CREATE UNIQUE INDEX candidate_profiles_candidate_id_key ON public.candidate_profiles USING btree (candidate_id);

CREATE UNIQUE INDEX candidate_profiles_pkey ON public.candidate_profiles USING btree (id);

CREATE UNIQUE INDEX candidate_work_experiences_candidate_id_key ON public.candidate_work_experiences USING btree (candidate_id);

CREATE UNIQUE INDEX candidate_work_experiences_pkey ON public.candidate_work_experiences USING btree (id);

CREATE UNIQUE INDEX education_minors_name_key ON public.education_minors USING btree (name);

CREATE UNIQUE INDEX education_minors_pkey ON public.education_minors USING btree (id);

CREATE UNIQUE INDEX majors_name_key ON public.education_majors USING btree (name);

CREATE UNIQUE INDEX majors_pkey ON public.education_majors USING btree (id);

CREATE UNIQUE INDEX school_locations_pkey ON public.school_locations USING btree (id);

CREATE UNIQUE INDEX schools_name_key ON public.schools USING btree (name);

CREATE UNIQUE INDEX schools_pkey ON public.schools USING btree (id);

alter table "public"."candidate_educations" add constraint "candidate_educations_pkey" PRIMARY KEY using index "candidate_educations_pkey";

alter table "public"."candidate_profiles" add constraint "candidate_profiles_pkey" PRIMARY KEY using index "candidate_profiles_pkey";

alter table "public"."candidate_work_experiences" add constraint "candidate_work_experiences_pkey" PRIMARY KEY using index "candidate_work_experiences_pkey";

alter table "public"."candidates" add constraint "candidate_pkey" PRIMARY KEY using index "candidate_pkey";

alter table "public"."education_majors" add constraint "majors_pkey" PRIMARY KEY using index "majors_pkey";

alter table "public"."education_minors" add constraint "education_minors_pkey" PRIMARY KEY using index "education_minors_pkey";

alter table "public"."school_locations" add constraint "school_locations_pkey" PRIMARY KEY using index "school_locations_pkey";

alter table "public"."schools" add constraint "schools_pkey" PRIMARY KEY using index "schools_pkey";

alter table "public"."candidate_educations" add constraint "candidate_educations_candidate_id_key" UNIQUE using index "candidate_educations_candidate_id_key";

alter table "public"."candidate_profiles" add constraint "candidate_profiles_candidate_id_fkey" FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."candidate_profiles" validate constraint "candidate_profiles_candidate_id_fkey";

alter table "public"."candidate_profiles" add constraint "candidate_profiles_candidate_id_key" UNIQUE using index "candidate_profiles_candidate_id_key";

alter table "public"."candidate_work_experiences" add constraint "candidate_work_experiences_candidate_id_fkey" FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."candidate_work_experiences" validate constraint "candidate_work_experiences_candidate_id_fkey";

alter table "public"."candidate_work_experiences" add constraint "candidate_work_experiences_candidate_id_key" UNIQUE using index "candidate_work_experiences_candidate_id_key";

alter table "public"."education_majors" add constraint "majors_name_key" UNIQUE using index "majors_name_key";

alter table "public"."education_minors" add constraint "education_minors_name_key" UNIQUE using index "education_minors_name_key";

alter table "public"."schools" add constraint "schools_name_key" UNIQUE using index "schools_name_key";

grant delete on table "public"."candidate_educations" to "anon";

grant insert on table "public"."candidate_educations" to "anon";

grant references on table "public"."candidate_educations" to "anon";

grant select on table "public"."candidate_educations" to "anon";

grant trigger on table "public"."candidate_educations" to "anon";

grant truncate on table "public"."candidate_educations" to "anon";

grant update on table "public"."candidate_educations" to "anon";

grant delete on table "public"."candidate_educations" to "authenticated";

grant insert on table "public"."candidate_educations" to "authenticated";

grant references on table "public"."candidate_educations" to "authenticated";

grant select on table "public"."candidate_educations" to "authenticated";

grant trigger on table "public"."candidate_educations" to "authenticated";

grant truncate on table "public"."candidate_educations" to "authenticated";

grant update on table "public"."candidate_educations" to "authenticated";

grant delete on table "public"."candidate_educations" to "service_role";

grant insert on table "public"."candidate_educations" to "service_role";

grant references on table "public"."candidate_educations" to "service_role";

grant select on table "public"."candidate_educations" to "service_role";

grant trigger on table "public"."candidate_educations" to "service_role";

grant truncate on table "public"."candidate_educations" to "service_role";

grant update on table "public"."candidate_educations" to "service_role";

grant delete on table "public"."candidate_profiles" to "anon";

grant insert on table "public"."candidate_profiles" to "anon";

grant references on table "public"."candidate_profiles" to "anon";

grant select on table "public"."candidate_profiles" to "anon";

grant trigger on table "public"."candidate_profiles" to "anon";

grant truncate on table "public"."candidate_profiles" to "anon";

grant update on table "public"."candidate_profiles" to "anon";

grant delete on table "public"."candidate_profiles" to "authenticated";

grant insert on table "public"."candidate_profiles" to "authenticated";

grant references on table "public"."candidate_profiles" to "authenticated";

grant select on table "public"."candidate_profiles" to "authenticated";

grant trigger on table "public"."candidate_profiles" to "authenticated";

grant truncate on table "public"."candidate_profiles" to "authenticated";

grant update on table "public"."candidate_profiles" to "authenticated";

grant delete on table "public"."candidate_profiles" to "service_role";

grant insert on table "public"."candidate_profiles" to "service_role";

grant references on table "public"."candidate_profiles" to "service_role";

grant select on table "public"."candidate_profiles" to "service_role";

grant trigger on table "public"."candidate_profiles" to "service_role";

grant truncate on table "public"."candidate_profiles" to "service_role";

grant update on table "public"."candidate_profiles" to "service_role";

grant delete on table "public"."candidate_work_experiences" to "anon";

grant insert on table "public"."candidate_work_experiences" to "anon";

grant references on table "public"."candidate_work_experiences" to "anon";

grant select on table "public"."candidate_work_experiences" to "anon";

grant trigger on table "public"."candidate_work_experiences" to "anon";

grant truncate on table "public"."candidate_work_experiences" to "anon";

grant update on table "public"."candidate_work_experiences" to "anon";

grant delete on table "public"."candidate_work_experiences" to "authenticated";

grant insert on table "public"."candidate_work_experiences" to "authenticated";

grant references on table "public"."candidate_work_experiences" to "authenticated";

grant select on table "public"."candidate_work_experiences" to "authenticated";

grant trigger on table "public"."candidate_work_experiences" to "authenticated";

grant truncate on table "public"."candidate_work_experiences" to "authenticated";

grant update on table "public"."candidate_work_experiences" to "authenticated";

grant delete on table "public"."candidate_work_experiences" to "service_role";

grant insert on table "public"."candidate_work_experiences" to "service_role";

grant references on table "public"."candidate_work_experiences" to "service_role";

grant select on table "public"."candidate_work_experiences" to "service_role";

grant trigger on table "public"."candidate_work_experiences" to "service_role";

grant truncate on table "public"."candidate_work_experiences" to "service_role";

grant update on table "public"."candidate_work_experiences" to "service_role";

grant delete on table "public"."candidates" to "anon";

grant insert on table "public"."candidates" to "anon";

grant references on table "public"."candidates" to "anon";

grant select on table "public"."candidates" to "anon";

grant trigger on table "public"."candidates" to "anon";

grant truncate on table "public"."candidates" to "anon";

grant update on table "public"."candidates" to "anon";

grant delete on table "public"."candidates" to "authenticated";

grant insert on table "public"."candidates" to "authenticated";

grant references on table "public"."candidates" to "authenticated";

grant select on table "public"."candidates" to "authenticated";

grant trigger on table "public"."candidates" to "authenticated";

grant truncate on table "public"."candidates" to "authenticated";

grant update on table "public"."candidates" to "authenticated";

grant delete on table "public"."candidates" to "service_role";

grant insert on table "public"."candidates" to "service_role";

grant references on table "public"."candidates" to "service_role";

grant select on table "public"."candidates" to "service_role";

grant trigger on table "public"."candidates" to "service_role";

grant truncate on table "public"."candidates" to "service_role";

grant update on table "public"."candidates" to "service_role";

grant delete on table "public"."education_majors" to "anon";

grant insert on table "public"."education_majors" to "anon";

grant references on table "public"."education_majors" to "anon";

grant select on table "public"."education_majors" to "anon";

grant trigger on table "public"."education_majors" to "anon";

grant truncate on table "public"."education_majors" to "anon";

grant update on table "public"."education_majors" to "anon";

grant delete on table "public"."education_majors" to "authenticated";

grant insert on table "public"."education_majors" to "authenticated";

grant references on table "public"."education_majors" to "authenticated";

grant select on table "public"."education_majors" to "authenticated";

grant trigger on table "public"."education_majors" to "authenticated";

grant truncate on table "public"."education_majors" to "authenticated";

grant update on table "public"."education_majors" to "authenticated";

grant delete on table "public"."education_majors" to "service_role";

grant insert on table "public"."education_majors" to "service_role";

grant references on table "public"."education_majors" to "service_role";

grant select on table "public"."education_majors" to "service_role";

grant trigger on table "public"."education_majors" to "service_role";

grant truncate on table "public"."education_majors" to "service_role";

grant update on table "public"."education_majors" to "service_role";

grant delete on table "public"."education_minors" to "anon";

grant insert on table "public"."education_minors" to "anon";

grant references on table "public"."education_minors" to "anon";

grant select on table "public"."education_minors" to "anon";

grant trigger on table "public"."education_minors" to "anon";

grant truncate on table "public"."education_minors" to "anon";

grant update on table "public"."education_minors" to "anon";

grant delete on table "public"."education_minors" to "authenticated";

grant insert on table "public"."education_minors" to "authenticated";

grant references on table "public"."education_minors" to "authenticated";

grant select on table "public"."education_minors" to "authenticated";

grant trigger on table "public"."education_minors" to "authenticated";

grant truncate on table "public"."education_minors" to "authenticated";

grant update on table "public"."education_minors" to "authenticated";

grant delete on table "public"."education_minors" to "service_role";

grant insert on table "public"."education_minors" to "service_role";

grant references on table "public"."education_minors" to "service_role";

grant select on table "public"."education_minors" to "service_role";

grant trigger on table "public"."education_minors" to "service_role";

grant truncate on table "public"."education_minors" to "service_role";

grant update on table "public"."education_minors" to "service_role";

grant delete on table "public"."school_locations" to "anon";

grant insert on table "public"."school_locations" to "anon";

grant references on table "public"."school_locations" to "anon";

grant select on table "public"."school_locations" to "anon";

grant trigger on table "public"."school_locations" to "anon";

grant truncate on table "public"."school_locations" to "anon";

grant update on table "public"."school_locations" to "anon";

grant delete on table "public"."school_locations" to "authenticated";

grant insert on table "public"."school_locations" to "authenticated";

grant references on table "public"."school_locations" to "authenticated";

grant select on table "public"."school_locations" to "authenticated";

grant trigger on table "public"."school_locations" to "authenticated";

grant truncate on table "public"."school_locations" to "authenticated";

grant update on table "public"."school_locations" to "authenticated";

grant delete on table "public"."school_locations" to "service_role";

grant insert on table "public"."school_locations" to "service_role";

grant references on table "public"."school_locations" to "service_role";

grant select on table "public"."school_locations" to "service_role";

grant trigger on table "public"."school_locations" to "service_role";

grant truncate on table "public"."school_locations" to "service_role";

grant update on table "public"."school_locations" to "service_role";

grant delete on table "public"."schools" to "anon";

grant insert on table "public"."schools" to "anon";

grant references on table "public"."schools" to "anon";

grant select on table "public"."schools" to "anon";

grant trigger on table "public"."schools" to "anon";

grant truncate on table "public"."schools" to "anon";

grant update on table "public"."schools" to "anon";

grant delete on table "public"."schools" to "authenticated";

grant insert on table "public"."schools" to "authenticated";

grant references on table "public"."schools" to "authenticated";

grant select on table "public"."schools" to "authenticated";

grant trigger on table "public"."schools" to "authenticated";

grant truncate on table "public"."schools" to "authenticated";

grant update on table "public"."schools" to "authenticated";

grant delete on table "public"."schools" to "service_role";

grant insert on table "public"."schools" to "service_role";

grant references on table "public"."schools" to "service_role";

grant select on table "public"."schools" to "service_role";

grant trigger on table "public"."schools" to "service_role";

grant truncate on table "public"."schools" to "service_role";

grant update on table "public"."schools" to "service_role";

alter table "public"."candidate_educations" drop constraint "candidate_educations_candidate_id_key";

drop index if exists "public"."candidate_educations_candidate_id_key";

alter table "public"."candidate_educations" add column "end_date" date not null;

alter table "public"."candidate_educations" add column "school_id" uuid not null;

alter table "public"."candidate_educations" add column "start_date" date not null;

alter table "public"."school_locations" add column "school_id" uuid not null;

CREATE UNIQUE INDEX school_locations_school_id_key ON public.school_locations USING btree (school_id);

alter table "public"."candidate_educations" add constraint "candidate_educations_candidate_id_fkey" FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."candidate_educations" validate constraint "candidate_educations_candidate_id_fkey";

alter table "public"."school_locations" add constraint "school_locations_school_id_fkey" FOREIGN KEY (school_id) REFERENCES schools(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."school_locations" validate constraint "school_locations_school_id_fkey";

alter table "public"."school_locations" add constraint "school_locations_school_id_key" UNIQUE using index "school_locations_school_id_key";
