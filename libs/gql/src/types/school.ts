import { gql } from 'graphql-tag';

const typeDefs = gql`
  type School {
    id: Int!
    name: String!
  }
`;

const resolvers = {
  School: {
    id: () => '1',
    name: () => '1',
  },
};

export { typeDefs, resolvers };
