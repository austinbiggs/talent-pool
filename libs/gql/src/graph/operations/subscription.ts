import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Subscription {
    _empty: String
  }
`;

const resolvers = {
  Subscription: {
    _empty: () => 'empty',
  },
};

export { typeDefs, resolvers };
