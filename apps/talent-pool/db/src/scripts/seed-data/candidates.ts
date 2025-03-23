import { faker } from '@faker-js/faker';

import { Types } from '@talent/gql';
import { createServiceRoleClient } from 'talent:dbsupabase/clients';

const DEFAULT_QUANTITY = 27;
const quantity = parseInt(process.argv[2], 10) || DEFAULT_QUANTITY;

type GeneratedCandidate = {
  first_name: string;
  last_name: string;
  sex: string;
}

function generateCandidate(): GeneratedCandidate {
  const sexType = faker.person.sexType(); // for faker functions
  const sex = sexType === 'female' ? Types.Sex.Female : Types.Sex.Male; // for storing on Candidate

  return {
    first_name: faker.person.firstName(sexType),
    last_name: faker.person.lastName(sexType),
    sex,
  };
}

function generateCandidates(quantity: number): GeneratedCandidate[] {
  const candidates: GeneratedCandidate[] = [];

  console.info(`Generating ${quantity.toLocaleString()} candidates`);

  for (let i = 0; i < quantity; i++) {
    candidates.push(generateCandidate());
  }

  return candidates;
}

async function insertCandidates(){
  // create Supabase client
  const serviceRoleClient = createServiceRoleClient();

  // generate Candidates to be inserted
  const candidates = generateCandidates(quantity);

  // insert the Candidates into the DB
  const { error } = await serviceRoleClient.from('candidates').insert(candidates);

  if( error ) {
    console.error( error );

    return;
  }

  // output the inserted Candidates
  console.info(`Successfully inserted ${candidates.length.toLocaleString()} candidates`);
  console.log(candidates);
}


insertCandidates();


