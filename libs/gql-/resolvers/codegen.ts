import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'libs/gql/models/src/schema.graphql',
  generates: {
    'libs/gql/resolvers/src/__generated__/resolvers.ts': {
      plugins: ['add', 'typescript-resolvers'],
      config: {
        useIndexSignature: true,
        content: 'import * as types from "@gql:models";',
        namespacedImportName: 'types',
      },
    },
  },
};
export default config;
