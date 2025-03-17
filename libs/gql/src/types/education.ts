import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Education {
    id: Int!
    school: School!
    major: Major!
  }
`;

const resolvers = {
  Education: {
    id: () => '1',
    school: () => '1',
    major: () => '1',
  },
};

export { typeDefs, resolvers };
