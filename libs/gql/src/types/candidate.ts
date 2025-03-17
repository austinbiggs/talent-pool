import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Candidate {
    id: Int!
    firstName: String!
    lastName: String!
    education: Education!
  }
`;

const resolvers = {
  Candidate: {
    id: () => '1',
    firstName: () => 'Austin',
    lastName: () => 'Biggs',
    education: () => 'Self-Education',
  },
};

export { typeDefs, resolvers };
