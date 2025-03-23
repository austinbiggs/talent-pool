/* eslint-disable */
// Auto-generated file: Do not alter.
// @generated w/ gql:codegen
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Candidate = {
  __typename?: 'Candidate';
  education?: Maybe<Education>;
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  sex: Sex;
};

export type Education = {
  __typename?: 'Education';
  id: Scalars['Int']['output'];
  major: Major;
  school: School;
};

export type Major = {
  __typename?: 'Major';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  candidate?: Maybe<Candidate>;
  education: Education;
  school: School;
};

export type QueryCandidateArgs = {
  id: Scalars['Int']['input'];
};

export type QueryEducationArgs = {
  id: Scalars['Int']['input'];
};

export type QuerySchoolArgs = {
  id: Scalars['Int']['input'];
};

export type School = {
  __typename?: 'School';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export enum Sex {
  Female = 'FEMALE',
  Male = 'MALE',
}

export type Subscription = {
  __typename?: 'Subscription';
  _empty?: Maybe<Scalars['String']['output']>;
};
