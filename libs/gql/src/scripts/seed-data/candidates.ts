import { faker } from '@faker-js/faker';

import { Candidate, Sex } from '../../_generated/types';

const DEFAULT_QUANTITY = 10;
const quantity = parseInt(process.argv[2], 10) || DEFAULT_QUANTITY;

function generateCandidate(): Partial<Candidate> {
  const sexType = faker.person.sexType(); // for faker functions
  const sex = sexType === 'female' ? Sex.Female : Sex.Male; // for storing on Candidate

  return {
    firstName: faker.person.firstName(sexType),
    lastName: faker.person.lastName(sexType),
    sex,
  };
}

function generateCandidates(quantity: number): Partial<Candidate>[] {
  const candidates: Partial<Candidate>[] = [];

  console.info(`Generating ${quantity} candidates`);

  for (let i = 0; i < quantity; i++) {
    candidates.push(generateCandidate());
  }

  return candidates;
}

const candidates = generateCandidates(quantity);

console.log(candidates);
