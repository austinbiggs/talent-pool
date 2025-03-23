import { faker } from '@faker-js/faker';

import { Types } from '@talent/gql';
import { createServiceRoleClient } from 'talent:dbsupabase/clients';

const BATCH_SIZE = 100;
const quantity = parseInt(process.argv[2], 10) || BATCH_SIZE;

type GeneratedProfile = {

}

function generateCandidateProfile(): GeneratedProfile {
  return {

  }
}

function generateProfiles(quantity: number): GeneratedProfile[] {
  const Profiles: GeneratedProfile[] = [];

  console.info(`Generating ${quantity.toLocaleString()} Profiles`);

  for (let i = 0; i < quantity; i++) {
    Profiles.push(generateCandidateProfile());
  }

  return Profiles;
}

async function insertProfiles(){
  // create Supabase client
  const serviceRoleClient = createServiceRoleClient();

  // generate Profiles to be inserted
  const Profiles = generateProfiles(quantity);

  // insert the Profiles into the DB
  const { error } = await serviceRoleClient.from('Profiles').insert(Profiles);

  if( error ) {
    console.error( error );

    return;
  }

  // output the inserted Profiles
  console.info(`Successfully inserted ${Profiles.length.toLocaleString()} Profiles`);
  console.log(Profiles);
}


insertProfiles();


