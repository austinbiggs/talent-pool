import { CodegenConfig } from '@graphql-codegen/cli';

const addPlugin = {
  add: {
    content: [
      '/* eslint-disable */',
      '// Auto-generated file: Do not alter.',
      '// @generated w/ gql:codegen',
    ],
  },
};

const TARGET_BASE_PATH = `${__dirname}/src/_generated`;

const generates: CodegenConfig['generates'] = {
  [`${TARGET_BASE_PATH}/apollo-helpers.ts`]: {
    plugins: [addPlugin, 'typescript-apollo-client-helpers'],
  },
  [`${TARGET_BASE_PATH}/resolvers.ts`]: {
    plugins: ['add', 'typescript-resolvers'],
    config: {
      useIndexSignature: true,
      content: 'import * as types from "./types";',
      namespacedImportName: 'types',
    },
  },
  [`${TARGET_BASE_PATH}/types.ts`]: {
    plugins: [addPlugin, 'typescript'],
  },
  [`${TARGET_BASE_PATH}/introspection.json`]: {
    plugins: ['introspection'],
    config: {
      minify: true,
    },
  },
  // [`${TARGET_BASE_PATH}/introspection.ts`]: {
  //   plugins: [addPlugin, 'fragment-matcher'],
  //   config: {
  //     apolloClientVersion: 3,
  //   },
  // },
  [`${TARGET_BASE_PATH}/factories.ts`]: {
    plugins: [
      addPlugin,
      {
        'typescript-mock-data': {
          addTypename: true,
          typesFile: `${TARGET_BASE_PATH}/types.ts`,
          useTypeImports: false,
          listElementCount: 3,
        },
      },
    ],
  },
  './': {
    preset: 'near-operation-file',
    presetConfig: {
      baseTypesPath: './_generated/types.ts',
      extension: '.tsx',
      folder: '..',
    },
    plugins: [addPlugin, 'typescript-operations', 'typescript-react-apollo'],
  },
};

const config: CodegenConfig = {
  overwrite: true,
  schema: ['./**/graph/**/*.ts'],
  // documents: ['./operations/**/*.{gql,graphql}'],
  // watch: true,
  generates,
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
  require: ['ts-node/register'],
};

export default config;
