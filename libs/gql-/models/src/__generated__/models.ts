export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Candidate = {
  __typename?: 'Candidate';
  education: Education;
  id: Scalars['Int']['output'];
  name: Name;
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

export type Name = {
  __typename?: 'Name';
  first: Scalars['String']['output'];
  last: Scalars['String']['output'];
};

export type School = {
  __typename?: 'School';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};
