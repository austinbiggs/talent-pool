import { merge } from 'lodash';
import { makeExecutableSchema } from '@graphql-tools/schema';

// operation type imports
import * as Query from './types/operations/query';
import * as Mutation from './types/operations/mutation';
import * as Subscription from './types/operations/subscription';

// entity type imports
import * as Candidate from './types/candidate';
import * as Education from './types/education';
import * as Major from './types/major';
import * as School from './types/school';

// all graph type modules
const operationTypeModules = [Query, Mutation, Subscription];
const entityTypeModules = [Candidate, Education, Major, School];
const allTypeModules = [...operationTypeModules, ...entityTypeModules];

const typeDefs = allTypeModules.map((type) => type.typeDefs);

const resolvers = allTypeModules.map((type) => type.resolvers);
const mergedResolvers = merge(resolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: mergedResolvers,
});

export { schema, resolvers, typeDefs };
