/* eslint-disable */
// Auto-generated file: Do not alter.
// @generated w/ gql:codegen
import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from '@apollo/client/cache';
export type CandidateKeySpecifier = (
  | 'education'
  | 'firstName'
  | 'id'
  | 'lastName'
  | 'sex'
  | CandidateKeySpecifier
)[];
export type CandidateFieldPolicy = {
  education?: FieldPolicy<any> | FieldReadFunction<any>;
  firstName?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  lastName?: FieldPolicy<any> | FieldReadFunction<any>;
  sex?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EducationKeySpecifier = (
  | 'id'
  | 'major'
  | 'school'
  | EducationKeySpecifier
)[];
export type EducationFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  major?: FieldPolicy<any> | FieldReadFunction<any>;
  school?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MajorKeySpecifier = ('id' | 'name' | MajorKeySpecifier)[];
export type MajorFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = ('_empty' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
  _empty?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | 'candidate'
  | 'education'
  | 'school'
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  candidate?: FieldPolicy<any> | FieldReadFunction<any>;
  education?: FieldPolicy<any> | FieldReadFunction<any>;
  school?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SchoolKeySpecifier = ('id' | 'name' | SchoolKeySpecifier)[];
export type SchoolFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SubscriptionKeySpecifier = ('_empty' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
  _empty?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Candidate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CandidateKeySpecifier
      | (() => undefined | CandidateKeySpecifier);
    fields?: CandidateFieldPolicy;
  };
  Education?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | EducationKeySpecifier
      | (() => undefined | EducationKeySpecifier);
    fields?: EducationFieldPolicy;
  };
  Major?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | MajorKeySpecifier
      | (() => undefined | MajorKeySpecifier);
    fields?: MajorFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  School?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SchoolKeySpecifier
      | (() => undefined | SchoolKeySpecifier);
    fields?: SchoolFieldPolicy;
  };
  Subscription?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SubscriptionKeySpecifier
      | (() => undefined | SubscriptionKeySpecifier);
    fields?: SubscriptionFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
