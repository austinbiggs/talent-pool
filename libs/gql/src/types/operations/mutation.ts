import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Mutation {
    _empty: String
  }
`;

const resolvers = {
  Mutation: {
    _empty: () => {},
  },
};

export { typeDefs, resolvers };
