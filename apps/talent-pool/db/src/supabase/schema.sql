

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE SCHEMA IF NOT EXISTS "public";


ALTER SCHEMA "public" OWNER TO "pg_database_owner";


COMMENT ON SCHEMA "public" IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "public"."candidate_educations" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "candidate_id" "uuid" NOT NULL,
    "end_date" "date" NOT NULL,
    "school_id" "uuid" NOT NULL,
    "start_date" "date" NOT NULL
);


ALTER TABLE "public"."candidate_educations" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."candidate_profiles" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "candidate_id" "uuid" NOT NULL
);


ALTER TABLE "public"."candidate_profiles" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."candidate_work_experiences" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "candidate_id" "uuid" NOT NULL
);


ALTER TABLE "public"."candidate_work_experiences" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."candidates" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "first_name" "text" NOT NULL,
    "last_name" "text" NOT NULL
);


ALTER TABLE "public"."candidates" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."education_majors" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" "text" NOT NULL
);


ALTER TABLE "public"."education_majors" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."education_minors" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" "text" NOT NULL
);


ALTER TABLE "public"."education_minors" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."school_locations" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "city" "text" NOT NULL,
    "state" "text" NOT NULL,
    "school_id" "uuid" NOT NULL
);


ALTER TABLE "public"."school_locations" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."schools" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" "text" NOT NULL
);


ALTER TABLE "public"."schools" OWNER TO "postgres";


ALTER TABLE ONLY "public"."candidate_educations"
    ADD CONSTRAINT "candidate_educations_id_key" UNIQUE ("id");



ALTER TABLE ONLY "public"."candidate_educations"
    ADD CONSTRAINT "candidate_educations_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."candidates"
    ADD CONSTRAINT "candidate_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."candidate_profiles"
    ADD CONSTRAINT "candidate_profiles_candidate_id_key" UNIQUE ("candidate_id");



ALTER TABLE ONLY "public"."candidate_profiles"
    ADD CONSTRAINT "candidate_profiles_id_key" UNIQUE ("id");



ALTER TABLE ONLY "public"."candidate_profiles"
    ADD CONSTRAINT "candidate_profiles_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."candidate_work_experiences"
    ADD CONSTRAINT "candidate_work_experiences_candidate_id_key" UNIQUE ("candidate_id");



ALTER TABLE ONLY "public"."candidate_work_experiences"
    ADD CONSTRAINT "candidate_work_experiences_id_key" UNIQUE ("id");



ALTER TABLE ONLY "public"."candidate_work_experiences"
    ADD CONSTRAINT "candidate_work_experiences_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."education_minors"
    ADD CONSTRAINT "education_minors_name_key" UNIQUE ("name");



ALTER TABLE ONLY "public"."education_minors"
    ADD CONSTRAINT "education_minors_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."education_majors"
    ADD CONSTRAINT "majors_name_key" UNIQUE ("name");



ALTER TABLE ONLY "public"."education_majors"
    ADD CONSTRAINT "majors_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."school_locations"
    ADD CONSTRAINT "school_locations_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."school_locations"
    ADD CONSTRAINT "school_locations_school_id_key" UNIQUE ("school_id");



ALTER TABLE ONLY "public"."schools"
    ADD CONSTRAINT "schools_name_key" UNIQUE ("name");



ALTER TABLE ONLY "public"."schools"
    ADD CONSTRAINT "schools_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."candidate_educations"
    ADD CONSTRAINT "candidate_educations_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "public"."candidates"("id") ON UPDATE CASCADE ON DELETE CASCADE;



ALTER TABLE ONLY "public"."candidate_educations"
    ADD CONSTRAINT "candidate_educations_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON UPDATE CASCADE ON DELETE CASCADE;



ALTER TABLE ONLY "public"."candidate_profiles"
    ADD CONSTRAINT "candidate_profiles_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "public"."candidates"("id") ON UPDATE CASCADE ON DELETE CASCADE;



ALTER TABLE ONLY "public"."candidate_work_experiences"
    ADD CONSTRAINT "candidate_work_experiences_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "public"."candidates"("id") ON UPDATE CASCADE ON DELETE CASCADE;



ALTER TABLE ONLY "public"."school_locations"
    ADD CONSTRAINT "school_locations_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON UPDATE CASCADE ON DELETE CASCADE;



ALTER TABLE "public"."candidate_educations" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."candidate_profiles" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."candidate_work_experiences" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."candidates" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."education_majors" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."education_minors" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."school_locations" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."schools" ENABLE ROW LEVEL SECURITY;


GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";



GRANT ALL ON TABLE "public"."candidate_educations" TO "anon";
GRANT ALL ON TABLE "public"."candidate_educations" TO "authenticated";
GRANT ALL ON TABLE "public"."candidate_educations" TO "service_role";



GRANT ALL ON TABLE "public"."candidate_profiles" TO "anon";
GRANT ALL ON TABLE "public"."candidate_profiles" TO "authenticated";
GRANT ALL ON TABLE "public"."candidate_profiles" TO "service_role";



GRANT ALL ON TABLE "public"."candidate_work_experiences" TO "anon";
GRANT ALL ON TABLE "public"."candidate_work_experiences" TO "authenticated";
GRANT ALL ON TABLE "public"."candidate_work_experiences" TO "service_role";



GRANT ALL ON TABLE "public"."candidates" TO "anon";
GRANT ALL ON TABLE "public"."candidates" TO "authenticated";
GRANT ALL ON TABLE "public"."candidates" TO "service_role";



GRANT ALL ON TABLE "public"."education_majors" TO "anon";
GRANT ALL ON TABLE "public"."education_majors" TO "authenticated";
GRANT ALL ON TABLE "public"."education_majors" TO "service_role";



GRANT ALL ON TABLE "public"."education_minors" TO "anon";
GRANT ALL ON TABLE "public"."education_minors" TO "authenticated";
GRANT ALL ON TABLE "public"."education_minors" TO "service_role";



GRANT ALL ON TABLE "public"."school_locations" TO "anon";
GRANT ALL ON TABLE "public"."school_locations" TO "authenticated";
GRANT ALL ON TABLE "public"."school_locations" TO "service_role";



GRANT ALL ON TABLE "public"."schools" TO "anon";
GRANT ALL ON TABLE "public"."schools" TO "authenticated";
GRANT ALL ON TABLE "public"."schools" TO "service_role";



ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";






RESET ALL;
