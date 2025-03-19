import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Query {
    candidate(id: Int!): Candidate
    education(id: Int!): Education!
    school(id: Int!): School!
  }
`;

const resolvers = {
  Query: {
    candidate: () => ({
      id: 1,
      firstName: () => 'Austin',
      lastName: () => 'Austin',
    }),
    education: () => '',
    school: () => '',
  },
};

export { typeDefs, resolvers };
