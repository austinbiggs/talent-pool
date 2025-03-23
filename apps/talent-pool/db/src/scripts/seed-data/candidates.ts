import { faker } from '@faker-js/faker';

import { Types } from '@talent/gql';
import { createServiceRoleClient } from 'talent:dbsupabase/clients';
import { HostType } from 'talent:dbsupabase/clients/types';

const DEFAULT_HOST = HostType.local;
const DEFAULT_QUANTITY = 10;
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

async function insertCandidates(host: HostType){
  // create Supabase client
  const serviceRoleClient = createServiceRoleClient(host);

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

insertCandidates(DEFAULT_HOST);
