
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model candidate_educations
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type candidate_educations = $Result.DefaultSelection<Prisma.$candidate_educationsPayload>
/**
 * Model candidate_profiles
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type candidate_profiles = $Result.DefaultSelection<Prisma.$candidate_profilesPayload>
/**
 * Model candidate_work_experiences
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type candidate_work_experiences = $Result.DefaultSelection<Prisma.$candidate_work_experiencesPayload>
/**
 * Model candidates
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type candidates = $Result.DefaultSelection<Prisma.$candidatesPayload>
/**
 * Model education_majors
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type education_majors = $Result.DefaultSelection<Prisma.$education_majorsPayload>
/**
 * Model education_minors
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type education_minors = $Result.DefaultSelection<Prisma.$education_minorsPayload>
/**
 * Model school_locations
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type school_locations = $Result.DefaultSelection<Prisma.$school_locationsPayload>
/**
 * Model schools
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type schools = $Result.DefaultSelection<Prisma.$schoolsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Candidate_educations
 * const candidate_educations = await prisma.candidate_educations.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Candidate_educations
   * const candidate_educations = await prisma.candidate_educations.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.candidate_educations`: Exposes CRUD operations for the **candidate_educations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidate_educations
    * const candidate_educations = await prisma.candidate_educations.findMany()
    * ```
    */
  get candidate_educations(): Prisma.candidate_educationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidate_profiles`: Exposes CRUD operations for the **candidate_profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidate_profiles
    * const candidate_profiles = await prisma.candidate_profiles.findMany()
    * ```
    */
  get candidate_profiles(): Prisma.candidate_profilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidate_work_experiences`: Exposes CRUD operations for the **candidate_work_experiences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidate_work_experiences
    * const candidate_work_experiences = await prisma.candidate_work_experiences.findMany()
    * ```
    */
  get candidate_work_experiences(): Prisma.candidate_work_experiencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidates`: Exposes CRUD operations for the **candidates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidates
    * const candidates = await prisma.candidates.findMany()
    * ```
    */
  get candidates(): Prisma.candidatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education_majors`: Exposes CRUD operations for the **education_majors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Education_majors
    * const education_majors = await prisma.education_majors.findMany()
    * ```
    */
  get education_majors(): Prisma.education_majorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education_minors`: Exposes CRUD operations for the **education_minors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Education_minors
    * const education_minors = await prisma.education_minors.findMany()
    * ```
    */
  get education_minors(): Prisma.education_minorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.school_locations`: Exposes CRUD operations for the **school_locations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more School_locations
    * const school_locations = await prisma.school_locations.findMany()
    * ```
    */
  get school_locations(): Prisma.school_locationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schools`: Exposes CRUD operations for the **schools** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.schools.findMany()
    * ```
    */
  get schools(): Prisma.schoolsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    candidate_educations: 'candidate_educations',
    candidate_profiles: 'candidate_profiles',
    candidate_work_experiences: 'candidate_work_experiences',
    candidates: 'candidates',
    education_majors: 'education_majors',
    education_minors: 'education_minors',
    school_locations: 'school_locations',
    schools: 'schools'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "candidate_educations" | "candidate_profiles" | "candidate_work_experiences" | "candidates" | "education_majors" | "education_minors" | "school_locations" | "schools"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      candidate_educations: {
        payload: Prisma.$candidate_educationsPayload<ExtArgs>
        fields: Prisma.candidate_educationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.candidate_educationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_educationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.candidate_educationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_educationsPayload>
          }
          findFirst: {
            args: Prisma.candidate_educationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_educationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.candidate_educationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_educationsPayload>
          }
          findMany: {
            args: Prisma.candidate_educationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_educationsPayload>[]
          }
          create: {
            args: Prisma.candidate_educationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_educationsPayload>
          }
          createMany: {
            args: Prisma.candidate_educationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.candidate_educationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_educationsPayload>[]
          }
          delete: {
            args: Prisma.candidate_educationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_educationsPayload>
          }
          update: {
            args: Prisma.candidate_educationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_educationsPayload>
          }
          deleteMany: {
            args: Prisma.candidate_educationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.candidate_educationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.candidate_educationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_educationsPayload>[]
          }
          upsert: {
            args: Prisma.candidate_educationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_educationsPayload>
          }
          aggregate: {
            args: Prisma.Candidate_educationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidate_educations>
          }
          groupBy: {
            args: Prisma.candidate_educationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Candidate_educationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.candidate_educationsCountArgs<ExtArgs>
            result: $Utils.Optional<Candidate_educationsCountAggregateOutputType> | number
          }
        }
      }
      candidate_profiles: {
        payload: Prisma.$candidate_profilesPayload<ExtArgs>
        fields: Prisma.candidate_profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.candidate_profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.candidate_profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_profilesPayload>
          }
          findFirst: {
            args: Prisma.candidate_profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.candidate_profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_profilesPayload>
          }
          findMany: {
            args: Prisma.candidate_profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_profilesPayload>[]
          }
          create: {
            args: Prisma.candidate_profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_profilesPayload>
          }
          createMany: {
            args: Prisma.candidate_profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.candidate_profilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_profilesPayload>[]
          }
          delete: {
            args: Prisma.candidate_profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_profilesPayload>
          }
          update: {
            args: Prisma.candidate_profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_profilesPayload>
          }
          deleteMany: {
            args: Prisma.candidate_profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.candidate_profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.candidate_profilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_profilesPayload>[]
          }
          upsert: {
            args: Prisma.candidate_profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_profilesPayload>
          }
          aggregate: {
            args: Prisma.Candidate_profilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidate_profiles>
          }
          groupBy: {
            args: Prisma.candidate_profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Candidate_profilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.candidate_profilesCountArgs<ExtArgs>
            result: $Utils.Optional<Candidate_profilesCountAggregateOutputType> | number
          }
        }
      }
      candidate_work_experiences: {
        payload: Prisma.$candidate_work_experiencesPayload<ExtArgs>
        fields: Prisma.candidate_work_experiencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.candidate_work_experiencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_work_experiencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.candidate_work_experiencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_work_experiencesPayload>
          }
          findFirst: {
            args: Prisma.candidate_work_experiencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_work_experiencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.candidate_work_experiencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_work_experiencesPayload>
          }
          findMany: {
            args: Prisma.candidate_work_experiencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_work_experiencesPayload>[]
          }
          create: {
            args: Prisma.candidate_work_experiencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_work_experiencesPayload>
          }
          createMany: {
            args: Prisma.candidate_work_experiencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.candidate_work_experiencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_work_experiencesPayload>[]
          }
          delete: {
            args: Prisma.candidate_work_experiencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_work_experiencesPayload>
          }
          update: {
            args: Prisma.candidate_work_experiencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_work_experiencesPayload>
          }
          deleteMany: {
            args: Prisma.candidate_work_experiencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.candidate_work_experiencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.candidate_work_experiencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_work_experiencesPayload>[]
          }
          upsert: {
            args: Prisma.candidate_work_experiencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidate_work_experiencesPayload>
          }
          aggregate: {
            args: Prisma.Candidate_work_experiencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidate_work_experiences>
          }
          groupBy: {
            args: Prisma.candidate_work_experiencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Candidate_work_experiencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.candidate_work_experiencesCountArgs<ExtArgs>
            result: $Utils.Optional<Candidate_work_experiencesCountAggregateOutputType> | number
          }
        }
      }
      candidates: {
        payload: Prisma.$candidatesPayload<ExtArgs>
        fields: Prisma.candidatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.candidatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.candidatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          findFirst: {
            args: Prisma.candidatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.candidatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          findMany: {
            args: Prisma.candidatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>[]
          }
          create: {
            args: Prisma.candidatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          createMany: {
            args: Prisma.candidatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.candidatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>[]
          }
          delete: {
            args: Prisma.candidatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          update: {
            args: Prisma.candidatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          deleteMany: {
            args: Prisma.candidatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.candidatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.candidatesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>[]
          }
          upsert: {
            args: Prisma.candidatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          aggregate: {
            args: Prisma.CandidatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidates>
          }
          groupBy: {
            args: Prisma.candidatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.candidatesCountArgs<ExtArgs>
            result: $Utils.Optional<CandidatesCountAggregateOutputType> | number
          }
        }
      }
      education_majors: {
        payload: Prisma.$education_majorsPayload<ExtArgs>
        fields: Prisma.education_majorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.education_majorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_majorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.education_majorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_majorsPayload>
          }
          findFirst: {
            args: Prisma.education_majorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_majorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.education_majorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_majorsPayload>
          }
          findMany: {
            args: Prisma.education_majorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_majorsPayload>[]
          }
          create: {
            args: Prisma.education_majorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_majorsPayload>
          }
          createMany: {
            args: Prisma.education_majorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.education_majorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_majorsPayload>[]
          }
          delete: {
            args: Prisma.education_majorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_majorsPayload>
          }
          update: {
            args: Prisma.education_majorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_majorsPayload>
          }
          deleteMany: {
            args: Prisma.education_majorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.education_majorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.education_majorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_majorsPayload>[]
          }
          upsert: {
            args: Prisma.education_majorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_majorsPayload>
          }
          aggregate: {
            args: Prisma.Education_majorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation_majors>
          }
          groupBy: {
            args: Prisma.education_majorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Education_majorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.education_majorsCountArgs<ExtArgs>
            result: $Utils.Optional<Education_majorsCountAggregateOutputType> | number
          }
        }
      }
      education_minors: {
        payload: Prisma.$education_minorsPayload<ExtArgs>
        fields: Prisma.education_minorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.education_minorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_minorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.education_minorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_minorsPayload>
          }
          findFirst: {
            args: Prisma.education_minorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_minorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.education_minorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_minorsPayload>
          }
          findMany: {
            args: Prisma.education_minorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_minorsPayload>[]
          }
          create: {
            args: Prisma.education_minorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_minorsPayload>
          }
          createMany: {
            args: Prisma.education_minorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.education_minorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_minorsPayload>[]
          }
          delete: {
            args: Prisma.education_minorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_minorsPayload>
          }
          update: {
            args: Prisma.education_minorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_minorsPayload>
          }
          deleteMany: {
            args: Prisma.education_minorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.education_minorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.education_minorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_minorsPayload>[]
          }
          upsert: {
            args: Prisma.education_minorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_minorsPayload>
          }
          aggregate: {
            args: Prisma.Education_minorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation_minors>
          }
          groupBy: {
            args: Prisma.education_minorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Education_minorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.education_minorsCountArgs<ExtArgs>
            result: $Utils.Optional<Education_minorsCountAggregateOutputType> | number
          }
        }
      }
      school_locations: {
        payload: Prisma.$school_locationsPayload<ExtArgs>
        fields: Prisma.school_locationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.school_locationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$school_locationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.school_locationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$school_locationsPayload>
          }
          findFirst: {
            args: Prisma.school_locationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$school_locationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.school_locationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$school_locationsPayload>
          }
          findMany: {
            args: Prisma.school_locationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$school_locationsPayload>[]
          }
          create: {
            args: Prisma.school_locationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$school_locationsPayload>
          }
          createMany: {
            args: Prisma.school_locationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.school_locationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$school_locationsPayload>[]
          }
          delete: {
            args: Prisma.school_locationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$school_locationsPayload>
          }
          update: {
            args: Prisma.school_locationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$school_locationsPayload>
          }
          deleteMany: {
            args: Prisma.school_locationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.school_locationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.school_locationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$school_locationsPayload>[]
          }
          upsert: {
            args: Prisma.school_locationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$school_locationsPayload>
          }
          aggregate: {
            args: Prisma.School_locationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool_locations>
          }
          groupBy: {
            args: Prisma.school_locationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<School_locationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.school_locationsCountArgs<ExtArgs>
            result: $Utils.Optional<School_locationsCountAggregateOutputType> | number
          }
        }
      }
      schools: {
        payload: Prisma.$schoolsPayload<ExtArgs>
        fields: Prisma.schoolsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.schoolsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.schoolsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          findFirst: {
            args: Prisma.schoolsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.schoolsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          findMany: {
            args: Prisma.schoolsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>[]
          }
          create: {
            args: Prisma.schoolsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          createMany: {
            args: Prisma.schoolsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.schoolsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>[]
          }
          delete: {
            args: Prisma.schoolsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          update: {
            args: Prisma.schoolsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          deleteMany: {
            args: Prisma.schoolsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.schoolsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.schoolsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>[]
          }
          upsert: {
            args: Prisma.schoolsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          aggregate: {
            args: Prisma.SchoolsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchools>
          }
          groupBy: {
            args: Prisma.schoolsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolsGroupByOutputType>[]
          }
          count: {
            args: Prisma.schoolsCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    candidate_educations?: candidate_educationsOmit
    candidate_profiles?: candidate_profilesOmit
    candidate_work_experiences?: candidate_work_experiencesOmit
    candidates?: candidatesOmit
    education_majors?: education_majorsOmit
    education_minors?: education_minorsOmit
    school_locations?: school_locationsOmit
    schools?: schoolsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CandidatesCountOutputType
   */

  export type CandidatesCountOutputType = {
    candidate_educations: number
  }

  export type CandidatesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate_educations?: boolean | CandidatesCountOutputTypeCountCandidate_educationsArgs
  }

  // Custom InputTypes
  /**
   * CandidatesCountOutputType without action
   */
  export type CandidatesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatesCountOutputType
     */
    select?: CandidatesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidatesCountOutputType without action
   */
  export type CandidatesCountOutputTypeCountCandidate_educationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: candidate_educationsWhereInput
  }


  /**
   * Count Type SchoolsCountOutputType
   */

  export type SchoolsCountOutputType = {
    candidate_educations: number
  }

  export type SchoolsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate_educations?: boolean | SchoolsCountOutputTypeCountCandidate_educationsArgs
  }

  // Custom InputTypes
  /**
   * SchoolsCountOutputType without action
   */
  export type SchoolsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolsCountOutputType
     */
    select?: SchoolsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolsCountOutputType without action
   */
  export type SchoolsCountOutputTypeCountCandidate_educationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: candidate_educationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model candidate_educations
   */

  export type AggregateCandidate_educations = {
    _count: Candidate_educationsCountAggregateOutputType | null
    _min: Candidate_educationsMinAggregateOutputType | null
    _max: Candidate_educationsMaxAggregateOutputType | null
  }

  export type Candidate_educationsMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    candidate_id: string | null
    end_date: Date | null
    school_id: string | null
    start_date: Date | null
  }

  export type Candidate_educationsMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    candidate_id: string | null
    end_date: Date | null
    school_id: string | null
    start_date: Date | null
  }

  export type Candidate_educationsCountAggregateOutputType = {
    id: number
    created_at: number
    candidate_id: number
    end_date: number
    school_id: number
    start_date: number
    _all: number
  }


  export type Candidate_educationsMinAggregateInputType = {
    id?: true
    created_at?: true
    candidate_id?: true
    end_date?: true
    school_id?: true
    start_date?: true
  }

  export type Candidate_educationsMaxAggregateInputType = {
    id?: true
    created_at?: true
    candidate_id?: true
    end_date?: true
    school_id?: true
    start_date?: true
  }

  export type Candidate_educationsCountAggregateInputType = {
    id?: true
    created_at?: true
    candidate_id?: true
    end_date?: true
    school_id?: true
    start_date?: true
    _all?: true
  }

  export type Candidate_educationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidate_educations to aggregate.
     */
    where?: candidate_educationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidate_educations to fetch.
     */
    orderBy?: candidate_educationsOrderByWithRelationInput | candidate_educationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: candidate_educationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidate_educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidate_educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned candidate_educations
    **/
    _count?: true | Candidate_educationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Candidate_educationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Candidate_educationsMaxAggregateInputType
  }

  export type GetCandidate_educationsAggregateType<T extends Candidate_educationsAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidate_educations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidate_educations[P]>
      : GetScalarType<T[P], AggregateCandidate_educations[P]>
  }




  export type candidate_educationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: candidate_educationsWhereInput
    orderBy?: candidate_educationsOrderByWithAggregationInput | candidate_educationsOrderByWithAggregationInput[]
    by: Candidate_educationsScalarFieldEnum[] | Candidate_educationsScalarFieldEnum
    having?: candidate_educationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Candidate_educationsCountAggregateInputType | true
    _min?: Candidate_educationsMinAggregateInputType
    _max?: Candidate_educationsMaxAggregateInputType
  }

  export type Candidate_educationsGroupByOutputType = {
    id: string
    created_at: Date
    candidate_id: string
    end_date: Date
    school_id: string
    start_date: Date
    _count: Candidate_educationsCountAggregateOutputType | null
    _min: Candidate_educationsMinAggregateOutputType | null
    _max: Candidate_educationsMaxAggregateOutputType | null
  }

  type GetCandidate_educationsGroupByPayload<T extends candidate_educationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Candidate_educationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Candidate_educationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Candidate_educationsGroupByOutputType[P]>
            : GetScalarType<T[P], Candidate_educationsGroupByOutputType[P]>
        }
      >
    >


  export type candidate_educationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    candidate_id?: boolean
    end_date?: boolean
    school_id?: boolean
    start_date?: boolean
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate_educations"]>

  export type candidate_educationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    candidate_id?: boolean
    end_date?: boolean
    school_id?: boolean
    start_date?: boolean
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate_educations"]>

  export type candidate_educationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    candidate_id?: boolean
    end_date?: boolean
    school_id?: boolean
    start_date?: boolean
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate_educations"]>

  export type candidate_educationsSelectScalar = {
    id?: boolean
    created_at?: boolean
    candidate_id?: boolean
    end_date?: boolean
    school_id?: boolean
    start_date?: boolean
  }

  export type candidate_educationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "candidate_id" | "end_date" | "school_id" | "start_date", ExtArgs["result"]["candidate_educations"]>
  export type candidate_educationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
  }
  export type candidate_educationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
  }
  export type candidate_educationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
  }

  export type $candidate_educationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "candidate_educations"
    objects: {
      candidates: Prisma.$candidatesPayload<ExtArgs>
      schools: Prisma.$schoolsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      candidate_id: string
      end_date: Date
      school_id: string
      start_date: Date
    }, ExtArgs["result"]["candidate_educations"]>
    composites: {}
  }

  type candidate_educationsGetPayload<S extends boolean | null | undefined | candidate_educationsDefaultArgs> = $Result.GetResult<Prisma.$candidate_educationsPayload, S>

  type candidate_educationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<candidate_educationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Candidate_educationsCountAggregateInputType | true
    }

  export interface candidate_educationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['candidate_educations'], meta: { name: 'candidate_educations' } }
    /**
     * Find zero or one Candidate_educations that matches the filter.
     * @param {candidate_educationsFindUniqueArgs} args - Arguments to find a Candidate_educations
     * @example
     * // Get one Candidate_educations
     * const candidate_educations = await prisma.candidate_educations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends candidate_educationsFindUniqueArgs>(args: SelectSubset<T, candidate_educationsFindUniqueArgs<ExtArgs>>): Prisma__candidate_educationsClient<$Result.GetResult<Prisma.$candidate_educationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidate_educations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {candidate_educationsFindUniqueOrThrowArgs} args - Arguments to find a Candidate_educations
     * @example
     * // Get one Candidate_educations
     * const candidate_educations = await prisma.candidate_educations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends candidate_educationsFindUniqueOrThrowArgs>(args: SelectSubset<T, candidate_educationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__candidate_educationsClient<$Result.GetResult<Prisma.$candidate_educationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate_educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_educationsFindFirstArgs} args - Arguments to find a Candidate_educations
     * @example
     * // Get one Candidate_educations
     * const candidate_educations = await prisma.candidate_educations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends candidate_educationsFindFirstArgs>(args?: SelectSubset<T, candidate_educationsFindFirstArgs<ExtArgs>>): Prisma__candidate_educationsClient<$Result.GetResult<Prisma.$candidate_educationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate_educations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_educationsFindFirstOrThrowArgs} args - Arguments to find a Candidate_educations
     * @example
     * // Get one Candidate_educations
     * const candidate_educations = await prisma.candidate_educations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends candidate_educationsFindFirstOrThrowArgs>(args?: SelectSubset<T, candidate_educationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__candidate_educationsClient<$Result.GetResult<Prisma.$candidate_educationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidate_educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_educationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidate_educations
     * const candidate_educations = await prisma.candidate_educations.findMany()
     * 
     * // Get first 10 Candidate_educations
     * const candidate_educations = await prisma.candidate_educations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidate_educationsWithIdOnly = await prisma.candidate_educations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends candidate_educationsFindManyArgs>(args?: SelectSubset<T, candidate_educationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidate_educationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidate_educations.
     * @param {candidate_educationsCreateArgs} args - Arguments to create a Candidate_educations.
     * @example
     * // Create one Candidate_educations
     * const Candidate_educations = await prisma.candidate_educations.create({
     *   data: {
     *     // ... data to create a Candidate_educations
     *   }
     * })
     * 
     */
    create<T extends candidate_educationsCreateArgs>(args: SelectSubset<T, candidate_educationsCreateArgs<ExtArgs>>): Prisma__candidate_educationsClient<$Result.GetResult<Prisma.$candidate_educationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidate_educations.
     * @param {candidate_educationsCreateManyArgs} args - Arguments to create many Candidate_educations.
     * @example
     * // Create many Candidate_educations
     * const candidate_educations = await prisma.candidate_educations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends candidate_educationsCreateManyArgs>(args?: SelectSubset<T, candidate_educationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidate_educations and returns the data saved in the database.
     * @param {candidate_educationsCreateManyAndReturnArgs} args - Arguments to create many Candidate_educations.
     * @example
     * // Create many Candidate_educations
     * const candidate_educations = await prisma.candidate_educations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidate_educations and only return the `id`
     * const candidate_educationsWithIdOnly = await prisma.candidate_educations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends candidate_educationsCreateManyAndReturnArgs>(args?: SelectSubset<T, candidate_educationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidate_educationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidate_educations.
     * @param {candidate_educationsDeleteArgs} args - Arguments to delete one Candidate_educations.
     * @example
     * // Delete one Candidate_educations
     * const Candidate_educations = await prisma.candidate_educations.delete({
     *   where: {
     *     // ... filter to delete one Candidate_educations
     *   }
     * })
     * 
     */
    delete<T extends candidate_educationsDeleteArgs>(args: SelectSubset<T, candidate_educationsDeleteArgs<ExtArgs>>): Prisma__candidate_educationsClient<$Result.GetResult<Prisma.$candidate_educationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidate_educations.
     * @param {candidate_educationsUpdateArgs} args - Arguments to update one Candidate_educations.
     * @example
     * // Update one Candidate_educations
     * const candidate_educations = await prisma.candidate_educations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends candidate_educationsUpdateArgs>(args: SelectSubset<T, candidate_educationsUpdateArgs<ExtArgs>>): Prisma__candidate_educationsClient<$Result.GetResult<Prisma.$candidate_educationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidate_educations.
     * @param {candidate_educationsDeleteManyArgs} args - Arguments to filter Candidate_educations to delete.
     * @example
     * // Delete a few Candidate_educations
     * const { count } = await prisma.candidate_educations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends candidate_educationsDeleteManyArgs>(args?: SelectSubset<T, candidate_educationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidate_educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_educationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidate_educations
     * const candidate_educations = await prisma.candidate_educations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends candidate_educationsUpdateManyArgs>(args: SelectSubset<T, candidate_educationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidate_educations and returns the data updated in the database.
     * @param {candidate_educationsUpdateManyAndReturnArgs} args - Arguments to update many Candidate_educations.
     * @example
     * // Update many Candidate_educations
     * const candidate_educations = await prisma.candidate_educations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidate_educations and only return the `id`
     * const candidate_educationsWithIdOnly = await prisma.candidate_educations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends candidate_educationsUpdateManyAndReturnArgs>(args: SelectSubset<T, candidate_educationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidate_educationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidate_educations.
     * @param {candidate_educationsUpsertArgs} args - Arguments to update or create a Candidate_educations.
     * @example
     * // Update or create a Candidate_educations
     * const candidate_educations = await prisma.candidate_educations.upsert({
     *   create: {
     *     // ... data to create a Candidate_educations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidate_educations we want to update
     *   }
     * })
     */
    upsert<T extends candidate_educationsUpsertArgs>(args: SelectSubset<T, candidate_educationsUpsertArgs<ExtArgs>>): Prisma__candidate_educationsClient<$Result.GetResult<Prisma.$candidate_educationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidate_educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_educationsCountArgs} args - Arguments to filter Candidate_educations to count.
     * @example
     * // Count the number of Candidate_educations
     * const count = await prisma.candidate_educations.count({
     *   where: {
     *     // ... the filter for the Candidate_educations we want to count
     *   }
     * })
    **/
    count<T extends candidate_educationsCountArgs>(
      args?: Subset<T, candidate_educationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Candidate_educationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidate_educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Candidate_educationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Candidate_educationsAggregateArgs>(args: Subset<T, Candidate_educationsAggregateArgs>): Prisma.PrismaPromise<GetCandidate_educationsAggregateType<T>>

    /**
     * Group by Candidate_educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_educationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends candidate_educationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: candidate_educationsGroupByArgs['orderBy'] }
        : { orderBy?: candidate_educationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, candidate_educationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidate_educationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the candidate_educations model
   */
  readonly fields: candidate_educationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for candidate_educations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__candidate_educationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidates<T extends candidatesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, candidatesDefaultArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schools<T extends schoolsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, schoolsDefaultArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the candidate_educations model
   */
  interface candidate_educationsFieldRefs {
    readonly id: FieldRef<"candidate_educations", 'String'>
    readonly created_at: FieldRef<"candidate_educations", 'DateTime'>
    readonly candidate_id: FieldRef<"candidate_educations", 'String'>
    readonly end_date: FieldRef<"candidate_educations", 'DateTime'>
    readonly school_id: FieldRef<"candidate_educations", 'String'>
    readonly start_date: FieldRef<"candidate_educations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * candidate_educations findUnique
   */
  export type candidate_educationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_educations
     */
    select?: candidate_educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_educations
     */
    omit?: candidate_educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_educationsInclude<ExtArgs> | null
    /**
     * Filter, which candidate_educations to fetch.
     */
    where: candidate_educationsWhereUniqueInput
  }

  /**
   * candidate_educations findUniqueOrThrow
   */
  export type candidate_educationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_educations
     */
    select?: candidate_educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_educations
     */
    omit?: candidate_educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_educationsInclude<ExtArgs> | null
    /**
     * Filter, which candidate_educations to fetch.
     */
    where: candidate_educationsWhereUniqueInput
  }

  /**
   * candidate_educations findFirst
   */
  export type candidate_educationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_educations
     */
    select?: candidate_educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_educations
     */
    omit?: candidate_educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_educationsInclude<ExtArgs> | null
    /**
     * Filter, which candidate_educations to fetch.
     */
    where?: candidate_educationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidate_educations to fetch.
     */
    orderBy?: candidate_educationsOrderByWithRelationInput | candidate_educationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidate_educations.
     */
    cursor?: candidate_educationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidate_educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidate_educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidate_educations.
     */
    distinct?: Candidate_educationsScalarFieldEnum | Candidate_educationsScalarFieldEnum[]
  }

  /**
   * candidate_educations findFirstOrThrow
   */
  export type candidate_educationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_educations
     */
    select?: candidate_educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_educations
     */
    omit?: candidate_educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_educationsInclude<ExtArgs> | null
    /**
     * Filter, which candidate_educations to fetch.
     */
    where?: candidate_educationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidate_educations to fetch.
     */
    orderBy?: candidate_educationsOrderByWithRelationInput | candidate_educationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidate_educations.
     */
    cursor?: candidate_educationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidate_educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidate_educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidate_educations.
     */
    distinct?: Candidate_educationsScalarFieldEnum | Candidate_educationsScalarFieldEnum[]
  }

  /**
   * candidate_educations findMany
   */
  export type candidate_educationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_educations
     */
    select?: candidate_educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_educations
     */
    omit?: candidate_educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_educationsInclude<ExtArgs> | null
    /**
     * Filter, which candidate_educations to fetch.
     */
    where?: candidate_educationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidate_educations to fetch.
     */
    orderBy?: candidate_educationsOrderByWithRelationInput | candidate_educationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing candidate_educations.
     */
    cursor?: candidate_educationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidate_educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidate_educations.
     */
    skip?: number
    distinct?: Candidate_educationsScalarFieldEnum | Candidate_educationsScalarFieldEnum[]
  }

  /**
   * candidate_educations create
   */
  export type candidate_educationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_educations
     */
    select?: candidate_educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_educations
     */
    omit?: candidate_educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_educationsInclude<ExtArgs> | null
    /**
     * The data needed to create a candidate_educations.
     */
    data: XOR<candidate_educationsCreateInput, candidate_educationsUncheckedCreateInput>
  }

  /**
   * candidate_educations createMany
   */
  export type candidate_educationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many candidate_educations.
     */
    data: candidate_educationsCreateManyInput | candidate_educationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * candidate_educations createManyAndReturn
   */
  export type candidate_educationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_educations
     */
    select?: candidate_educationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_educations
     */
    omit?: candidate_educationsOmit<ExtArgs> | null
    /**
     * The data used to create many candidate_educations.
     */
    data: candidate_educationsCreateManyInput | candidate_educationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_educationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * candidate_educations update
   */
  export type candidate_educationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_educations
     */
    select?: candidate_educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_educations
     */
    omit?: candidate_educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_educationsInclude<ExtArgs> | null
    /**
     * The data needed to update a candidate_educations.
     */
    data: XOR<candidate_educationsUpdateInput, candidate_educationsUncheckedUpdateInput>
    /**
     * Choose, which candidate_educations to update.
     */
    where: candidate_educationsWhereUniqueInput
  }

  /**
   * candidate_educations updateMany
   */
  export type candidate_educationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update candidate_educations.
     */
    data: XOR<candidate_educationsUpdateManyMutationInput, candidate_educationsUncheckedUpdateManyInput>
    /**
     * Filter which candidate_educations to update
     */
    where?: candidate_educationsWhereInput
    /**
     * Limit how many candidate_educations to update.
     */
    limit?: number
  }

  /**
   * candidate_educations updateManyAndReturn
   */
  export type candidate_educationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_educations
     */
    select?: candidate_educationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_educations
     */
    omit?: candidate_educationsOmit<ExtArgs> | null
    /**
     * The data used to update candidate_educations.
     */
    data: XOR<candidate_educationsUpdateManyMutationInput, candidate_educationsUncheckedUpdateManyInput>
    /**
     * Filter which candidate_educations to update
     */
    where?: candidate_educationsWhereInput
    /**
     * Limit how many candidate_educations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_educationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * candidate_educations upsert
   */
  export type candidate_educationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_educations
     */
    select?: candidate_educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_educations
     */
    omit?: candidate_educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_educationsInclude<ExtArgs> | null
    /**
     * The filter to search for the candidate_educations to update in case it exists.
     */
    where: candidate_educationsWhereUniqueInput
    /**
     * In case the candidate_educations found by the `where` argument doesn't exist, create a new candidate_educations with this data.
     */
    create: XOR<candidate_educationsCreateInput, candidate_educationsUncheckedCreateInput>
    /**
     * In case the candidate_educations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<candidate_educationsUpdateInput, candidate_educationsUncheckedUpdateInput>
  }

  /**
   * candidate_educations delete
   */
  export type candidate_educationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_educations
     */
    select?: candidate_educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_educations
     */
    omit?: candidate_educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_educationsInclude<ExtArgs> | null
    /**
     * Filter which candidate_educations to delete.
     */
    where: candidate_educationsWhereUniqueInput
  }

  /**
   * candidate_educations deleteMany
   */
  export type candidate_educationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidate_educations to delete
     */
    where?: candidate_educationsWhereInput
    /**
     * Limit how many candidate_educations to delete.
     */
    limit?: number
  }

  /**
   * candidate_educations without action
   */
  export type candidate_educationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_educations
     */
    select?: candidate_educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_educations
     */
    omit?: candidate_educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_educationsInclude<ExtArgs> | null
  }


  /**
   * Model candidate_profiles
   */

  export type AggregateCandidate_profiles = {
    _count: Candidate_profilesCountAggregateOutputType | null
    _min: Candidate_profilesMinAggregateOutputType | null
    _max: Candidate_profilesMaxAggregateOutputType | null
  }

  export type Candidate_profilesMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    candidate_id: string | null
  }

  export type Candidate_profilesMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    candidate_id: string | null
  }

  export type Candidate_profilesCountAggregateOutputType = {
    id: number
    created_at: number
    candidate_id: number
    _all: number
  }


  export type Candidate_profilesMinAggregateInputType = {
    id?: true
    created_at?: true
    candidate_id?: true
  }

  export type Candidate_profilesMaxAggregateInputType = {
    id?: true
    created_at?: true
    candidate_id?: true
  }

  export type Candidate_profilesCountAggregateInputType = {
    id?: true
    created_at?: true
    candidate_id?: true
    _all?: true
  }

  export type Candidate_profilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidate_profiles to aggregate.
     */
    where?: candidate_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidate_profiles to fetch.
     */
    orderBy?: candidate_profilesOrderByWithRelationInput | candidate_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: candidate_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidate_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidate_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned candidate_profiles
    **/
    _count?: true | Candidate_profilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Candidate_profilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Candidate_profilesMaxAggregateInputType
  }

  export type GetCandidate_profilesAggregateType<T extends Candidate_profilesAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidate_profiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidate_profiles[P]>
      : GetScalarType<T[P], AggregateCandidate_profiles[P]>
  }




  export type candidate_profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: candidate_profilesWhereInput
    orderBy?: candidate_profilesOrderByWithAggregationInput | candidate_profilesOrderByWithAggregationInput[]
    by: Candidate_profilesScalarFieldEnum[] | Candidate_profilesScalarFieldEnum
    having?: candidate_profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Candidate_profilesCountAggregateInputType | true
    _min?: Candidate_profilesMinAggregateInputType
    _max?: Candidate_profilesMaxAggregateInputType
  }

  export type Candidate_profilesGroupByOutputType = {
    id: string
    created_at: Date
    candidate_id: string
    _count: Candidate_profilesCountAggregateOutputType | null
    _min: Candidate_profilesMinAggregateOutputType | null
    _max: Candidate_profilesMaxAggregateOutputType | null
  }

  type GetCandidate_profilesGroupByPayload<T extends candidate_profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Candidate_profilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Candidate_profilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Candidate_profilesGroupByOutputType[P]>
            : GetScalarType<T[P], Candidate_profilesGroupByOutputType[P]>
        }
      >
    >


  export type candidate_profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    candidate_id?: boolean
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate_profiles"]>

  export type candidate_profilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    candidate_id?: boolean
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate_profiles"]>

  export type candidate_profilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    candidate_id?: boolean
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate_profiles"]>

  export type candidate_profilesSelectScalar = {
    id?: boolean
    created_at?: boolean
    candidate_id?: boolean
  }

  export type candidate_profilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "candidate_id", ExtArgs["result"]["candidate_profiles"]>
  export type candidate_profilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
  }
  export type candidate_profilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
  }
  export type candidate_profilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
  }

  export type $candidate_profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "candidate_profiles"
    objects: {
      candidates: Prisma.$candidatesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      candidate_id: string
    }, ExtArgs["result"]["candidate_profiles"]>
    composites: {}
  }

  type candidate_profilesGetPayload<S extends boolean | null | undefined | candidate_profilesDefaultArgs> = $Result.GetResult<Prisma.$candidate_profilesPayload, S>

  type candidate_profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<candidate_profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Candidate_profilesCountAggregateInputType | true
    }

  export interface candidate_profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['candidate_profiles'], meta: { name: 'candidate_profiles' } }
    /**
     * Find zero or one Candidate_profiles that matches the filter.
     * @param {candidate_profilesFindUniqueArgs} args - Arguments to find a Candidate_profiles
     * @example
     * // Get one Candidate_profiles
     * const candidate_profiles = await prisma.candidate_profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends candidate_profilesFindUniqueArgs>(args: SelectSubset<T, candidate_profilesFindUniqueArgs<ExtArgs>>): Prisma__candidate_profilesClient<$Result.GetResult<Prisma.$candidate_profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidate_profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {candidate_profilesFindUniqueOrThrowArgs} args - Arguments to find a Candidate_profiles
     * @example
     * // Get one Candidate_profiles
     * const candidate_profiles = await prisma.candidate_profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends candidate_profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, candidate_profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__candidate_profilesClient<$Result.GetResult<Prisma.$candidate_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_profilesFindFirstArgs} args - Arguments to find a Candidate_profiles
     * @example
     * // Get one Candidate_profiles
     * const candidate_profiles = await prisma.candidate_profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends candidate_profilesFindFirstArgs>(args?: SelectSubset<T, candidate_profilesFindFirstArgs<ExtArgs>>): Prisma__candidate_profilesClient<$Result.GetResult<Prisma.$candidate_profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate_profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_profilesFindFirstOrThrowArgs} args - Arguments to find a Candidate_profiles
     * @example
     * // Get one Candidate_profiles
     * const candidate_profiles = await prisma.candidate_profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends candidate_profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, candidate_profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__candidate_profilesClient<$Result.GetResult<Prisma.$candidate_profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidate_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidate_profiles
     * const candidate_profiles = await prisma.candidate_profiles.findMany()
     * 
     * // Get first 10 Candidate_profiles
     * const candidate_profiles = await prisma.candidate_profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidate_profilesWithIdOnly = await prisma.candidate_profiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends candidate_profilesFindManyArgs>(args?: SelectSubset<T, candidate_profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidate_profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidate_profiles.
     * @param {candidate_profilesCreateArgs} args - Arguments to create a Candidate_profiles.
     * @example
     * // Create one Candidate_profiles
     * const Candidate_profiles = await prisma.candidate_profiles.create({
     *   data: {
     *     // ... data to create a Candidate_profiles
     *   }
     * })
     * 
     */
    create<T extends candidate_profilesCreateArgs>(args: SelectSubset<T, candidate_profilesCreateArgs<ExtArgs>>): Prisma__candidate_profilesClient<$Result.GetResult<Prisma.$candidate_profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidate_profiles.
     * @param {candidate_profilesCreateManyArgs} args - Arguments to create many Candidate_profiles.
     * @example
     * // Create many Candidate_profiles
     * const candidate_profiles = await prisma.candidate_profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends candidate_profilesCreateManyArgs>(args?: SelectSubset<T, candidate_profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidate_profiles and returns the data saved in the database.
     * @param {candidate_profilesCreateManyAndReturnArgs} args - Arguments to create many Candidate_profiles.
     * @example
     * // Create many Candidate_profiles
     * const candidate_profiles = await prisma.candidate_profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidate_profiles and only return the `id`
     * const candidate_profilesWithIdOnly = await prisma.candidate_profiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends candidate_profilesCreateManyAndReturnArgs>(args?: SelectSubset<T, candidate_profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidate_profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidate_profiles.
     * @param {candidate_profilesDeleteArgs} args - Arguments to delete one Candidate_profiles.
     * @example
     * // Delete one Candidate_profiles
     * const Candidate_profiles = await prisma.candidate_profiles.delete({
     *   where: {
     *     // ... filter to delete one Candidate_profiles
     *   }
     * })
     * 
     */
    delete<T extends candidate_profilesDeleteArgs>(args: SelectSubset<T, candidate_profilesDeleteArgs<ExtArgs>>): Prisma__candidate_profilesClient<$Result.GetResult<Prisma.$candidate_profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidate_profiles.
     * @param {candidate_profilesUpdateArgs} args - Arguments to update one Candidate_profiles.
     * @example
     * // Update one Candidate_profiles
     * const candidate_profiles = await prisma.candidate_profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends candidate_profilesUpdateArgs>(args: SelectSubset<T, candidate_profilesUpdateArgs<ExtArgs>>): Prisma__candidate_profilesClient<$Result.GetResult<Prisma.$candidate_profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidate_profiles.
     * @param {candidate_profilesDeleteManyArgs} args - Arguments to filter Candidate_profiles to delete.
     * @example
     * // Delete a few Candidate_profiles
     * const { count } = await prisma.candidate_profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends candidate_profilesDeleteManyArgs>(args?: SelectSubset<T, candidate_profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidate_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidate_profiles
     * const candidate_profiles = await prisma.candidate_profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends candidate_profilesUpdateManyArgs>(args: SelectSubset<T, candidate_profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidate_profiles and returns the data updated in the database.
     * @param {candidate_profilesUpdateManyAndReturnArgs} args - Arguments to update many Candidate_profiles.
     * @example
     * // Update many Candidate_profiles
     * const candidate_profiles = await prisma.candidate_profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidate_profiles and only return the `id`
     * const candidate_profilesWithIdOnly = await prisma.candidate_profiles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends candidate_profilesUpdateManyAndReturnArgs>(args: SelectSubset<T, candidate_profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidate_profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidate_profiles.
     * @param {candidate_profilesUpsertArgs} args - Arguments to update or create a Candidate_profiles.
     * @example
     * // Update or create a Candidate_profiles
     * const candidate_profiles = await prisma.candidate_profiles.upsert({
     *   create: {
     *     // ... data to create a Candidate_profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidate_profiles we want to update
     *   }
     * })
     */
    upsert<T extends candidate_profilesUpsertArgs>(args: SelectSubset<T, candidate_profilesUpsertArgs<ExtArgs>>): Prisma__candidate_profilesClient<$Result.GetResult<Prisma.$candidate_profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidate_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_profilesCountArgs} args - Arguments to filter Candidate_profiles to count.
     * @example
     * // Count the number of Candidate_profiles
     * const count = await prisma.candidate_profiles.count({
     *   where: {
     *     // ... the filter for the Candidate_profiles we want to count
     *   }
     * })
    **/
    count<T extends candidate_profilesCountArgs>(
      args?: Subset<T, candidate_profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Candidate_profilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidate_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Candidate_profilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Candidate_profilesAggregateArgs>(args: Subset<T, Candidate_profilesAggregateArgs>): Prisma.PrismaPromise<GetCandidate_profilesAggregateType<T>>

    /**
     * Group by Candidate_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_profilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends candidate_profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: candidate_profilesGroupByArgs['orderBy'] }
        : { orderBy?: candidate_profilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, candidate_profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidate_profilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the candidate_profiles model
   */
  readonly fields: candidate_profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for candidate_profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__candidate_profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidates<T extends candidatesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, candidatesDefaultArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the candidate_profiles model
   */
  interface candidate_profilesFieldRefs {
    readonly id: FieldRef<"candidate_profiles", 'String'>
    readonly created_at: FieldRef<"candidate_profiles", 'DateTime'>
    readonly candidate_id: FieldRef<"candidate_profiles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * candidate_profiles findUnique
   */
  export type candidate_profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_profiles
     */
    select?: candidate_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_profiles
     */
    omit?: candidate_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_profilesInclude<ExtArgs> | null
    /**
     * Filter, which candidate_profiles to fetch.
     */
    where: candidate_profilesWhereUniqueInput
  }

  /**
   * candidate_profiles findUniqueOrThrow
   */
  export type candidate_profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_profiles
     */
    select?: candidate_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_profiles
     */
    omit?: candidate_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_profilesInclude<ExtArgs> | null
    /**
     * Filter, which candidate_profiles to fetch.
     */
    where: candidate_profilesWhereUniqueInput
  }

  /**
   * candidate_profiles findFirst
   */
  export type candidate_profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_profiles
     */
    select?: candidate_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_profiles
     */
    omit?: candidate_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_profilesInclude<ExtArgs> | null
    /**
     * Filter, which candidate_profiles to fetch.
     */
    where?: candidate_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidate_profiles to fetch.
     */
    orderBy?: candidate_profilesOrderByWithRelationInput | candidate_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidate_profiles.
     */
    cursor?: candidate_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidate_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidate_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidate_profiles.
     */
    distinct?: Candidate_profilesScalarFieldEnum | Candidate_profilesScalarFieldEnum[]
  }

  /**
   * candidate_profiles findFirstOrThrow
   */
  export type candidate_profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_profiles
     */
    select?: candidate_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_profiles
     */
    omit?: candidate_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_profilesInclude<ExtArgs> | null
    /**
     * Filter, which candidate_profiles to fetch.
     */
    where?: candidate_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidate_profiles to fetch.
     */
    orderBy?: candidate_profilesOrderByWithRelationInput | candidate_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidate_profiles.
     */
    cursor?: candidate_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidate_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidate_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidate_profiles.
     */
    distinct?: Candidate_profilesScalarFieldEnum | Candidate_profilesScalarFieldEnum[]
  }

  /**
   * candidate_profiles findMany
   */
  export type candidate_profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_profiles
     */
    select?: candidate_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_profiles
     */
    omit?: candidate_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_profilesInclude<ExtArgs> | null
    /**
     * Filter, which candidate_profiles to fetch.
     */
    where?: candidate_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidate_profiles to fetch.
     */
    orderBy?: candidate_profilesOrderByWithRelationInput | candidate_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing candidate_profiles.
     */
    cursor?: candidate_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidate_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidate_profiles.
     */
    skip?: number
    distinct?: Candidate_profilesScalarFieldEnum | Candidate_profilesScalarFieldEnum[]
  }

  /**
   * candidate_profiles create
   */
  export type candidate_profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_profiles
     */
    select?: candidate_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_profiles
     */
    omit?: candidate_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_profilesInclude<ExtArgs> | null
    /**
     * The data needed to create a candidate_profiles.
     */
    data: XOR<candidate_profilesCreateInput, candidate_profilesUncheckedCreateInput>
  }

  /**
   * candidate_profiles createMany
   */
  export type candidate_profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many candidate_profiles.
     */
    data: candidate_profilesCreateManyInput | candidate_profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * candidate_profiles createManyAndReturn
   */
  export type candidate_profilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_profiles
     */
    select?: candidate_profilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_profiles
     */
    omit?: candidate_profilesOmit<ExtArgs> | null
    /**
     * The data used to create many candidate_profiles.
     */
    data: candidate_profilesCreateManyInput | candidate_profilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_profilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * candidate_profiles update
   */
  export type candidate_profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_profiles
     */
    select?: candidate_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_profiles
     */
    omit?: candidate_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_profilesInclude<ExtArgs> | null
    /**
     * The data needed to update a candidate_profiles.
     */
    data: XOR<candidate_profilesUpdateInput, candidate_profilesUncheckedUpdateInput>
    /**
     * Choose, which candidate_profiles to update.
     */
    where: candidate_profilesWhereUniqueInput
  }

  /**
   * candidate_profiles updateMany
   */
  export type candidate_profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update candidate_profiles.
     */
    data: XOR<candidate_profilesUpdateManyMutationInput, candidate_profilesUncheckedUpdateManyInput>
    /**
     * Filter which candidate_profiles to update
     */
    where?: candidate_profilesWhereInput
    /**
     * Limit how many candidate_profiles to update.
     */
    limit?: number
  }

  /**
   * candidate_profiles updateManyAndReturn
   */
  export type candidate_profilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_profiles
     */
    select?: candidate_profilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_profiles
     */
    omit?: candidate_profilesOmit<ExtArgs> | null
    /**
     * The data used to update candidate_profiles.
     */
    data: XOR<candidate_profilesUpdateManyMutationInput, candidate_profilesUncheckedUpdateManyInput>
    /**
     * Filter which candidate_profiles to update
     */
    where?: candidate_profilesWhereInput
    /**
     * Limit how many candidate_profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_profilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * candidate_profiles upsert
   */
  export type candidate_profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_profiles
     */
    select?: candidate_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_profiles
     */
    omit?: candidate_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_profilesInclude<ExtArgs> | null
    /**
     * The filter to search for the candidate_profiles to update in case it exists.
     */
    where: candidate_profilesWhereUniqueInput
    /**
     * In case the candidate_profiles found by the `where` argument doesn't exist, create a new candidate_profiles with this data.
     */
    create: XOR<candidate_profilesCreateInput, candidate_profilesUncheckedCreateInput>
    /**
     * In case the candidate_profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<candidate_profilesUpdateInput, candidate_profilesUncheckedUpdateInput>
  }

  /**
   * candidate_profiles delete
   */
  export type candidate_profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_profiles
     */
    select?: candidate_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_profiles
     */
    omit?: candidate_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_profilesInclude<ExtArgs> | null
    /**
     * Filter which candidate_profiles to delete.
     */
    where: candidate_profilesWhereUniqueInput
  }

  /**
   * candidate_profiles deleteMany
   */
  export type candidate_profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidate_profiles to delete
     */
    where?: candidate_profilesWhereInput
    /**
     * Limit how many candidate_profiles to delete.
     */
    limit?: number
  }

  /**
   * candidate_profiles without action
   */
  export type candidate_profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_profiles
     */
    select?: candidate_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_profiles
     */
    omit?: candidate_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_profilesInclude<ExtArgs> | null
  }


  /**
   * Model candidate_work_experiences
   */

  export type AggregateCandidate_work_experiences = {
    _count: Candidate_work_experiencesCountAggregateOutputType | null
    _min: Candidate_work_experiencesMinAggregateOutputType | null
    _max: Candidate_work_experiencesMaxAggregateOutputType | null
  }

  export type Candidate_work_experiencesMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    candidate_id: string | null
  }

  export type Candidate_work_experiencesMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    candidate_id: string | null
  }

  export type Candidate_work_experiencesCountAggregateOutputType = {
    id: number
    created_at: number
    candidate_id: number
    _all: number
  }


  export type Candidate_work_experiencesMinAggregateInputType = {
    id?: true
    created_at?: true
    candidate_id?: true
  }

  export type Candidate_work_experiencesMaxAggregateInputType = {
    id?: true
    created_at?: true
    candidate_id?: true
  }

  export type Candidate_work_experiencesCountAggregateInputType = {
    id?: true
    created_at?: true
    candidate_id?: true
    _all?: true
  }

  export type Candidate_work_experiencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidate_work_experiences to aggregate.
     */
    where?: candidate_work_experiencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidate_work_experiences to fetch.
     */
    orderBy?: candidate_work_experiencesOrderByWithRelationInput | candidate_work_experiencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: candidate_work_experiencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidate_work_experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidate_work_experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned candidate_work_experiences
    **/
    _count?: true | Candidate_work_experiencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Candidate_work_experiencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Candidate_work_experiencesMaxAggregateInputType
  }

  export type GetCandidate_work_experiencesAggregateType<T extends Candidate_work_experiencesAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidate_work_experiences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidate_work_experiences[P]>
      : GetScalarType<T[P], AggregateCandidate_work_experiences[P]>
  }




  export type candidate_work_experiencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: candidate_work_experiencesWhereInput
    orderBy?: candidate_work_experiencesOrderByWithAggregationInput | candidate_work_experiencesOrderByWithAggregationInput[]
    by: Candidate_work_experiencesScalarFieldEnum[] | Candidate_work_experiencesScalarFieldEnum
    having?: candidate_work_experiencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Candidate_work_experiencesCountAggregateInputType | true
    _min?: Candidate_work_experiencesMinAggregateInputType
    _max?: Candidate_work_experiencesMaxAggregateInputType
  }

  export type Candidate_work_experiencesGroupByOutputType = {
    id: string
    created_at: Date
    candidate_id: string
    _count: Candidate_work_experiencesCountAggregateOutputType | null
    _min: Candidate_work_experiencesMinAggregateOutputType | null
    _max: Candidate_work_experiencesMaxAggregateOutputType | null
  }

  type GetCandidate_work_experiencesGroupByPayload<T extends candidate_work_experiencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Candidate_work_experiencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Candidate_work_experiencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Candidate_work_experiencesGroupByOutputType[P]>
            : GetScalarType<T[P], Candidate_work_experiencesGroupByOutputType[P]>
        }
      >
    >


  export type candidate_work_experiencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    candidate_id?: boolean
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate_work_experiences"]>

  export type candidate_work_experiencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    candidate_id?: boolean
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate_work_experiences"]>

  export type candidate_work_experiencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    candidate_id?: boolean
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate_work_experiences"]>

  export type candidate_work_experiencesSelectScalar = {
    id?: boolean
    created_at?: boolean
    candidate_id?: boolean
  }

  export type candidate_work_experiencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "candidate_id", ExtArgs["result"]["candidate_work_experiences"]>
  export type candidate_work_experiencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
  }
  export type candidate_work_experiencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
  }
  export type candidate_work_experiencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | candidatesDefaultArgs<ExtArgs>
  }

  export type $candidate_work_experiencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "candidate_work_experiences"
    objects: {
      candidates: Prisma.$candidatesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      candidate_id: string
    }, ExtArgs["result"]["candidate_work_experiences"]>
    composites: {}
  }

  type candidate_work_experiencesGetPayload<S extends boolean | null | undefined | candidate_work_experiencesDefaultArgs> = $Result.GetResult<Prisma.$candidate_work_experiencesPayload, S>

  type candidate_work_experiencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<candidate_work_experiencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Candidate_work_experiencesCountAggregateInputType | true
    }

  export interface candidate_work_experiencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['candidate_work_experiences'], meta: { name: 'candidate_work_experiences' } }
    /**
     * Find zero or one Candidate_work_experiences that matches the filter.
     * @param {candidate_work_experiencesFindUniqueArgs} args - Arguments to find a Candidate_work_experiences
     * @example
     * // Get one Candidate_work_experiences
     * const candidate_work_experiences = await prisma.candidate_work_experiences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends candidate_work_experiencesFindUniqueArgs>(args: SelectSubset<T, candidate_work_experiencesFindUniqueArgs<ExtArgs>>): Prisma__candidate_work_experiencesClient<$Result.GetResult<Prisma.$candidate_work_experiencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidate_work_experiences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {candidate_work_experiencesFindUniqueOrThrowArgs} args - Arguments to find a Candidate_work_experiences
     * @example
     * // Get one Candidate_work_experiences
     * const candidate_work_experiences = await prisma.candidate_work_experiences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends candidate_work_experiencesFindUniqueOrThrowArgs>(args: SelectSubset<T, candidate_work_experiencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__candidate_work_experiencesClient<$Result.GetResult<Prisma.$candidate_work_experiencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate_work_experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_work_experiencesFindFirstArgs} args - Arguments to find a Candidate_work_experiences
     * @example
     * // Get one Candidate_work_experiences
     * const candidate_work_experiences = await prisma.candidate_work_experiences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends candidate_work_experiencesFindFirstArgs>(args?: SelectSubset<T, candidate_work_experiencesFindFirstArgs<ExtArgs>>): Prisma__candidate_work_experiencesClient<$Result.GetResult<Prisma.$candidate_work_experiencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate_work_experiences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_work_experiencesFindFirstOrThrowArgs} args - Arguments to find a Candidate_work_experiences
     * @example
     * // Get one Candidate_work_experiences
     * const candidate_work_experiences = await prisma.candidate_work_experiences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends candidate_work_experiencesFindFirstOrThrowArgs>(args?: SelectSubset<T, candidate_work_experiencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__candidate_work_experiencesClient<$Result.GetResult<Prisma.$candidate_work_experiencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidate_work_experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_work_experiencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidate_work_experiences
     * const candidate_work_experiences = await prisma.candidate_work_experiences.findMany()
     * 
     * // Get first 10 Candidate_work_experiences
     * const candidate_work_experiences = await prisma.candidate_work_experiences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidate_work_experiencesWithIdOnly = await prisma.candidate_work_experiences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends candidate_work_experiencesFindManyArgs>(args?: SelectSubset<T, candidate_work_experiencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidate_work_experiencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidate_work_experiences.
     * @param {candidate_work_experiencesCreateArgs} args - Arguments to create a Candidate_work_experiences.
     * @example
     * // Create one Candidate_work_experiences
     * const Candidate_work_experiences = await prisma.candidate_work_experiences.create({
     *   data: {
     *     // ... data to create a Candidate_work_experiences
     *   }
     * })
     * 
     */
    create<T extends candidate_work_experiencesCreateArgs>(args: SelectSubset<T, candidate_work_experiencesCreateArgs<ExtArgs>>): Prisma__candidate_work_experiencesClient<$Result.GetResult<Prisma.$candidate_work_experiencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidate_work_experiences.
     * @param {candidate_work_experiencesCreateManyArgs} args - Arguments to create many Candidate_work_experiences.
     * @example
     * // Create many Candidate_work_experiences
     * const candidate_work_experiences = await prisma.candidate_work_experiences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends candidate_work_experiencesCreateManyArgs>(args?: SelectSubset<T, candidate_work_experiencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidate_work_experiences and returns the data saved in the database.
     * @param {candidate_work_experiencesCreateManyAndReturnArgs} args - Arguments to create many Candidate_work_experiences.
     * @example
     * // Create many Candidate_work_experiences
     * const candidate_work_experiences = await prisma.candidate_work_experiences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidate_work_experiences and only return the `id`
     * const candidate_work_experiencesWithIdOnly = await prisma.candidate_work_experiences.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends candidate_work_experiencesCreateManyAndReturnArgs>(args?: SelectSubset<T, candidate_work_experiencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidate_work_experiencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidate_work_experiences.
     * @param {candidate_work_experiencesDeleteArgs} args - Arguments to delete one Candidate_work_experiences.
     * @example
     * // Delete one Candidate_work_experiences
     * const Candidate_work_experiences = await prisma.candidate_work_experiences.delete({
     *   where: {
     *     // ... filter to delete one Candidate_work_experiences
     *   }
     * })
     * 
     */
    delete<T extends candidate_work_experiencesDeleteArgs>(args: SelectSubset<T, candidate_work_experiencesDeleteArgs<ExtArgs>>): Prisma__candidate_work_experiencesClient<$Result.GetResult<Prisma.$candidate_work_experiencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidate_work_experiences.
     * @param {candidate_work_experiencesUpdateArgs} args - Arguments to update one Candidate_work_experiences.
     * @example
     * // Update one Candidate_work_experiences
     * const candidate_work_experiences = await prisma.candidate_work_experiences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends candidate_work_experiencesUpdateArgs>(args: SelectSubset<T, candidate_work_experiencesUpdateArgs<ExtArgs>>): Prisma__candidate_work_experiencesClient<$Result.GetResult<Prisma.$candidate_work_experiencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidate_work_experiences.
     * @param {candidate_work_experiencesDeleteManyArgs} args - Arguments to filter Candidate_work_experiences to delete.
     * @example
     * // Delete a few Candidate_work_experiences
     * const { count } = await prisma.candidate_work_experiences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends candidate_work_experiencesDeleteManyArgs>(args?: SelectSubset<T, candidate_work_experiencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidate_work_experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_work_experiencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidate_work_experiences
     * const candidate_work_experiences = await prisma.candidate_work_experiences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends candidate_work_experiencesUpdateManyArgs>(args: SelectSubset<T, candidate_work_experiencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidate_work_experiences and returns the data updated in the database.
     * @param {candidate_work_experiencesUpdateManyAndReturnArgs} args - Arguments to update many Candidate_work_experiences.
     * @example
     * // Update many Candidate_work_experiences
     * const candidate_work_experiences = await prisma.candidate_work_experiences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidate_work_experiences and only return the `id`
     * const candidate_work_experiencesWithIdOnly = await prisma.candidate_work_experiences.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends candidate_work_experiencesUpdateManyAndReturnArgs>(args: SelectSubset<T, candidate_work_experiencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidate_work_experiencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidate_work_experiences.
     * @param {candidate_work_experiencesUpsertArgs} args - Arguments to update or create a Candidate_work_experiences.
     * @example
     * // Update or create a Candidate_work_experiences
     * const candidate_work_experiences = await prisma.candidate_work_experiences.upsert({
     *   create: {
     *     // ... data to create a Candidate_work_experiences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidate_work_experiences we want to update
     *   }
     * })
     */
    upsert<T extends candidate_work_experiencesUpsertArgs>(args: SelectSubset<T, candidate_work_experiencesUpsertArgs<ExtArgs>>): Prisma__candidate_work_experiencesClient<$Result.GetResult<Prisma.$candidate_work_experiencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidate_work_experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_work_experiencesCountArgs} args - Arguments to filter Candidate_work_experiences to count.
     * @example
     * // Count the number of Candidate_work_experiences
     * const count = await prisma.candidate_work_experiences.count({
     *   where: {
     *     // ... the filter for the Candidate_work_experiences we want to count
     *   }
     * })
    **/
    count<T extends candidate_work_experiencesCountArgs>(
      args?: Subset<T, candidate_work_experiencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Candidate_work_experiencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidate_work_experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Candidate_work_experiencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Candidate_work_experiencesAggregateArgs>(args: Subset<T, Candidate_work_experiencesAggregateArgs>): Prisma.PrismaPromise<GetCandidate_work_experiencesAggregateType<T>>

    /**
     * Group by Candidate_work_experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidate_work_experiencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends candidate_work_experiencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: candidate_work_experiencesGroupByArgs['orderBy'] }
        : { orderBy?: candidate_work_experiencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, candidate_work_experiencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidate_work_experiencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the candidate_work_experiences model
   */
  readonly fields: candidate_work_experiencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for candidate_work_experiences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__candidate_work_experiencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidates<T extends candidatesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, candidatesDefaultArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the candidate_work_experiences model
   */
  interface candidate_work_experiencesFieldRefs {
    readonly id: FieldRef<"candidate_work_experiences", 'String'>
    readonly created_at: FieldRef<"candidate_work_experiences", 'DateTime'>
    readonly candidate_id: FieldRef<"candidate_work_experiences", 'String'>
  }
    

  // Custom InputTypes
  /**
   * candidate_work_experiences findUnique
   */
  export type candidate_work_experiencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_work_experiences
     */
    select?: candidate_work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_work_experiences
     */
    omit?: candidate_work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_work_experiencesInclude<ExtArgs> | null
    /**
     * Filter, which candidate_work_experiences to fetch.
     */
    where: candidate_work_experiencesWhereUniqueInput
  }

  /**
   * candidate_work_experiences findUniqueOrThrow
   */
  export type candidate_work_experiencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_work_experiences
     */
    select?: candidate_work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_work_experiences
     */
    omit?: candidate_work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_work_experiencesInclude<ExtArgs> | null
    /**
     * Filter, which candidate_work_experiences to fetch.
     */
    where: candidate_work_experiencesWhereUniqueInput
  }

  /**
   * candidate_work_experiences findFirst
   */
  export type candidate_work_experiencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_work_experiences
     */
    select?: candidate_work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_work_experiences
     */
    omit?: candidate_work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_work_experiencesInclude<ExtArgs> | null
    /**
     * Filter, which candidate_work_experiences to fetch.
     */
    where?: candidate_work_experiencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidate_work_experiences to fetch.
     */
    orderBy?: candidate_work_experiencesOrderByWithRelationInput | candidate_work_experiencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidate_work_experiences.
     */
    cursor?: candidate_work_experiencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidate_work_experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidate_work_experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidate_work_experiences.
     */
    distinct?: Candidate_work_experiencesScalarFieldEnum | Candidate_work_experiencesScalarFieldEnum[]
  }

  /**
   * candidate_work_experiences findFirstOrThrow
   */
  export type candidate_work_experiencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_work_experiences
     */
    select?: candidate_work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_work_experiences
     */
    omit?: candidate_work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_work_experiencesInclude<ExtArgs> | null
    /**
     * Filter, which candidate_work_experiences to fetch.
     */
    where?: candidate_work_experiencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidate_work_experiences to fetch.
     */
    orderBy?: candidate_work_experiencesOrderByWithRelationInput | candidate_work_experiencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidate_work_experiences.
     */
    cursor?: candidate_work_experiencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidate_work_experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidate_work_experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidate_work_experiences.
     */
    distinct?: Candidate_work_experiencesScalarFieldEnum | Candidate_work_experiencesScalarFieldEnum[]
  }

  /**
   * candidate_work_experiences findMany
   */
  export type candidate_work_experiencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_work_experiences
     */
    select?: candidate_work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_work_experiences
     */
    omit?: candidate_work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_work_experiencesInclude<ExtArgs> | null
    /**
     * Filter, which candidate_work_experiences to fetch.
     */
    where?: candidate_work_experiencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidate_work_experiences to fetch.
     */
    orderBy?: candidate_work_experiencesOrderByWithRelationInput | candidate_work_experiencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing candidate_work_experiences.
     */
    cursor?: candidate_work_experiencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidate_work_experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidate_work_experiences.
     */
    skip?: number
    distinct?: Candidate_work_experiencesScalarFieldEnum | Candidate_work_experiencesScalarFieldEnum[]
  }

  /**
   * candidate_work_experiences create
   */
  export type candidate_work_experiencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_work_experiences
     */
    select?: candidate_work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_work_experiences
     */
    omit?: candidate_work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_work_experiencesInclude<ExtArgs> | null
    /**
     * The data needed to create a candidate_work_experiences.
     */
    data: XOR<candidate_work_experiencesCreateInput, candidate_work_experiencesUncheckedCreateInput>
  }

  /**
   * candidate_work_experiences createMany
   */
  export type candidate_work_experiencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many candidate_work_experiences.
     */
    data: candidate_work_experiencesCreateManyInput | candidate_work_experiencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * candidate_work_experiences createManyAndReturn
   */
  export type candidate_work_experiencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_work_experiences
     */
    select?: candidate_work_experiencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_work_experiences
     */
    omit?: candidate_work_experiencesOmit<ExtArgs> | null
    /**
     * The data used to create many candidate_work_experiences.
     */
    data: candidate_work_experiencesCreateManyInput | candidate_work_experiencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_work_experiencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * candidate_work_experiences update
   */
  export type candidate_work_experiencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_work_experiences
     */
    select?: candidate_work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_work_experiences
     */
    omit?: candidate_work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_work_experiencesInclude<ExtArgs> | null
    /**
     * The data needed to update a candidate_work_experiences.
     */
    data: XOR<candidate_work_experiencesUpdateInput, candidate_work_experiencesUncheckedUpdateInput>
    /**
     * Choose, which candidate_work_experiences to update.
     */
    where: candidate_work_experiencesWhereUniqueInput
  }

  /**
   * candidate_work_experiences updateMany
   */
  export type candidate_work_experiencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update candidate_work_experiences.
     */
    data: XOR<candidate_work_experiencesUpdateManyMutationInput, candidate_work_experiencesUncheckedUpdateManyInput>
    /**
     * Filter which candidate_work_experiences to update
     */
    where?: candidate_work_experiencesWhereInput
    /**
     * Limit how many candidate_work_experiences to update.
     */
    limit?: number
  }

  /**
   * candidate_work_experiences updateManyAndReturn
   */
  export type candidate_work_experiencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_work_experiences
     */
    select?: candidate_work_experiencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_work_experiences
     */
    omit?: candidate_work_experiencesOmit<ExtArgs> | null
    /**
     * The data used to update candidate_work_experiences.
     */
    data: XOR<candidate_work_experiencesUpdateManyMutationInput, candidate_work_experiencesUncheckedUpdateManyInput>
    /**
     * Filter which candidate_work_experiences to update
     */
    where?: candidate_work_experiencesWhereInput
    /**
     * Limit how many candidate_work_experiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_work_experiencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * candidate_work_experiences upsert
   */
  export type candidate_work_experiencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_work_experiences
     */
    select?: candidate_work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_work_experiences
     */
    omit?: candidate_work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_work_experiencesInclude<ExtArgs> | null
    /**
     * The filter to search for the candidate_work_experiences to update in case it exists.
     */
    where: candidate_work_experiencesWhereUniqueInput
    /**
     * In case the candidate_work_experiences found by the `where` argument doesn't exist, create a new candidate_work_experiences with this data.
     */
    create: XOR<candidate_work_experiencesCreateInput, candidate_work_experiencesUncheckedCreateInput>
    /**
     * In case the candidate_work_experiences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<candidate_work_experiencesUpdateInput, candidate_work_experiencesUncheckedUpdateInput>
  }

  /**
   * candidate_work_experiences delete
   */
  export type candidate_work_experiencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_work_experiences
     */
    select?: candidate_work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_work_experiences
     */
    omit?: candidate_work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_work_experiencesInclude<ExtArgs> | null
    /**
     * Filter which candidate_work_experiences to delete.
     */
    where: candidate_work_experiencesWhereUniqueInput
  }

  /**
   * candidate_work_experiences deleteMany
   */
  export type candidate_work_experiencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidate_work_experiences to delete
     */
    where?: candidate_work_experiencesWhereInput
    /**
     * Limit how many candidate_work_experiences to delete.
     */
    limit?: number
  }

  /**
   * candidate_work_experiences without action
   */
  export type candidate_work_experiencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_work_experiences
     */
    select?: candidate_work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_work_experiences
     */
    omit?: candidate_work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_work_experiencesInclude<ExtArgs> | null
  }


  /**
   * Model candidates
   */

  export type AggregateCandidates = {
    _count: CandidatesCountAggregateOutputType | null
    _min: CandidatesMinAggregateOutputType | null
    _max: CandidatesMaxAggregateOutputType | null
  }

  export type CandidatesMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    first_name: string | null
    last_name: string | null
    sex: string | null
  }

  export type CandidatesMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    first_name: string | null
    last_name: string | null
    sex: string | null
  }

  export type CandidatesCountAggregateOutputType = {
    id: number
    created_at: number
    first_name: number
    last_name: number
    sex: number
    _all: number
  }


  export type CandidatesMinAggregateInputType = {
    id?: true
    created_at?: true
    first_name?: true
    last_name?: true
    sex?: true
  }

  export type CandidatesMaxAggregateInputType = {
    id?: true
    created_at?: true
    first_name?: true
    last_name?: true
    sex?: true
  }

  export type CandidatesCountAggregateInputType = {
    id?: true
    created_at?: true
    first_name?: true
    last_name?: true
    sex?: true
    _all?: true
  }

  export type CandidatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidates to aggregate.
     */
    where?: candidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidatesOrderByWithRelationInput | candidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: candidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned candidates
    **/
    _count?: true | CandidatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidatesMaxAggregateInputType
  }

  export type GetCandidatesAggregateType<T extends CandidatesAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidates[P]>
      : GetScalarType<T[P], AggregateCandidates[P]>
  }




  export type candidatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: candidatesWhereInput
    orderBy?: candidatesOrderByWithAggregationInput | candidatesOrderByWithAggregationInput[]
    by: CandidatesScalarFieldEnum[] | CandidatesScalarFieldEnum
    having?: candidatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidatesCountAggregateInputType | true
    _min?: CandidatesMinAggregateInputType
    _max?: CandidatesMaxAggregateInputType
  }

  export type CandidatesGroupByOutputType = {
    id: string
    created_at: Date
    first_name: string
    last_name: string
    sex: string
    _count: CandidatesCountAggregateOutputType | null
    _min: CandidatesMinAggregateOutputType | null
    _max: CandidatesMaxAggregateOutputType | null
  }

  type GetCandidatesGroupByPayload<T extends candidatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidatesGroupByOutputType[P]>
            : GetScalarType<T[P], CandidatesGroupByOutputType[P]>
        }
      >
    >


  export type candidatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    first_name?: boolean
    last_name?: boolean
    sex?: boolean
    candidate_educations?: boolean | candidates$candidate_educationsArgs<ExtArgs>
    candidate_profiles?: boolean | candidates$candidate_profilesArgs<ExtArgs>
    candidate_work_experiences?: boolean | candidates$candidate_work_experiencesArgs<ExtArgs>
    _count?: boolean | CandidatesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidates"]>

  export type candidatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    first_name?: boolean
    last_name?: boolean
    sex?: boolean
  }, ExtArgs["result"]["candidates"]>

  export type candidatesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    first_name?: boolean
    last_name?: boolean
    sex?: boolean
  }, ExtArgs["result"]["candidates"]>

  export type candidatesSelectScalar = {
    id?: boolean
    created_at?: boolean
    first_name?: boolean
    last_name?: boolean
    sex?: boolean
  }

  export type candidatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "first_name" | "last_name" | "sex", ExtArgs["result"]["candidates"]>
  export type candidatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate_educations?: boolean | candidates$candidate_educationsArgs<ExtArgs>
    candidate_profiles?: boolean | candidates$candidate_profilesArgs<ExtArgs>
    candidate_work_experiences?: boolean | candidates$candidate_work_experiencesArgs<ExtArgs>
    _count?: boolean | CandidatesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type candidatesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type candidatesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $candidatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "candidates"
    objects: {
      candidate_educations: Prisma.$candidate_educationsPayload<ExtArgs>[]
      candidate_profiles: Prisma.$candidate_profilesPayload<ExtArgs> | null
      candidate_work_experiences: Prisma.$candidate_work_experiencesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      first_name: string
      last_name: string
      sex: string
    }, ExtArgs["result"]["candidates"]>
    composites: {}
  }

  type candidatesGetPayload<S extends boolean | null | undefined | candidatesDefaultArgs> = $Result.GetResult<Prisma.$candidatesPayload, S>

  type candidatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<candidatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidatesCountAggregateInputType | true
    }

  export interface candidatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['candidates'], meta: { name: 'candidates' } }
    /**
     * Find zero or one Candidates that matches the filter.
     * @param {candidatesFindUniqueArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends candidatesFindUniqueArgs>(args: SelectSubset<T, candidatesFindUniqueArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {candidatesFindUniqueOrThrowArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends candidatesFindUniqueOrThrowArgs>(args: SelectSubset<T, candidatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesFindFirstArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends candidatesFindFirstArgs>(args?: SelectSubset<T, candidatesFindFirstArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesFindFirstOrThrowArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends candidatesFindFirstOrThrowArgs>(args?: SelectSubset<T, candidatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidates.findMany()
     * 
     * // Get first 10 Candidates
     * const candidates = await prisma.candidates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidatesWithIdOnly = await prisma.candidates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends candidatesFindManyArgs>(args?: SelectSubset<T, candidatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidates.
     * @param {candidatesCreateArgs} args - Arguments to create a Candidates.
     * @example
     * // Create one Candidates
     * const Candidates = await prisma.candidates.create({
     *   data: {
     *     // ... data to create a Candidates
     *   }
     * })
     * 
     */
    create<T extends candidatesCreateArgs>(args: SelectSubset<T, candidatesCreateArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidates.
     * @param {candidatesCreateManyArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidates = await prisma.candidates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends candidatesCreateManyArgs>(args?: SelectSubset<T, candidatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidates and returns the data saved in the database.
     * @param {candidatesCreateManyAndReturnArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidates = await prisma.candidates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidates and only return the `id`
     * const candidatesWithIdOnly = await prisma.candidates.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends candidatesCreateManyAndReturnArgs>(args?: SelectSubset<T, candidatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidates.
     * @param {candidatesDeleteArgs} args - Arguments to delete one Candidates.
     * @example
     * // Delete one Candidates
     * const Candidates = await prisma.candidates.delete({
     *   where: {
     *     // ... filter to delete one Candidates
     *   }
     * })
     * 
     */
    delete<T extends candidatesDeleteArgs>(args: SelectSubset<T, candidatesDeleteArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidates.
     * @param {candidatesUpdateArgs} args - Arguments to update one Candidates.
     * @example
     * // Update one Candidates
     * const candidates = await prisma.candidates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends candidatesUpdateArgs>(args: SelectSubset<T, candidatesUpdateArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidates.
     * @param {candidatesDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends candidatesDeleteManyArgs>(args?: SelectSubset<T, candidatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidates = await prisma.candidates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends candidatesUpdateManyArgs>(args: SelectSubset<T, candidatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates and returns the data updated in the database.
     * @param {candidatesUpdateManyAndReturnArgs} args - Arguments to update many Candidates.
     * @example
     * // Update many Candidates
     * const candidates = await prisma.candidates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidates and only return the `id`
     * const candidatesWithIdOnly = await prisma.candidates.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends candidatesUpdateManyAndReturnArgs>(args: SelectSubset<T, candidatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidates.
     * @param {candidatesUpsertArgs} args - Arguments to update or create a Candidates.
     * @example
     * // Update or create a Candidates
     * const candidates = await prisma.candidates.upsert({
     *   create: {
     *     // ... data to create a Candidates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidates we want to update
     *   }
     * })
     */
    upsert<T extends candidatesUpsertArgs>(args: SelectSubset<T, candidatesUpsertArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidates.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
    **/
    count<T extends candidatesCountArgs>(
      args?: Subset<T, candidatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidatesAggregateArgs>(args: Subset<T, CandidatesAggregateArgs>): Prisma.PrismaPromise<GetCandidatesAggregateType<T>>

    /**
     * Group by Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends candidatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: candidatesGroupByArgs['orderBy'] }
        : { orderBy?: candidatesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, candidatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the candidates model
   */
  readonly fields: candidatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for candidates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__candidatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate_educations<T extends candidates$candidate_educationsArgs<ExtArgs> = {}>(args?: Subset<T, candidates$candidate_educationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidate_educationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    candidate_profiles<T extends candidates$candidate_profilesArgs<ExtArgs> = {}>(args?: Subset<T, candidates$candidate_profilesArgs<ExtArgs>>): Prisma__candidate_profilesClient<$Result.GetResult<Prisma.$candidate_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    candidate_work_experiences<T extends candidates$candidate_work_experiencesArgs<ExtArgs> = {}>(args?: Subset<T, candidates$candidate_work_experiencesArgs<ExtArgs>>): Prisma__candidate_work_experiencesClient<$Result.GetResult<Prisma.$candidate_work_experiencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the candidates model
   */
  interface candidatesFieldRefs {
    readonly id: FieldRef<"candidates", 'String'>
    readonly created_at: FieldRef<"candidates", 'DateTime'>
    readonly first_name: FieldRef<"candidates", 'String'>
    readonly last_name: FieldRef<"candidates", 'String'>
    readonly sex: FieldRef<"candidates", 'String'>
  }
    

  // Custom InputTypes
  /**
   * candidates findUnique
   */
  export type candidatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where: candidatesWhereUniqueInput
  }

  /**
   * candidates findUniqueOrThrow
   */
  export type candidatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where: candidatesWhereUniqueInput
  }

  /**
   * candidates findFirst
   */
  export type candidatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where?: candidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidatesOrderByWithRelationInput | candidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidates.
     */
    cursor?: candidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidates.
     */
    distinct?: CandidatesScalarFieldEnum | CandidatesScalarFieldEnum[]
  }

  /**
   * candidates findFirstOrThrow
   */
  export type candidatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where?: candidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidatesOrderByWithRelationInput | candidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidates.
     */
    cursor?: candidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidates.
     */
    distinct?: CandidatesScalarFieldEnum | CandidatesScalarFieldEnum[]
  }

  /**
   * candidates findMany
   */
  export type candidatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where?: candidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidatesOrderByWithRelationInput | candidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing candidates.
     */
    cursor?: candidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidates.
     */
    skip?: number
    distinct?: CandidatesScalarFieldEnum | CandidatesScalarFieldEnum[]
  }

  /**
   * candidates create
   */
  export type candidatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * The data needed to create a candidates.
     */
    data: XOR<candidatesCreateInput, candidatesUncheckedCreateInput>
  }

  /**
   * candidates createMany
   */
  export type candidatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many candidates.
     */
    data: candidatesCreateManyInput | candidatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * candidates createManyAndReturn
   */
  export type candidatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * The data used to create many candidates.
     */
    data: candidatesCreateManyInput | candidatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * candidates update
   */
  export type candidatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * The data needed to update a candidates.
     */
    data: XOR<candidatesUpdateInput, candidatesUncheckedUpdateInput>
    /**
     * Choose, which candidates to update.
     */
    where: candidatesWhereUniqueInput
  }

  /**
   * candidates updateMany
   */
  export type candidatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update candidates.
     */
    data: XOR<candidatesUpdateManyMutationInput, candidatesUncheckedUpdateManyInput>
    /**
     * Filter which candidates to update
     */
    where?: candidatesWhereInput
    /**
     * Limit how many candidates to update.
     */
    limit?: number
  }

  /**
   * candidates updateManyAndReturn
   */
  export type candidatesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * The data used to update candidates.
     */
    data: XOR<candidatesUpdateManyMutationInput, candidatesUncheckedUpdateManyInput>
    /**
     * Filter which candidates to update
     */
    where?: candidatesWhereInput
    /**
     * Limit how many candidates to update.
     */
    limit?: number
  }

  /**
   * candidates upsert
   */
  export type candidatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * The filter to search for the candidates to update in case it exists.
     */
    where: candidatesWhereUniqueInput
    /**
     * In case the candidates found by the `where` argument doesn't exist, create a new candidates with this data.
     */
    create: XOR<candidatesCreateInput, candidatesUncheckedCreateInput>
    /**
     * In case the candidates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<candidatesUpdateInput, candidatesUncheckedUpdateInput>
  }

  /**
   * candidates delete
   */
  export type candidatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter which candidates to delete.
     */
    where: candidatesWhereUniqueInput
  }

  /**
   * candidates deleteMany
   */
  export type candidatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidates to delete
     */
    where?: candidatesWhereInput
    /**
     * Limit how many candidates to delete.
     */
    limit?: number
  }

  /**
   * candidates.candidate_educations
   */
  export type candidates$candidate_educationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_educations
     */
    select?: candidate_educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_educations
     */
    omit?: candidate_educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_educationsInclude<ExtArgs> | null
    where?: candidate_educationsWhereInput
    orderBy?: candidate_educationsOrderByWithRelationInput | candidate_educationsOrderByWithRelationInput[]
    cursor?: candidate_educationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Candidate_educationsScalarFieldEnum | Candidate_educationsScalarFieldEnum[]
  }

  /**
   * candidates.candidate_profiles
   */
  export type candidates$candidate_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_profiles
     */
    select?: candidate_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_profiles
     */
    omit?: candidate_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_profilesInclude<ExtArgs> | null
    where?: candidate_profilesWhereInput
  }

  /**
   * candidates.candidate_work_experiences
   */
  export type candidates$candidate_work_experiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_work_experiences
     */
    select?: candidate_work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_work_experiences
     */
    omit?: candidate_work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_work_experiencesInclude<ExtArgs> | null
    where?: candidate_work_experiencesWhereInput
  }

  /**
   * candidates without action
   */
  export type candidatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
  }


  /**
   * Model education_majors
   */

  export type AggregateEducation_majors = {
    _count: Education_majorsCountAggregateOutputType | null
    _min: Education_majorsMinAggregateOutputType | null
    _max: Education_majorsMaxAggregateOutputType | null
  }

  export type Education_majorsMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    name: string | null
  }

  export type Education_majorsMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    name: string | null
  }

  export type Education_majorsCountAggregateOutputType = {
    id: number
    created_at: number
    name: number
    _all: number
  }


  export type Education_majorsMinAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
  }

  export type Education_majorsMaxAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
  }

  export type Education_majorsCountAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    _all?: true
  }

  export type Education_majorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which education_majors to aggregate.
     */
    where?: education_majorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of education_majors to fetch.
     */
    orderBy?: education_majorsOrderByWithRelationInput | education_majorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: education_majorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` education_majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` education_majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned education_majors
    **/
    _count?: true | Education_majorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Education_majorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Education_majorsMaxAggregateInputType
  }

  export type GetEducation_majorsAggregateType<T extends Education_majorsAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation_majors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation_majors[P]>
      : GetScalarType<T[P], AggregateEducation_majors[P]>
  }




  export type education_majorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: education_majorsWhereInput
    orderBy?: education_majorsOrderByWithAggregationInput | education_majorsOrderByWithAggregationInput[]
    by: Education_majorsScalarFieldEnum[] | Education_majorsScalarFieldEnum
    having?: education_majorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Education_majorsCountAggregateInputType | true
    _min?: Education_majorsMinAggregateInputType
    _max?: Education_majorsMaxAggregateInputType
  }

  export type Education_majorsGroupByOutputType = {
    id: string
    created_at: Date
    name: string
    _count: Education_majorsCountAggregateOutputType | null
    _min: Education_majorsMinAggregateOutputType | null
    _max: Education_majorsMaxAggregateOutputType | null
  }

  type GetEducation_majorsGroupByPayload<T extends education_majorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Education_majorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Education_majorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Education_majorsGroupByOutputType[P]>
            : GetScalarType<T[P], Education_majorsGroupByOutputType[P]>
        }
      >
    >


  export type education_majorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
  }, ExtArgs["result"]["education_majors"]>

  export type education_majorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
  }, ExtArgs["result"]["education_majors"]>

  export type education_majorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
  }, ExtArgs["result"]["education_majors"]>

  export type education_majorsSelectScalar = {
    id?: boolean
    created_at?: boolean
    name?: boolean
  }

  export type education_majorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "name", ExtArgs["result"]["education_majors"]>

  export type $education_majorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "education_majors"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      name: string
    }, ExtArgs["result"]["education_majors"]>
    composites: {}
  }

  type education_majorsGetPayload<S extends boolean | null | undefined | education_majorsDefaultArgs> = $Result.GetResult<Prisma.$education_majorsPayload, S>

  type education_majorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<education_majorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Education_majorsCountAggregateInputType | true
    }

  export interface education_majorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['education_majors'], meta: { name: 'education_majors' } }
    /**
     * Find zero or one Education_majors that matches the filter.
     * @param {education_majorsFindUniqueArgs} args - Arguments to find a Education_majors
     * @example
     * // Get one Education_majors
     * const education_majors = await prisma.education_majors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends education_majorsFindUniqueArgs>(args: SelectSubset<T, education_majorsFindUniqueArgs<ExtArgs>>): Prisma__education_majorsClient<$Result.GetResult<Prisma.$education_majorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education_majors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {education_majorsFindUniqueOrThrowArgs} args - Arguments to find a Education_majors
     * @example
     * // Get one Education_majors
     * const education_majors = await prisma.education_majors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends education_majorsFindUniqueOrThrowArgs>(args: SelectSubset<T, education_majorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__education_majorsClient<$Result.GetResult<Prisma.$education_majorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education_majors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_majorsFindFirstArgs} args - Arguments to find a Education_majors
     * @example
     * // Get one Education_majors
     * const education_majors = await prisma.education_majors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends education_majorsFindFirstArgs>(args?: SelectSubset<T, education_majorsFindFirstArgs<ExtArgs>>): Prisma__education_majorsClient<$Result.GetResult<Prisma.$education_majorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education_majors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_majorsFindFirstOrThrowArgs} args - Arguments to find a Education_majors
     * @example
     * // Get one Education_majors
     * const education_majors = await prisma.education_majors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends education_majorsFindFirstOrThrowArgs>(args?: SelectSubset<T, education_majorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__education_majorsClient<$Result.GetResult<Prisma.$education_majorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Education_majors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_majorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Education_majors
     * const education_majors = await prisma.education_majors.findMany()
     * 
     * // Get first 10 Education_majors
     * const education_majors = await prisma.education_majors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const education_majorsWithIdOnly = await prisma.education_majors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends education_majorsFindManyArgs>(args?: SelectSubset<T, education_majorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$education_majorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education_majors.
     * @param {education_majorsCreateArgs} args - Arguments to create a Education_majors.
     * @example
     * // Create one Education_majors
     * const Education_majors = await prisma.education_majors.create({
     *   data: {
     *     // ... data to create a Education_majors
     *   }
     * })
     * 
     */
    create<T extends education_majorsCreateArgs>(args: SelectSubset<T, education_majorsCreateArgs<ExtArgs>>): Prisma__education_majorsClient<$Result.GetResult<Prisma.$education_majorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Education_majors.
     * @param {education_majorsCreateManyArgs} args - Arguments to create many Education_majors.
     * @example
     * // Create many Education_majors
     * const education_majors = await prisma.education_majors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends education_majorsCreateManyArgs>(args?: SelectSubset<T, education_majorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Education_majors and returns the data saved in the database.
     * @param {education_majorsCreateManyAndReturnArgs} args - Arguments to create many Education_majors.
     * @example
     * // Create many Education_majors
     * const education_majors = await prisma.education_majors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Education_majors and only return the `id`
     * const education_majorsWithIdOnly = await prisma.education_majors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends education_majorsCreateManyAndReturnArgs>(args?: SelectSubset<T, education_majorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$education_majorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Education_majors.
     * @param {education_majorsDeleteArgs} args - Arguments to delete one Education_majors.
     * @example
     * // Delete one Education_majors
     * const Education_majors = await prisma.education_majors.delete({
     *   where: {
     *     // ... filter to delete one Education_majors
     *   }
     * })
     * 
     */
    delete<T extends education_majorsDeleteArgs>(args: SelectSubset<T, education_majorsDeleteArgs<ExtArgs>>): Prisma__education_majorsClient<$Result.GetResult<Prisma.$education_majorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education_majors.
     * @param {education_majorsUpdateArgs} args - Arguments to update one Education_majors.
     * @example
     * // Update one Education_majors
     * const education_majors = await prisma.education_majors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends education_majorsUpdateArgs>(args: SelectSubset<T, education_majorsUpdateArgs<ExtArgs>>): Prisma__education_majorsClient<$Result.GetResult<Prisma.$education_majorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Education_majors.
     * @param {education_majorsDeleteManyArgs} args - Arguments to filter Education_majors to delete.
     * @example
     * // Delete a few Education_majors
     * const { count } = await prisma.education_majors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends education_majorsDeleteManyArgs>(args?: SelectSubset<T, education_majorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Education_majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_majorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Education_majors
     * const education_majors = await prisma.education_majors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends education_majorsUpdateManyArgs>(args: SelectSubset<T, education_majorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Education_majors and returns the data updated in the database.
     * @param {education_majorsUpdateManyAndReturnArgs} args - Arguments to update many Education_majors.
     * @example
     * // Update many Education_majors
     * const education_majors = await prisma.education_majors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Education_majors and only return the `id`
     * const education_majorsWithIdOnly = await prisma.education_majors.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends education_majorsUpdateManyAndReturnArgs>(args: SelectSubset<T, education_majorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$education_majorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Education_majors.
     * @param {education_majorsUpsertArgs} args - Arguments to update or create a Education_majors.
     * @example
     * // Update or create a Education_majors
     * const education_majors = await prisma.education_majors.upsert({
     *   create: {
     *     // ... data to create a Education_majors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education_majors we want to update
     *   }
     * })
     */
    upsert<T extends education_majorsUpsertArgs>(args: SelectSubset<T, education_majorsUpsertArgs<ExtArgs>>): Prisma__education_majorsClient<$Result.GetResult<Prisma.$education_majorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Education_majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_majorsCountArgs} args - Arguments to filter Education_majors to count.
     * @example
     * // Count the number of Education_majors
     * const count = await prisma.education_majors.count({
     *   where: {
     *     // ... the filter for the Education_majors we want to count
     *   }
     * })
    **/
    count<T extends education_majorsCountArgs>(
      args?: Subset<T, education_majorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Education_majorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education_majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Education_majorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Education_majorsAggregateArgs>(args: Subset<T, Education_majorsAggregateArgs>): Prisma.PrismaPromise<GetEducation_majorsAggregateType<T>>

    /**
     * Group by Education_majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_majorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends education_majorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: education_majorsGroupByArgs['orderBy'] }
        : { orderBy?: education_majorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, education_majorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducation_majorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the education_majors model
   */
  readonly fields: education_majorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for education_majors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__education_majorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the education_majors model
   */
  interface education_majorsFieldRefs {
    readonly id: FieldRef<"education_majors", 'String'>
    readonly created_at: FieldRef<"education_majors", 'DateTime'>
    readonly name: FieldRef<"education_majors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * education_majors findUnique
   */
  export type education_majorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_majors
     */
    select?: education_majorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_majors
     */
    omit?: education_majorsOmit<ExtArgs> | null
    /**
     * Filter, which education_majors to fetch.
     */
    where: education_majorsWhereUniqueInput
  }

  /**
   * education_majors findUniqueOrThrow
   */
  export type education_majorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_majors
     */
    select?: education_majorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_majors
     */
    omit?: education_majorsOmit<ExtArgs> | null
    /**
     * Filter, which education_majors to fetch.
     */
    where: education_majorsWhereUniqueInput
  }

  /**
   * education_majors findFirst
   */
  export type education_majorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_majors
     */
    select?: education_majorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_majors
     */
    omit?: education_majorsOmit<ExtArgs> | null
    /**
     * Filter, which education_majors to fetch.
     */
    where?: education_majorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of education_majors to fetch.
     */
    orderBy?: education_majorsOrderByWithRelationInput | education_majorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for education_majors.
     */
    cursor?: education_majorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` education_majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` education_majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of education_majors.
     */
    distinct?: Education_majorsScalarFieldEnum | Education_majorsScalarFieldEnum[]
  }

  /**
   * education_majors findFirstOrThrow
   */
  export type education_majorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_majors
     */
    select?: education_majorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_majors
     */
    omit?: education_majorsOmit<ExtArgs> | null
    /**
     * Filter, which education_majors to fetch.
     */
    where?: education_majorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of education_majors to fetch.
     */
    orderBy?: education_majorsOrderByWithRelationInput | education_majorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for education_majors.
     */
    cursor?: education_majorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` education_majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` education_majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of education_majors.
     */
    distinct?: Education_majorsScalarFieldEnum | Education_majorsScalarFieldEnum[]
  }

  /**
   * education_majors findMany
   */
  export type education_majorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_majors
     */
    select?: education_majorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_majors
     */
    omit?: education_majorsOmit<ExtArgs> | null
    /**
     * Filter, which education_majors to fetch.
     */
    where?: education_majorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of education_majors to fetch.
     */
    orderBy?: education_majorsOrderByWithRelationInput | education_majorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing education_majors.
     */
    cursor?: education_majorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` education_majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` education_majors.
     */
    skip?: number
    distinct?: Education_majorsScalarFieldEnum | Education_majorsScalarFieldEnum[]
  }

  /**
   * education_majors create
   */
  export type education_majorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_majors
     */
    select?: education_majorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_majors
     */
    omit?: education_majorsOmit<ExtArgs> | null
    /**
     * The data needed to create a education_majors.
     */
    data: XOR<education_majorsCreateInput, education_majorsUncheckedCreateInput>
  }

  /**
   * education_majors createMany
   */
  export type education_majorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many education_majors.
     */
    data: education_majorsCreateManyInput | education_majorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * education_majors createManyAndReturn
   */
  export type education_majorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_majors
     */
    select?: education_majorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the education_majors
     */
    omit?: education_majorsOmit<ExtArgs> | null
    /**
     * The data used to create many education_majors.
     */
    data: education_majorsCreateManyInput | education_majorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * education_majors update
   */
  export type education_majorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_majors
     */
    select?: education_majorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_majors
     */
    omit?: education_majorsOmit<ExtArgs> | null
    /**
     * The data needed to update a education_majors.
     */
    data: XOR<education_majorsUpdateInput, education_majorsUncheckedUpdateInput>
    /**
     * Choose, which education_majors to update.
     */
    where: education_majorsWhereUniqueInput
  }

  /**
   * education_majors updateMany
   */
  export type education_majorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update education_majors.
     */
    data: XOR<education_majorsUpdateManyMutationInput, education_majorsUncheckedUpdateManyInput>
    /**
     * Filter which education_majors to update
     */
    where?: education_majorsWhereInput
    /**
     * Limit how many education_majors to update.
     */
    limit?: number
  }

  /**
   * education_majors updateManyAndReturn
   */
  export type education_majorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_majors
     */
    select?: education_majorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the education_majors
     */
    omit?: education_majorsOmit<ExtArgs> | null
    /**
     * The data used to update education_majors.
     */
    data: XOR<education_majorsUpdateManyMutationInput, education_majorsUncheckedUpdateManyInput>
    /**
     * Filter which education_majors to update
     */
    where?: education_majorsWhereInput
    /**
     * Limit how many education_majors to update.
     */
    limit?: number
  }

  /**
   * education_majors upsert
   */
  export type education_majorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_majors
     */
    select?: education_majorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_majors
     */
    omit?: education_majorsOmit<ExtArgs> | null
    /**
     * The filter to search for the education_majors to update in case it exists.
     */
    where: education_majorsWhereUniqueInput
    /**
     * In case the education_majors found by the `where` argument doesn't exist, create a new education_majors with this data.
     */
    create: XOR<education_majorsCreateInput, education_majorsUncheckedCreateInput>
    /**
     * In case the education_majors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<education_majorsUpdateInput, education_majorsUncheckedUpdateInput>
  }

  /**
   * education_majors delete
   */
  export type education_majorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_majors
     */
    select?: education_majorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_majors
     */
    omit?: education_majorsOmit<ExtArgs> | null
    /**
     * Filter which education_majors to delete.
     */
    where: education_majorsWhereUniqueInput
  }

  /**
   * education_majors deleteMany
   */
  export type education_majorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which education_majors to delete
     */
    where?: education_majorsWhereInput
    /**
     * Limit how many education_majors to delete.
     */
    limit?: number
  }

  /**
   * education_majors without action
   */
  export type education_majorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_majors
     */
    select?: education_majorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_majors
     */
    omit?: education_majorsOmit<ExtArgs> | null
  }


  /**
   * Model education_minors
   */

  export type AggregateEducation_minors = {
    _count: Education_minorsCountAggregateOutputType | null
    _min: Education_minorsMinAggregateOutputType | null
    _max: Education_minorsMaxAggregateOutputType | null
  }

  export type Education_minorsMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    name: string | null
  }

  export type Education_minorsMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    name: string | null
  }

  export type Education_minorsCountAggregateOutputType = {
    id: number
    created_at: number
    name: number
    _all: number
  }


  export type Education_minorsMinAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
  }

  export type Education_minorsMaxAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
  }

  export type Education_minorsCountAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    _all?: true
  }

  export type Education_minorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which education_minors to aggregate.
     */
    where?: education_minorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of education_minors to fetch.
     */
    orderBy?: education_minorsOrderByWithRelationInput | education_minorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: education_minorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` education_minors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` education_minors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned education_minors
    **/
    _count?: true | Education_minorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Education_minorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Education_minorsMaxAggregateInputType
  }

  export type GetEducation_minorsAggregateType<T extends Education_minorsAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation_minors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation_minors[P]>
      : GetScalarType<T[P], AggregateEducation_minors[P]>
  }




  export type education_minorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: education_minorsWhereInput
    orderBy?: education_minorsOrderByWithAggregationInput | education_minorsOrderByWithAggregationInput[]
    by: Education_minorsScalarFieldEnum[] | Education_minorsScalarFieldEnum
    having?: education_minorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Education_minorsCountAggregateInputType | true
    _min?: Education_minorsMinAggregateInputType
    _max?: Education_minorsMaxAggregateInputType
  }

  export type Education_minorsGroupByOutputType = {
    id: string
    created_at: Date
    name: string
    _count: Education_minorsCountAggregateOutputType | null
    _min: Education_minorsMinAggregateOutputType | null
    _max: Education_minorsMaxAggregateOutputType | null
  }

  type GetEducation_minorsGroupByPayload<T extends education_minorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Education_minorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Education_minorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Education_minorsGroupByOutputType[P]>
            : GetScalarType<T[P], Education_minorsGroupByOutputType[P]>
        }
      >
    >


  export type education_minorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
  }, ExtArgs["result"]["education_minors"]>

  export type education_minorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
  }, ExtArgs["result"]["education_minors"]>

  export type education_minorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
  }, ExtArgs["result"]["education_minors"]>

  export type education_minorsSelectScalar = {
    id?: boolean
    created_at?: boolean
    name?: boolean
  }

  export type education_minorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "name", ExtArgs["result"]["education_minors"]>

  export type $education_minorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "education_minors"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      name: string
    }, ExtArgs["result"]["education_minors"]>
    composites: {}
  }

  type education_minorsGetPayload<S extends boolean | null | undefined | education_minorsDefaultArgs> = $Result.GetResult<Prisma.$education_minorsPayload, S>

  type education_minorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<education_minorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Education_minorsCountAggregateInputType | true
    }

  export interface education_minorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['education_minors'], meta: { name: 'education_minors' } }
    /**
     * Find zero or one Education_minors that matches the filter.
     * @param {education_minorsFindUniqueArgs} args - Arguments to find a Education_minors
     * @example
     * // Get one Education_minors
     * const education_minors = await prisma.education_minors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends education_minorsFindUniqueArgs>(args: SelectSubset<T, education_minorsFindUniqueArgs<ExtArgs>>): Prisma__education_minorsClient<$Result.GetResult<Prisma.$education_minorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education_minors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {education_minorsFindUniqueOrThrowArgs} args - Arguments to find a Education_minors
     * @example
     * // Get one Education_minors
     * const education_minors = await prisma.education_minors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends education_minorsFindUniqueOrThrowArgs>(args: SelectSubset<T, education_minorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__education_minorsClient<$Result.GetResult<Prisma.$education_minorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education_minors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_minorsFindFirstArgs} args - Arguments to find a Education_minors
     * @example
     * // Get one Education_minors
     * const education_minors = await prisma.education_minors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends education_minorsFindFirstArgs>(args?: SelectSubset<T, education_minorsFindFirstArgs<ExtArgs>>): Prisma__education_minorsClient<$Result.GetResult<Prisma.$education_minorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education_minors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_minorsFindFirstOrThrowArgs} args - Arguments to find a Education_minors
     * @example
     * // Get one Education_minors
     * const education_minors = await prisma.education_minors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends education_minorsFindFirstOrThrowArgs>(args?: SelectSubset<T, education_minorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__education_minorsClient<$Result.GetResult<Prisma.$education_minorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Education_minors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_minorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Education_minors
     * const education_minors = await prisma.education_minors.findMany()
     * 
     * // Get first 10 Education_minors
     * const education_minors = await prisma.education_minors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const education_minorsWithIdOnly = await prisma.education_minors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends education_minorsFindManyArgs>(args?: SelectSubset<T, education_minorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$education_minorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education_minors.
     * @param {education_minorsCreateArgs} args - Arguments to create a Education_minors.
     * @example
     * // Create one Education_minors
     * const Education_minors = await prisma.education_minors.create({
     *   data: {
     *     // ... data to create a Education_minors
     *   }
     * })
     * 
     */
    create<T extends education_minorsCreateArgs>(args: SelectSubset<T, education_minorsCreateArgs<ExtArgs>>): Prisma__education_minorsClient<$Result.GetResult<Prisma.$education_minorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Education_minors.
     * @param {education_minorsCreateManyArgs} args - Arguments to create many Education_minors.
     * @example
     * // Create many Education_minors
     * const education_minors = await prisma.education_minors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends education_minorsCreateManyArgs>(args?: SelectSubset<T, education_minorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Education_minors and returns the data saved in the database.
     * @param {education_minorsCreateManyAndReturnArgs} args - Arguments to create many Education_minors.
     * @example
     * // Create many Education_minors
     * const education_minors = await prisma.education_minors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Education_minors and only return the `id`
     * const education_minorsWithIdOnly = await prisma.education_minors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends education_minorsCreateManyAndReturnArgs>(args?: SelectSubset<T, education_minorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$education_minorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Education_minors.
     * @param {education_minorsDeleteArgs} args - Arguments to delete one Education_minors.
     * @example
     * // Delete one Education_minors
     * const Education_minors = await prisma.education_minors.delete({
     *   where: {
     *     // ... filter to delete one Education_minors
     *   }
     * })
     * 
     */
    delete<T extends education_minorsDeleteArgs>(args: SelectSubset<T, education_minorsDeleteArgs<ExtArgs>>): Prisma__education_minorsClient<$Result.GetResult<Prisma.$education_minorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education_minors.
     * @param {education_minorsUpdateArgs} args - Arguments to update one Education_minors.
     * @example
     * // Update one Education_minors
     * const education_minors = await prisma.education_minors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends education_minorsUpdateArgs>(args: SelectSubset<T, education_minorsUpdateArgs<ExtArgs>>): Prisma__education_minorsClient<$Result.GetResult<Prisma.$education_minorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Education_minors.
     * @param {education_minorsDeleteManyArgs} args - Arguments to filter Education_minors to delete.
     * @example
     * // Delete a few Education_minors
     * const { count } = await prisma.education_minors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends education_minorsDeleteManyArgs>(args?: SelectSubset<T, education_minorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Education_minors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_minorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Education_minors
     * const education_minors = await prisma.education_minors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends education_minorsUpdateManyArgs>(args: SelectSubset<T, education_minorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Education_minors and returns the data updated in the database.
     * @param {education_minorsUpdateManyAndReturnArgs} args - Arguments to update many Education_minors.
     * @example
     * // Update many Education_minors
     * const education_minors = await prisma.education_minors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Education_minors and only return the `id`
     * const education_minorsWithIdOnly = await prisma.education_minors.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends education_minorsUpdateManyAndReturnArgs>(args: SelectSubset<T, education_minorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$education_minorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Education_minors.
     * @param {education_minorsUpsertArgs} args - Arguments to update or create a Education_minors.
     * @example
     * // Update or create a Education_minors
     * const education_minors = await prisma.education_minors.upsert({
     *   create: {
     *     // ... data to create a Education_minors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education_minors we want to update
     *   }
     * })
     */
    upsert<T extends education_minorsUpsertArgs>(args: SelectSubset<T, education_minorsUpsertArgs<ExtArgs>>): Prisma__education_minorsClient<$Result.GetResult<Prisma.$education_minorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Education_minors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_minorsCountArgs} args - Arguments to filter Education_minors to count.
     * @example
     * // Count the number of Education_minors
     * const count = await prisma.education_minors.count({
     *   where: {
     *     // ... the filter for the Education_minors we want to count
     *   }
     * })
    **/
    count<T extends education_minorsCountArgs>(
      args?: Subset<T, education_minorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Education_minorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education_minors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Education_minorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Education_minorsAggregateArgs>(args: Subset<T, Education_minorsAggregateArgs>): Prisma.PrismaPromise<GetEducation_minorsAggregateType<T>>

    /**
     * Group by Education_minors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_minorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends education_minorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: education_minorsGroupByArgs['orderBy'] }
        : { orderBy?: education_minorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, education_minorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducation_minorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the education_minors model
   */
  readonly fields: education_minorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for education_minors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__education_minorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the education_minors model
   */
  interface education_minorsFieldRefs {
    readonly id: FieldRef<"education_minors", 'String'>
    readonly created_at: FieldRef<"education_minors", 'DateTime'>
    readonly name: FieldRef<"education_minors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * education_minors findUnique
   */
  export type education_minorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_minors
     */
    select?: education_minorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_minors
     */
    omit?: education_minorsOmit<ExtArgs> | null
    /**
     * Filter, which education_minors to fetch.
     */
    where: education_minorsWhereUniqueInput
  }

  /**
   * education_minors findUniqueOrThrow
   */
  export type education_minorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_minors
     */
    select?: education_minorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_minors
     */
    omit?: education_minorsOmit<ExtArgs> | null
    /**
     * Filter, which education_minors to fetch.
     */
    where: education_minorsWhereUniqueInput
  }

  /**
   * education_minors findFirst
   */
  export type education_minorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_minors
     */
    select?: education_minorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_minors
     */
    omit?: education_minorsOmit<ExtArgs> | null
    /**
     * Filter, which education_minors to fetch.
     */
    where?: education_minorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of education_minors to fetch.
     */
    orderBy?: education_minorsOrderByWithRelationInput | education_minorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for education_minors.
     */
    cursor?: education_minorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` education_minors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` education_minors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of education_minors.
     */
    distinct?: Education_minorsScalarFieldEnum | Education_minorsScalarFieldEnum[]
  }

  /**
   * education_minors findFirstOrThrow
   */
  export type education_minorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_minors
     */
    select?: education_minorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_minors
     */
    omit?: education_minorsOmit<ExtArgs> | null
    /**
     * Filter, which education_minors to fetch.
     */
    where?: education_minorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of education_minors to fetch.
     */
    orderBy?: education_minorsOrderByWithRelationInput | education_minorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for education_minors.
     */
    cursor?: education_minorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` education_minors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` education_minors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of education_minors.
     */
    distinct?: Education_minorsScalarFieldEnum | Education_minorsScalarFieldEnum[]
  }

  /**
   * education_minors findMany
   */
  export type education_minorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_minors
     */
    select?: education_minorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_minors
     */
    omit?: education_minorsOmit<ExtArgs> | null
    /**
     * Filter, which education_minors to fetch.
     */
    where?: education_minorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of education_minors to fetch.
     */
    orderBy?: education_minorsOrderByWithRelationInput | education_minorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing education_minors.
     */
    cursor?: education_minorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` education_minors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` education_minors.
     */
    skip?: number
    distinct?: Education_minorsScalarFieldEnum | Education_minorsScalarFieldEnum[]
  }

  /**
   * education_minors create
   */
  export type education_minorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_minors
     */
    select?: education_minorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_minors
     */
    omit?: education_minorsOmit<ExtArgs> | null
    /**
     * The data needed to create a education_minors.
     */
    data: XOR<education_minorsCreateInput, education_minorsUncheckedCreateInput>
  }

  /**
   * education_minors createMany
   */
  export type education_minorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many education_minors.
     */
    data: education_minorsCreateManyInput | education_minorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * education_minors createManyAndReturn
   */
  export type education_minorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_minors
     */
    select?: education_minorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the education_minors
     */
    omit?: education_minorsOmit<ExtArgs> | null
    /**
     * The data used to create many education_minors.
     */
    data: education_minorsCreateManyInput | education_minorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * education_minors update
   */
  export type education_minorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_minors
     */
    select?: education_minorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_minors
     */
    omit?: education_minorsOmit<ExtArgs> | null
    /**
     * The data needed to update a education_minors.
     */
    data: XOR<education_minorsUpdateInput, education_minorsUncheckedUpdateInput>
    /**
     * Choose, which education_minors to update.
     */
    where: education_minorsWhereUniqueInput
  }

  /**
   * education_minors updateMany
   */
  export type education_minorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update education_minors.
     */
    data: XOR<education_minorsUpdateManyMutationInput, education_minorsUncheckedUpdateManyInput>
    /**
     * Filter which education_minors to update
     */
    where?: education_minorsWhereInput
    /**
     * Limit how many education_minors to update.
     */
    limit?: number
  }

  /**
   * education_minors updateManyAndReturn
   */
  export type education_minorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_minors
     */
    select?: education_minorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the education_minors
     */
    omit?: education_minorsOmit<ExtArgs> | null
    /**
     * The data used to update education_minors.
     */
    data: XOR<education_minorsUpdateManyMutationInput, education_minorsUncheckedUpdateManyInput>
    /**
     * Filter which education_minors to update
     */
    where?: education_minorsWhereInput
    /**
     * Limit how many education_minors to update.
     */
    limit?: number
  }

  /**
   * education_minors upsert
   */
  export type education_minorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_minors
     */
    select?: education_minorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_minors
     */
    omit?: education_minorsOmit<ExtArgs> | null
    /**
     * The filter to search for the education_minors to update in case it exists.
     */
    where: education_minorsWhereUniqueInput
    /**
     * In case the education_minors found by the `where` argument doesn't exist, create a new education_minors with this data.
     */
    create: XOR<education_minorsCreateInput, education_minorsUncheckedCreateInput>
    /**
     * In case the education_minors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<education_minorsUpdateInput, education_minorsUncheckedUpdateInput>
  }

  /**
   * education_minors delete
   */
  export type education_minorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_minors
     */
    select?: education_minorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_minors
     */
    omit?: education_minorsOmit<ExtArgs> | null
    /**
     * Filter which education_minors to delete.
     */
    where: education_minorsWhereUniqueInput
  }

  /**
   * education_minors deleteMany
   */
  export type education_minorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which education_minors to delete
     */
    where?: education_minorsWhereInput
    /**
     * Limit how many education_minors to delete.
     */
    limit?: number
  }

  /**
   * education_minors without action
   */
  export type education_minorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_minors
     */
    select?: education_minorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the education_minors
     */
    omit?: education_minorsOmit<ExtArgs> | null
  }


  /**
   * Model school_locations
   */

  export type AggregateSchool_locations = {
    _count: School_locationsCountAggregateOutputType | null
    _min: School_locationsMinAggregateOutputType | null
    _max: School_locationsMaxAggregateOutputType | null
  }

  export type School_locationsMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    city: string | null
    state: string | null
    school_id: string | null
  }

  export type School_locationsMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    city: string | null
    state: string | null
    school_id: string | null
  }

  export type School_locationsCountAggregateOutputType = {
    id: number
    created_at: number
    city: number
    state: number
    school_id: number
    _all: number
  }


  export type School_locationsMinAggregateInputType = {
    id?: true
    created_at?: true
    city?: true
    state?: true
    school_id?: true
  }

  export type School_locationsMaxAggregateInputType = {
    id?: true
    created_at?: true
    city?: true
    state?: true
    school_id?: true
  }

  export type School_locationsCountAggregateInputType = {
    id?: true
    created_at?: true
    city?: true
    state?: true
    school_id?: true
    _all?: true
  }

  export type School_locationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which school_locations to aggregate.
     */
    where?: school_locationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of school_locations to fetch.
     */
    orderBy?: school_locationsOrderByWithRelationInput | school_locationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: school_locationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` school_locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` school_locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned school_locations
    **/
    _count?: true | School_locationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: School_locationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: School_locationsMaxAggregateInputType
  }

  export type GetSchool_locationsAggregateType<T extends School_locationsAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool_locations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool_locations[P]>
      : GetScalarType<T[P], AggregateSchool_locations[P]>
  }




  export type school_locationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: school_locationsWhereInput
    orderBy?: school_locationsOrderByWithAggregationInput | school_locationsOrderByWithAggregationInput[]
    by: School_locationsScalarFieldEnum[] | School_locationsScalarFieldEnum
    having?: school_locationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: School_locationsCountAggregateInputType | true
    _min?: School_locationsMinAggregateInputType
    _max?: School_locationsMaxAggregateInputType
  }

  export type School_locationsGroupByOutputType = {
    id: string
    created_at: Date
    city: string
    state: string
    school_id: string
    _count: School_locationsCountAggregateOutputType | null
    _min: School_locationsMinAggregateOutputType | null
    _max: School_locationsMaxAggregateOutputType | null
  }

  type GetSchool_locationsGroupByPayload<T extends school_locationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<School_locationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof School_locationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], School_locationsGroupByOutputType[P]>
            : GetScalarType<T[P], School_locationsGroupByOutputType[P]>
        }
      >
    >


  export type school_locationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    city?: boolean
    state?: boolean
    school_id?: boolean
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school_locations"]>

  export type school_locationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    city?: boolean
    state?: boolean
    school_id?: boolean
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school_locations"]>

  export type school_locationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    city?: boolean
    state?: boolean
    school_id?: boolean
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school_locations"]>

  export type school_locationsSelectScalar = {
    id?: boolean
    created_at?: boolean
    city?: boolean
    state?: boolean
    school_id?: boolean
  }

  export type school_locationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "city" | "state" | "school_id", ExtArgs["result"]["school_locations"]>
  export type school_locationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
  }
  export type school_locationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
  }
  export type school_locationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schools?: boolean | schoolsDefaultArgs<ExtArgs>
  }

  export type $school_locationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "school_locations"
    objects: {
      schools: Prisma.$schoolsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      city: string
      state: string
      school_id: string
    }, ExtArgs["result"]["school_locations"]>
    composites: {}
  }

  type school_locationsGetPayload<S extends boolean | null | undefined | school_locationsDefaultArgs> = $Result.GetResult<Prisma.$school_locationsPayload, S>

  type school_locationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<school_locationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: School_locationsCountAggregateInputType | true
    }

  export interface school_locationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['school_locations'], meta: { name: 'school_locations' } }
    /**
     * Find zero or one School_locations that matches the filter.
     * @param {school_locationsFindUniqueArgs} args - Arguments to find a School_locations
     * @example
     * // Get one School_locations
     * const school_locations = await prisma.school_locations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends school_locationsFindUniqueArgs>(args: SelectSubset<T, school_locationsFindUniqueArgs<ExtArgs>>): Prisma__school_locationsClient<$Result.GetResult<Prisma.$school_locationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School_locations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {school_locationsFindUniqueOrThrowArgs} args - Arguments to find a School_locations
     * @example
     * // Get one School_locations
     * const school_locations = await prisma.school_locations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends school_locationsFindUniqueOrThrowArgs>(args: SelectSubset<T, school_locationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__school_locationsClient<$Result.GetResult<Prisma.$school_locationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School_locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {school_locationsFindFirstArgs} args - Arguments to find a School_locations
     * @example
     * // Get one School_locations
     * const school_locations = await prisma.school_locations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends school_locationsFindFirstArgs>(args?: SelectSubset<T, school_locationsFindFirstArgs<ExtArgs>>): Prisma__school_locationsClient<$Result.GetResult<Prisma.$school_locationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School_locations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {school_locationsFindFirstOrThrowArgs} args - Arguments to find a School_locations
     * @example
     * // Get one School_locations
     * const school_locations = await prisma.school_locations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends school_locationsFindFirstOrThrowArgs>(args?: SelectSubset<T, school_locationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__school_locationsClient<$Result.GetResult<Prisma.$school_locationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more School_locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {school_locationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all School_locations
     * const school_locations = await prisma.school_locations.findMany()
     * 
     * // Get first 10 School_locations
     * const school_locations = await prisma.school_locations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const school_locationsWithIdOnly = await prisma.school_locations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends school_locationsFindManyArgs>(args?: SelectSubset<T, school_locationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$school_locationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School_locations.
     * @param {school_locationsCreateArgs} args - Arguments to create a School_locations.
     * @example
     * // Create one School_locations
     * const School_locations = await prisma.school_locations.create({
     *   data: {
     *     // ... data to create a School_locations
     *   }
     * })
     * 
     */
    create<T extends school_locationsCreateArgs>(args: SelectSubset<T, school_locationsCreateArgs<ExtArgs>>): Prisma__school_locationsClient<$Result.GetResult<Prisma.$school_locationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many School_locations.
     * @param {school_locationsCreateManyArgs} args - Arguments to create many School_locations.
     * @example
     * // Create many School_locations
     * const school_locations = await prisma.school_locations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends school_locationsCreateManyArgs>(args?: SelectSubset<T, school_locationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many School_locations and returns the data saved in the database.
     * @param {school_locationsCreateManyAndReturnArgs} args - Arguments to create many School_locations.
     * @example
     * // Create many School_locations
     * const school_locations = await prisma.school_locations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many School_locations and only return the `id`
     * const school_locationsWithIdOnly = await prisma.school_locations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends school_locationsCreateManyAndReturnArgs>(args?: SelectSubset<T, school_locationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$school_locationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School_locations.
     * @param {school_locationsDeleteArgs} args - Arguments to delete one School_locations.
     * @example
     * // Delete one School_locations
     * const School_locations = await prisma.school_locations.delete({
     *   where: {
     *     // ... filter to delete one School_locations
     *   }
     * })
     * 
     */
    delete<T extends school_locationsDeleteArgs>(args: SelectSubset<T, school_locationsDeleteArgs<ExtArgs>>): Prisma__school_locationsClient<$Result.GetResult<Prisma.$school_locationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School_locations.
     * @param {school_locationsUpdateArgs} args - Arguments to update one School_locations.
     * @example
     * // Update one School_locations
     * const school_locations = await prisma.school_locations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends school_locationsUpdateArgs>(args: SelectSubset<T, school_locationsUpdateArgs<ExtArgs>>): Prisma__school_locationsClient<$Result.GetResult<Prisma.$school_locationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more School_locations.
     * @param {school_locationsDeleteManyArgs} args - Arguments to filter School_locations to delete.
     * @example
     * // Delete a few School_locations
     * const { count } = await prisma.school_locations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends school_locationsDeleteManyArgs>(args?: SelectSubset<T, school_locationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more School_locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {school_locationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many School_locations
     * const school_locations = await prisma.school_locations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends school_locationsUpdateManyArgs>(args: SelectSubset<T, school_locationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more School_locations and returns the data updated in the database.
     * @param {school_locationsUpdateManyAndReturnArgs} args - Arguments to update many School_locations.
     * @example
     * // Update many School_locations
     * const school_locations = await prisma.school_locations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more School_locations and only return the `id`
     * const school_locationsWithIdOnly = await prisma.school_locations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends school_locationsUpdateManyAndReturnArgs>(args: SelectSubset<T, school_locationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$school_locationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School_locations.
     * @param {school_locationsUpsertArgs} args - Arguments to update or create a School_locations.
     * @example
     * // Update or create a School_locations
     * const school_locations = await prisma.school_locations.upsert({
     *   create: {
     *     // ... data to create a School_locations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School_locations we want to update
     *   }
     * })
     */
    upsert<T extends school_locationsUpsertArgs>(args: SelectSubset<T, school_locationsUpsertArgs<ExtArgs>>): Prisma__school_locationsClient<$Result.GetResult<Prisma.$school_locationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of School_locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {school_locationsCountArgs} args - Arguments to filter School_locations to count.
     * @example
     * // Count the number of School_locations
     * const count = await prisma.school_locations.count({
     *   where: {
     *     // ... the filter for the School_locations we want to count
     *   }
     * })
    **/
    count<T extends school_locationsCountArgs>(
      args?: Subset<T, school_locationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], School_locationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School_locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {School_locationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends School_locationsAggregateArgs>(args: Subset<T, School_locationsAggregateArgs>): Prisma.PrismaPromise<GetSchool_locationsAggregateType<T>>

    /**
     * Group by School_locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {school_locationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends school_locationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: school_locationsGroupByArgs['orderBy'] }
        : { orderBy?: school_locationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, school_locationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchool_locationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the school_locations model
   */
  readonly fields: school_locationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for school_locations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__school_locationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schools<T extends schoolsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, schoolsDefaultArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the school_locations model
   */
  interface school_locationsFieldRefs {
    readonly id: FieldRef<"school_locations", 'String'>
    readonly created_at: FieldRef<"school_locations", 'DateTime'>
    readonly city: FieldRef<"school_locations", 'String'>
    readonly state: FieldRef<"school_locations", 'String'>
    readonly school_id: FieldRef<"school_locations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * school_locations findUnique
   */
  export type school_locationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school_locations
     */
    select?: school_locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the school_locations
     */
    omit?: school_locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: school_locationsInclude<ExtArgs> | null
    /**
     * Filter, which school_locations to fetch.
     */
    where: school_locationsWhereUniqueInput
  }

  /**
   * school_locations findUniqueOrThrow
   */
  export type school_locationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school_locations
     */
    select?: school_locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the school_locations
     */
    omit?: school_locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: school_locationsInclude<ExtArgs> | null
    /**
     * Filter, which school_locations to fetch.
     */
    where: school_locationsWhereUniqueInput
  }

  /**
   * school_locations findFirst
   */
  export type school_locationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school_locations
     */
    select?: school_locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the school_locations
     */
    omit?: school_locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: school_locationsInclude<ExtArgs> | null
    /**
     * Filter, which school_locations to fetch.
     */
    where?: school_locationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of school_locations to fetch.
     */
    orderBy?: school_locationsOrderByWithRelationInput | school_locationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for school_locations.
     */
    cursor?: school_locationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` school_locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` school_locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of school_locations.
     */
    distinct?: School_locationsScalarFieldEnum | School_locationsScalarFieldEnum[]
  }

  /**
   * school_locations findFirstOrThrow
   */
  export type school_locationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school_locations
     */
    select?: school_locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the school_locations
     */
    omit?: school_locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: school_locationsInclude<ExtArgs> | null
    /**
     * Filter, which school_locations to fetch.
     */
    where?: school_locationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of school_locations to fetch.
     */
    orderBy?: school_locationsOrderByWithRelationInput | school_locationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for school_locations.
     */
    cursor?: school_locationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` school_locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` school_locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of school_locations.
     */
    distinct?: School_locationsScalarFieldEnum | School_locationsScalarFieldEnum[]
  }

  /**
   * school_locations findMany
   */
  export type school_locationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school_locations
     */
    select?: school_locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the school_locations
     */
    omit?: school_locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: school_locationsInclude<ExtArgs> | null
    /**
     * Filter, which school_locations to fetch.
     */
    where?: school_locationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of school_locations to fetch.
     */
    orderBy?: school_locationsOrderByWithRelationInput | school_locationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing school_locations.
     */
    cursor?: school_locationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` school_locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` school_locations.
     */
    skip?: number
    distinct?: School_locationsScalarFieldEnum | School_locationsScalarFieldEnum[]
  }

  /**
   * school_locations create
   */
  export type school_locationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school_locations
     */
    select?: school_locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the school_locations
     */
    omit?: school_locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: school_locationsInclude<ExtArgs> | null
    /**
     * The data needed to create a school_locations.
     */
    data: XOR<school_locationsCreateInput, school_locationsUncheckedCreateInput>
  }

  /**
   * school_locations createMany
   */
  export type school_locationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many school_locations.
     */
    data: school_locationsCreateManyInput | school_locationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * school_locations createManyAndReturn
   */
  export type school_locationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school_locations
     */
    select?: school_locationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the school_locations
     */
    omit?: school_locationsOmit<ExtArgs> | null
    /**
     * The data used to create many school_locations.
     */
    data: school_locationsCreateManyInput | school_locationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: school_locationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * school_locations update
   */
  export type school_locationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school_locations
     */
    select?: school_locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the school_locations
     */
    omit?: school_locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: school_locationsInclude<ExtArgs> | null
    /**
     * The data needed to update a school_locations.
     */
    data: XOR<school_locationsUpdateInput, school_locationsUncheckedUpdateInput>
    /**
     * Choose, which school_locations to update.
     */
    where: school_locationsWhereUniqueInput
  }

  /**
   * school_locations updateMany
   */
  export type school_locationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update school_locations.
     */
    data: XOR<school_locationsUpdateManyMutationInput, school_locationsUncheckedUpdateManyInput>
    /**
     * Filter which school_locations to update
     */
    where?: school_locationsWhereInput
    /**
     * Limit how many school_locations to update.
     */
    limit?: number
  }

  /**
   * school_locations updateManyAndReturn
   */
  export type school_locationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school_locations
     */
    select?: school_locationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the school_locations
     */
    omit?: school_locationsOmit<ExtArgs> | null
    /**
     * The data used to update school_locations.
     */
    data: XOR<school_locationsUpdateManyMutationInput, school_locationsUncheckedUpdateManyInput>
    /**
     * Filter which school_locations to update
     */
    where?: school_locationsWhereInput
    /**
     * Limit how many school_locations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: school_locationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * school_locations upsert
   */
  export type school_locationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school_locations
     */
    select?: school_locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the school_locations
     */
    omit?: school_locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: school_locationsInclude<ExtArgs> | null
    /**
     * The filter to search for the school_locations to update in case it exists.
     */
    where: school_locationsWhereUniqueInput
    /**
     * In case the school_locations found by the `where` argument doesn't exist, create a new school_locations with this data.
     */
    create: XOR<school_locationsCreateInput, school_locationsUncheckedCreateInput>
    /**
     * In case the school_locations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<school_locationsUpdateInput, school_locationsUncheckedUpdateInput>
  }

  /**
   * school_locations delete
   */
  export type school_locationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school_locations
     */
    select?: school_locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the school_locations
     */
    omit?: school_locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: school_locationsInclude<ExtArgs> | null
    /**
     * Filter which school_locations to delete.
     */
    where: school_locationsWhereUniqueInput
  }

  /**
   * school_locations deleteMany
   */
  export type school_locationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which school_locations to delete
     */
    where?: school_locationsWhereInput
    /**
     * Limit how many school_locations to delete.
     */
    limit?: number
  }

  /**
   * school_locations without action
   */
  export type school_locationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school_locations
     */
    select?: school_locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the school_locations
     */
    omit?: school_locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: school_locationsInclude<ExtArgs> | null
  }


  /**
   * Model schools
   */

  export type AggregateSchools = {
    _count: SchoolsCountAggregateOutputType | null
    _min: SchoolsMinAggregateOutputType | null
    _max: SchoolsMaxAggregateOutputType | null
  }

  export type SchoolsMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    name: string | null
  }

  export type SchoolsMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    name: string | null
  }

  export type SchoolsCountAggregateOutputType = {
    id: number
    created_at: number
    name: number
    _all: number
  }


  export type SchoolsMinAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
  }

  export type SchoolsMaxAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
  }

  export type SchoolsCountAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    _all?: true
  }

  export type SchoolsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schools to aggregate.
     */
    where?: schoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolsOrderByWithRelationInput | schoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: schoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned schools
    **/
    _count?: true | SchoolsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolsMaxAggregateInputType
  }

  export type GetSchoolsAggregateType<T extends SchoolsAggregateArgs> = {
        [P in keyof T & keyof AggregateSchools]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchools[P]>
      : GetScalarType<T[P], AggregateSchools[P]>
  }




  export type schoolsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schoolsWhereInput
    orderBy?: schoolsOrderByWithAggregationInput | schoolsOrderByWithAggregationInput[]
    by: SchoolsScalarFieldEnum[] | SchoolsScalarFieldEnum
    having?: schoolsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolsCountAggregateInputType | true
    _min?: SchoolsMinAggregateInputType
    _max?: SchoolsMaxAggregateInputType
  }

  export type SchoolsGroupByOutputType = {
    id: string
    created_at: Date
    name: string
    _count: SchoolsCountAggregateOutputType | null
    _min: SchoolsMinAggregateOutputType | null
    _max: SchoolsMaxAggregateOutputType | null
  }

  type GetSchoolsGroupByPayload<T extends schoolsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolsGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolsGroupByOutputType[P]>
        }
      >
    >


  export type schoolsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    candidate_educations?: boolean | schools$candidate_educationsArgs<ExtArgs>
    school_locations?: boolean | schools$school_locationsArgs<ExtArgs>
    _count?: boolean | SchoolsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schools"]>

  export type schoolsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
  }, ExtArgs["result"]["schools"]>

  export type schoolsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
  }, ExtArgs["result"]["schools"]>

  export type schoolsSelectScalar = {
    id?: boolean
    created_at?: boolean
    name?: boolean
  }

  export type schoolsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "name", ExtArgs["result"]["schools"]>
  export type schoolsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate_educations?: boolean | schools$candidate_educationsArgs<ExtArgs>
    school_locations?: boolean | schools$school_locationsArgs<ExtArgs>
    _count?: boolean | SchoolsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type schoolsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type schoolsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $schoolsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "schools"
    objects: {
      candidate_educations: Prisma.$candidate_educationsPayload<ExtArgs>[]
      school_locations: Prisma.$school_locationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      name: string
    }, ExtArgs["result"]["schools"]>
    composites: {}
  }

  type schoolsGetPayload<S extends boolean | null | undefined | schoolsDefaultArgs> = $Result.GetResult<Prisma.$schoolsPayload, S>

  type schoolsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<schoolsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolsCountAggregateInputType | true
    }

  export interface schoolsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schools'], meta: { name: 'schools' } }
    /**
     * Find zero or one Schools that matches the filter.
     * @param {schoolsFindUniqueArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends schoolsFindUniqueArgs>(args: SelectSubset<T, schoolsFindUniqueArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schools that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {schoolsFindUniqueOrThrowArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends schoolsFindUniqueOrThrowArgs>(args: SelectSubset<T, schoolsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsFindFirstArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends schoolsFindFirstArgs>(args?: SelectSubset<T, schoolsFindFirstArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schools that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsFindFirstOrThrowArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends schoolsFindFirstOrThrowArgs>(args?: SelectSubset<T, schoolsFindFirstOrThrowArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.schools.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.schools.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolsWithIdOnly = await prisma.schools.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends schoolsFindManyArgs>(args?: SelectSubset<T, schoolsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schools.
     * @param {schoolsCreateArgs} args - Arguments to create a Schools.
     * @example
     * // Create one Schools
     * const Schools = await prisma.schools.create({
     *   data: {
     *     // ... data to create a Schools
     *   }
     * })
     * 
     */
    create<T extends schoolsCreateArgs>(args: SelectSubset<T, schoolsCreateArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {schoolsCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const schools = await prisma.schools.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends schoolsCreateManyArgs>(args?: SelectSubset<T, schoolsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {schoolsCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const schools = await prisma.schools.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolsWithIdOnly = await prisma.schools.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends schoolsCreateManyAndReturnArgs>(args?: SelectSubset<T, schoolsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schools.
     * @param {schoolsDeleteArgs} args - Arguments to delete one Schools.
     * @example
     * // Delete one Schools
     * const Schools = await prisma.schools.delete({
     *   where: {
     *     // ... filter to delete one Schools
     *   }
     * })
     * 
     */
    delete<T extends schoolsDeleteArgs>(args: SelectSubset<T, schoolsDeleteArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schools.
     * @param {schoolsUpdateArgs} args - Arguments to update one Schools.
     * @example
     * // Update one Schools
     * const schools = await prisma.schools.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends schoolsUpdateArgs>(args: SelectSubset<T, schoolsUpdateArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {schoolsDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.schools.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends schoolsDeleteManyArgs>(args?: SelectSubset<T, schoolsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const schools = await prisma.schools.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends schoolsUpdateManyArgs>(args: SelectSubset<T, schoolsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {schoolsUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const schools = await prisma.schools.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolsWithIdOnly = await prisma.schools.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends schoolsUpdateManyAndReturnArgs>(args: SelectSubset<T, schoolsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schools.
     * @param {schoolsUpsertArgs} args - Arguments to update or create a Schools.
     * @example
     * // Update or create a Schools
     * const schools = await prisma.schools.upsert({
     *   create: {
     *     // ... data to create a Schools
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schools we want to update
     *   }
     * })
     */
    upsert<T extends schoolsUpsertArgs>(args: SelectSubset<T, schoolsUpsertArgs<ExtArgs>>): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.schools.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends schoolsCountArgs>(
      args?: Subset<T, schoolsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolsAggregateArgs>(args: Subset<T, SchoolsAggregateArgs>): Prisma.PrismaPromise<GetSchoolsAggregateType<T>>

    /**
     * Group by Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends schoolsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: schoolsGroupByArgs['orderBy'] }
        : { orderBy?: schoolsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, schoolsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the schools model
   */
  readonly fields: schoolsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schools.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__schoolsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate_educations<T extends schools$candidate_educationsArgs<ExtArgs> = {}>(args?: Subset<T, schools$candidate_educationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidate_educationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    school_locations<T extends schools$school_locationsArgs<ExtArgs> = {}>(args?: Subset<T, schools$school_locationsArgs<ExtArgs>>): Prisma__school_locationsClient<$Result.GetResult<Prisma.$school_locationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the schools model
   */
  interface schoolsFieldRefs {
    readonly id: FieldRef<"schools", 'String'>
    readonly created_at: FieldRef<"schools", 'DateTime'>
    readonly name: FieldRef<"schools", 'String'>
  }
    

  // Custom InputTypes
  /**
   * schools findUnique
   */
  export type schoolsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where: schoolsWhereUniqueInput
  }

  /**
   * schools findUniqueOrThrow
   */
  export type schoolsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where: schoolsWhereUniqueInput
  }

  /**
   * schools findFirst
   */
  export type schoolsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where?: schoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolsOrderByWithRelationInput | schoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schools.
     */
    cursor?: schoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolsScalarFieldEnum | SchoolsScalarFieldEnum[]
  }

  /**
   * schools findFirstOrThrow
   */
  export type schoolsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where?: schoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolsOrderByWithRelationInput | schoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schools.
     */
    cursor?: schoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolsScalarFieldEnum | SchoolsScalarFieldEnum[]
  }

  /**
   * schools findMany
   */
  export type schoolsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where?: schoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolsOrderByWithRelationInput | schoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing schools.
     */
    cursor?: schoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schools.
     */
    skip?: number
    distinct?: SchoolsScalarFieldEnum | SchoolsScalarFieldEnum[]
  }

  /**
   * schools create
   */
  export type schoolsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * The data needed to create a schools.
     */
    data: XOR<schoolsCreateInput, schoolsUncheckedCreateInput>
  }

  /**
   * schools createMany
   */
  export type schoolsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schools.
     */
    data: schoolsCreateManyInput | schoolsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * schools createManyAndReturn
   */
  export type schoolsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * The data used to create many schools.
     */
    data: schoolsCreateManyInput | schoolsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * schools update
   */
  export type schoolsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * The data needed to update a schools.
     */
    data: XOR<schoolsUpdateInput, schoolsUncheckedUpdateInput>
    /**
     * Choose, which schools to update.
     */
    where: schoolsWhereUniqueInput
  }

  /**
   * schools updateMany
   */
  export type schoolsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schools.
     */
    data: XOR<schoolsUpdateManyMutationInput, schoolsUncheckedUpdateManyInput>
    /**
     * Filter which schools to update
     */
    where?: schoolsWhereInput
    /**
     * Limit how many schools to update.
     */
    limit?: number
  }

  /**
   * schools updateManyAndReturn
   */
  export type schoolsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * The data used to update schools.
     */
    data: XOR<schoolsUpdateManyMutationInput, schoolsUncheckedUpdateManyInput>
    /**
     * Filter which schools to update
     */
    where?: schoolsWhereInput
    /**
     * Limit how many schools to update.
     */
    limit?: number
  }

  /**
   * schools upsert
   */
  export type schoolsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * The filter to search for the schools to update in case it exists.
     */
    where: schoolsWhereUniqueInput
    /**
     * In case the schools found by the `where` argument doesn't exist, create a new schools with this data.
     */
    create: XOR<schoolsCreateInput, schoolsUncheckedCreateInput>
    /**
     * In case the schools was found with the provided `where` argument, update it with this data.
     */
    update: XOR<schoolsUpdateInput, schoolsUncheckedUpdateInput>
  }

  /**
   * schools delete
   */
  export type schoolsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
    /**
     * Filter which schools to delete.
     */
    where: schoolsWhereUniqueInput
  }

  /**
   * schools deleteMany
   */
  export type schoolsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schools to delete
     */
    where?: schoolsWhereInput
    /**
     * Limit how many schools to delete.
     */
    limit?: number
  }

  /**
   * schools.candidate_educations
   */
  export type schools$candidate_educationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate_educations
     */
    select?: candidate_educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidate_educations
     */
    omit?: candidate_educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidate_educationsInclude<ExtArgs> | null
    where?: candidate_educationsWhereInput
    orderBy?: candidate_educationsOrderByWithRelationInput | candidate_educationsOrderByWithRelationInput[]
    cursor?: candidate_educationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Candidate_educationsScalarFieldEnum | Candidate_educationsScalarFieldEnum[]
  }

  /**
   * schools.school_locations
   */
  export type schools$school_locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school_locations
     */
    select?: school_locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the school_locations
     */
    omit?: school_locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: school_locationsInclude<ExtArgs> | null
    where?: school_locationsWhereInput
  }

  /**
   * schools without action
   */
  export type schoolsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schools
     */
    omit?: schoolsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: schoolsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Candidate_educationsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    candidate_id: 'candidate_id',
    end_date: 'end_date',
    school_id: 'school_id',
    start_date: 'start_date'
  };

  export type Candidate_educationsScalarFieldEnum = (typeof Candidate_educationsScalarFieldEnum)[keyof typeof Candidate_educationsScalarFieldEnum]


  export const Candidate_profilesScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    candidate_id: 'candidate_id'
  };

  export type Candidate_profilesScalarFieldEnum = (typeof Candidate_profilesScalarFieldEnum)[keyof typeof Candidate_profilesScalarFieldEnum]


  export const Candidate_work_experiencesScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    candidate_id: 'candidate_id'
  };

  export type Candidate_work_experiencesScalarFieldEnum = (typeof Candidate_work_experiencesScalarFieldEnum)[keyof typeof Candidate_work_experiencesScalarFieldEnum]


  export const CandidatesScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    first_name: 'first_name',
    last_name: 'last_name',
    sex: 'sex'
  };

  export type CandidatesScalarFieldEnum = (typeof CandidatesScalarFieldEnum)[keyof typeof CandidatesScalarFieldEnum]


  export const Education_majorsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    name: 'name'
  };

  export type Education_majorsScalarFieldEnum = (typeof Education_majorsScalarFieldEnum)[keyof typeof Education_majorsScalarFieldEnum]


  export const Education_minorsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    name: 'name'
  };

  export type Education_minorsScalarFieldEnum = (typeof Education_minorsScalarFieldEnum)[keyof typeof Education_minorsScalarFieldEnum]


  export const School_locationsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    city: 'city',
    state: 'state',
    school_id: 'school_id'
  };

  export type School_locationsScalarFieldEnum = (typeof School_locationsScalarFieldEnum)[keyof typeof School_locationsScalarFieldEnum]


  export const SchoolsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    name: 'name'
  };

  export type SchoolsScalarFieldEnum = (typeof SchoolsScalarFieldEnum)[keyof typeof SchoolsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type candidate_educationsWhereInput = {
    AND?: candidate_educationsWhereInput | candidate_educationsWhereInput[]
    OR?: candidate_educationsWhereInput[]
    NOT?: candidate_educationsWhereInput | candidate_educationsWhereInput[]
    id?: UuidFilter<"candidate_educations"> | string
    created_at?: DateTimeFilter<"candidate_educations"> | Date | string
    candidate_id?: UuidFilter<"candidate_educations"> | string
    end_date?: DateTimeFilter<"candidate_educations"> | Date | string
    school_id?: UuidFilter<"candidate_educations"> | string
    start_date?: DateTimeFilter<"candidate_educations"> | Date | string
    candidates?: XOR<CandidatesScalarRelationFilter, candidatesWhereInput>
    schools?: XOR<SchoolsScalarRelationFilter, schoolsWhereInput>
  }

  export type candidate_educationsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    candidate_id?: SortOrder
    end_date?: SortOrder
    school_id?: SortOrder
    start_date?: SortOrder
    candidates?: candidatesOrderByWithRelationInput
    schools?: schoolsOrderByWithRelationInput
  }

  export type candidate_educationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: candidate_educationsWhereInput | candidate_educationsWhereInput[]
    OR?: candidate_educationsWhereInput[]
    NOT?: candidate_educationsWhereInput | candidate_educationsWhereInput[]
    created_at?: DateTimeFilter<"candidate_educations"> | Date | string
    candidate_id?: UuidFilter<"candidate_educations"> | string
    end_date?: DateTimeFilter<"candidate_educations"> | Date | string
    school_id?: UuidFilter<"candidate_educations"> | string
    start_date?: DateTimeFilter<"candidate_educations"> | Date | string
    candidates?: XOR<CandidatesScalarRelationFilter, candidatesWhereInput>
    schools?: XOR<SchoolsScalarRelationFilter, schoolsWhereInput>
  }, "id" | "id">

  export type candidate_educationsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    candidate_id?: SortOrder
    end_date?: SortOrder
    school_id?: SortOrder
    start_date?: SortOrder
    _count?: candidate_educationsCountOrderByAggregateInput
    _max?: candidate_educationsMaxOrderByAggregateInput
    _min?: candidate_educationsMinOrderByAggregateInput
  }

  export type candidate_educationsScalarWhereWithAggregatesInput = {
    AND?: candidate_educationsScalarWhereWithAggregatesInput | candidate_educationsScalarWhereWithAggregatesInput[]
    OR?: candidate_educationsScalarWhereWithAggregatesInput[]
    NOT?: candidate_educationsScalarWhereWithAggregatesInput | candidate_educationsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"candidate_educations"> | string
    created_at?: DateTimeWithAggregatesFilter<"candidate_educations"> | Date | string
    candidate_id?: UuidWithAggregatesFilter<"candidate_educations"> | string
    end_date?: DateTimeWithAggregatesFilter<"candidate_educations"> | Date | string
    school_id?: UuidWithAggregatesFilter<"candidate_educations"> | string
    start_date?: DateTimeWithAggregatesFilter<"candidate_educations"> | Date | string
  }

  export type candidate_profilesWhereInput = {
    AND?: candidate_profilesWhereInput | candidate_profilesWhereInput[]
    OR?: candidate_profilesWhereInput[]
    NOT?: candidate_profilesWhereInput | candidate_profilesWhereInput[]
    id?: UuidFilter<"candidate_profiles"> | string
    created_at?: DateTimeFilter<"candidate_profiles"> | Date | string
    candidate_id?: UuidFilter<"candidate_profiles"> | string
    candidates?: XOR<CandidatesScalarRelationFilter, candidatesWhereInput>
  }

  export type candidate_profilesOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    candidate_id?: SortOrder
    candidates?: candidatesOrderByWithRelationInput
  }

  export type candidate_profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    candidate_id?: string
    AND?: candidate_profilesWhereInput | candidate_profilesWhereInput[]
    OR?: candidate_profilesWhereInput[]
    NOT?: candidate_profilesWhereInput | candidate_profilesWhereInput[]
    created_at?: DateTimeFilter<"candidate_profiles"> | Date | string
    candidates?: XOR<CandidatesScalarRelationFilter, candidatesWhereInput>
  }, "id" | "id" | "candidate_id">

  export type candidate_profilesOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    candidate_id?: SortOrder
    _count?: candidate_profilesCountOrderByAggregateInput
    _max?: candidate_profilesMaxOrderByAggregateInput
    _min?: candidate_profilesMinOrderByAggregateInput
  }

  export type candidate_profilesScalarWhereWithAggregatesInput = {
    AND?: candidate_profilesScalarWhereWithAggregatesInput | candidate_profilesScalarWhereWithAggregatesInput[]
    OR?: candidate_profilesScalarWhereWithAggregatesInput[]
    NOT?: candidate_profilesScalarWhereWithAggregatesInput | candidate_profilesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"candidate_profiles"> | string
    created_at?: DateTimeWithAggregatesFilter<"candidate_profiles"> | Date | string
    candidate_id?: UuidWithAggregatesFilter<"candidate_profiles"> | string
  }

  export type candidate_work_experiencesWhereInput = {
    AND?: candidate_work_experiencesWhereInput | candidate_work_experiencesWhereInput[]
    OR?: candidate_work_experiencesWhereInput[]
    NOT?: candidate_work_experiencesWhereInput | candidate_work_experiencesWhereInput[]
    id?: UuidFilter<"candidate_work_experiences"> | string
    created_at?: DateTimeFilter<"candidate_work_experiences"> | Date | string
    candidate_id?: UuidFilter<"candidate_work_experiences"> | string
    candidates?: XOR<CandidatesScalarRelationFilter, candidatesWhereInput>
  }

  export type candidate_work_experiencesOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    candidate_id?: SortOrder
    candidates?: candidatesOrderByWithRelationInput
  }

  export type candidate_work_experiencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    candidate_id?: string
    AND?: candidate_work_experiencesWhereInput | candidate_work_experiencesWhereInput[]
    OR?: candidate_work_experiencesWhereInput[]
    NOT?: candidate_work_experiencesWhereInput | candidate_work_experiencesWhereInput[]
    created_at?: DateTimeFilter<"candidate_work_experiences"> | Date | string
    candidates?: XOR<CandidatesScalarRelationFilter, candidatesWhereInput>
  }, "id" | "id" | "candidate_id">

  export type candidate_work_experiencesOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    candidate_id?: SortOrder
    _count?: candidate_work_experiencesCountOrderByAggregateInput
    _max?: candidate_work_experiencesMaxOrderByAggregateInput
    _min?: candidate_work_experiencesMinOrderByAggregateInput
  }

  export type candidate_work_experiencesScalarWhereWithAggregatesInput = {
    AND?: candidate_work_experiencesScalarWhereWithAggregatesInput | candidate_work_experiencesScalarWhereWithAggregatesInput[]
    OR?: candidate_work_experiencesScalarWhereWithAggregatesInput[]
    NOT?: candidate_work_experiencesScalarWhereWithAggregatesInput | candidate_work_experiencesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"candidate_work_experiences"> | string
    created_at?: DateTimeWithAggregatesFilter<"candidate_work_experiences"> | Date | string
    candidate_id?: UuidWithAggregatesFilter<"candidate_work_experiences"> | string
  }

  export type candidatesWhereInput = {
    AND?: candidatesWhereInput | candidatesWhereInput[]
    OR?: candidatesWhereInput[]
    NOT?: candidatesWhereInput | candidatesWhereInput[]
    id?: UuidFilter<"candidates"> | string
    created_at?: DateTimeFilter<"candidates"> | Date | string
    first_name?: StringFilter<"candidates"> | string
    last_name?: StringFilter<"candidates"> | string
    sex?: StringFilter<"candidates"> | string
    candidate_educations?: Candidate_educationsListRelationFilter
    candidate_profiles?: XOR<Candidate_profilesNullableScalarRelationFilter, candidate_profilesWhereInput> | null
    candidate_work_experiences?: XOR<Candidate_work_experiencesNullableScalarRelationFilter, candidate_work_experiencesWhereInput> | null
  }

  export type candidatesOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    sex?: SortOrder
    candidate_educations?: candidate_educationsOrderByRelationAggregateInput
    candidate_profiles?: candidate_profilesOrderByWithRelationInput
    candidate_work_experiences?: candidate_work_experiencesOrderByWithRelationInput
  }

  export type candidatesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: candidatesWhereInput | candidatesWhereInput[]
    OR?: candidatesWhereInput[]
    NOT?: candidatesWhereInput | candidatesWhereInput[]
    created_at?: DateTimeFilter<"candidates"> | Date | string
    first_name?: StringFilter<"candidates"> | string
    last_name?: StringFilter<"candidates"> | string
    sex?: StringFilter<"candidates"> | string
    candidate_educations?: Candidate_educationsListRelationFilter
    candidate_profiles?: XOR<Candidate_profilesNullableScalarRelationFilter, candidate_profilesWhereInput> | null
    candidate_work_experiences?: XOR<Candidate_work_experiencesNullableScalarRelationFilter, candidate_work_experiencesWhereInput> | null
  }, "id">

  export type candidatesOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    sex?: SortOrder
    _count?: candidatesCountOrderByAggregateInput
    _max?: candidatesMaxOrderByAggregateInput
    _min?: candidatesMinOrderByAggregateInput
  }

  export type candidatesScalarWhereWithAggregatesInput = {
    AND?: candidatesScalarWhereWithAggregatesInput | candidatesScalarWhereWithAggregatesInput[]
    OR?: candidatesScalarWhereWithAggregatesInput[]
    NOT?: candidatesScalarWhereWithAggregatesInput | candidatesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"candidates"> | string
    created_at?: DateTimeWithAggregatesFilter<"candidates"> | Date | string
    first_name?: StringWithAggregatesFilter<"candidates"> | string
    last_name?: StringWithAggregatesFilter<"candidates"> | string
    sex?: StringWithAggregatesFilter<"candidates"> | string
  }

  export type education_majorsWhereInput = {
    AND?: education_majorsWhereInput | education_majorsWhereInput[]
    OR?: education_majorsWhereInput[]
    NOT?: education_majorsWhereInput | education_majorsWhereInput[]
    id?: UuidFilter<"education_majors"> | string
    created_at?: DateTimeFilter<"education_majors"> | Date | string
    name?: StringFilter<"education_majors"> | string
  }

  export type education_majorsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type education_majorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: education_majorsWhereInput | education_majorsWhereInput[]
    OR?: education_majorsWhereInput[]
    NOT?: education_majorsWhereInput | education_majorsWhereInput[]
    created_at?: DateTimeFilter<"education_majors"> | Date | string
  }, "id" | "name">

  export type education_majorsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    _count?: education_majorsCountOrderByAggregateInput
    _max?: education_majorsMaxOrderByAggregateInput
    _min?: education_majorsMinOrderByAggregateInput
  }

  export type education_majorsScalarWhereWithAggregatesInput = {
    AND?: education_majorsScalarWhereWithAggregatesInput | education_majorsScalarWhereWithAggregatesInput[]
    OR?: education_majorsScalarWhereWithAggregatesInput[]
    NOT?: education_majorsScalarWhereWithAggregatesInput | education_majorsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"education_majors"> | string
    created_at?: DateTimeWithAggregatesFilter<"education_majors"> | Date | string
    name?: StringWithAggregatesFilter<"education_majors"> | string
  }

  export type education_minorsWhereInput = {
    AND?: education_minorsWhereInput | education_minorsWhereInput[]
    OR?: education_minorsWhereInput[]
    NOT?: education_minorsWhereInput | education_minorsWhereInput[]
    id?: UuidFilter<"education_minors"> | string
    created_at?: DateTimeFilter<"education_minors"> | Date | string
    name?: StringFilter<"education_minors"> | string
  }

  export type education_minorsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type education_minorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: education_minorsWhereInput | education_minorsWhereInput[]
    OR?: education_minorsWhereInput[]
    NOT?: education_minorsWhereInput | education_minorsWhereInput[]
    created_at?: DateTimeFilter<"education_minors"> | Date | string
  }, "id" | "name">

  export type education_minorsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    _count?: education_minorsCountOrderByAggregateInput
    _max?: education_minorsMaxOrderByAggregateInput
    _min?: education_minorsMinOrderByAggregateInput
  }

  export type education_minorsScalarWhereWithAggregatesInput = {
    AND?: education_minorsScalarWhereWithAggregatesInput | education_minorsScalarWhereWithAggregatesInput[]
    OR?: education_minorsScalarWhereWithAggregatesInput[]
    NOT?: education_minorsScalarWhereWithAggregatesInput | education_minorsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"education_minors"> | string
    created_at?: DateTimeWithAggregatesFilter<"education_minors"> | Date | string
    name?: StringWithAggregatesFilter<"education_minors"> | string
  }

  export type school_locationsWhereInput = {
    AND?: school_locationsWhereInput | school_locationsWhereInput[]
    OR?: school_locationsWhereInput[]
    NOT?: school_locationsWhereInput | school_locationsWhereInput[]
    id?: UuidFilter<"school_locations"> | string
    created_at?: DateTimeFilter<"school_locations"> | Date | string
    city?: StringFilter<"school_locations"> | string
    state?: StringFilter<"school_locations"> | string
    school_id?: UuidFilter<"school_locations"> | string
    schools?: XOR<SchoolsScalarRelationFilter, schoolsWhereInput>
  }

  export type school_locationsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    city?: SortOrder
    state?: SortOrder
    school_id?: SortOrder
    schools?: schoolsOrderByWithRelationInput
  }

  export type school_locationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    school_id?: string
    AND?: school_locationsWhereInput | school_locationsWhereInput[]
    OR?: school_locationsWhereInput[]
    NOT?: school_locationsWhereInput | school_locationsWhereInput[]
    created_at?: DateTimeFilter<"school_locations"> | Date | string
    city?: StringFilter<"school_locations"> | string
    state?: StringFilter<"school_locations"> | string
    schools?: XOR<SchoolsScalarRelationFilter, schoolsWhereInput>
  }, "id" | "school_id">

  export type school_locationsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    city?: SortOrder
    state?: SortOrder
    school_id?: SortOrder
    _count?: school_locationsCountOrderByAggregateInput
    _max?: school_locationsMaxOrderByAggregateInput
    _min?: school_locationsMinOrderByAggregateInput
  }

  export type school_locationsScalarWhereWithAggregatesInput = {
    AND?: school_locationsScalarWhereWithAggregatesInput | school_locationsScalarWhereWithAggregatesInput[]
    OR?: school_locationsScalarWhereWithAggregatesInput[]
    NOT?: school_locationsScalarWhereWithAggregatesInput | school_locationsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"school_locations"> | string
    created_at?: DateTimeWithAggregatesFilter<"school_locations"> | Date | string
    city?: StringWithAggregatesFilter<"school_locations"> | string
    state?: StringWithAggregatesFilter<"school_locations"> | string
    school_id?: UuidWithAggregatesFilter<"school_locations"> | string
  }

  export type schoolsWhereInput = {
    AND?: schoolsWhereInput | schoolsWhereInput[]
    OR?: schoolsWhereInput[]
    NOT?: schoolsWhereInput | schoolsWhereInput[]
    id?: UuidFilter<"schools"> | string
    created_at?: DateTimeFilter<"schools"> | Date | string
    name?: StringFilter<"schools"> | string
    candidate_educations?: Candidate_educationsListRelationFilter
    school_locations?: XOR<School_locationsNullableScalarRelationFilter, school_locationsWhereInput> | null
  }

  export type schoolsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    candidate_educations?: candidate_educationsOrderByRelationAggregateInput
    school_locations?: school_locationsOrderByWithRelationInput
  }

  export type schoolsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: schoolsWhereInput | schoolsWhereInput[]
    OR?: schoolsWhereInput[]
    NOT?: schoolsWhereInput | schoolsWhereInput[]
    created_at?: DateTimeFilter<"schools"> | Date | string
    candidate_educations?: Candidate_educationsListRelationFilter
    school_locations?: XOR<School_locationsNullableScalarRelationFilter, school_locationsWhereInput> | null
  }, "id" | "name">

  export type schoolsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    _count?: schoolsCountOrderByAggregateInput
    _max?: schoolsMaxOrderByAggregateInput
    _min?: schoolsMinOrderByAggregateInput
  }

  export type schoolsScalarWhereWithAggregatesInput = {
    AND?: schoolsScalarWhereWithAggregatesInput | schoolsScalarWhereWithAggregatesInput[]
    OR?: schoolsScalarWhereWithAggregatesInput[]
    NOT?: schoolsScalarWhereWithAggregatesInput | schoolsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"schools"> | string
    created_at?: DateTimeWithAggregatesFilter<"schools"> | Date | string
    name?: StringWithAggregatesFilter<"schools"> | string
  }

  export type candidate_educationsCreateInput = {
    id?: string
    created_at?: Date | string
    end_date: Date | string
    start_date: Date | string
    candidates: candidatesCreateNestedOneWithoutCandidate_educationsInput
    schools: schoolsCreateNestedOneWithoutCandidate_educationsInput
  }

  export type candidate_educationsUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    candidate_id: string
    end_date: Date | string
    school_id: string
    start_date: Date | string
  }

  export type candidate_educationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: candidatesUpdateOneRequiredWithoutCandidate_educationsNestedInput
    schools?: schoolsUpdateOneRequiredWithoutCandidate_educationsNestedInput
  }

  export type candidate_educationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_id?: StringFieldUpdateOperationsInput | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    school_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type candidate_educationsCreateManyInput = {
    id?: string
    created_at?: Date | string
    candidate_id: string
    end_date: Date | string
    school_id: string
    start_date: Date | string
  }

  export type candidate_educationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type candidate_educationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_id?: StringFieldUpdateOperationsInput | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    school_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type candidate_profilesCreateInput = {
    id?: string
    created_at?: Date | string
    candidates: candidatesCreateNestedOneWithoutCandidate_profilesInput
  }

  export type candidate_profilesUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    candidate_id: string
  }

  export type candidate_profilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: candidatesUpdateOneRequiredWithoutCandidate_profilesNestedInput
  }

  export type candidate_profilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_id?: StringFieldUpdateOperationsInput | string
  }

  export type candidate_profilesCreateManyInput = {
    id?: string
    created_at?: Date | string
    candidate_id: string
  }

  export type candidate_profilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type candidate_profilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_id?: StringFieldUpdateOperationsInput | string
  }

  export type candidate_work_experiencesCreateInput = {
    id?: string
    created_at?: Date | string
    candidates: candidatesCreateNestedOneWithoutCandidate_work_experiencesInput
  }

  export type candidate_work_experiencesUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    candidate_id: string
  }

  export type candidate_work_experiencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: candidatesUpdateOneRequiredWithoutCandidate_work_experiencesNestedInput
  }

  export type candidate_work_experiencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_id?: StringFieldUpdateOperationsInput | string
  }

  export type candidate_work_experiencesCreateManyInput = {
    id?: string
    created_at?: Date | string
    candidate_id: string
  }

  export type candidate_work_experiencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type candidate_work_experiencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_id?: StringFieldUpdateOperationsInput | string
  }

  export type candidatesCreateInput = {
    id?: string
    created_at?: Date | string
    first_name: string
    last_name: string
    sex: string
    candidate_educations?: candidate_educationsCreateNestedManyWithoutCandidatesInput
    candidate_profiles?: candidate_profilesCreateNestedOneWithoutCandidatesInput
    candidate_work_experiences?: candidate_work_experiencesCreateNestedOneWithoutCandidatesInput
  }

  export type candidatesUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    first_name: string
    last_name: string
    sex: string
    candidate_educations?: candidate_educationsUncheckedCreateNestedManyWithoutCandidatesInput
    candidate_profiles?: candidate_profilesUncheckedCreateNestedOneWithoutCandidatesInput
    candidate_work_experiences?: candidate_work_experiencesUncheckedCreateNestedOneWithoutCandidatesInput
  }

  export type candidatesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    candidate_educations?: candidate_educationsUpdateManyWithoutCandidatesNestedInput
    candidate_profiles?: candidate_profilesUpdateOneWithoutCandidatesNestedInput
    candidate_work_experiences?: candidate_work_experiencesUpdateOneWithoutCandidatesNestedInput
  }

  export type candidatesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    candidate_educations?: candidate_educationsUncheckedUpdateManyWithoutCandidatesNestedInput
    candidate_profiles?: candidate_profilesUncheckedUpdateOneWithoutCandidatesNestedInput
    candidate_work_experiences?: candidate_work_experiencesUncheckedUpdateOneWithoutCandidatesNestedInput
  }

  export type candidatesCreateManyInput = {
    id?: string
    created_at?: Date | string
    first_name: string
    last_name: string
    sex: string
  }

  export type candidatesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
  }

  export type candidatesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
  }

  export type education_majorsCreateInput = {
    id?: string
    created_at?: Date | string
    name: string
  }

  export type education_majorsUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    name: string
  }

  export type education_majorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type education_majorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type education_majorsCreateManyInput = {
    id?: string
    created_at?: Date | string
    name: string
  }

  export type education_majorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type education_majorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type education_minorsCreateInput = {
    id?: string
    created_at?: Date | string
    name: string
  }

  export type education_minorsUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    name: string
  }

  export type education_minorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type education_minorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type education_minorsCreateManyInput = {
    id?: string
    created_at?: Date | string
    name: string
  }

  export type education_minorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type education_minorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type school_locationsCreateInput = {
    id?: string
    created_at?: Date | string
    city: string
    state: string
    schools: schoolsCreateNestedOneWithoutSchool_locationsInput
  }

  export type school_locationsUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    city: string
    state: string
    school_id: string
  }

  export type school_locationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    schools?: schoolsUpdateOneRequiredWithoutSchool_locationsNestedInput
  }

  export type school_locationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
  }

  export type school_locationsCreateManyInput = {
    id?: string
    created_at?: Date | string
    city: string
    state: string
    school_id: string
  }

  export type school_locationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
  }

  export type school_locationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
  }

  export type schoolsCreateInput = {
    id?: string
    created_at?: Date | string
    name: string
    candidate_educations?: candidate_educationsCreateNestedManyWithoutSchoolsInput
    school_locations?: school_locationsCreateNestedOneWithoutSchoolsInput
  }

  export type schoolsUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    name: string
    candidate_educations?: candidate_educationsUncheckedCreateNestedManyWithoutSchoolsInput
    school_locations?: school_locationsUncheckedCreateNestedOneWithoutSchoolsInput
  }

  export type schoolsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    candidate_educations?: candidate_educationsUpdateManyWithoutSchoolsNestedInput
    school_locations?: school_locationsUpdateOneWithoutSchoolsNestedInput
  }

  export type schoolsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    candidate_educations?: candidate_educationsUncheckedUpdateManyWithoutSchoolsNestedInput
    school_locations?: school_locationsUncheckedUpdateOneWithoutSchoolsNestedInput
  }

  export type schoolsCreateManyInput = {
    id?: string
    created_at?: Date | string
    name: string
  }

  export type schoolsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type schoolsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CandidatesScalarRelationFilter = {
    is?: candidatesWhereInput
    isNot?: candidatesWhereInput
  }

  export type SchoolsScalarRelationFilter = {
    is?: schoolsWhereInput
    isNot?: schoolsWhereInput
  }

  export type candidate_educationsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    candidate_id?: SortOrder
    end_date?: SortOrder
    school_id?: SortOrder
    start_date?: SortOrder
  }

  export type candidate_educationsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    candidate_id?: SortOrder
    end_date?: SortOrder
    school_id?: SortOrder
    start_date?: SortOrder
  }

  export type candidate_educationsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    candidate_id?: SortOrder
    end_date?: SortOrder
    school_id?: SortOrder
    start_date?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type candidate_profilesCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    candidate_id?: SortOrder
  }

  export type candidate_profilesMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    candidate_id?: SortOrder
  }

  export type candidate_profilesMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    candidate_id?: SortOrder
  }

  export type candidate_work_experiencesCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    candidate_id?: SortOrder
  }

  export type candidate_work_experiencesMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    candidate_id?: SortOrder
  }

  export type candidate_work_experiencesMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    candidate_id?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Candidate_educationsListRelationFilter = {
    every?: candidate_educationsWhereInput
    some?: candidate_educationsWhereInput
    none?: candidate_educationsWhereInput
  }

  export type Candidate_profilesNullableScalarRelationFilter = {
    is?: candidate_profilesWhereInput | null
    isNot?: candidate_profilesWhereInput | null
  }

  export type Candidate_work_experiencesNullableScalarRelationFilter = {
    is?: candidate_work_experiencesWhereInput | null
    isNot?: candidate_work_experiencesWhereInput | null
  }

  export type candidate_educationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type candidatesCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    sex?: SortOrder
  }

  export type candidatesMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    sex?: SortOrder
  }

  export type candidatesMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    sex?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type education_majorsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type education_majorsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type education_majorsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type education_minorsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type education_minorsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type education_minorsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type school_locationsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    city?: SortOrder
    state?: SortOrder
    school_id?: SortOrder
  }

  export type school_locationsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    city?: SortOrder
    state?: SortOrder
    school_id?: SortOrder
  }

  export type school_locationsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    city?: SortOrder
    state?: SortOrder
    school_id?: SortOrder
  }

  export type School_locationsNullableScalarRelationFilter = {
    is?: school_locationsWhereInput | null
    isNot?: school_locationsWhereInput | null
  }

  export type schoolsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type schoolsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type schoolsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type candidatesCreateNestedOneWithoutCandidate_educationsInput = {
    create?: XOR<candidatesCreateWithoutCandidate_educationsInput, candidatesUncheckedCreateWithoutCandidate_educationsInput>
    connectOrCreate?: candidatesCreateOrConnectWithoutCandidate_educationsInput
    connect?: candidatesWhereUniqueInput
  }

  export type schoolsCreateNestedOneWithoutCandidate_educationsInput = {
    create?: XOR<schoolsCreateWithoutCandidate_educationsInput, schoolsUncheckedCreateWithoutCandidate_educationsInput>
    connectOrCreate?: schoolsCreateOrConnectWithoutCandidate_educationsInput
    connect?: schoolsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type candidatesUpdateOneRequiredWithoutCandidate_educationsNestedInput = {
    create?: XOR<candidatesCreateWithoutCandidate_educationsInput, candidatesUncheckedCreateWithoutCandidate_educationsInput>
    connectOrCreate?: candidatesCreateOrConnectWithoutCandidate_educationsInput
    upsert?: candidatesUpsertWithoutCandidate_educationsInput
    connect?: candidatesWhereUniqueInput
    update?: XOR<XOR<candidatesUpdateToOneWithWhereWithoutCandidate_educationsInput, candidatesUpdateWithoutCandidate_educationsInput>, candidatesUncheckedUpdateWithoutCandidate_educationsInput>
  }

  export type schoolsUpdateOneRequiredWithoutCandidate_educationsNestedInput = {
    create?: XOR<schoolsCreateWithoutCandidate_educationsInput, schoolsUncheckedCreateWithoutCandidate_educationsInput>
    connectOrCreate?: schoolsCreateOrConnectWithoutCandidate_educationsInput
    upsert?: schoolsUpsertWithoutCandidate_educationsInput
    connect?: schoolsWhereUniqueInput
    update?: XOR<XOR<schoolsUpdateToOneWithWhereWithoutCandidate_educationsInput, schoolsUpdateWithoutCandidate_educationsInput>, schoolsUncheckedUpdateWithoutCandidate_educationsInput>
  }

  export type candidatesCreateNestedOneWithoutCandidate_profilesInput = {
    create?: XOR<candidatesCreateWithoutCandidate_profilesInput, candidatesUncheckedCreateWithoutCandidate_profilesInput>
    connectOrCreate?: candidatesCreateOrConnectWithoutCandidate_profilesInput
    connect?: candidatesWhereUniqueInput
  }

  export type candidatesUpdateOneRequiredWithoutCandidate_profilesNestedInput = {
    create?: XOR<candidatesCreateWithoutCandidate_profilesInput, candidatesUncheckedCreateWithoutCandidate_profilesInput>
    connectOrCreate?: candidatesCreateOrConnectWithoutCandidate_profilesInput
    upsert?: candidatesUpsertWithoutCandidate_profilesInput
    connect?: candidatesWhereUniqueInput
    update?: XOR<XOR<candidatesUpdateToOneWithWhereWithoutCandidate_profilesInput, candidatesUpdateWithoutCandidate_profilesInput>, candidatesUncheckedUpdateWithoutCandidate_profilesInput>
  }

  export type candidatesCreateNestedOneWithoutCandidate_work_experiencesInput = {
    create?: XOR<candidatesCreateWithoutCandidate_work_experiencesInput, candidatesUncheckedCreateWithoutCandidate_work_experiencesInput>
    connectOrCreate?: candidatesCreateOrConnectWithoutCandidate_work_experiencesInput
    connect?: candidatesWhereUniqueInput
  }

  export type candidatesUpdateOneRequiredWithoutCandidate_work_experiencesNestedInput = {
    create?: XOR<candidatesCreateWithoutCandidate_work_experiencesInput, candidatesUncheckedCreateWithoutCandidate_work_experiencesInput>
    connectOrCreate?: candidatesCreateOrConnectWithoutCandidate_work_experiencesInput
    upsert?: candidatesUpsertWithoutCandidate_work_experiencesInput
    connect?: candidatesWhereUniqueInput
    update?: XOR<XOR<candidatesUpdateToOneWithWhereWithoutCandidate_work_experiencesInput, candidatesUpdateWithoutCandidate_work_experiencesInput>, candidatesUncheckedUpdateWithoutCandidate_work_experiencesInput>
  }

  export type candidate_educationsCreateNestedManyWithoutCandidatesInput = {
    create?: XOR<candidate_educationsCreateWithoutCandidatesInput, candidate_educationsUncheckedCreateWithoutCandidatesInput> | candidate_educationsCreateWithoutCandidatesInput[] | candidate_educationsUncheckedCreateWithoutCandidatesInput[]
    connectOrCreate?: candidate_educationsCreateOrConnectWithoutCandidatesInput | candidate_educationsCreateOrConnectWithoutCandidatesInput[]
    createMany?: candidate_educationsCreateManyCandidatesInputEnvelope
    connect?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
  }

  export type candidate_profilesCreateNestedOneWithoutCandidatesInput = {
    create?: XOR<candidate_profilesCreateWithoutCandidatesInput, candidate_profilesUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: candidate_profilesCreateOrConnectWithoutCandidatesInput
    connect?: candidate_profilesWhereUniqueInput
  }

  export type candidate_work_experiencesCreateNestedOneWithoutCandidatesInput = {
    create?: XOR<candidate_work_experiencesCreateWithoutCandidatesInput, candidate_work_experiencesUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: candidate_work_experiencesCreateOrConnectWithoutCandidatesInput
    connect?: candidate_work_experiencesWhereUniqueInput
  }

  export type candidate_educationsUncheckedCreateNestedManyWithoutCandidatesInput = {
    create?: XOR<candidate_educationsCreateWithoutCandidatesInput, candidate_educationsUncheckedCreateWithoutCandidatesInput> | candidate_educationsCreateWithoutCandidatesInput[] | candidate_educationsUncheckedCreateWithoutCandidatesInput[]
    connectOrCreate?: candidate_educationsCreateOrConnectWithoutCandidatesInput | candidate_educationsCreateOrConnectWithoutCandidatesInput[]
    createMany?: candidate_educationsCreateManyCandidatesInputEnvelope
    connect?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
  }

  export type candidate_profilesUncheckedCreateNestedOneWithoutCandidatesInput = {
    create?: XOR<candidate_profilesCreateWithoutCandidatesInput, candidate_profilesUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: candidate_profilesCreateOrConnectWithoutCandidatesInput
    connect?: candidate_profilesWhereUniqueInput
  }

  export type candidate_work_experiencesUncheckedCreateNestedOneWithoutCandidatesInput = {
    create?: XOR<candidate_work_experiencesCreateWithoutCandidatesInput, candidate_work_experiencesUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: candidate_work_experiencesCreateOrConnectWithoutCandidatesInput
    connect?: candidate_work_experiencesWhereUniqueInput
  }

  export type candidate_educationsUpdateManyWithoutCandidatesNestedInput = {
    create?: XOR<candidate_educationsCreateWithoutCandidatesInput, candidate_educationsUncheckedCreateWithoutCandidatesInput> | candidate_educationsCreateWithoutCandidatesInput[] | candidate_educationsUncheckedCreateWithoutCandidatesInput[]
    connectOrCreate?: candidate_educationsCreateOrConnectWithoutCandidatesInput | candidate_educationsCreateOrConnectWithoutCandidatesInput[]
    upsert?: candidate_educationsUpsertWithWhereUniqueWithoutCandidatesInput | candidate_educationsUpsertWithWhereUniqueWithoutCandidatesInput[]
    createMany?: candidate_educationsCreateManyCandidatesInputEnvelope
    set?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
    disconnect?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
    delete?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
    connect?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
    update?: candidate_educationsUpdateWithWhereUniqueWithoutCandidatesInput | candidate_educationsUpdateWithWhereUniqueWithoutCandidatesInput[]
    updateMany?: candidate_educationsUpdateManyWithWhereWithoutCandidatesInput | candidate_educationsUpdateManyWithWhereWithoutCandidatesInput[]
    deleteMany?: candidate_educationsScalarWhereInput | candidate_educationsScalarWhereInput[]
  }

  export type candidate_profilesUpdateOneWithoutCandidatesNestedInput = {
    create?: XOR<candidate_profilesCreateWithoutCandidatesInput, candidate_profilesUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: candidate_profilesCreateOrConnectWithoutCandidatesInput
    upsert?: candidate_profilesUpsertWithoutCandidatesInput
    disconnect?: candidate_profilesWhereInput | boolean
    delete?: candidate_profilesWhereInput | boolean
    connect?: candidate_profilesWhereUniqueInput
    update?: XOR<XOR<candidate_profilesUpdateToOneWithWhereWithoutCandidatesInput, candidate_profilesUpdateWithoutCandidatesInput>, candidate_profilesUncheckedUpdateWithoutCandidatesInput>
  }

  export type candidate_work_experiencesUpdateOneWithoutCandidatesNestedInput = {
    create?: XOR<candidate_work_experiencesCreateWithoutCandidatesInput, candidate_work_experiencesUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: candidate_work_experiencesCreateOrConnectWithoutCandidatesInput
    upsert?: candidate_work_experiencesUpsertWithoutCandidatesInput
    disconnect?: candidate_work_experiencesWhereInput | boolean
    delete?: candidate_work_experiencesWhereInput | boolean
    connect?: candidate_work_experiencesWhereUniqueInput
    update?: XOR<XOR<candidate_work_experiencesUpdateToOneWithWhereWithoutCandidatesInput, candidate_work_experiencesUpdateWithoutCandidatesInput>, candidate_work_experiencesUncheckedUpdateWithoutCandidatesInput>
  }

  export type candidate_educationsUncheckedUpdateManyWithoutCandidatesNestedInput = {
    create?: XOR<candidate_educationsCreateWithoutCandidatesInput, candidate_educationsUncheckedCreateWithoutCandidatesInput> | candidate_educationsCreateWithoutCandidatesInput[] | candidate_educationsUncheckedCreateWithoutCandidatesInput[]
    connectOrCreate?: candidate_educationsCreateOrConnectWithoutCandidatesInput | candidate_educationsCreateOrConnectWithoutCandidatesInput[]
    upsert?: candidate_educationsUpsertWithWhereUniqueWithoutCandidatesInput | candidate_educationsUpsertWithWhereUniqueWithoutCandidatesInput[]
    createMany?: candidate_educationsCreateManyCandidatesInputEnvelope
    set?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
    disconnect?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
    delete?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
    connect?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
    update?: candidate_educationsUpdateWithWhereUniqueWithoutCandidatesInput | candidate_educationsUpdateWithWhereUniqueWithoutCandidatesInput[]
    updateMany?: candidate_educationsUpdateManyWithWhereWithoutCandidatesInput | candidate_educationsUpdateManyWithWhereWithoutCandidatesInput[]
    deleteMany?: candidate_educationsScalarWhereInput | candidate_educationsScalarWhereInput[]
  }

  export type candidate_profilesUncheckedUpdateOneWithoutCandidatesNestedInput = {
    create?: XOR<candidate_profilesCreateWithoutCandidatesInput, candidate_profilesUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: candidate_profilesCreateOrConnectWithoutCandidatesInput
    upsert?: candidate_profilesUpsertWithoutCandidatesInput
    disconnect?: candidate_profilesWhereInput | boolean
    delete?: candidate_profilesWhereInput | boolean
    connect?: candidate_profilesWhereUniqueInput
    update?: XOR<XOR<candidate_profilesUpdateToOneWithWhereWithoutCandidatesInput, candidate_profilesUpdateWithoutCandidatesInput>, candidate_profilesUncheckedUpdateWithoutCandidatesInput>
  }

  export type candidate_work_experiencesUncheckedUpdateOneWithoutCandidatesNestedInput = {
    create?: XOR<candidate_work_experiencesCreateWithoutCandidatesInput, candidate_work_experiencesUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: candidate_work_experiencesCreateOrConnectWithoutCandidatesInput
    upsert?: candidate_work_experiencesUpsertWithoutCandidatesInput
    disconnect?: candidate_work_experiencesWhereInput | boolean
    delete?: candidate_work_experiencesWhereInput | boolean
    connect?: candidate_work_experiencesWhereUniqueInput
    update?: XOR<XOR<candidate_work_experiencesUpdateToOneWithWhereWithoutCandidatesInput, candidate_work_experiencesUpdateWithoutCandidatesInput>, candidate_work_experiencesUncheckedUpdateWithoutCandidatesInput>
  }

  export type schoolsCreateNestedOneWithoutSchool_locationsInput = {
    create?: XOR<schoolsCreateWithoutSchool_locationsInput, schoolsUncheckedCreateWithoutSchool_locationsInput>
    connectOrCreate?: schoolsCreateOrConnectWithoutSchool_locationsInput
    connect?: schoolsWhereUniqueInput
  }

  export type schoolsUpdateOneRequiredWithoutSchool_locationsNestedInput = {
    create?: XOR<schoolsCreateWithoutSchool_locationsInput, schoolsUncheckedCreateWithoutSchool_locationsInput>
    connectOrCreate?: schoolsCreateOrConnectWithoutSchool_locationsInput
    upsert?: schoolsUpsertWithoutSchool_locationsInput
    connect?: schoolsWhereUniqueInput
    update?: XOR<XOR<schoolsUpdateToOneWithWhereWithoutSchool_locationsInput, schoolsUpdateWithoutSchool_locationsInput>, schoolsUncheckedUpdateWithoutSchool_locationsInput>
  }

  export type candidate_educationsCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<candidate_educationsCreateWithoutSchoolsInput, candidate_educationsUncheckedCreateWithoutSchoolsInput> | candidate_educationsCreateWithoutSchoolsInput[] | candidate_educationsUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: candidate_educationsCreateOrConnectWithoutSchoolsInput | candidate_educationsCreateOrConnectWithoutSchoolsInput[]
    createMany?: candidate_educationsCreateManySchoolsInputEnvelope
    connect?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
  }

  export type school_locationsCreateNestedOneWithoutSchoolsInput = {
    create?: XOR<school_locationsCreateWithoutSchoolsInput, school_locationsUncheckedCreateWithoutSchoolsInput>
    connectOrCreate?: school_locationsCreateOrConnectWithoutSchoolsInput
    connect?: school_locationsWhereUniqueInput
  }

  export type candidate_educationsUncheckedCreateNestedManyWithoutSchoolsInput = {
    create?: XOR<candidate_educationsCreateWithoutSchoolsInput, candidate_educationsUncheckedCreateWithoutSchoolsInput> | candidate_educationsCreateWithoutSchoolsInput[] | candidate_educationsUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: candidate_educationsCreateOrConnectWithoutSchoolsInput | candidate_educationsCreateOrConnectWithoutSchoolsInput[]
    createMany?: candidate_educationsCreateManySchoolsInputEnvelope
    connect?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
  }

  export type school_locationsUncheckedCreateNestedOneWithoutSchoolsInput = {
    create?: XOR<school_locationsCreateWithoutSchoolsInput, school_locationsUncheckedCreateWithoutSchoolsInput>
    connectOrCreate?: school_locationsCreateOrConnectWithoutSchoolsInput
    connect?: school_locationsWhereUniqueInput
  }

  export type candidate_educationsUpdateManyWithoutSchoolsNestedInput = {
    create?: XOR<candidate_educationsCreateWithoutSchoolsInput, candidate_educationsUncheckedCreateWithoutSchoolsInput> | candidate_educationsCreateWithoutSchoolsInput[] | candidate_educationsUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: candidate_educationsCreateOrConnectWithoutSchoolsInput | candidate_educationsCreateOrConnectWithoutSchoolsInput[]
    upsert?: candidate_educationsUpsertWithWhereUniqueWithoutSchoolsInput | candidate_educationsUpsertWithWhereUniqueWithoutSchoolsInput[]
    createMany?: candidate_educationsCreateManySchoolsInputEnvelope
    set?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
    disconnect?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
    delete?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
    connect?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
    update?: candidate_educationsUpdateWithWhereUniqueWithoutSchoolsInput | candidate_educationsUpdateWithWhereUniqueWithoutSchoolsInput[]
    updateMany?: candidate_educationsUpdateManyWithWhereWithoutSchoolsInput | candidate_educationsUpdateManyWithWhereWithoutSchoolsInput[]
    deleteMany?: candidate_educationsScalarWhereInput | candidate_educationsScalarWhereInput[]
  }

  export type school_locationsUpdateOneWithoutSchoolsNestedInput = {
    create?: XOR<school_locationsCreateWithoutSchoolsInput, school_locationsUncheckedCreateWithoutSchoolsInput>
    connectOrCreate?: school_locationsCreateOrConnectWithoutSchoolsInput
    upsert?: school_locationsUpsertWithoutSchoolsInput
    disconnect?: school_locationsWhereInput | boolean
    delete?: school_locationsWhereInput | boolean
    connect?: school_locationsWhereUniqueInput
    update?: XOR<XOR<school_locationsUpdateToOneWithWhereWithoutSchoolsInput, school_locationsUpdateWithoutSchoolsInput>, school_locationsUncheckedUpdateWithoutSchoolsInput>
  }

  export type candidate_educationsUncheckedUpdateManyWithoutSchoolsNestedInput = {
    create?: XOR<candidate_educationsCreateWithoutSchoolsInput, candidate_educationsUncheckedCreateWithoutSchoolsInput> | candidate_educationsCreateWithoutSchoolsInput[] | candidate_educationsUncheckedCreateWithoutSchoolsInput[]
    connectOrCreate?: candidate_educationsCreateOrConnectWithoutSchoolsInput | candidate_educationsCreateOrConnectWithoutSchoolsInput[]
    upsert?: candidate_educationsUpsertWithWhereUniqueWithoutSchoolsInput | candidate_educationsUpsertWithWhereUniqueWithoutSchoolsInput[]
    createMany?: candidate_educationsCreateManySchoolsInputEnvelope
    set?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
    disconnect?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
    delete?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
    connect?: candidate_educationsWhereUniqueInput | candidate_educationsWhereUniqueInput[]
    update?: candidate_educationsUpdateWithWhereUniqueWithoutSchoolsInput | candidate_educationsUpdateWithWhereUniqueWithoutSchoolsInput[]
    updateMany?: candidate_educationsUpdateManyWithWhereWithoutSchoolsInput | candidate_educationsUpdateManyWithWhereWithoutSchoolsInput[]
    deleteMany?: candidate_educationsScalarWhereInput | candidate_educationsScalarWhereInput[]
  }

  export type school_locationsUncheckedUpdateOneWithoutSchoolsNestedInput = {
    create?: XOR<school_locationsCreateWithoutSchoolsInput, school_locationsUncheckedCreateWithoutSchoolsInput>
    connectOrCreate?: school_locationsCreateOrConnectWithoutSchoolsInput
    upsert?: school_locationsUpsertWithoutSchoolsInput
    disconnect?: school_locationsWhereInput | boolean
    delete?: school_locationsWhereInput | boolean
    connect?: school_locationsWhereUniqueInput
    update?: XOR<XOR<school_locationsUpdateToOneWithWhereWithoutSchoolsInput, school_locationsUpdateWithoutSchoolsInput>, school_locationsUncheckedUpdateWithoutSchoolsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type candidatesCreateWithoutCandidate_educationsInput = {
    id?: string
    created_at?: Date | string
    first_name: string
    last_name: string
    sex: string
    candidate_profiles?: candidate_profilesCreateNestedOneWithoutCandidatesInput
    candidate_work_experiences?: candidate_work_experiencesCreateNestedOneWithoutCandidatesInput
  }

  export type candidatesUncheckedCreateWithoutCandidate_educationsInput = {
    id?: string
    created_at?: Date | string
    first_name: string
    last_name: string
    sex: string
    candidate_profiles?: candidate_profilesUncheckedCreateNestedOneWithoutCandidatesInput
    candidate_work_experiences?: candidate_work_experiencesUncheckedCreateNestedOneWithoutCandidatesInput
  }

  export type candidatesCreateOrConnectWithoutCandidate_educationsInput = {
    where: candidatesWhereUniqueInput
    create: XOR<candidatesCreateWithoutCandidate_educationsInput, candidatesUncheckedCreateWithoutCandidate_educationsInput>
  }

  export type schoolsCreateWithoutCandidate_educationsInput = {
    id?: string
    created_at?: Date | string
    name: string
    school_locations?: school_locationsCreateNestedOneWithoutSchoolsInput
  }

  export type schoolsUncheckedCreateWithoutCandidate_educationsInput = {
    id?: string
    created_at?: Date | string
    name: string
    school_locations?: school_locationsUncheckedCreateNestedOneWithoutSchoolsInput
  }

  export type schoolsCreateOrConnectWithoutCandidate_educationsInput = {
    where: schoolsWhereUniqueInput
    create: XOR<schoolsCreateWithoutCandidate_educationsInput, schoolsUncheckedCreateWithoutCandidate_educationsInput>
  }

  export type candidatesUpsertWithoutCandidate_educationsInput = {
    update: XOR<candidatesUpdateWithoutCandidate_educationsInput, candidatesUncheckedUpdateWithoutCandidate_educationsInput>
    create: XOR<candidatesCreateWithoutCandidate_educationsInput, candidatesUncheckedCreateWithoutCandidate_educationsInput>
    where?: candidatesWhereInput
  }

  export type candidatesUpdateToOneWithWhereWithoutCandidate_educationsInput = {
    where?: candidatesWhereInput
    data: XOR<candidatesUpdateWithoutCandidate_educationsInput, candidatesUncheckedUpdateWithoutCandidate_educationsInput>
  }

  export type candidatesUpdateWithoutCandidate_educationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    candidate_profiles?: candidate_profilesUpdateOneWithoutCandidatesNestedInput
    candidate_work_experiences?: candidate_work_experiencesUpdateOneWithoutCandidatesNestedInput
  }

  export type candidatesUncheckedUpdateWithoutCandidate_educationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    candidate_profiles?: candidate_profilesUncheckedUpdateOneWithoutCandidatesNestedInput
    candidate_work_experiences?: candidate_work_experiencesUncheckedUpdateOneWithoutCandidatesNestedInput
  }

  export type schoolsUpsertWithoutCandidate_educationsInput = {
    update: XOR<schoolsUpdateWithoutCandidate_educationsInput, schoolsUncheckedUpdateWithoutCandidate_educationsInput>
    create: XOR<schoolsCreateWithoutCandidate_educationsInput, schoolsUncheckedCreateWithoutCandidate_educationsInput>
    where?: schoolsWhereInput
  }

  export type schoolsUpdateToOneWithWhereWithoutCandidate_educationsInput = {
    where?: schoolsWhereInput
    data: XOR<schoolsUpdateWithoutCandidate_educationsInput, schoolsUncheckedUpdateWithoutCandidate_educationsInput>
  }

  export type schoolsUpdateWithoutCandidate_educationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    school_locations?: school_locationsUpdateOneWithoutSchoolsNestedInput
  }

  export type schoolsUncheckedUpdateWithoutCandidate_educationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    school_locations?: school_locationsUncheckedUpdateOneWithoutSchoolsNestedInput
  }

  export type candidatesCreateWithoutCandidate_profilesInput = {
    id?: string
    created_at?: Date | string
    first_name: string
    last_name: string
    sex: string
    candidate_educations?: candidate_educationsCreateNestedManyWithoutCandidatesInput
    candidate_work_experiences?: candidate_work_experiencesCreateNestedOneWithoutCandidatesInput
  }

  export type candidatesUncheckedCreateWithoutCandidate_profilesInput = {
    id?: string
    created_at?: Date | string
    first_name: string
    last_name: string
    sex: string
    candidate_educations?: candidate_educationsUncheckedCreateNestedManyWithoutCandidatesInput
    candidate_work_experiences?: candidate_work_experiencesUncheckedCreateNestedOneWithoutCandidatesInput
  }

  export type candidatesCreateOrConnectWithoutCandidate_profilesInput = {
    where: candidatesWhereUniqueInput
    create: XOR<candidatesCreateWithoutCandidate_profilesInput, candidatesUncheckedCreateWithoutCandidate_profilesInput>
  }

  export type candidatesUpsertWithoutCandidate_profilesInput = {
    update: XOR<candidatesUpdateWithoutCandidate_profilesInput, candidatesUncheckedUpdateWithoutCandidate_profilesInput>
    create: XOR<candidatesCreateWithoutCandidate_profilesInput, candidatesUncheckedCreateWithoutCandidate_profilesInput>
    where?: candidatesWhereInput
  }

  export type candidatesUpdateToOneWithWhereWithoutCandidate_profilesInput = {
    where?: candidatesWhereInput
    data: XOR<candidatesUpdateWithoutCandidate_profilesInput, candidatesUncheckedUpdateWithoutCandidate_profilesInput>
  }

  export type candidatesUpdateWithoutCandidate_profilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    candidate_educations?: candidate_educationsUpdateManyWithoutCandidatesNestedInput
    candidate_work_experiences?: candidate_work_experiencesUpdateOneWithoutCandidatesNestedInput
  }

  export type candidatesUncheckedUpdateWithoutCandidate_profilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    candidate_educations?: candidate_educationsUncheckedUpdateManyWithoutCandidatesNestedInput
    candidate_work_experiences?: candidate_work_experiencesUncheckedUpdateOneWithoutCandidatesNestedInput
  }

  export type candidatesCreateWithoutCandidate_work_experiencesInput = {
    id?: string
    created_at?: Date | string
    first_name: string
    last_name: string
    sex: string
    candidate_educations?: candidate_educationsCreateNestedManyWithoutCandidatesInput
    candidate_profiles?: candidate_profilesCreateNestedOneWithoutCandidatesInput
  }

  export type candidatesUncheckedCreateWithoutCandidate_work_experiencesInput = {
    id?: string
    created_at?: Date | string
    first_name: string
    last_name: string
    sex: string
    candidate_educations?: candidate_educationsUncheckedCreateNestedManyWithoutCandidatesInput
    candidate_profiles?: candidate_profilesUncheckedCreateNestedOneWithoutCandidatesInput
  }

  export type candidatesCreateOrConnectWithoutCandidate_work_experiencesInput = {
    where: candidatesWhereUniqueInput
    create: XOR<candidatesCreateWithoutCandidate_work_experiencesInput, candidatesUncheckedCreateWithoutCandidate_work_experiencesInput>
  }

  export type candidatesUpsertWithoutCandidate_work_experiencesInput = {
    update: XOR<candidatesUpdateWithoutCandidate_work_experiencesInput, candidatesUncheckedUpdateWithoutCandidate_work_experiencesInput>
    create: XOR<candidatesCreateWithoutCandidate_work_experiencesInput, candidatesUncheckedCreateWithoutCandidate_work_experiencesInput>
    where?: candidatesWhereInput
  }

  export type candidatesUpdateToOneWithWhereWithoutCandidate_work_experiencesInput = {
    where?: candidatesWhereInput
    data: XOR<candidatesUpdateWithoutCandidate_work_experiencesInput, candidatesUncheckedUpdateWithoutCandidate_work_experiencesInput>
  }

  export type candidatesUpdateWithoutCandidate_work_experiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    candidate_educations?: candidate_educationsUpdateManyWithoutCandidatesNestedInput
    candidate_profiles?: candidate_profilesUpdateOneWithoutCandidatesNestedInput
  }

  export type candidatesUncheckedUpdateWithoutCandidate_work_experiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    candidate_educations?: candidate_educationsUncheckedUpdateManyWithoutCandidatesNestedInput
    candidate_profiles?: candidate_profilesUncheckedUpdateOneWithoutCandidatesNestedInput
  }

  export type candidate_educationsCreateWithoutCandidatesInput = {
    id?: string
    created_at?: Date | string
    end_date: Date | string
    start_date: Date | string
    schools: schoolsCreateNestedOneWithoutCandidate_educationsInput
  }

  export type candidate_educationsUncheckedCreateWithoutCandidatesInput = {
    id?: string
    created_at?: Date | string
    end_date: Date | string
    school_id: string
    start_date: Date | string
  }

  export type candidate_educationsCreateOrConnectWithoutCandidatesInput = {
    where: candidate_educationsWhereUniqueInput
    create: XOR<candidate_educationsCreateWithoutCandidatesInput, candidate_educationsUncheckedCreateWithoutCandidatesInput>
  }

  export type candidate_educationsCreateManyCandidatesInputEnvelope = {
    data: candidate_educationsCreateManyCandidatesInput | candidate_educationsCreateManyCandidatesInput[]
    skipDuplicates?: boolean
  }

  export type candidate_profilesCreateWithoutCandidatesInput = {
    id?: string
    created_at?: Date | string
  }

  export type candidate_profilesUncheckedCreateWithoutCandidatesInput = {
    id?: string
    created_at?: Date | string
  }

  export type candidate_profilesCreateOrConnectWithoutCandidatesInput = {
    where: candidate_profilesWhereUniqueInput
    create: XOR<candidate_profilesCreateWithoutCandidatesInput, candidate_profilesUncheckedCreateWithoutCandidatesInput>
  }

  export type candidate_work_experiencesCreateWithoutCandidatesInput = {
    id?: string
    created_at?: Date | string
  }

  export type candidate_work_experiencesUncheckedCreateWithoutCandidatesInput = {
    id?: string
    created_at?: Date | string
  }

  export type candidate_work_experiencesCreateOrConnectWithoutCandidatesInput = {
    where: candidate_work_experiencesWhereUniqueInput
    create: XOR<candidate_work_experiencesCreateWithoutCandidatesInput, candidate_work_experiencesUncheckedCreateWithoutCandidatesInput>
  }

  export type candidate_educationsUpsertWithWhereUniqueWithoutCandidatesInput = {
    where: candidate_educationsWhereUniqueInput
    update: XOR<candidate_educationsUpdateWithoutCandidatesInput, candidate_educationsUncheckedUpdateWithoutCandidatesInput>
    create: XOR<candidate_educationsCreateWithoutCandidatesInput, candidate_educationsUncheckedCreateWithoutCandidatesInput>
  }

  export type candidate_educationsUpdateWithWhereUniqueWithoutCandidatesInput = {
    where: candidate_educationsWhereUniqueInput
    data: XOR<candidate_educationsUpdateWithoutCandidatesInput, candidate_educationsUncheckedUpdateWithoutCandidatesInput>
  }

  export type candidate_educationsUpdateManyWithWhereWithoutCandidatesInput = {
    where: candidate_educationsScalarWhereInput
    data: XOR<candidate_educationsUpdateManyMutationInput, candidate_educationsUncheckedUpdateManyWithoutCandidatesInput>
  }

  export type candidate_educationsScalarWhereInput = {
    AND?: candidate_educationsScalarWhereInput | candidate_educationsScalarWhereInput[]
    OR?: candidate_educationsScalarWhereInput[]
    NOT?: candidate_educationsScalarWhereInput | candidate_educationsScalarWhereInput[]
    id?: UuidFilter<"candidate_educations"> | string
    created_at?: DateTimeFilter<"candidate_educations"> | Date | string
    candidate_id?: UuidFilter<"candidate_educations"> | string
    end_date?: DateTimeFilter<"candidate_educations"> | Date | string
    school_id?: UuidFilter<"candidate_educations"> | string
    start_date?: DateTimeFilter<"candidate_educations"> | Date | string
  }

  export type candidate_profilesUpsertWithoutCandidatesInput = {
    update: XOR<candidate_profilesUpdateWithoutCandidatesInput, candidate_profilesUncheckedUpdateWithoutCandidatesInput>
    create: XOR<candidate_profilesCreateWithoutCandidatesInput, candidate_profilesUncheckedCreateWithoutCandidatesInput>
    where?: candidate_profilesWhereInput
  }

  export type candidate_profilesUpdateToOneWithWhereWithoutCandidatesInput = {
    where?: candidate_profilesWhereInput
    data: XOR<candidate_profilesUpdateWithoutCandidatesInput, candidate_profilesUncheckedUpdateWithoutCandidatesInput>
  }

  export type candidate_profilesUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type candidate_profilesUncheckedUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type candidate_work_experiencesUpsertWithoutCandidatesInput = {
    update: XOR<candidate_work_experiencesUpdateWithoutCandidatesInput, candidate_work_experiencesUncheckedUpdateWithoutCandidatesInput>
    create: XOR<candidate_work_experiencesCreateWithoutCandidatesInput, candidate_work_experiencesUncheckedCreateWithoutCandidatesInput>
    where?: candidate_work_experiencesWhereInput
  }

  export type candidate_work_experiencesUpdateToOneWithWhereWithoutCandidatesInput = {
    where?: candidate_work_experiencesWhereInput
    data: XOR<candidate_work_experiencesUpdateWithoutCandidatesInput, candidate_work_experiencesUncheckedUpdateWithoutCandidatesInput>
  }

  export type candidate_work_experiencesUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type candidate_work_experiencesUncheckedUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type schoolsCreateWithoutSchool_locationsInput = {
    id?: string
    created_at?: Date | string
    name: string
    candidate_educations?: candidate_educationsCreateNestedManyWithoutSchoolsInput
  }

  export type schoolsUncheckedCreateWithoutSchool_locationsInput = {
    id?: string
    created_at?: Date | string
    name: string
    candidate_educations?: candidate_educationsUncheckedCreateNestedManyWithoutSchoolsInput
  }

  export type schoolsCreateOrConnectWithoutSchool_locationsInput = {
    where: schoolsWhereUniqueInput
    create: XOR<schoolsCreateWithoutSchool_locationsInput, schoolsUncheckedCreateWithoutSchool_locationsInput>
  }

  export type schoolsUpsertWithoutSchool_locationsInput = {
    update: XOR<schoolsUpdateWithoutSchool_locationsInput, schoolsUncheckedUpdateWithoutSchool_locationsInput>
    create: XOR<schoolsCreateWithoutSchool_locationsInput, schoolsUncheckedCreateWithoutSchool_locationsInput>
    where?: schoolsWhereInput
  }

  export type schoolsUpdateToOneWithWhereWithoutSchool_locationsInput = {
    where?: schoolsWhereInput
    data: XOR<schoolsUpdateWithoutSchool_locationsInput, schoolsUncheckedUpdateWithoutSchool_locationsInput>
  }

  export type schoolsUpdateWithoutSchool_locationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    candidate_educations?: candidate_educationsUpdateManyWithoutSchoolsNestedInput
  }

  export type schoolsUncheckedUpdateWithoutSchool_locationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    candidate_educations?: candidate_educationsUncheckedUpdateManyWithoutSchoolsNestedInput
  }

  export type candidate_educationsCreateWithoutSchoolsInput = {
    id?: string
    created_at?: Date | string
    end_date: Date | string
    start_date: Date | string
    candidates: candidatesCreateNestedOneWithoutCandidate_educationsInput
  }

  export type candidate_educationsUncheckedCreateWithoutSchoolsInput = {
    id?: string
    created_at?: Date | string
    candidate_id: string
    end_date: Date | string
    start_date: Date | string
  }

  export type candidate_educationsCreateOrConnectWithoutSchoolsInput = {
    where: candidate_educationsWhereUniqueInput
    create: XOR<candidate_educationsCreateWithoutSchoolsInput, candidate_educationsUncheckedCreateWithoutSchoolsInput>
  }

  export type candidate_educationsCreateManySchoolsInputEnvelope = {
    data: candidate_educationsCreateManySchoolsInput | candidate_educationsCreateManySchoolsInput[]
    skipDuplicates?: boolean
  }

  export type school_locationsCreateWithoutSchoolsInput = {
    id?: string
    created_at?: Date | string
    city: string
    state: string
  }

  export type school_locationsUncheckedCreateWithoutSchoolsInput = {
    id?: string
    created_at?: Date | string
    city: string
    state: string
  }

  export type school_locationsCreateOrConnectWithoutSchoolsInput = {
    where: school_locationsWhereUniqueInput
    create: XOR<school_locationsCreateWithoutSchoolsInput, school_locationsUncheckedCreateWithoutSchoolsInput>
  }

  export type candidate_educationsUpsertWithWhereUniqueWithoutSchoolsInput = {
    where: candidate_educationsWhereUniqueInput
    update: XOR<candidate_educationsUpdateWithoutSchoolsInput, candidate_educationsUncheckedUpdateWithoutSchoolsInput>
    create: XOR<candidate_educationsCreateWithoutSchoolsInput, candidate_educationsUncheckedCreateWithoutSchoolsInput>
  }

  export type candidate_educationsUpdateWithWhereUniqueWithoutSchoolsInput = {
    where: candidate_educationsWhereUniqueInput
    data: XOR<candidate_educationsUpdateWithoutSchoolsInput, candidate_educationsUncheckedUpdateWithoutSchoolsInput>
  }

  export type candidate_educationsUpdateManyWithWhereWithoutSchoolsInput = {
    where: candidate_educationsScalarWhereInput
    data: XOR<candidate_educationsUpdateManyMutationInput, candidate_educationsUncheckedUpdateManyWithoutSchoolsInput>
  }

  export type school_locationsUpsertWithoutSchoolsInput = {
    update: XOR<school_locationsUpdateWithoutSchoolsInput, school_locationsUncheckedUpdateWithoutSchoolsInput>
    create: XOR<school_locationsCreateWithoutSchoolsInput, school_locationsUncheckedCreateWithoutSchoolsInput>
    where?: school_locationsWhereInput
  }

  export type school_locationsUpdateToOneWithWhereWithoutSchoolsInput = {
    where?: school_locationsWhereInput
    data: XOR<school_locationsUpdateWithoutSchoolsInput, school_locationsUncheckedUpdateWithoutSchoolsInput>
  }

  export type school_locationsUpdateWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
  }

  export type school_locationsUncheckedUpdateWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
  }

  export type candidate_educationsCreateManyCandidatesInput = {
    id?: string
    created_at?: Date | string
    end_date: Date | string
    school_id: string
    start_date: Date | string
  }

  export type candidate_educationsUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    schools?: schoolsUpdateOneRequiredWithoutCandidate_educationsNestedInput
  }

  export type candidate_educationsUncheckedUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    school_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type candidate_educationsUncheckedUpdateManyWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    school_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type candidate_educationsCreateManySchoolsInput = {
    id?: string
    created_at?: Date | string
    candidate_id: string
    end_date: Date | string
    start_date: Date | string
  }

  export type candidate_educationsUpdateWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: candidatesUpdateOneRequiredWithoutCandidate_educationsNestedInput
  }

  export type candidate_educationsUncheckedUpdateWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_id?: StringFieldUpdateOperationsInput | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type candidate_educationsUncheckedUpdateManyWithoutSchoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_id?: StringFieldUpdateOperationsInput | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}