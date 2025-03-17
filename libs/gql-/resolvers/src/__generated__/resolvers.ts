import * as types from "@gql:models";
import { GraphQLResolveInfo } from 'graphql';
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => types.Maybe<TTypes> | Promise<types.Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<types.Scalars['Boolean']['output']>;
  Candidate: ResolverTypeWrapper<types.Candidate>;
  Education: ResolverTypeWrapper<types.Education>;
  Int: ResolverTypeWrapper<types.Scalars['Int']['output']>;
  Major: ResolverTypeWrapper<types.Major>;
  Name: ResolverTypeWrapper<types.Name>;
  School: ResolverTypeWrapper<types.School>;
  String: ResolverTypeWrapper<types.Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: types.Scalars['Boolean']['output'];
  Candidate: types.Candidate;
  Education: types.Education;
  Int: types.Scalars['Int']['output'];
  Major: types.Major;
  Name: types.Name;
  School: types.School;
  String: types.Scalars['String']['output'];
}>;

export type CandidateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Candidate'] = ResolversParentTypes['Candidate']> = ResolversObject<{
  education?: Resolver<ResolversTypes['Education'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Name'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EducationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Education'] = ResolversParentTypes['Education']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  major?: Resolver<ResolversTypes['Major'], ParentType, ContextType>;
  school?: Resolver<ResolversTypes['School'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MajorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Major'] = ResolversParentTypes['Major']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NameResolvers<ContextType = any, ParentType extends ResolversParentTypes['Name'] = ResolversParentTypes['Name']> = ResolversObject<{
  first?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SchoolResolvers<ContextType = any, ParentType extends ResolversParentTypes['School'] = ResolversParentTypes['School']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Candidate?: CandidateResolvers<ContextType>;
  Education?: EducationResolvers<ContextType>;
  Major?: MajorResolvers<ContextType>;
  Name?: NameResolvers<ContextType>;
  School?: SchoolResolvers<ContextType>;
}>;

