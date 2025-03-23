// import { faker } from '@faker-js/faker';
//
// import { Types } from '@talent/gql';
import { createServiceRoleClient, HostType } from "../../supabase/clients"

const DEFAULT_HOST = HostType.local;
const BATCH_SIZE = 100;
const quantity = parseInt(process.argv[2], 10) || BATCH_SIZE;

type GeneratedProfile = {
  candidate_id: string;
}

function generateCandidateProfile(): GeneratedProfile {
  return {
    candidate_id: ""
  }
}

function generateProfiles(quantity: number): GeneratedProfile[] {
  const profiles: GeneratedProfile[] = [];

  console.info(`Generating ${quantity.toLocaleString()} Profiles`);

  for (let i = 0; i < quantity; i++) {
    profiles.push(generateCandidateProfile());
  }

  return profiles;
}

async function insertProfiles(host: HostType){
  // create Supabase client
  const serviceRoleClient = createServiceRoleClient(host);

  // generate Profiles to be inserted
  const profiles = generateProfiles(quantity);

  // insert the Profiles into the DB
  const { error } = await serviceRoleClient.from('candidate_profiles').insert(profiles);

  if( error ) {
    console.error( error );

    return;
  }

  // output the inserted Profiles
  console.info(`Successfully inserted ${profiles.length.toLocaleString()} Profiles`);
  console.log(profiles);
}


insertProfiles(DEFAULT_HOST);


