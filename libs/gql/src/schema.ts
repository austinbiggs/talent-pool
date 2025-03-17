import { merge } from 'lodash';
import { makeExecutableSchema } from '@graphql-tools/schema';

// operation type imports
import * as Query from '././graph/operations/query';
import * as Mutation from '././graph/operations/mutation';
import * as Subscription from '././graph/operations/subscription';

// entity type imports
import * as Candidate from '././graph/candidate';
import * as Education from '././graph/education';
import * as Major from '././graph/major';
import * as School from '././graph/school';

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
