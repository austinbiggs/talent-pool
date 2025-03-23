/* eslint-disable */
// Auto-generated file: Do not alter.
// @generated w/ gql:codegen
import {
  Candidate,
  Education,
  Major,
  Mutation,
  Query,
  School,
  Subscription,
  Sex,
} from '/Users/austinbiggs/Code/talent-pool/libs/gql/src/_generated/types';

export const aCandidate = (
  overrides?: Partial<Candidate>,
): { __typename: 'Candidate' } & Candidate => {
  return {
    __typename: 'Candidate',
    education:
      overrides && overrides.hasOwnProperty('education')
        ? overrides.education!
        : anEducation(),
    firstName:
      overrides && overrides.hasOwnProperty('firstName')
        ? overrides.firstName!
        : 'vapulus',
    id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 2032,
    lastName:
      overrides && overrides.hasOwnProperty('lastName')
        ? overrides.lastName!
        : 'vilicus',
    sex:
      overrides && overrides.hasOwnProperty('sex')
        ? overrides.sex!
        : Sex.Female,
  };
};

export const anEducation = (
  overrides?: Partial<Education>,
): { __typename: 'Education' } & Education => {
  return {
    __typename: 'Education',
    id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 3508,
    major:
      overrides && overrides.hasOwnProperty('major')
        ? overrides.major!
        : aMajor(),
    school:
      overrides && overrides.hasOwnProperty('school')
        ? overrides.school!
        : aSchool(),
  };
};

export const aMajor = (
  overrides?: Partial<Major>,
): { __typename: 'Major' } & Major => {
  return {
    __typename: 'Major',
    id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 9249,
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'utrum',
  };
};

export const aMutation = (
  overrides?: Partial<Mutation>,
): { __typename: 'Mutation' } & Mutation => {
  return {
    __typename: 'Mutation',
    _empty:
      overrides && overrides.hasOwnProperty('_empty')
        ? overrides._empty!
        : 'tutamen',
  };
};

export const aQuery = (
  overrides?: Partial<Query>,
): { __typename: 'Query' } & Query => {
  return {
    __typename: 'Query',
    candidate:
      overrides && overrides.hasOwnProperty('candidate')
        ? overrides.candidate!
        : aCandidate(),
    education:
      overrides && overrides.hasOwnProperty('education')
        ? overrides.education!
        : anEducation(),
    school:
      overrides && overrides.hasOwnProperty('school')
        ? overrides.school!
        : aSchool(),
  };
};

export const aSchool = (
  overrides?: Partial<School>,
): { __typename: 'School' } & School => {
  return {
    __typename: 'School',
    id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 1448,
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'sumptus',
  };
};

export const aSubscription = (
  overrides?: Partial<Subscription>,
): { __typename: 'Subscription' } & Subscription => {
  return {
    __typename: 'Subscription',
    _empty:
      overrides && overrides.hasOwnProperty('_empty')
        ? overrides._empty!
        : 'totus',
  };
};
