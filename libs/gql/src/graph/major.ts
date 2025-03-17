import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Major {
    id: Int!
    name: String!
  }
`;

const resolvers = {
  Major: {
    id: () => '1',
    name: () => '1',
  },
};

export { typeDefs, resolvers };
