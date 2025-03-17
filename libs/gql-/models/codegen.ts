import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'libs/gql/models/src/schema.graphql',
  generates: {
    'libs/gql/models/src/__generated__/models.ts': {
      plugins: ['typescript'],
      config: {
        avoidOptionals: true,
      },
    },
  },
};
export default config;
