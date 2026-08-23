
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>
/**
 * Model SocialLink
 * 
 */
export type SocialLink = $Result.DefaultSelection<Prisma.$SocialLinkPayload>
/**
 * Model Bid
 * 
 */
export type Bid = $Result.DefaultSelection<Prisma.$BidPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model ProfileView
 * 
 */
export type ProfileView = $Result.DefaultSelection<Prisma.$ProfileViewPayload>
/**
 * Model RankSnapshot
 * 
 */
export type RankSnapshot = $Result.DefaultSelection<Prisma.$RankSnapshotPayload>
/**
 * Model LinkClick
 * 
 */
export type LinkClick = $Result.DefaultSelection<Prisma.$LinkClickPayload>
/**
 * Model ProviderWebhookEvent
 * 
 */
export type ProviderWebhookEvent = $Result.DefaultSelection<Prisma.$ProviderWebhookEventPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model AnalyticsEvent
 * 
 */
export type AnalyticsEvent = $Result.DefaultSelection<Prisma.$AnalyticsEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SocialLinkType: {
  LINKEDIN: 'LINKEDIN',
  GITHUB: 'GITHUB',
  TWITTER: 'TWITTER',
  WEBSITE: 'WEBSITE',
  PORTFOLIO: 'PORTFOLIO',
  OTHER: 'OTHER'
};

export type SocialLinkType = (typeof SocialLinkType)[keyof typeof SocialLinkType]


export const BidStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  EXPIRED: 'EXPIRED',
  REFUNDED: 'REFUNDED'
};

export type BidStatus = (typeof BidStatus)[keyof typeof BidStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentProvider: {
  MOCK: 'MOCK',
  DODO: 'DODO'
};

export type PaymentProvider = (typeof PaymentProvider)[keyof typeof PaymentProvider]


export const ActivityType: {
  JOINED: 'JOINED',
  RAISED: 'RAISED'
};

export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType]

}

export type SocialLinkType = $Enums.SocialLinkType

export const SocialLinkType: typeof $Enums.SocialLinkType

export type BidStatus = $Enums.BidStatus

export const BidStatus: typeof $Enums.BidStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentProvider = $Enums.PaymentProvider

export const PaymentProvider: typeof $Enums.PaymentProvider

export type ActivityType = $Enums.ActivityType

export const ActivityType: typeof $Enums.ActivityType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialLink`: Exposes CRUD operations for the **SocialLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialLinks
    * const socialLinks = await prisma.socialLink.findMany()
    * ```
    */
  get socialLink(): Prisma.SocialLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bid`: Exposes CRUD operations for the **Bid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bids
    * const bids = await prisma.bid.findMany()
    * ```
    */
  get bid(): Prisma.BidDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profileView`: Exposes CRUD operations for the **ProfileView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfileViews
    * const profileViews = await prisma.profileView.findMany()
    * ```
    */
  get profileView(): Prisma.ProfileViewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rankSnapshot`: Exposes CRUD operations for the **RankSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RankSnapshots
    * const rankSnapshots = await prisma.rankSnapshot.findMany()
    * ```
    */
  get rankSnapshot(): Prisma.RankSnapshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linkClick`: Exposes CRUD operations for the **LinkClick** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkClicks
    * const linkClicks = await prisma.linkClick.findMany()
    * ```
    */
  get linkClick(): Prisma.LinkClickDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerWebhookEvent`: Exposes CRUD operations for the **ProviderWebhookEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderWebhookEvents
    * const providerWebhookEvents = await prisma.providerWebhookEvent.findMany()
    * ```
    */
  get providerWebhookEvent(): Prisma.ProviderWebhookEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analyticsEvent`: Exposes CRUD operations for the **AnalyticsEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalyticsEvents
    * const analyticsEvents = await prisma.analyticsEvent.findMany()
    * ```
    */
  get analyticsEvent(): Prisma.AnalyticsEventDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Category: 'Category',
    Person: 'Person',
    SocialLink: 'SocialLink',
    Bid: 'Bid',
    Payment: 'Payment',
    ProfileView: 'ProfileView',
    RankSnapshot: 'RankSnapshot',
    LinkClick: 'LinkClick',
    ProviderWebhookEvent: 'ProviderWebhookEvent',
    Activity: 'Activity',
    AnalyticsEvent: 'AnalyticsEvent'
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
      modelProps: "user" | "category" | "person" | "socialLink" | "bid" | "payment" | "profileView" | "rankSnapshot" | "linkClick" | "providerWebhookEvent" | "activity" | "analyticsEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      SocialLink: {
        payload: Prisma.$SocialLinkPayload<ExtArgs>
        fields: Prisma.SocialLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findFirst: {
            args: Prisma.SocialLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findMany: {
            args: Prisma.SocialLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          create: {
            args: Prisma.SocialLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          createMany: {
            args: Prisma.SocialLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          delete: {
            args: Prisma.SocialLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          update: {
            args: Prisma.SocialLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          deleteMany: {
            args: Prisma.SocialLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          upsert: {
            args: Prisma.SocialLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          aggregate: {
            args: Prisma.SocialLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialLink>
          }
          groupBy: {
            args: Prisma.SocialLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialLinkCountArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkCountAggregateOutputType> | number
          }
        }
      }
      Bid: {
        payload: Prisma.$BidPayload<ExtArgs>
        fields: Prisma.BidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findFirst: {
            args: Prisma.BidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findMany: {
            args: Prisma.BidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          create: {
            args: Prisma.BidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          createMany: {
            args: Prisma.BidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BidCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          delete: {
            args: Prisma.BidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          update: {
            args: Prisma.BidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          deleteMany: {
            args: Prisma.BidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BidUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          upsert: {
            args: Prisma.BidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          aggregate: {
            args: Prisma.BidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBid>
          }
          groupBy: {
            args: Prisma.BidGroupByArgs<ExtArgs>
            result: $Utils.Optional<BidGroupByOutputType>[]
          }
          count: {
            args: Prisma.BidCountArgs<ExtArgs>
            result: $Utils.Optional<BidCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      ProfileView: {
        payload: Prisma.$ProfileViewPayload<ExtArgs>
        fields: Prisma.ProfileViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileViewPayload>
          }
          findFirst: {
            args: Prisma.ProfileViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileViewPayload>
          }
          findMany: {
            args: Prisma.ProfileViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileViewPayload>[]
          }
          create: {
            args: Prisma.ProfileViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileViewPayload>
          }
          createMany: {
            args: Prisma.ProfileViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileViewPayload>[]
          }
          delete: {
            args: Prisma.ProfileViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileViewPayload>
          }
          update: {
            args: Prisma.ProfileViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileViewPayload>
          }
          deleteMany: {
            args: Prisma.ProfileViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileViewPayload>[]
          }
          upsert: {
            args: Prisma.ProfileViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileViewPayload>
          }
          aggregate: {
            args: Prisma.ProfileViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfileView>
          }
          groupBy: {
            args: Prisma.ProfileViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileViewCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileViewCountAggregateOutputType> | number
          }
        }
      }
      RankSnapshot: {
        payload: Prisma.$RankSnapshotPayload<ExtArgs>
        fields: Prisma.RankSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RankSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RankSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankSnapshotPayload>
          }
          findFirst: {
            args: Prisma.RankSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RankSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankSnapshotPayload>
          }
          findMany: {
            args: Prisma.RankSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankSnapshotPayload>[]
          }
          create: {
            args: Prisma.RankSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankSnapshotPayload>
          }
          createMany: {
            args: Prisma.RankSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RankSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankSnapshotPayload>[]
          }
          delete: {
            args: Prisma.RankSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankSnapshotPayload>
          }
          update: {
            args: Prisma.RankSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.RankSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RankSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RankSnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankSnapshotPayload>[]
          }
          upsert: {
            args: Prisma.RankSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankSnapshotPayload>
          }
          aggregate: {
            args: Prisma.RankSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRankSnapshot>
          }
          groupBy: {
            args: Prisma.RankSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<RankSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.RankSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<RankSnapshotCountAggregateOutputType> | number
          }
        }
      }
      LinkClick: {
        payload: Prisma.$LinkClickPayload<ExtArgs>
        fields: Prisma.LinkClickFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkClickFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkClickFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>
          }
          findFirst: {
            args: Prisma.LinkClickFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkClickFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>
          }
          findMany: {
            args: Prisma.LinkClickFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>[]
          }
          create: {
            args: Prisma.LinkClickCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>
          }
          createMany: {
            args: Prisma.LinkClickCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkClickCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>[]
          }
          delete: {
            args: Prisma.LinkClickDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>
          }
          update: {
            args: Prisma.LinkClickUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>
          }
          deleteMany: {
            args: Prisma.LinkClickDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkClickUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkClickUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>[]
          }
          upsert: {
            args: Prisma.LinkClickUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>
          }
          aggregate: {
            args: Prisma.LinkClickAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkClick>
          }
          groupBy: {
            args: Prisma.LinkClickGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkClickGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkClickCountArgs<ExtArgs>
            result: $Utils.Optional<LinkClickCountAggregateOutputType> | number
          }
        }
      }
      ProviderWebhookEvent: {
        payload: Prisma.$ProviderWebhookEventPayload<ExtArgs>
        fields: Prisma.ProviderWebhookEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderWebhookEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderWebhookEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderWebhookEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderWebhookEventPayload>
          }
          findFirst: {
            args: Prisma.ProviderWebhookEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderWebhookEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderWebhookEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderWebhookEventPayload>
          }
          findMany: {
            args: Prisma.ProviderWebhookEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderWebhookEventPayload>[]
          }
          create: {
            args: Prisma.ProviderWebhookEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderWebhookEventPayload>
          }
          createMany: {
            args: Prisma.ProviderWebhookEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderWebhookEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderWebhookEventPayload>[]
          }
          delete: {
            args: Prisma.ProviderWebhookEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderWebhookEventPayload>
          }
          update: {
            args: Prisma.ProviderWebhookEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderWebhookEventPayload>
          }
          deleteMany: {
            args: Prisma.ProviderWebhookEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderWebhookEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderWebhookEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderWebhookEventPayload>[]
          }
          upsert: {
            args: Prisma.ProviderWebhookEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderWebhookEventPayload>
          }
          aggregate: {
            args: Prisma.ProviderWebhookEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderWebhookEvent>
          }
          groupBy: {
            args: Prisma.ProviderWebhookEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderWebhookEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderWebhookEventCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderWebhookEventCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      AnalyticsEvent: {
        payload: Prisma.$AnalyticsEventPayload<ExtArgs>
        fields: Prisma.AnalyticsEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          findMany: {
            args: Prisma.AnalyticsEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>[]
          }
          create: {
            args: Prisma.AnalyticsEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          createMany: {
            args: Prisma.AnalyticsEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          update: {
            args: Prisma.AnalyticsEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalyticsEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>[]
          }
          upsert: {
            args: Prisma.AnalyticsEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalyticsEvent>
          }
          groupBy: {
            args: Prisma.AnalyticsEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsEventCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsEventCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    category?: CategoryOmit
    person?: PersonOmit
    socialLink?: SocialLinkOmit
    bid?: BidOmit
    payment?: PaymentOmit
    profileView?: ProfileViewOmit
    rankSnapshot?: RankSnapshotOmit
    linkClick?: LinkClickOmit
    providerWebhookEvent?: ProviderWebhookEventOmit
    activity?: ActivityOmit
    analyticsEvent?: AnalyticsEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bids: number
    payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bids?: boolean | UserCountOutputTypeCountBidsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    people: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    people?: boolean | CategoryCountOutputTypeCountPeopleArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
  }


  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    socialLinks: number
    bids: number
    views: number
    snapshots: number
    payments: number
    linkClicks: number
    activities: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socialLinks?: boolean | PersonCountOutputTypeCountSocialLinksArgs
    bids?: boolean | PersonCountOutputTypeCountBidsArgs
    views?: boolean | PersonCountOutputTypeCountViewsArgs
    snapshots?: boolean | PersonCountOutputTypeCountSnapshotsArgs
    payments?: boolean | PersonCountOutputTypeCountPaymentsArgs
    linkClicks?: boolean | PersonCountOutputTypeCountLinkClicksArgs
    activities?: boolean | PersonCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountSocialLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinkWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileViewWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RankSnapshotWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountLinkClicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkClickWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }


  /**
   * Count Type SocialLinkCountOutputType
   */

  export type SocialLinkCountOutputType = {
    linkClicks: number
  }

  export type SocialLinkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linkClicks?: boolean | SocialLinkCountOutputTypeCountLinkClicksArgs
  }

  // Custom InputTypes
  /**
   * SocialLinkCountOutputType without action
   */
  export type SocialLinkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinkCountOutputType
     */
    select?: SocialLinkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SocialLinkCountOutputType without action
   */
  export type SocialLinkCountOutputTypeCountLinkClicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkClickWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | User$personArgs<ExtArgs>
    bids?: boolean | User$bidsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | User$personArgs<ExtArgs>
    bids?: boolean | User$bidsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs> | null
      bids: Prisma.$BidPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends User$personArgs<ExtArgs> = {}>(args?: Subset<T, User$personArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bids<T extends User$bidsArgs<ExtArgs> = {}>(args?: Subset<T, User$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.person
   */
  export type User$personArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
  }

  /**
   * User.bids
   */
  export type User$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    people?: boolean | Category$peopleArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    people?: boolean | Category$peopleArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      people: Prisma.$PersonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    people<T extends Category$peopleArgs<ExtArgs> = {}>(args?: Subset<T, Category$peopleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.people
   */
  export type Category$peopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    currentBid: number | null
    totalViews: number | null
  }

  export type PersonSumAggregateOutputType = {
    currentBid: number | null
    totalViews: number | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    fullName: string | null
    headline: string | null
    bio: string | null
    imageUrl: string | null
    profileUrl: string | null
    categoryId: string | null
    location: string | null
    country: string | null
    currentBid: number | null
    currentBidAt: Date | null
    totalViews: number | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    fullName: string | null
    headline: string | null
    bio: string | null
    imageUrl: string | null
    profileUrl: string | null
    categoryId: string | null
    location: string | null
    country: string | null
    currentBid: number | null
    currentBidAt: Date | null
    totalViews: number | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    userId: number
    username: number
    fullName: number
    headline: number
    bio: number
    imageUrl: number
    profileUrl: number
    categoryId: number
    location: number
    country: number
    currentBid: number
    currentBidAt: number
    totalViews: number
    verified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    currentBid?: true
    totalViews?: true
  }

  export type PersonSumAggregateInputType = {
    currentBid?: true
    totalViews?: true
  }

  export type PersonMinAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    fullName?: true
    headline?: true
    bio?: true
    imageUrl?: true
    profileUrl?: true
    categoryId?: true
    location?: true
    country?: true
    currentBid?: true
    currentBidAt?: true
    totalViews?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    fullName?: true
    headline?: true
    bio?: true
    imageUrl?: true
    profileUrl?: true
    categoryId?: true
    location?: true
    country?: true
    currentBid?: true
    currentBidAt?: true
    totalViews?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    fullName?: true
    headline?: true
    bio?: true
    imageUrl?: true
    profileUrl?: true
    categoryId?: true
    location?: true
    country?: true
    currentBid?: true
    currentBidAt?: true
    totalViews?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: string
    userId: string | null
    username: string
    fullName: string
    headline: string
    bio: string | null
    imageUrl: string | null
    profileUrl: string | null
    categoryId: string
    location: string | null
    country: string | null
    currentBid: number
    currentBidAt: Date
    totalViews: number
    verified: boolean
    createdAt: Date
    updatedAt: Date
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    fullName?: boolean
    headline?: boolean
    bio?: boolean
    imageUrl?: boolean
    profileUrl?: boolean
    categoryId?: boolean
    location?: boolean
    country?: boolean
    currentBid?: boolean
    currentBidAt?: boolean
    totalViews?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Person$userArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    socialLinks?: boolean | Person$socialLinksArgs<ExtArgs>
    bids?: boolean | Person$bidsArgs<ExtArgs>
    views?: boolean | Person$viewsArgs<ExtArgs>
    snapshots?: boolean | Person$snapshotsArgs<ExtArgs>
    payments?: boolean | Person$paymentsArgs<ExtArgs>
    linkClicks?: boolean | Person$linkClicksArgs<ExtArgs>
    activities?: boolean | Person$activitiesArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    fullName?: boolean
    headline?: boolean
    bio?: boolean
    imageUrl?: boolean
    profileUrl?: boolean
    categoryId?: boolean
    location?: boolean
    country?: boolean
    currentBid?: boolean
    currentBidAt?: boolean
    totalViews?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Person$userArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    fullName?: boolean
    headline?: boolean
    bio?: boolean
    imageUrl?: boolean
    profileUrl?: boolean
    categoryId?: boolean
    location?: boolean
    country?: boolean
    currentBid?: boolean
    currentBidAt?: boolean
    totalViews?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Person$userArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    userId?: boolean
    username?: boolean
    fullName?: boolean
    headline?: boolean
    bio?: boolean
    imageUrl?: boolean
    profileUrl?: boolean
    categoryId?: boolean
    location?: boolean
    country?: boolean
    currentBid?: boolean
    currentBidAt?: boolean
    totalViews?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "username" | "fullName" | "headline" | "bio" | "imageUrl" | "profileUrl" | "categoryId" | "location" | "country" | "currentBid" | "currentBidAt" | "totalViews" | "verified" | "createdAt" | "updatedAt", ExtArgs["result"]["person"]>
  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Person$userArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    socialLinks?: boolean | Person$socialLinksArgs<ExtArgs>
    bids?: boolean | Person$bidsArgs<ExtArgs>
    views?: boolean | Person$viewsArgs<ExtArgs>
    snapshots?: boolean | Person$snapshotsArgs<ExtArgs>
    payments?: boolean | Person$paymentsArgs<ExtArgs>
    linkClicks?: boolean | Person$linkClicksArgs<ExtArgs>
    activities?: boolean | Person$activitiesArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Person$userArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type PersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Person$userArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      category: Prisma.$CategoryPayload<ExtArgs>
      socialLinks: Prisma.$SocialLinkPayload<ExtArgs>[]
      bids: Prisma.$BidPayload<ExtArgs>[]
      views: Prisma.$ProfileViewPayload<ExtArgs>[]
      snapshots: Prisma.$RankSnapshotPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      linkClicks: Prisma.$LinkClickPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      username: string
      fullName: string
      headline: string
      bio: string | null
      imageUrl: string | null
      profileUrl: string | null
      categoryId: string
      location: string | null
      country: string | null
      currentBid: number
      currentBidAt: Date
      totalViews: number
      verified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonFindUniqueArgs>(args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonFindFirstArgs>(args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonFindManyArgs>(args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends PersonCreateArgs>(args: SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {PersonCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCreateManyArgs>(args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {PersonCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `id`
     * const personWithIdOnly = await prisma.person.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends PersonDeleteArgs>(args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonUpdateArgs>(args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonDeleteManyArgs>(args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonUpdateManyArgs>(args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {PersonUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `id`
     * const personWithIdOnly = await prisma.person.updateManyAndReturn({
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
    updateManyAndReturn<T extends PersonUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends PersonUpsertArgs>(args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
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
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Person$userArgs<ExtArgs> = {}>(args?: Subset<T, Person$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    socialLinks<T extends Person$socialLinksArgs<ExtArgs> = {}>(args?: Subset<T, Person$socialLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bids<T extends Person$bidsArgs<ExtArgs> = {}>(args?: Subset<T, Person$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    views<T extends Person$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Person$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    snapshots<T extends Person$snapshotsArgs<ExtArgs> = {}>(args?: Subset<T, Person$snapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Person$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Person$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    linkClicks<T extends Person$linkClicksArgs<ExtArgs> = {}>(args?: Subset<T, Person$linkClicksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Person$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Person$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Person model
   */
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'String'>
    readonly userId: FieldRef<"Person", 'String'>
    readonly username: FieldRef<"Person", 'String'>
    readonly fullName: FieldRef<"Person", 'String'>
    readonly headline: FieldRef<"Person", 'String'>
    readonly bio: FieldRef<"Person", 'String'>
    readonly imageUrl: FieldRef<"Person", 'String'>
    readonly profileUrl: FieldRef<"Person", 'String'>
    readonly categoryId: FieldRef<"Person", 'String'>
    readonly location: FieldRef<"Person", 'String'>
    readonly country: FieldRef<"Person", 'String'>
    readonly currentBid: FieldRef<"Person", 'Int'>
    readonly currentBidAt: FieldRef<"Person", 'DateTime'>
    readonly totalViews: FieldRef<"Person", 'Int'>
    readonly verified: FieldRef<"Person", 'Boolean'>
    readonly createdAt: FieldRef<"Person", 'DateTime'>
    readonly updatedAt: FieldRef<"Person", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }

  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person createManyAndReturn
   */
  export type PersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person updateManyAndReturn
   */
  export type PersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }

  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to delete.
     */
    limit?: number
  }

  /**
   * Person.user
   */
  export type Person$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Person.socialLinks
   */
  export type Person$socialLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    where?: SocialLinkWhereInput
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    cursor?: SocialLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * Person.bids
   */
  export type Person$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Person.views
   */
  export type Person$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileView
     */
    select?: ProfileViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileView
     */
    omit?: ProfileViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileViewInclude<ExtArgs> | null
    where?: ProfileViewWhereInput
    orderBy?: ProfileViewOrderByWithRelationInput | ProfileViewOrderByWithRelationInput[]
    cursor?: ProfileViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileViewScalarFieldEnum | ProfileViewScalarFieldEnum[]
  }

  /**
   * Person.snapshots
   */
  export type Person$snapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankSnapshot
     */
    select?: RankSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankSnapshot
     */
    omit?: RankSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankSnapshotInclude<ExtArgs> | null
    where?: RankSnapshotWhereInput
    orderBy?: RankSnapshotOrderByWithRelationInput | RankSnapshotOrderByWithRelationInput[]
    cursor?: RankSnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RankSnapshotScalarFieldEnum | RankSnapshotScalarFieldEnum[]
  }

  /**
   * Person.payments
   */
  export type Person$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Person.linkClicks
   */
  export type Person$linkClicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    where?: LinkClickWhereInput
    orderBy?: LinkClickOrderByWithRelationInput | LinkClickOrderByWithRelationInput[]
    cursor?: LinkClickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkClickScalarFieldEnum | LinkClickScalarFieldEnum[]
  }

  /**
   * Person.activities
   */
  export type Person$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
  }


  /**
   * Model SocialLink
   */

  export type AggregateSocialLink = {
    _count: SocialLinkCountAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  export type SocialLinkMinAggregateOutputType = {
    id: string | null
    personId: string | null
    type: $Enums.SocialLinkType | null
    url: string | null
    createdAt: Date | null
  }

  export type SocialLinkMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    type: $Enums.SocialLinkType | null
    url: string | null
    createdAt: Date | null
  }

  export type SocialLinkCountAggregateOutputType = {
    id: number
    personId: number
    type: number
    url: number
    createdAt: number
    _all: number
  }


  export type SocialLinkMinAggregateInputType = {
    id?: true
    personId?: true
    type?: true
    url?: true
    createdAt?: true
  }

  export type SocialLinkMaxAggregateInputType = {
    id?: true
    personId?: true
    type?: true
    url?: true
    createdAt?: true
  }

  export type SocialLinkCountAggregateInputType = {
    id?: true
    personId?: true
    type?: true
    url?: true
    createdAt?: true
    _all?: true
  }

  export type SocialLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLink to aggregate.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialLinks
    **/
    _count?: true | SocialLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialLinkMaxAggregateInputType
  }

  export type GetSocialLinkAggregateType<T extends SocialLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialLink[P]>
      : GetScalarType<T[P], AggregateSocialLink[P]>
  }




  export type SocialLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinkWhereInput
    orderBy?: SocialLinkOrderByWithAggregationInput | SocialLinkOrderByWithAggregationInput[]
    by: SocialLinkScalarFieldEnum[] | SocialLinkScalarFieldEnum
    having?: SocialLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialLinkCountAggregateInputType | true
    _min?: SocialLinkMinAggregateInputType
    _max?: SocialLinkMaxAggregateInputType
  }

  export type SocialLinkGroupByOutputType = {
    id: string
    personId: string
    type: $Enums.SocialLinkType
    url: string
    createdAt: Date
    _count: SocialLinkCountAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  type GetSocialLinkGroupByPayload<T extends SocialLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
            : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
        }
      >
    >


  export type SocialLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    type?: boolean
    url?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    linkClicks?: boolean | SocialLink$linkClicksArgs<ExtArgs>
    _count?: boolean | SocialLinkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    type?: boolean
    url?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    type?: boolean
    url?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectScalar = {
    id?: boolean
    personId?: boolean
    type?: boolean
    url?: boolean
    createdAt?: boolean
  }

  export type SocialLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personId" | "type" | "url" | "createdAt", ExtArgs["result"]["socialLink"]>
  export type SocialLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    linkClicks?: boolean | SocialLink$linkClicksArgs<ExtArgs>
    _count?: boolean | SocialLinkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SocialLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type SocialLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $SocialLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialLink"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
      linkClicks: Prisma.$LinkClickPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      type: $Enums.SocialLinkType
      url: string
      createdAt: Date
    }, ExtArgs["result"]["socialLink"]>
    composites: {}
  }

  type SocialLinkGetPayload<S extends boolean | null | undefined | SocialLinkDefaultArgs> = $Result.GetResult<Prisma.$SocialLinkPayload, S>

  type SocialLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialLinkCountAggregateInputType | true
    }

  export interface SocialLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialLink'], meta: { name: 'SocialLink' } }
    /**
     * Find zero or one SocialLink that matches the filter.
     * @param {SocialLinkFindUniqueArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialLinkFindUniqueArgs>(args: SelectSubset<T, SocialLinkFindUniqueArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialLinkFindUniqueOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialLinkFindFirstArgs>(args?: SelectSubset<T, SocialLinkFindFirstArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialLinks
     * const socialLinks = await prisma.socialLink.findMany()
     * 
     * // Get first 10 SocialLinks
     * const socialLinks = await prisma.socialLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialLinkFindManyArgs>(args?: SelectSubset<T, SocialLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialLink.
     * @param {SocialLinkCreateArgs} args - Arguments to create a SocialLink.
     * @example
     * // Create one SocialLink
     * const SocialLink = await prisma.socialLink.create({
     *   data: {
     *     // ... data to create a SocialLink
     *   }
     * })
     * 
     */
    create<T extends SocialLinkCreateArgs>(args: SelectSubset<T, SocialLinkCreateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialLinks.
     * @param {SocialLinkCreateManyArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLink = await prisma.socialLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialLinkCreateManyArgs>(args?: SelectSubset<T, SocialLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialLinks and returns the data saved in the database.
     * @param {SocialLinkCreateManyAndReturnArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLink = await prisma.socialLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialLinks and only return the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialLink.
     * @param {SocialLinkDeleteArgs} args - Arguments to delete one SocialLink.
     * @example
     * // Delete one SocialLink
     * const SocialLink = await prisma.socialLink.delete({
     *   where: {
     *     // ... filter to delete one SocialLink
     *   }
     * })
     * 
     */
    delete<T extends SocialLinkDeleteArgs>(args: SelectSubset<T, SocialLinkDeleteArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialLink.
     * @param {SocialLinkUpdateArgs} args - Arguments to update one SocialLink.
     * @example
     * // Update one SocialLink
     * const socialLink = await prisma.socialLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialLinkUpdateArgs>(args: SelectSubset<T, SocialLinkUpdateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialLinks.
     * @param {SocialLinkDeleteManyArgs} args - Arguments to filter SocialLinks to delete.
     * @example
     * // Delete a few SocialLinks
     * const { count } = await prisma.socialLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialLinkDeleteManyArgs>(args?: SelectSubset<T, SocialLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialLinks
     * const socialLink = await prisma.socialLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialLinkUpdateManyArgs>(args: SelectSubset<T, SocialLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks and returns the data updated in the database.
     * @param {SocialLinkUpdateManyAndReturnArgs} args - Arguments to update many SocialLinks.
     * @example
     * // Update many SocialLinks
     * const socialLink = await prisma.socialLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialLinks and only return the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialLink.
     * @param {SocialLinkUpsertArgs} args - Arguments to update or create a SocialLink.
     * @example
     * // Update or create a SocialLink
     * const socialLink = await prisma.socialLink.upsert({
     *   create: {
     *     // ... data to create a SocialLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialLink we want to update
     *   }
     * })
     */
    upsert<T extends SocialLinkUpsertArgs>(args: SelectSubset<T, SocialLinkUpsertArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkCountArgs} args - Arguments to filter SocialLinks to count.
     * @example
     * // Count the number of SocialLinks
     * const count = await prisma.socialLink.count({
     *   where: {
     *     // ... the filter for the SocialLinks we want to count
     *   }
     * })
    **/
    count<T extends SocialLinkCountArgs>(
      args?: Subset<T, SocialLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialLinkAggregateArgs>(args: Subset<T, SocialLinkAggregateArgs>): Prisma.PrismaPromise<GetSocialLinkAggregateType<T>>

    /**
     * Group by SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkGroupByArgs} args - Group by arguments.
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
      T extends SocialLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialLinkGroupByArgs['orderBy'] }
        : { orderBy?: SocialLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialLink model
   */
  readonly fields: SocialLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    linkClicks<T extends SocialLink$linkClicksArgs<ExtArgs> = {}>(args?: Subset<T, SocialLink$linkClicksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SocialLink model
   */
  interface SocialLinkFieldRefs {
    readonly id: FieldRef<"SocialLink", 'String'>
    readonly personId: FieldRef<"SocialLink", 'String'>
    readonly type: FieldRef<"SocialLink", 'SocialLinkType'>
    readonly url: FieldRef<"SocialLink", 'String'>
    readonly createdAt: FieldRef<"SocialLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialLink findUnique
   */
  export type SocialLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findUniqueOrThrow
   */
  export type SocialLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findFirst
   */
  export type SocialLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findFirstOrThrow
   */
  export type SocialLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findMany
   */
  export type SocialLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLinks to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink create
   */
  export type SocialLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialLink.
     */
    data: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
  }

  /**
   * SocialLink createMany
   */
  export type SocialLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinkCreateManyInput | SocialLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialLink createManyAndReturn
   */
  export type SocialLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinkCreateManyInput | SocialLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialLink update
   */
  export type SocialLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialLink.
     */
    data: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
    /**
     * Choose, which SocialLink to update.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink updateMany
   */
  export type SocialLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to update.
     */
    limit?: number
  }

  /**
   * SocialLink updateManyAndReturn
   */
  export type SocialLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialLink upsert
   */
  export type SocialLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialLink to update in case it exists.
     */
    where: SocialLinkWhereUniqueInput
    /**
     * In case the SocialLink found by the `where` argument doesn't exist, create a new SocialLink with this data.
     */
    create: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
    /**
     * In case the SocialLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
  }

  /**
   * SocialLink delete
   */
  export type SocialLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter which SocialLink to delete.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink deleteMany
   */
  export type SocialLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLinks to delete
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to delete.
     */
    limit?: number
  }

  /**
   * SocialLink.linkClicks
   */
  export type SocialLink$linkClicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    where?: LinkClickWhereInput
    orderBy?: LinkClickOrderByWithRelationInput | LinkClickOrderByWithRelationInput[]
    cursor?: LinkClickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkClickScalarFieldEnum | LinkClickScalarFieldEnum[]
  }

  /**
   * SocialLink without action
   */
  export type SocialLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
  }


  /**
   * Model Bid
   */

  export type AggregateBid = {
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  export type BidAvgAggregateOutputType = {
    targetBidCents: number | null
    chargeAmountCents: number | null
  }

  export type BidSumAggregateOutputType = {
    targetBidCents: number | null
    chargeAmountCents: number | null
  }

  export type BidMinAggregateOutputType = {
    id: string | null
    personId: string | null
    userId: string | null
    targetBidCents: number | null
    chargeAmountCents: number | null
    status: $Enums.BidStatus | null
    providerCheckoutId: string | null
    identityInput: string | null
    createdAt: Date | null
  }

  export type BidMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    userId: string | null
    targetBidCents: number | null
    chargeAmountCents: number | null
    status: $Enums.BidStatus | null
    providerCheckoutId: string | null
    identityInput: string | null
    createdAt: Date | null
  }

  export type BidCountAggregateOutputType = {
    id: number
    personId: number
    userId: number
    targetBidCents: number
    chargeAmountCents: number
    status: number
    providerCheckoutId: number
    identityInput: number
    createdAt: number
    _all: number
  }


  export type BidAvgAggregateInputType = {
    targetBidCents?: true
    chargeAmountCents?: true
  }

  export type BidSumAggregateInputType = {
    targetBidCents?: true
    chargeAmountCents?: true
  }

  export type BidMinAggregateInputType = {
    id?: true
    personId?: true
    userId?: true
    targetBidCents?: true
    chargeAmountCents?: true
    status?: true
    providerCheckoutId?: true
    identityInput?: true
    createdAt?: true
  }

  export type BidMaxAggregateInputType = {
    id?: true
    personId?: true
    userId?: true
    targetBidCents?: true
    chargeAmountCents?: true
    status?: true
    providerCheckoutId?: true
    identityInput?: true
    createdAt?: true
  }

  export type BidCountAggregateInputType = {
    id?: true
    personId?: true
    userId?: true
    targetBidCents?: true
    chargeAmountCents?: true
    status?: true
    providerCheckoutId?: true
    identityInput?: true
    createdAt?: true
    _all?: true
  }

  export type BidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bid to aggregate.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bids
    **/
    _count?: true | BidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BidMaxAggregateInputType
  }

  export type GetBidAggregateType<T extends BidAggregateArgs> = {
        [P in keyof T & keyof AggregateBid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBid[P]>
      : GetScalarType<T[P], AggregateBid[P]>
  }




  export type BidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
    orderBy?: BidOrderByWithAggregationInput | BidOrderByWithAggregationInput[]
    by: BidScalarFieldEnum[] | BidScalarFieldEnum
    having?: BidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BidCountAggregateInputType | true
    _avg?: BidAvgAggregateInputType
    _sum?: BidSumAggregateInputType
    _min?: BidMinAggregateInputType
    _max?: BidMaxAggregateInputType
  }

  export type BidGroupByOutputType = {
    id: string
    personId: string
    userId: string | null
    targetBidCents: number
    chargeAmountCents: number
    status: $Enums.BidStatus
    providerCheckoutId: string | null
    identityInput: string | null
    createdAt: Date
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  type GetBidGroupByPayload<T extends BidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BidGroupByOutputType[P]>
            : GetScalarType<T[P], BidGroupByOutputType[P]>
        }
      >
    >


  export type BidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    userId?: boolean
    targetBidCents?: boolean
    chargeAmountCents?: boolean
    status?: boolean
    providerCheckoutId?: boolean
    identityInput?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    user?: boolean | Bid$userArgs<ExtArgs>
    payment?: boolean | Bid$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    userId?: boolean
    targetBidCents?: boolean
    chargeAmountCents?: boolean
    status?: boolean
    providerCheckoutId?: boolean
    identityInput?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    user?: boolean | Bid$userArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    userId?: boolean
    targetBidCents?: boolean
    chargeAmountCents?: boolean
    status?: boolean
    providerCheckoutId?: boolean
    identityInput?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    user?: boolean | Bid$userArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectScalar = {
    id?: boolean
    personId?: boolean
    userId?: boolean
    targetBidCents?: boolean
    chargeAmountCents?: boolean
    status?: boolean
    providerCheckoutId?: boolean
    identityInput?: boolean
    createdAt?: boolean
  }

  export type BidOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personId" | "userId" | "targetBidCents" | "chargeAmountCents" | "status" | "providerCheckoutId" | "identityInput" | "createdAt", ExtArgs["result"]["bid"]>
  export type BidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    user?: boolean | Bid$userArgs<ExtArgs>
    payment?: boolean | Bid$paymentArgs<ExtArgs>
  }
  export type BidIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    user?: boolean | Bid$userArgs<ExtArgs>
  }
  export type BidIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    user?: boolean | Bid$userArgs<ExtArgs>
  }

  export type $BidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bid"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      userId: string | null
      targetBidCents: number
      chargeAmountCents: number
      status: $Enums.BidStatus
      providerCheckoutId: string | null
      identityInput: string | null
      createdAt: Date
    }, ExtArgs["result"]["bid"]>
    composites: {}
  }

  type BidGetPayload<S extends boolean | null | undefined | BidDefaultArgs> = $Result.GetResult<Prisma.$BidPayload, S>

  type BidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BidFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BidCountAggregateInputType | true
    }

  export interface BidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bid'], meta: { name: 'Bid' } }
    /**
     * Find zero or one Bid that matches the filter.
     * @param {BidFindUniqueArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BidFindUniqueArgs>(args: SelectSubset<T, BidFindUniqueArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BidFindUniqueOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BidFindUniqueOrThrowArgs>(args: SelectSubset<T, BidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BidFindFirstArgs>(args?: SelectSubset<T, BidFindFirstArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BidFindFirstOrThrowArgs>(args?: SelectSubset<T, BidFindFirstOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bids
     * const bids = await prisma.bid.findMany()
     * 
     * // Get first 10 Bids
     * const bids = await prisma.bid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bidWithIdOnly = await prisma.bid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BidFindManyArgs>(args?: SelectSubset<T, BidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bid.
     * @param {BidCreateArgs} args - Arguments to create a Bid.
     * @example
     * // Create one Bid
     * const Bid = await prisma.bid.create({
     *   data: {
     *     // ... data to create a Bid
     *   }
     * })
     * 
     */
    create<T extends BidCreateArgs>(args: SelectSubset<T, BidCreateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bids.
     * @param {BidCreateManyArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BidCreateManyArgs>(args?: SelectSubset<T, BidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bids and returns the data saved in the database.
     * @param {BidCreateManyAndReturnArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bids and only return the `id`
     * const bidWithIdOnly = await prisma.bid.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BidCreateManyAndReturnArgs>(args?: SelectSubset<T, BidCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bid.
     * @param {BidDeleteArgs} args - Arguments to delete one Bid.
     * @example
     * // Delete one Bid
     * const Bid = await prisma.bid.delete({
     *   where: {
     *     // ... filter to delete one Bid
     *   }
     * })
     * 
     */
    delete<T extends BidDeleteArgs>(args: SelectSubset<T, BidDeleteArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bid.
     * @param {BidUpdateArgs} args - Arguments to update one Bid.
     * @example
     * // Update one Bid
     * const bid = await prisma.bid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BidUpdateArgs>(args: SelectSubset<T, BidUpdateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bids.
     * @param {BidDeleteManyArgs} args - Arguments to filter Bids to delete.
     * @example
     * // Delete a few Bids
     * const { count } = await prisma.bid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BidDeleteManyArgs>(args?: SelectSubset<T, BidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BidUpdateManyArgs>(args: SelectSubset<T, BidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids and returns the data updated in the database.
     * @param {BidUpdateManyAndReturnArgs} args - Arguments to update many Bids.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bids and only return the `id`
     * const bidWithIdOnly = await prisma.bid.updateManyAndReturn({
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
    updateManyAndReturn<T extends BidUpdateManyAndReturnArgs>(args: SelectSubset<T, BidUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bid.
     * @param {BidUpsertArgs} args - Arguments to update or create a Bid.
     * @example
     * // Update or create a Bid
     * const bid = await prisma.bid.upsert({
     *   create: {
     *     // ... data to create a Bid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bid we want to update
     *   }
     * })
     */
    upsert<T extends BidUpsertArgs>(args: SelectSubset<T, BidUpsertArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidCountArgs} args - Arguments to filter Bids to count.
     * @example
     * // Count the number of Bids
     * const count = await prisma.bid.count({
     *   where: {
     *     // ... the filter for the Bids we want to count
     *   }
     * })
    **/
    count<T extends BidCountArgs>(
      args?: Subset<T, BidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BidAggregateArgs>(args: Subset<T, BidAggregateArgs>): Prisma.PrismaPromise<GetBidAggregateType<T>>

    /**
     * Group by Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidGroupByArgs} args - Group by arguments.
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
      T extends BidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BidGroupByArgs['orderBy'] }
        : { orderBy?: BidGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bid model
   */
  readonly fields: BidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Bid$userArgs<ExtArgs> = {}>(args?: Subset<T, Bid$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment<T extends Bid$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Bid$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bid model
   */
  interface BidFieldRefs {
    readonly id: FieldRef<"Bid", 'String'>
    readonly personId: FieldRef<"Bid", 'String'>
    readonly userId: FieldRef<"Bid", 'String'>
    readonly targetBidCents: FieldRef<"Bid", 'Int'>
    readonly chargeAmountCents: FieldRef<"Bid", 'Int'>
    readonly status: FieldRef<"Bid", 'BidStatus'>
    readonly providerCheckoutId: FieldRef<"Bid", 'String'>
    readonly identityInput: FieldRef<"Bid", 'String'>
    readonly createdAt: FieldRef<"Bid", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bid findUnique
   */
  export type BidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findUniqueOrThrow
   */
  export type BidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findFirst
   */
  export type BidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findFirstOrThrow
   */
  export type BidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findMany
   */
  export type BidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bids to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid create
   */
  export type BidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to create a Bid.
     */
    data: XOR<BidCreateInput, BidUncheckedCreateInput>
  }

  /**
   * Bid createMany
   */
  export type BidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bid createManyAndReturn
   */
  export type BidCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bid update
   */
  export type BidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to update a Bid.
     */
    data: XOR<BidUpdateInput, BidUncheckedUpdateInput>
    /**
     * Choose, which Bid to update.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid updateMany
   */
  export type BidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to update.
     */
    limit?: number
  }

  /**
   * Bid updateManyAndReturn
   */
  export type BidUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bid upsert
   */
  export type BidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The filter to search for the Bid to update in case it exists.
     */
    where: BidWhereUniqueInput
    /**
     * In case the Bid found by the `where` argument doesn't exist, create a new Bid with this data.
     */
    create: XOR<BidCreateInput, BidUncheckedCreateInput>
    /**
     * In case the Bid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BidUpdateInput, BidUncheckedUpdateInput>
  }

  /**
   * Bid delete
   */
  export type BidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter which Bid to delete.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid deleteMany
   */
  export type BidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bids to delete
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to delete.
     */
    limit?: number
  }

  /**
   * Bid.user
   */
  export type Bid$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Bid.payment
   */
  export type Bid$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Bid without action
   */
  export type BidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    personId: string | null
    bidId: string | null
    amount: number | null
    currency: string | null
    provider: $Enums.PaymentProvider | null
    providerPaymentId: string | null
    providerCheckoutId: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    personId: string | null
    bidId: string | null
    amount: number | null
    currency: string | null
    provider: $Enums.PaymentProvider | null
    providerPaymentId: string | null
    providerCheckoutId: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    personId: number
    bidId: number
    amount: number
    currency: number
    provider: number
    providerPaymentId: number
    providerCheckoutId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    personId?: true
    bidId?: true
    amount?: true
    currency?: true
    provider?: true
    providerPaymentId?: true
    providerCheckoutId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    personId?: true
    bidId?: true
    amount?: true
    currency?: true
    provider?: true
    providerPaymentId?: true
    providerCheckoutId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    personId?: true
    bidId?: true
    amount?: true
    currency?: true
    provider?: true
    providerPaymentId?: true
    providerCheckoutId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    personId: string
    bidId: string
    amount: number
    currency: string
    provider: $Enums.PaymentProvider
    providerPaymentId: string | null
    providerCheckoutId: string | null
    status: $Enums.PaymentStatus
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    personId?: boolean
    bidId?: boolean
    amount?: boolean
    currency?: boolean
    provider?: boolean
    providerPaymentId?: boolean
    providerCheckoutId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
    bid?: boolean | BidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    personId?: boolean
    bidId?: boolean
    amount?: boolean
    currency?: boolean
    provider?: boolean
    providerPaymentId?: boolean
    providerCheckoutId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
    bid?: boolean | BidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    personId?: boolean
    bidId?: boolean
    amount?: boolean
    currency?: boolean
    provider?: boolean
    providerPaymentId?: boolean
    providerCheckoutId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
    bid?: boolean | BidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    personId?: boolean
    bidId?: boolean
    amount?: boolean
    currency?: boolean
    provider?: boolean
    providerPaymentId?: boolean
    providerCheckoutId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "personId" | "bidId" | "amount" | "currency" | "provider" | "providerPaymentId" | "providerCheckoutId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
    bid?: boolean | BidDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
    bid?: boolean | BidDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
    bid?: boolean | BidDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      person: Prisma.$PersonPayload<ExtArgs>
      bid: Prisma.$BidPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      personId: string
      bidId: string
      amount: number
      currency: string
      provider: $Enums.PaymentProvider
      providerPaymentId: string | null
      providerCheckoutId: string | null
      status: $Enums.PaymentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bid<T extends BidDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BidDefaultArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly personId: FieldRef<"Payment", 'String'>
    readonly bidId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly provider: FieldRef<"Payment", 'PaymentProvider'>
    readonly providerPaymentId: FieldRef<"Payment", 'String'>
    readonly providerCheckoutId: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model ProfileView
   */

  export type AggregateProfileView = {
    _count: ProfileViewCountAggregateOutputType | null
    _min: ProfileViewMinAggregateOutputType | null
    _max: ProfileViewMaxAggregateOutputType | null
  }

  export type ProfileViewMinAggregateOutputType = {
    id: string | null
    personId: string | null
    ipHash: string | null
    userAgentHash: string | null
    createdAt: Date | null
  }

  export type ProfileViewMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    ipHash: string | null
    userAgentHash: string | null
    createdAt: Date | null
  }

  export type ProfileViewCountAggregateOutputType = {
    id: number
    personId: number
    ipHash: number
    userAgentHash: number
    createdAt: number
    _all: number
  }


  export type ProfileViewMinAggregateInputType = {
    id?: true
    personId?: true
    ipHash?: true
    userAgentHash?: true
    createdAt?: true
  }

  export type ProfileViewMaxAggregateInputType = {
    id?: true
    personId?: true
    ipHash?: true
    userAgentHash?: true
    createdAt?: true
  }

  export type ProfileViewCountAggregateInputType = {
    id?: true
    personId?: true
    ipHash?: true
    userAgentHash?: true
    createdAt?: true
    _all?: true
  }

  export type ProfileViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileView to aggregate.
     */
    where?: ProfileViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileViews to fetch.
     */
    orderBy?: ProfileViewOrderByWithRelationInput | ProfileViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfileViews
    **/
    _count?: true | ProfileViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileViewMaxAggregateInputType
  }

  export type GetProfileViewAggregateType<T extends ProfileViewAggregateArgs> = {
        [P in keyof T & keyof AggregateProfileView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfileView[P]>
      : GetScalarType<T[P], AggregateProfileView[P]>
  }




  export type ProfileViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileViewWhereInput
    orderBy?: ProfileViewOrderByWithAggregationInput | ProfileViewOrderByWithAggregationInput[]
    by: ProfileViewScalarFieldEnum[] | ProfileViewScalarFieldEnum
    having?: ProfileViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileViewCountAggregateInputType | true
    _min?: ProfileViewMinAggregateInputType
    _max?: ProfileViewMaxAggregateInputType
  }

  export type ProfileViewGroupByOutputType = {
    id: string
    personId: string
    ipHash: string
    userAgentHash: string
    createdAt: Date
    _count: ProfileViewCountAggregateOutputType | null
    _min: ProfileViewMinAggregateOutputType | null
    _max: ProfileViewMaxAggregateOutputType | null
  }

  type GetProfileViewGroupByPayload<T extends ProfileViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileViewGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileViewGroupByOutputType[P]>
        }
      >
    >


  export type ProfileViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    ipHash?: boolean
    userAgentHash?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileView"]>

  export type ProfileViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    ipHash?: boolean
    userAgentHash?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileView"]>

  export type ProfileViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    ipHash?: boolean
    userAgentHash?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileView"]>

  export type ProfileViewSelectScalar = {
    id?: boolean
    personId?: boolean
    ipHash?: boolean
    userAgentHash?: boolean
    createdAt?: boolean
  }

  export type ProfileViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personId" | "ipHash" | "userAgentHash" | "createdAt", ExtArgs["result"]["profileView"]>
  export type ProfileViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type ProfileViewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type ProfileViewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $ProfileViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfileView"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      ipHash: string
      userAgentHash: string
      createdAt: Date
    }, ExtArgs["result"]["profileView"]>
    composites: {}
  }

  type ProfileViewGetPayload<S extends boolean | null | undefined | ProfileViewDefaultArgs> = $Result.GetResult<Prisma.$ProfileViewPayload, S>

  type ProfileViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileViewCountAggregateInputType | true
    }

  export interface ProfileViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfileView'], meta: { name: 'ProfileView' } }
    /**
     * Find zero or one ProfileView that matches the filter.
     * @param {ProfileViewFindUniqueArgs} args - Arguments to find a ProfileView
     * @example
     * // Get one ProfileView
     * const profileView = await prisma.profileView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileViewFindUniqueArgs>(args: SelectSubset<T, ProfileViewFindUniqueArgs<ExtArgs>>): Prisma__ProfileViewClient<$Result.GetResult<Prisma.$ProfileViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfileView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileViewFindUniqueOrThrowArgs} args - Arguments to find a ProfileView
     * @example
     * // Get one ProfileView
     * const profileView = await prisma.profileView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileViewFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileViewClient<$Result.GetResult<Prisma.$ProfileViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileViewFindFirstArgs} args - Arguments to find a ProfileView
     * @example
     * // Get one ProfileView
     * const profileView = await prisma.profileView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileViewFindFirstArgs>(args?: SelectSubset<T, ProfileViewFindFirstArgs<ExtArgs>>): Prisma__ProfileViewClient<$Result.GetResult<Prisma.$ProfileViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileViewFindFirstOrThrowArgs} args - Arguments to find a ProfileView
     * @example
     * // Get one ProfileView
     * const profileView = await prisma.profileView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileViewFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileViewClient<$Result.GetResult<Prisma.$ProfileViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfileViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileViews
     * const profileViews = await prisma.profileView.findMany()
     * 
     * // Get first 10 ProfileViews
     * const profileViews = await prisma.profileView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileViewWithIdOnly = await prisma.profileView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileViewFindManyArgs>(args?: SelectSubset<T, ProfileViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfileView.
     * @param {ProfileViewCreateArgs} args - Arguments to create a ProfileView.
     * @example
     * // Create one ProfileView
     * const ProfileView = await prisma.profileView.create({
     *   data: {
     *     // ... data to create a ProfileView
     *   }
     * })
     * 
     */
    create<T extends ProfileViewCreateArgs>(args: SelectSubset<T, ProfileViewCreateArgs<ExtArgs>>): Prisma__ProfileViewClient<$Result.GetResult<Prisma.$ProfileViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfileViews.
     * @param {ProfileViewCreateManyArgs} args - Arguments to create many ProfileViews.
     * @example
     * // Create many ProfileViews
     * const profileView = await prisma.profileView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileViewCreateManyArgs>(args?: SelectSubset<T, ProfileViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfileViews and returns the data saved in the database.
     * @param {ProfileViewCreateManyAndReturnArgs} args - Arguments to create many ProfileViews.
     * @example
     * // Create many ProfileViews
     * const profileView = await prisma.profileView.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfileViews and only return the `id`
     * const profileViewWithIdOnly = await prisma.profileView.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileViewCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfileView.
     * @param {ProfileViewDeleteArgs} args - Arguments to delete one ProfileView.
     * @example
     * // Delete one ProfileView
     * const ProfileView = await prisma.profileView.delete({
     *   where: {
     *     // ... filter to delete one ProfileView
     *   }
     * })
     * 
     */
    delete<T extends ProfileViewDeleteArgs>(args: SelectSubset<T, ProfileViewDeleteArgs<ExtArgs>>): Prisma__ProfileViewClient<$Result.GetResult<Prisma.$ProfileViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfileView.
     * @param {ProfileViewUpdateArgs} args - Arguments to update one ProfileView.
     * @example
     * // Update one ProfileView
     * const profileView = await prisma.profileView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileViewUpdateArgs>(args: SelectSubset<T, ProfileViewUpdateArgs<ExtArgs>>): Prisma__ProfileViewClient<$Result.GetResult<Prisma.$ProfileViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfileViews.
     * @param {ProfileViewDeleteManyArgs} args - Arguments to filter ProfileViews to delete.
     * @example
     * // Delete a few ProfileViews
     * const { count } = await prisma.profileView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileViewDeleteManyArgs>(args?: SelectSubset<T, ProfileViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileViews
     * const profileView = await prisma.profileView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileViewUpdateManyArgs>(args: SelectSubset<T, ProfileViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileViews and returns the data updated in the database.
     * @param {ProfileViewUpdateManyAndReturnArgs} args - Arguments to update many ProfileViews.
     * @example
     * // Update many ProfileViews
     * const profileView = await prisma.profileView.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfileViews and only return the `id`
     * const profileViewWithIdOnly = await prisma.profileView.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileViewUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfileView.
     * @param {ProfileViewUpsertArgs} args - Arguments to update or create a ProfileView.
     * @example
     * // Update or create a ProfileView
     * const profileView = await prisma.profileView.upsert({
     *   create: {
     *     // ... data to create a ProfileView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileView we want to update
     *   }
     * })
     */
    upsert<T extends ProfileViewUpsertArgs>(args: SelectSubset<T, ProfileViewUpsertArgs<ExtArgs>>): Prisma__ProfileViewClient<$Result.GetResult<Prisma.$ProfileViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfileViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileViewCountArgs} args - Arguments to filter ProfileViews to count.
     * @example
     * // Count the number of ProfileViews
     * const count = await prisma.profileView.count({
     *   where: {
     *     // ... the filter for the ProfileViews we want to count
     *   }
     * })
    **/
    count<T extends ProfileViewCountArgs>(
      args?: Subset<T, ProfileViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfileView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileViewAggregateArgs>(args: Subset<T, ProfileViewAggregateArgs>): Prisma.PrismaPromise<GetProfileViewAggregateType<T>>

    /**
     * Group by ProfileView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileViewGroupByArgs} args - Group by arguments.
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
      T extends ProfileViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileViewGroupByArgs['orderBy'] }
        : { orderBy?: ProfileViewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfileView model
   */
  readonly fields: ProfileViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfileView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProfileView model
   */
  interface ProfileViewFieldRefs {
    readonly id: FieldRef<"ProfileView", 'String'>
    readonly personId: FieldRef<"ProfileView", 'String'>
    readonly ipHash: FieldRef<"ProfileView", 'String'>
    readonly userAgentHash: FieldRef<"ProfileView", 'String'>
    readonly createdAt: FieldRef<"ProfileView", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfileView findUnique
   */
  export type ProfileViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileView
     */
    select?: ProfileViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileView
     */
    omit?: ProfileViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileViewInclude<ExtArgs> | null
    /**
     * Filter, which ProfileView to fetch.
     */
    where: ProfileViewWhereUniqueInput
  }

  /**
   * ProfileView findUniqueOrThrow
   */
  export type ProfileViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileView
     */
    select?: ProfileViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileView
     */
    omit?: ProfileViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileViewInclude<ExtArgs> | null
    /**
     * Filter, which ProfileView to fetch.
     */
    where: ProfileViewWhereUniqueInput
  }

  /**
   * ProfileView findFirst
   */
  export type ProfileViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileView
     */
    select?: ProfileViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileView
     */
    omit?: ProfileViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileViewInclude<ExtArgs> | null
    /**
     * Filter, which ProfileView to fetch.
     */
    where?: ProfileViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileViews to fetch.
     */
    orderBy?: ProfileViewOrderByWithRelationInput | ProfileViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileViews.
     */
    cursor?: ProfileViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileViews.
     */
    distinct?: ProfileViewScalarFieldEnum | ProfileViewScalarFieldEnum[]
  }

  /**
   * ProfileView findFirstOrThrow
   */
  export type ProfileViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileView
     */
    select?: ProfileViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileView
     */
    omit?: ProfileViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileViewInclude<ExtArgs> | null
    /**
     * Filter, which ProfileView to fetch.
     */
    where?: ProfileViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileViews to fetch.
     */
    orderBy?: ProfileViewOrderByWithRelationInput | ProfileViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileViews.
     */
    cursor?: ProfileViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileViews.
     */
    distinct?: ProfileViewScalarFieldEnum | ProfileViewScalarFieldEnum[]
  }

  /**
   * ProfileView findMany
   */
  export type ProfileViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileView
     */
    select?: ProfileViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileView
     */
    omit?: ProfileViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileViewInclude<ExtArgs> | null
    /**
     * Filter, which ProfileViews to fetch.
     */
    where?: ProfileViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileViews to fetch.
     */
    orderBy?: ProfileViewOrderByWithRelationInput | ProfileViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfileViews.
     */
    cursor?: ProfileViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileViews.
     */
    skip?: number
    distinct?: ProfileViewScalarFieldEnum | ProfileViewScalarFieldEnum[]
  }

  /**
   * ProfileView create
   */
  export type ProfileViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileView
     */
    select?: ProfileViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileView
     */
    omit?: ProfileViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileViewInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfileView.
     */
    data: XOR<ProfileViewCreateInput, ProfileViewUncheckedCreateInput>
  }

  /**
   * ProfileView createMany
   */
  export type ProfileViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileViews.
     */
    data: ProfileViewCreateManyInput | ProfileViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileView createManyAndReturn
   */
  export type ProfileViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileView
     */
    select?: ProfileViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileView
     */
    omit?: ProfileViewOmit<ExtArgs> | null
    /**
     * The data used to create many ProfileViews.
     */
    data: ProfileViewCreateManyInput | ProfileViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileView update
   */
  export type ProfileViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileView
     */
    select?: ProfileViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileView
     */
    omit?: ProfileViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileViewInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfileView.
     */
    data: XOR<ProfileViewUpdateInput, ProfileViewUncheckedUpdateInput>
    /**
     * Choose, which ProfileView to update.
     */
    where: ProfileViewWhereUniqueInput
  }

  /**
   * ProfileView updateMany
   */
  export type ProfileViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileViews.
     */
    data: XOR<ProfileViewUpdateManyMutationInput, ProfileViewUncheckedUpdateManyInput>
    /**
     * Filter which ProfileViews to update
     */
    where?: ProfileViewWhereInput
    /**
     * Limit how many ProfileViews to update.
     */
    limit?: number
  }

  /**
   * ProfileView updateManyAndReturn
   */
  export type ProfileViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileView
     */
    select?: ProfileViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileView
     */
    omit?: ProfileViewOmit<ExtArgs> | null
    /**
     * The data used to update ProfileViews.
     */
    data: XOR<ProfileViewUpdateManyMutationInput, ProfileViewUncheckedUpdateManyInput>
    /**
     * Filter which ProfileViews to update
     */
    where?: ProfileViewWhereInput
    /**
     * Limit how many ProfileViews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileViewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileView upsert
   */
  export type ProfileViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileView
     */
    select?: ProfileViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileView
     */
    omit?: ProfileViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileViewInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfileView to update in case it exists.
     */
    where: ProfileViewWhereUniqueInput
    /**
     * In case the ProfileView found by the `where` argument doesn't exist, create a new ProfileView with this data.
     */
    create: XOR<ProfileViewCreateInput, ProfileViewUncheckedCreateInput>
    /**
     * In case the ProfileView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileViewUpdateInput, ProfileViewUncheckedUpdateInput>
  }

  /**
   * ProfileView delete
   */
  export type ProfileViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileView
     */
    select?: ProfileViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileView
     */
    omit?: ProfileViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileViewInclude<ExtArgs> | null
    /**
     * Filter which ProfileView to delete.
     */
    where: ProfileViewWhereUniqueInput
  }

  /**
   * ProfileView deleteMany
   */
  export type ProfileViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileViews to delete
     */
    where?: ProfileViewWhereInput
    /**
     * Limit how many ProfileViews to delete.
     */
    limit?: number
  }

  /**
   * ProfileView without action
   */
  export type ProfileViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileView
     */
    select?: ProfileViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileView
     */
    omit?: ProfileViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileViewInclude<ExtArgs> | null
  }


  /**
   * Model RankSnapshot
   */

  export type AggregateRankSnapshot = {
    _count: RankSnapshotCountAggregateOutputType | null
    _avg: RankSnapshotAvgAggregateOutputType | null
    _sum: RankSnapshotSumAggregateOutputType | null
    _min: RankSnapshotMinAggregateOutputType | null
    _max: RankSnapshotMaxAggregateOutputType | null
  }

  export type RankSnapshotAvgAggregateOutputType = {
    rank: number | null
    bid: number | null
  }

  export type RankSnapshotSumAggregateOutputType = {
    rank: number | null
    bid: number | null
  }

  export type RankSnapshotMinAggregateOutputType = {
    id: string | null
    personId: string | null
    rank: number | null
    bid: number | null
    createdAt: Date | null
  }

  export type RankSnapshotMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    rank: number | null
    bid: number | null
    createdAt: Date | null
  }

  export type RankSnapshotCountAggregateOutputType = {
    id: number
    personId: number
    rank: number
    bid: number
    createdAt: number
    _all: number
  }


  export type RankSnapshotAvgAggregateInputType = {
    rank?: true
    bid?: true
  }

  export type RankSnapshotSumAggregateInputType = {
    rank?: true
    bid?: true
  }

  export type RankSnapshotMinAggregateInputType = {
    id?: true
    personId?: true
    rank?: true
    bid?: true
    createdAt?: true
  }

  export type RankSnapshotMaxAggregateInputType = {
    id?: true
    personId?: true
    rank?: true
    bid?: true
    createdAt?: true
  }

  export type RankSnapshotCountAggregateInputType = {
    id?: true
    personId?: true
    rank?: true
    bid?: true
    createdAt?: true
    _all?: true
  }

  export type RankSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RankSnapshot to aggregate.
     */
    where?: RankSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RankSnapshots to fetch.
     */
    orderBy?: RankSnapshotOrderByWithRelationInput | RankSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RankSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RankSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RankSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RankSnapshots
    **/
    _count?: true | RankSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RankSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RankSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RankSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RankSnapshotMaxAggregateInputType
  }

  export type GetRankSnapshotAggregateType<T extends RankSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateRankSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRankSnapshot[P]>
      : GetScalarType<T[P], AggregateRankSnapshot[P]>
  }




  export type RankSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RankSnapshotWhereInput
    orderBy?: RankSnapshotOrderByWithAggregationInput | RankSnapshotOrderByWithAggregationInput[]
    by: RankSnapshotScalarFieldEnum[] | RankSnapshotScalarFieldEnum
    having?: RankSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RankSnapshotCountAggregateInputType | true
    _avg?: RankSnapshotAvgAggregateInputType
    _sum?: RankSnapshotSumAggregateInputType
    _min?: RankSnapshotMinAggregateInputType
    _max?: RankSnapshotMaxAggregateInputType
  }

  export type RankSnapshotGroupByOutputType = {
    id: string
    personId: string
    rank: number
    bid: number
    createdAt: Date
    _count: RankSnapshotCountAggregateOutputType | null
    _avg: RankSnapshotAvgAggregateOutputType | null
    _sum: RankSnapshotSumAggregateOutputType | null
    _min: RankSnapshotMinAggregateOutputType | null
    _max: RankSnapshotMaxAggregateOutputType | null
  }

  type GetRankSnapshotGroupByPayload<T extends RankSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RankSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RankSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RankSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], RankSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type RankSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    rank?: boolean
    bid?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rankSnapshot"]>

  export type RankSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    rank?: boolean
    bid?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rankSnapshot"]>

  export type RankSnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    rank?: boolean
    bid?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rankSnapshot"]>

  export type RankSnapshotSelectScalar = {
    id?: boolean
    personId?: boolean
    rank?: boolean
    bid?: boolean
    createdAt?: boolean
  }

  export type RankSnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personId" | "rank" | "bid" | "createdAt", ExtArgs["result"]["rankSnapshot"]>
  export type RankSnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type RankSnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type RankSnapshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $RankSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RankSnapshot"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      rank: number
      bid: number
      createdAt: Date
    }, ExtArgs["result"]["rankSnapshot"]>
    composites: {}
  }

  type RankSnapshotGetPayload<S extends boolean | null | undefined | RankSnapshotDefaultArgs> = $Result.GetResult<Prisma.$RankSnapshotPayload, S>

  type RankSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RankSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RankSnapshotCountAggregateInputType | true
    }

  export interface RankSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RankSnapshot'], meta: { name: 'RankSnapshot' } }
    /**
     * Find zero or one RankSnapshot that matches the filter.
     * @param {RankSnapshotFindUniqueArgs} args - Arguments to find a RankSnapshot
     * @example
     * // Get one RankSnapshot
     * const rankSnapshot = await prisma.rankSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RankSnapshotFindUniqueArgs>(args: SelectSubset<T, RankSnapshotFindUniqueArgs<ExtArgs>>): Prisma__RankSnapshotClient<$Result.GetResult<Prisma.$RankSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RankSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RankSnapshotFindUniqueOrThrowArgs} args - Arguments to find a RankSnapshot
     * @example
     * // Get one RankSnapshot
     * const rankSnapshot = await prisma.rankSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RankSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, RankSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RankSnapshotClient<$Result.GetResult<Prisma.$RankSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RankSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankSnapshotFindFirstArgs} args - Arguments to find a RankSnapshot
     * @example
     * // Get one RankSnapshot
     * const rankSnapshot = await prisma.rankSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RankSnapshotFindFirstArgs>(args?: SelectSubset<T, RankSnapshotFindFirstArgs<ExtArgs>>): Prisma__RankSnapshotClient<$Result.GetResult<Prisma.$RankSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RankSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankSnapshotFindFirstOrThrowArgs} args - Arguments to find a RankSnapshot
     * @example
     * // Get one RankSnapshot
     * const rankSnapshot = await prisma.rankSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RankSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, RankSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__RankSnapshotClient<$Result.GetResult<Prisma.$RankSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RankSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RankSnapshots
     * const rankSnapshots = await prisma.rankSnapshot.findMany()
     * 
     * // Get first 10 RankSnapshots
     * const rankSnapshots = await prisma.rankSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rankSnapshotWithIdOnly = await prisma.rankSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RankSnapshotFindManyArgs>(args?: SelectSubset<T, RankSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RankSnapshot.
     * @param {RankSnapshotCreateArgs} args - Arguments to create a RankSnapshot.
     * @example
     * // Create one RankSnapshot
     * const RankSnapshot = await prisma.rankSnapshot.create({
     *   data: {
     *     // ... data to create a RankSnapshot
     *   }
     * })
     * 
     */
    create<T extends RankSnapshotCreateArgs>(args: SelectSubset<T, RankSnapshotCreateArgs<ExtArgs>>): Prisma__RankSnapshotClient<$Result.GetResult<Prisma.$RankSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RankSnapshots.
     * @param {RankSnapshotCreateManyArgs} args - Arguments to create many RankSnapshots.
     * @example
     * // Create many RankSnapshots
     * const rankSnapshot = await prisma.rankSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RankSnapshotCreateManyArgs>(args?: SelectSubset<T, RankSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RankSnapshots and returns the data saved in the database.
     * @param {RankSnapshotCreateManyAndReturnArgs} args - Arguments to create many RankSnapshots.
     * @example
     * // Create many RankSnapshots
     * const rankSnapshot = await prisma.rankSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RankSnapshots and only return the `id`
     * const rankSnapshotWithIdOnly = await prisma.rankSnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RankSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, RankSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RankSnapshot.
     * @param {RankSnapshotDeleteArgs} args - Arguments to delete one RankSnapshot.
     * @example
     * // Delete one RankSnapshot
     * const RankSnapshot = await prisma.rankSnapshot.delete({
     *   where: {
     *     // ... filter to delete one RankSnapshot
     *   }
     * })
     * 
     */
    delete<T extends RankSnapshotDeleteArgs>(args: SelectSubset<T, RankSnapshotDeleteArgs<ExtArgs>>): Prisma__RankSnapshotClient<$Result.GetResult<Prisma.$RankSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RankSnapshot.
     * @param {RankSnapshotUpdateArgs} args - Arguments to update one RankSnapshot.
     * @example
     * // Update one RankSnapshot
     * const rankSnapshot = await prisma.rankSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RankSnapshotUpdateArgs>(args: SelectSubset<T, RankSnapshotUpdateArgs<ExtArgs>>): Prisma__RankSnapshotClient<$Result.GetResult<Prisma.$RankSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RankSnapshots.
     * @param {RankSnapshotDeleteManyArgs} args - Arguments to filter RankSnapshots to delete.
     * @example
     * // Delete a few RankSnapshots
     * const { count } = await prisma.rankSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RankSnapshotDeleteManyArgs>(args?: SelectSubset<T, RankSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RankSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RankSnapshots
     * const rankSnapshot = await prisma.rankSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RankSnapshotUpdateManyArgs>(args: SelectSubset<T, RankSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RankSnapshots and returns the data updated in the database.
     * @param {RankSnapshotUpdateManyAndReturnArgs} args - Arguments to update many RankSnapshots.
     * @example
     * // Update many RankSnapshots
     * const rankSnapshot = await prisma.rankSnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RankSnapshots and only return the `id`
     * const rankSnapshotWithIdOnly = await prisma.rankSnapshot.updateManyAndReturn({
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
    updateManyAndReturn<T extends RankSnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, RankSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RankSnapshot.
     * @param {RankSnapshotUpsertArgs} args - Arguments to update or create a RankSnapshot.
     * @example
     * // Update or create a RankSnapshot
     * const rankSnapshot = await prisma.rankSnapshot.upsert({
     *   create: {
     *     // ... data to create a RankSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RankSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends RankSnapshotUpsertArgs>(args: SelectSubset<T, RankSnapshotUpsertArgs<ExtArgs>>): Prisma__RankSnapshotClient<$Result.GetResult<Prisma.$RankSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RankSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankSnapshotCountArgs} args - Arguments to filter RankSnapshots to count.
     * @example
     * // Count the number of RankSnapshots
     * const count = await prisma.rankSnapshot.count({
     *   where: {
     *     // ... the filter for the RankSnapshots we want to count
     *   }
     * })
    **/
    count<T extends RankSnapshotCountArgs>(
      args?: Subset<T, RankSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RankSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RankSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RankSnapshotAggregateArgs>(args: Subset<T, RankSnapshotAggregateArgs>): Prisma.PrismaPromise<GetRankSnapshotAggregateType<T>>

    /**
     * Group by RankSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankSnapshotGroupByArgs} args - Group by arguments.
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
      T extends RankSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RankSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: RankSnapshotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RankSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRankSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RankSnapshot model
   */
  readonly fields: RankSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RankSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RankSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RankSnapshot model
   */
  interface RankSnapshotFieldRefs {
    readonly id: FieldRef<"RankSnapshot", 'String'>
    readonly personId: FieldRef<"RankSnapshot", 'String'>
    readonly rank: FieldRef<"RankSnapshot", 'Int'>
    readonly bid: FieldRef<"RankSnapshot", 'Int'>
    readonly createdAt: FieldRef<"RankSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RankSnapshot findUnique
   */
  export type RankSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankSnapshot
     */
    select?: RankSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankSnapshot
     */
    omit?: RankSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which RankSnapshot to fetch.
     */
    where: RankSnapshotWhereUniqueInput
  }

  /**
   * RankSnapshot findUniqueOrThrow
   */
  export type RankSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankSnapshot
     */
    select?: RankSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankSnapshot
     */
    omit?: RankSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which RankSnapshot to fetch.
     */
    where: RankSnapshotWhereUniqueInput
  }

  /**
   * RankSnapshot findFirst
   */
  export type RankSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankSnapshot
     */
    select?: RankSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankSnapshot
     */
    omit?: RankSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which RankSnapshot to fetch.
     */
    where?: RankSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RankSnapshots to fetch.
     */
    orderBy?: RankSnapshotOrderByWithRelationInput | RankSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RankSnapshots.
     */
    cursor?: RankSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RankSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RankSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RankSnapshots.
     */
    distinct?: RankSnapshotScalarFieldEnum | RankSnapshotScalarFieldEnum[]
  }

  /**
   * RankSnapshot findFirstOrThrow
   */
  export type RankSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankSnapshot
     */
    select?: RankSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankSnapshot
     */
    omit?: RankSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which RankSnapshot to fetch.
     */
    where?: RankSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RankSnapshots to fetch.
     */
    orderBy?: RankSnapshotOrderByWithRelationInput | RankSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RankSnapshots.
     */
    cursor?: RankSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RankSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RankSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RankSnapshots.
     */
    distinct?: RankSnapshotScalarFieldEnum | RankSnapshotScalarFieldEnum[]
  }

  /**
   * RankSnapshot findMany
   */
  export type RankSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankSnapshot
     */
    select?: RankSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankSnapshot
     */
    omit?: RankSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which RankSnapshots to fetch.
     */
    where?: RankSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RankSnapshots to fetch.
     */
    orderBy?: RankSnapshotOrderByWithRelationInput | RankSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RankSnapshots.
     */
    cursor?: RankSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RankSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RankSnapshots.
     */
    skip?: number
    distinct?: RankSnapshotScalarFieldEnum | RankSnapshotScalarFieldEnum[]
  }

  /**
   * RankSnapshot create
   */
  export type RankSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankSnapshot
     */
    select?: RankSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankSnapshot
     */
    omit?: RankSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a RankSnapshot.
     */
    data: XOR<RankSnapshotCreateInput, RankSnapshotUncheckedCreateInput>
  }

  /**
   * RankSnapshot createMany
   */
  export type RankSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RankSnapshots.
     */
    data: RankSnapshotCreateManyInput | RankSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RankSnapshot createManyAndReturn
   */
  export type RankSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankSnapshot
     */
    select?: RankSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RankSnapshot
     */
    omit?: RankSnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many RankSnapshots.
     */
    data: RankSnapshotCreateManyInput | RankSnapshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankSnapshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RankSnapshot update
   */
  export type RankSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankSnapshot
     */
    select?: RankSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankSnapshot
     */
    omit?: RankSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a RankSnapshot.
     */
    data: XOR<RankSnapshotUpdateInput, RankSnapshotUncheckedUpdateInput>
    /**
     * Choose, which RankSnapshot to update.
     */
    where: RankSnapshotWhereUniqueInput
  }

  /**
   * RankSnapshot updateMany
   */
  export type RankSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RankSnapshots.
     */
    data: XOR<RankSnapshotUpdateManyMutationInput, RankSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which RankSnapshots to update
     */
    where?: RankSnapshotWhereInput
    /**
     * Limit how many RankSnapshots to update.
     */
    limit?: number
  }

  /**
   * RankSnapshot updateManyAndReturn
   */
  export type RankSnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankSnapshot
     */
    select?: RankSnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RankSnapshot
     */
    omit?: RankSnapshotOmit<ExtArgs> | null
    /**
     * The data used to update RankSnapshots.
     */
    data: XOR<RankSnapshotUpdateManyMutationInput, RankSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which RankSnapshots to update
     */
    where?: RankSnapshotWhereInput
    /**
     * Limit how many RankSnapshots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankSnapshotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RankSnapshot upsert
   */
  export type RankSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankSnapshot
     */
    select?: RankSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankSnapshot
     */
    omit?: RankSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankSnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the RankSnapshot to update in case it exists.
     */
    where: RankSnapshotWhereUniqueInput
    /**
     * In case the RankSnapshot found by the `where` argument doesn't exist, create a new RankSnapshot with this data.
     */
    create: XOR<RankSnapshotCreateInput, RankSnapshotUncheckedCreateInput>
    /**
     * In case the RankSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RankSnapshotUpdateInput, RankSnapshotUncheckedUpdateInput>
  }

  /**
   * RankSnapshot delete
   */
  export type RankSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankSnapshot
     */
    select?: RankSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankSnapshot
     */
    omit?: RankSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankSnapshotInclude<ExtArgs> | null
    /**
     * Filter which RankSnapshot to delete.
     */
    where: RankSnapshotWhereUniqueInput
  }

  /**
   * RankSnapshot deleteMany
   */
  export type RankSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RankSnapshots to delete
     */
    where?: RankSnapshotWhereInput
    /**
     * Limit how many RankSnapshots to delete.
     */
    limit?: number
  }

  /**
   * RankSnapshot without action
   */
  export type RankSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankSnapshot
     */
    select?: RankSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankSnapshot
     */
    omit?: RankSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankSnapshotInclude<ExtArgs> | null
  }


  /**
   * Model LinkClick
   */

  export type AggregateLinkClick = {
    _count: LinkClickCountAggregateOutputType | null
    _min: LinkClickMinAggregateOutputType | null
    _max: LinkClickMaxAggregateOutputType | null
  }

  export type LinkClickMinAggregateOutputType = {
    id: string | null
    personId: string | null
    socialLinkId: string | null
    ipHash: string | null
    createdAt: Date | null
  }

  export type LinkClickMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    socialLinkId: string | null
    ipHash: string | null
    createdAt: Date | null
  }

  export type LinkClickCountAggregateOutputType = {
    id: number
    personId: number
    socialLinkId: number
    ipHash: number
    createdAt: number
    _all: number
  }


  export type LinkClickMinAggregateInputType = {
    id?: true
    personId?: true
    socialLinkId?: true
    ipHash?: true
    createdAt?: true
  }

  export type LinkClickMaxAggregateInputType = {
    id?: true
    personId?: true
    socialLinkId?: true
    ipHash?: true
    createdAt?: true
  }

  export type LinkClickCountAggregateInputType = {
    id?: true
    personId?: true
    socialLinkId?: true
    ipHash?: true
    createdAt?: true
    _all?: true
  }

  export type LinkClickAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkClick to aggregate.
     */
    where?: LinkClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkClicks to fetch.
     */
    orderBy?: LinkClickOrderByWithRelationInput | LinkClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkClicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkClicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkClicks
    **/
    _count?: true | LinkClickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkClickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkClickMaxAggregateInputType
  }

  export type GetLinkClickAggregateType<T extends LinkClickAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkClick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkClick[P]>
      : GetScalarType<T[P], AggregateLinkClick[P]>
  }




  export type LinkClickGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkClickWhereInput
    orderBy?: LinkClickOrderByWithAggregationInput | LinkClickOrderByWithAggregationInput[]
    by: LinkClickScalarFieldEnum[] | LinkClickScalarFieldEnum
    having?: LinkClickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkClickCountAggregateInputType | true
    _min?: LinkClickMinAggregateInputType
    _max?: LinkClickMaxAggregateInputType
  }

  export type LinkClickGroupByOutputType = {
    id: string
    personId: string
    socialLinkId: string
    ipHash: string | null
    createdAt: Date
    _count: LinkClickCountAggregateOutputType | null
    _min: LinkClickMinAggregateOutputType | null
    _max: LinkClickMaxAggregateOutputType | null
  }

  type GetLinkClickGroupByPayload<T extends LinkClickGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkClickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkClickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkClickGroupByOutputType[P]>
            : GetScalarType<T[P], LinkClickGroupByOutputType[P]>
        }
      >
    >


  export type LinkClickSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    socialLinkId?: boolean
    ipHash?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    socialLink?: boolean | SocialLinkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkClick"]>

  export type LinkClickSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    socialLinkId?: boolean
    ipHash?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    socialLink?: boolean | SocialLinkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkClick"]>

  export type LinkClickSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    socialLinkId?: boolean
    ipHash?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    socialLink?: boolean | SocialLinkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkClick"]>

  export type LinkClickSelectScalar = {
    id?: boolean
    personId?: boolean
    socialLinkId?: boolean
    ipHash?: boolean
    createdAt?: boolean
  }

  export type LinkClickOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personId" | "socialLinkId" | "ipHash" | "createdAt", ExtArgs["result"]["linkClick"]>
  export type LinkClickInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    socialLink?: boolean | SocialLinkDefaultArgs<ExtArgs>
  }
  export type LinkClickIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    socialLink?: boolean | SocialLinkDefaultArgs<ExtArgs>
  }
  export type LinkClickIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    socialLink?: boolean | SocialLinkDefaultArgs<ExtArgs>
  }

  export type $LinkClickPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkClick"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
      socialLink: Prisma.$SocialLinkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      socialLinkId: string
      ipHash: string | null
      createdAt: Date
    }, ExtArgs["result"]["linkClick"]>
    composites: {}
  }

  type LinkClickGetPayload<S extends boolean | null | undefined | LinkClickDefaultArgs> = $Result.GetResult<Prisma.$LinkClickPayload, S>

  type LinkClickCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkClickFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkClickCountAggregateInputType | true
    }

  export interface LinkClickDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkClick'], meta: { name: 'LinkClick' } }
    /**
     * Find zero or one LinkClick that matches the filter.
     * @param {LinkClickFindUniqueArgs} args - Arguments to find a LinkClick
     * @example
     * // Get one LinkClick
     * const linkClick = await prisma.linkClick.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkClickFindUniqueArgs>(args: SelectSubset<T, LinkClickFindUniqueArgs<ExtArgs>>): Prisma__LinkClickClient<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LinkClick that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkClickFindUniqueOrThrowArgs} args - Arguments to find a LinkClick
     * @example
     * // Get one LinkClick
     * const linkClick = await prisma.linkClick.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkClickFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkClickFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkClickClient<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkClick that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkClickFindFirstArgs} args - Arguments to find a LinkClick
     * @example
     * // Get one LinkClick
     * const linkClick = await prisma.linkClick.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkClickFindFirstArgs>(args?: SelectSubset<T, LinkClickFindFirstArgs<ExtArgs>>): Prisma__LinkClickClient<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkClick that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkClickFindFirstOrThrowArgs} args - Arguments to find a LinkClick
     * @example
     * // Get one LinkClick
     * const linkClick = await prisma.linkClick.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkClickFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkClickFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkClickClient<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LinkClicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkClickFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkClicks
     * const linkClicks = await prisma.linkClick.findMany()
     * 
     * // Get first 10 LinkClicks
     * const linkClicks = await prisma.linkClick.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkClickWithIdOnly = await prisma.linkClick.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkClickFindManyArgs>(args?: SelectSubset<T, LinkClickFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LinkClick.
     * @param {LinkClickCreateArgs} args - Arguments to create a LinkClick.
     * @example
     * // Create one LinkClick
     * const LinkClick = await prisma.linkClick.create({
     *   data: {
     *     // ... data to create a LinkClick
     *   }
     * })
     * 
     */
    create<T extends LinkClickCreateArgs>(args: SelectSubset<T, LinkClickCreateArgs<ExtArgs>>): Prisma__LinkClickClient<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LinkClicks.
     * @param {LinkClickCreateManyArgs} args - Arguments to create many LinkClicks.
     * @example
     * // Create many LinkClicks
     * const linkClick = await prisma.linkClick.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkClickCreateManyArgs>(args?: SelectSubset<T, LinkClickCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkClicks and returns the data saved in the database.
     * @param {LinkClickCreateManyAndReturnArgs} args - Arguments to create many LinkClicks.
     * @example
     * // Create many LinkClicks
     * const linkClick = await prisma.linkClick.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkClicks and only return the `id`
     * const linkClickWithIdOnly = await prisma.linkClick.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkClickCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkClickCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LinkClick.
     * @param {LinkClickDeleteArgs} args - Arguments to delete one LinkClick.
     * @example
     * // Delete one LinkClick
     * const LinkClick = await prisma.linkClick.delete({
     *   where: {
     *     // ... filter to delete one LinkClick
     *   }
     * })
     * 
     */
    delete<T extends LinkClickDeleteArgs>(args: SelectSubset<T, LinkClickDeleteArgs<ExtArgs>>): Prisma__LinkClickClient<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LinkClick.
     * @param {LinkClickUpdateArgs} args - Arguments to update one LinkClick.
     * @example
     * // Update one LinkClick
     * const linkClick = await prisma.linkClick.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkClickUpdateArgs>(args: SelectSubset<T, LinkClickUpdateArgs<ExtArgs>>): Prisma__LinkClickClient<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LinkClicks.
     * @param {LinkClickDeleteManyArgs} args - Arguments to filter LinkClicks to delete.
     * @example
     * // Delete a few LinkClicks
     * const { count } = await prisma.linkClick.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkClickDeleteManyArgs>(args?: SelectSubset<T, LinkClickDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkClicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkClickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkClicks
     * const linkClick = await prisma.linkClick.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkClickUpdateManyArgs>(args: SelectSubset<T, LinkClickUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkClicks and returns the data updated in the database.
     * @param {LinkClickUpdateManyAndReturnArgs} args - Arguments to update many LinkClicks.
     * @example
     * // Update many LinkClicks
     * const linkClick = await prisma.linkClick.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LinkClicks and only return the `id`
     * const linkClickWithIdOnly = await prisma.linkClick.updateManyAndReturn({
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
    updateManyAndReturn<T extends LinkClickUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkClickUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LinkClick.
     * @param {LinkClickUpsertArgs} args - Arguments to update or create a LinkClick.
     * @example
     * // Update or create a LinkClick
     * const linkClick = await prisma.linkClick.upsert({
     *   create: {
     *     // ... data to create a LinkClick
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkClick we want to update
     *   }
     * })
     */
    upsert<T extends LinkClickUpsertArgs>(args: SelectSubset<T, LinkClickUpsertArgs<ExtArgs>>): Prisma__LinkClickClient<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LinkClicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkClickCountArgs} args - Arguments to filter LinkClicks to count.
     * @example
     * // Count the number of LinkClicks
     * const count = await prisma.linkClick.count({
     *   where: {
     *     // ... the filter for the LinkClicks we want to count
     *   }
     * })
    **/
    count<T extends LinkClickCountArgs>(
      args?: Subset<T, LinkClickCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkClickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkClick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkClickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinkClickAggregateArgs>(args: Subset<T, LinkClickAggregateArgs>): Prisma.PrismaPromise<GetLinkClickAggregateType<T>>

    /**
     * Group by LinkClick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkClickGroupByArgs} args - Group by arguments.
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
      T extends LinkClickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkClickGroupByArgs['orderBy'] }
        : { orderBy?: LinkClickGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LinkClickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkClickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkClick model
   */
  readonly fields: LinkClickFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkClick.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkClickClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    socialLink<T extends SocialLinkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocialLinkDefaultArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LinkClick model
   */
  interface LinkClickFieldRefs {
    readonly id: FieldRef<"LinkClick", 'String'>
    readonly personId: FieldRef<"LinkClick", 'String'>
    readonly socialLinkId: FieldRef<"LinkClick", 'String'>
    readonly ipHash: FieldRef<"LinkClick", 'String'>
    readonly createdAt: FieldRef<"LinkClick", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LinkClick findUnique
   */
  export type LinkClickFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * Filter, which LinkClick to fetch.
     */
    where: LinkClickWhereUniqueInput
  }

  /**
   * LinkClick findUniqueOrThrow
   */
  export type LinkClickFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * Filter, which LinkClick to fetch.
     */
    where: LinkClickWhereUniqueInput
  }

  /**
   * LinkClick findFirst
   */
  export type LinkClickFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * Filter, which LinkClick to fetch.
     */
    where?: LinkClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkClicks to fetch.
     */
    orderBy?: LinkClickOrderByWithRelationInput | LinkClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkClicks.
     */
    cursor?: LinkClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkClicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkClicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkClicks.
     */
    distinct?: LinkClickScalarFieldEnum | LinkClickScalarFieldEnum[]
  }

  /**
   * LinkClick findFirstOrThrow
   */
  export type LinkClickFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * Filter, which LinkClick to fetch.
     */
    where?: LinkClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkClicks to fetch.
     */
    orderBy?: LinkClickOrderByWithRelationInput | LinkClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkClicks.
     */
    cursor?: LinkClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkClicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkClicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkClicks.
     */
    distinct?: LinkClickScalarFieldEnum | LinkClickScalarFieldEnum[]
  }

  /**
   * LinkClick findMany
   */
  export type LinkClickFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * Filter, which LinkClicks to fetch.
     */
    where?: LinkClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkClicks to fetch.
     */
    orderBy?: LinkClickOrderByWithRelationInput | LinkClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkClicks.
     */
    cursor?: LinkClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkClicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkClicks.
     */
    skip?: number
    distinct?: LinkClickScalarFieldEnum | LinkClickScalarFieldEnum[]
  }

  /**
   * LinkClick create
   */
  export type LinkClickCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * The data needed to create a LinkClick.
     */
    data: XOR<LinkClickCreateInput, LinkClickUncheckedCreateInput>
  }

  /**
   * LinkClick createMany
   */
  export type LinkClickCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkClicks.
     */
    data: LinkClickCreateManyInput | LinkClickCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkClick createManyAndReturn
   */
  export type LinkClickCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * The data used to create many LinkClicks.
     */
    data: LinkClickCreateManyInput | LinkClickCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkClick update
   */
  export type LinkClickUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * The data needed to update a LinkClick.
     */
    data: XOR<LinkClickUpdateInput, LinkClickUncheckedUpdateInput>
    /**
     * Choose, which LinkClick to update.
     */
    where: LinkClickWhereUniqueInput
  }

  /**
   * LinkClick updateMany
   */
  export type LinkClickUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkClicks.
     */
    data: XOR<LinkClickUpdateManyMutationInput, LinkClickUncheckedUpdateManyInput>
    /**
     * Filter which LinkClicks to update
     */
    where?: LinkClickWhereInput
    /**
     * Limit how many LinkClicks to update.
     */
    limit?: number
  }

  /**
   * LinkClick updateManyAndReturn
   */
  export type LinkClickUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * The data used to update LinkClicks.
     */
    data: XOR<LinkClickUpdateManyMutationInput, LinkClickUncheckedUpdateManyInput>
    /**
     * Filter which LinkClicks to update
     */
    where?: LinkClickWhereInput
    /**
     * Limit how many LinkClicks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkClick upsert
   */
  export type LinkClickUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * The filter to search for the LinkClick to update in case it exists.
     */
    where: LinkClickWhereUniqueInput
    /**
     * In case the LinkClick found by the `where` argument doesn't exist, create a new LinkClick with this data.
     */
    create: XOR<LinkClickCreateInput, LinkClickUncheckedCreateInput>
    /**
     * In case the LinkClick was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkClickUpdateInput, LinkClickUncheckedUpdateInput>
  }

  /**
   * LinkClick delete
   */
  export type LinkClickDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * Filter which LinkClick to delete.
     */
    where: LinkClickWhereUniqueInput
  }

  /**
   * LinkClick deleteMany
   */
  export type LinkClickDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkClicks to delete
     */
    where?: LinkClickWhereInput
    /**
     * Limit how many LinkClicks to delete.
     */
    limit?: number
  }

  /**
   * LinkClick without action
   */
  export type LinkClickDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
  }


  /**
   * Model ProviderWebhookEvent
   */

  export type AggregateProviderWebhookEvent = {
    _count: ProviderWebhookEventCountAggregateOutputType | null
    _min: ProviderWebhookEventMinAggregateOutputType | null
    _max: ProviderWebhookEventMaxAggregateOutputType | null
  }

  export type ProviderWebhookEventMinAggregateOutputType = {
    id: string | null
    provider: string | null
    eventId: string | null
    eventType: string | null
    processedAt: Date | null
    createdAt: Date | null
  }

  export type ProviderWebhookEventMaxAggregateOutputType = {
    id: string | null
    provider: string | null
    eventId: string | null
    eventType: string | null
    processedAt: Date | null
    createdAt: Date | null
  }

  export type ProviderWebhookEventCountAggregateOutputType = {
    id: number
    provider: number
    eventId: number
    eventType: number
    processedAt: number
    createdAt: number
    _all: number
  }


  export type ProviderWebhookEventMinAggregateInputType = {
    id?: true
    provider?: true
    eventId?: true
    eventType?: true
    processedAt?: true
    createdAt?: true
  }

  export type ProviderWebhookEventMaxAggregateInputType = {
    id?: true
    provider?: true
    eventId?: true
    eventType?: true
    processedAt?: true
    createdAt?: true
  }

  export type ProviderWebhookEventCountAggregateInputType = {
    id?: true
    provider?: true
    eventId?: true
    eventType?: true
    processedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ProviderWebhookEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderWebhookEvent to aggregate.
     */
    where?: ProviderWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderWebhookEvents to fetch.
     */
    orderBy?: ProviderWebhookEventOrderByWithRelationInput | ProviderWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderWebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderWebhookEvents
    **/
    _count?: true | ProviderWebhookEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderWebhookEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderWebhookEventMaxAggregateInputType
  }

  export type GetProviderWebhookEventAggregateType<T extends ProviderWebhookEventAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderWebhookEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderWebhookEvent[P]>
      : GetScalarType<T[P], AggregateProviderWebhookEvent[P]>
  }




  export type ProviderWebhookEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderWebhookEventWhereInput
    orderBy?: ProviderWebhookEventOrderByWithAggregationInput | ProviderWebhookEventOrderByWithAggregationInput[]
    by: ProviderWebhookEventScalarFieldEnum[] | ProviderWebhookEventScalarFieldEnum
    having?: ProviderWebhookEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderWebhookEventCountAggregateInputType | true
    _min?: ProviderWebhookEventMinAggregateInputType
    _max?: ProviderWebhookEventMaxAggregateInputType
  }

  export type ProviderWebhookEventGroupByOutputType = {
    id: string
    provider: string
    eventId: string
    eventType: string
    processedAt: Date
    createdAt: Date
    _count: ProviderWebhookEventCountAggregateOutputType | null
    _min: ProviderWebhookEventMinAggregateOutputType | null
    _max: ProviderWebhookEventMaxAggregateOutputType | null
  }

  type GetProviderWebhookEventGroupByPayload<T extends ProviderWebhookEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderWebhookEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderWebhookEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderWebhookEventGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderWebhookEventGroupByOutputType[P]>
        }
      >
    >


  export type ProviderWebhookEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    eventId?: boolean
    eventType?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["providerWebhookEvent"]>

  export type ProviderWebhookEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    eventId?: boolean
    eventType?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["providerWebhookEvent"]>

  export type ProviderWebhookEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    eventId?: boolean
    eventType?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["providerWebhookEvent"]>

  export type ProviderWebhookEventSelectScalar = {
    id?: boolean
    provider?: boolean
    eventId?: boolean
    eventType?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }

  export type ProviderWebhookEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "eventId" | "eventType" | "processedAt" | "createdAt", ExtArgs["result"]["providerWebhookEvent"]>

  export type $ProviderWebhookEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderWebhookEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: string
      eventId: string
      eventType: string
      processedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["providerWebhookEvent"]>
    composites: {}
  }

  type ProviderWebhookEventGetPayload<S extends boolean | null | undefined | ProviderWebhookEventDefaultArgs> = $Result.GetResult<Prisma.$ProviderWebhookEventPayload, S>

  type ProviderWebhookEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderWebhookEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderWebhookEventCountAggregateInputType | true
    }

  export interface ProviderWebhookEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderWebhookEvent'], meta: { name: 'ProviderWebhookEvent' } }
    /**
     * Find zero or one ProviderWebhookEvent that matches the filter.
     * @param {ProviderWebhookEventFindUniqueArgs} args - Arguments to find a ProviderWebhookEvent
     * @example
     * // Get one ProviderWebhookEvent
     * const providerWebhookEvent = await prisma.providerWebhookEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderWebhookEventFindUniqueArgs>(args: SelectSubset<T, ProviderWebhookEventFindUniqueArgs<ExtArgs>>): Prisma__ProviderWebhookEventClient<$Result.GetResult<Prisma.$ProviderWebhookEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderWebhookEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderWebhookEventFindUniqueOrThrowArgs} args - Arguments to find a ProviderWebhookEvent
     * @example
     * // Get one ProviderWebhookEvent
     * const providerWebhookEvent = await prisma.providerWebhookEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderWebhookEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderWebhookEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderWebhookEventClient<$Result.GetResult<Prisma.$ProviderWebhookEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderWebhookEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderWebhookEventFindFirstArgs} args - Arguments to find a ProviderWebhookEvent
     * @example
     * // Get one ProviderWebhookEvent
     * const providerWebhookEvent = await prisma.providerWebhookEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderWebhookEventFindFirstArgs>(args?: SelectSubset<T, ProviderWebhookEventFindFirstArgs<ExtArgs>>): Prisma__ProviderWebhookEventClient<$Result.GetResult<Prisma.$ProviderWebhookEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderWebhookEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderWebhookEventFindFirstOrThrowArgs} args - Arguments to find a ProviderWebhookEvent
     * @example
     * // Get one ProviderWebhookEvent
     * const providerWebhookEvent = await prisma.providerWebhookEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderWebhookEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderWebhookEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderWebhookEventClient<$Result.GetResult<Prisma.$ProviderWebhookEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderWebhookEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderWebhookEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderWebhookEvents
     * const providerWebhookEvents = await prisma.providerWebhookEvent.findMany()
     * 
     * // Get first 10 ProviderWebhookEvents
     * const providerWebhookEvents = await prisma.providerWebhookEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerWebhookEventWithIdOnly = await prisma.providerWebhookEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderWebhookEventFindManyArgs>(args?: SelectSubset<T, ProviderWebhookEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderWebhookEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderWebhookEvent.
     * @param {ProviderWebhookEventCreateArgs} args - Arguments to create a ProviderWebhookEvent.
     * @example
     * // Create one ProviderWebhookEvent
     * const ProviderWebhookEvent = await prisma.providerWebhookEvent.create({
     *   data: {
     *     // ... data to create a ProviderWebhookEvent
     *   }
     * })
     * 
     */
    create<T extends ProviderWebhookEventCreateArgs>(args: SelectSubset<T, ProviderWebhookEventCreateArgs<ExtArgs>>): Prisma__ProviderWebhookEventClient<$Result.GetResult<Prisma.$ProviderWebhookEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderWebhookEvents.
     * @param {ProviderWebhookEventCreateManyArgs} args - Arguments to create many ProviderWebhookEvents.
     * @example
     * // Create many ProviderWebhookEvents
     * const providerWebhookEvent = await prisma.providerWebhookEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderWebhookEventCreateManyArgs>(args?: SelectSubset<T, ProviderWebhookEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderWebhookEvents and returns the data saved in the database.
     * @param {ProviderWebhookEventCreateManyAndReturnArgs} args - Arguments to create many ProviderWebhookEvents.
     * @example
     * // Create many ProviderWebhookEvents
     * const providerWebhookEvent = await prisma.providerWebhookEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderWebhookEvents and only return the `id`
     * const providerWebhookEventWithIdOnly = await prisma.providerWebhookEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderWebhookEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderWebhookEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderWebhookEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProviderWebhookEvent.
     * @param {ProviderWebhookEventDeleteArgs} args - Arguments to delete one ProviderWebhookEvent.
     * @example
     * // Delete one ProviderWebhookEvent
     * const ProviderWebhookEvent = await prisma.providerWebhookEvent.delete({
     *   where: {
     *     // ... filter to delete one ProviderWebhookEvent
     *   }
     * })
     * 
     */
    delete<T extends ProviderWebhookEventDeleteArgs>(args: SelectSubset<T, ProviderWebhookEventDeleteArgs<ExtArgs>>): Prisma__ProviderWebhookEventClient<$Result.GetResult<Prisma.$ProviderWebhookEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderWebhookEvent.
     * @param {ProviderWebhookEventUpdateArgs} args - Arguments to update one ProviderWebhookEvent.
     * @example
     * // Update one ProviderWebhookEvent
     * const providerWebhookEvent = await prisma.providerWebhookEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderWebhookEventUpdateArgs>(args: SelectSubset<T, ProviderWebhookEventUpdateArgs<ExtArgs>>): Prisma__ProviderWebhookEventClient<$Result.GetResult<Prisma.$ProviderWebhookEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderWebhookEvents.
     * @param {ProviderWebhookEventDeleteManyArgs} args - Arguments to filter ProviderWebhookEvents to delete.
     * @example
     * // Delete a few ProviderWebhookEvents
     * const { count } = await prisma.providerWebhookEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderWebhookEventDeleteManyArgs>(args?: SelectSubset<T, ProviderWebhookEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderWebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderWebhookEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderWebhookEvents
     * const providerWebhookEvent = await prisma.providerWebhookEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderWebhookEventUpdateManyArgs>(args: SelectSubset<T, ProviderWebhookEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderWebhookEvents and returns the data updated in the database.
     * @param {ProviderWebhookEventUpdateManyAndReturnArgs} args - Arguments to update many ProviderWebhookEvents.
     * @example
     * // Update many ProviderWebhookEvents
     * const providerWebhookEvent = await prisma.providerWebhookEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProviderWebhookEvents and only return the `id`
     * const providerWebhookEventWithIdOnly = await prisma.providerWebhookEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProviderWebhookEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderWebhookEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderWebhookEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProviderWebhookEvent.
     * @param {ProviderWebhookEventUpsertArgs} args - Arguments to update or create a ProviderWebhookEvent.
     * @example
     * // Update or create a ProviderWebhookEvent
     * const providerWebhookEvent = await prisma.providerWebhookEvent.upsert({
     *   create: {
     *     // ... data to create a ProviderWebhookEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderWebhookEvent we want to update
     *   }
     * })
     */
    upsert<T extends ProviderWebhookEventUpsertArgs>(args: SelectSubset<T, ProviderWebhookEventUpsertArgs<ExtArgs>>): Prisma__ProviderWebhookEventClient<$Result.GetResult<Prisma.$ProviderWebhookEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderWebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderWebhookEventCountArgs} args - Arguments to filter ProviderWebhookEvents to count.
     * @example
     * // Count the number of ProviderWebhookEvents
     * const count = await prisma.providerWebhookEvent.count({
     *   where: {
     *     // ... the filter for the ProviderWebhookEvents we want to count
     *   }
     * })
    **/
    count<T extends ProviderWebhookEventCountArgs>(
      args?: Subset<T, ProviderWebhookEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderWebhookEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderWebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderWebhookEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProviderWebhookEventAggregateArgs>(args: Subset<T, ProviderWebhookEventAggregateArgs>): Prisma.PrismaPromise<GetProviderWebhookEventAggregateType<T>>

    /**
     * Group by ProviderWebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderWebhookEventGroupByArgs} args - Group by arguments.
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
      T extends ProviderWebhookEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderWebhookEventGroupByArgs['orderBy'] }
        : { orderBy?: ProviderWebhookEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProviderWebhookEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderWebhookEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderWebhookEvent model
   */
  readonly fields: ProviderWebhookEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderWebhookEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderWebhookEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ProviderWebhookEvent model
   */
  interface ProviderWebhookEventFieldRefs {
    readonly id: FieldRef<"ProviderWebhookEvent", 'String'>
    readonly provider: FieldRef<"ProviderWebhookEvent", 'String'>
    readonly eventId: FieldRef<"ProviderWebhookEvent", 'String'>
    readonly eventType: FieldRef<"ProviderWebhookEvent", 'String'>
    readonly processedAt: FieldRef<"ProviderWebhookEvent", 'DateTime'>
    readonly createdAt: FieldRef<"ProviderWebhookEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProviderWebhookEvent findUnique
   */
  export type ProviderWebhookEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderWebhookEvent
     */
    select?: ProviderWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderWebhookEvent
     */
    omit?: ProviderWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which ProviderWebhookEvent to fetch.
     */
    where: ProviderWebhookEventWhereUniqueInput
  }

  /**
   * ProviderWebhookEvent findUniqueOrThrow
   */
  export type ProviderWebhookEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderWebhookEvent
     */
    select?: ProviderWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderWebhookEvent
     */
    omit?: ProviderWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which ProviderWebhookEvent to fetch.
     */
    where: ProviderWebhookEventWhereUniqueInput
  }

  /**
   * ProviderWebhookEvent findFirst
   */
  export type ProviderWebhookEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderWebhookEvent
     */
    select?: ProviderWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderWebhookEvent
     */
    omit?: ProviderWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which ProviderWebhookEvent to fetch.
     */
    where?: ProviderWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderWebhookEvents to fetch.
     */
    orderBy?: ProviderWebhookEventOrderByWithRelationInput | ProviderWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderWebhookEvents.
     */
    cursor?: ProviderWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderWebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderWebhookEvents.
     */
    distinct?: ProviderWebhookEventScalarFieldEnum | ProviderWebhookEventScalarFieldEnum[]
  }

  /**
   * ProviderWebhookEvent findFirstOrThrow
   */
  export type ProviderWebhookEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderWebhookEvent
     */
    select?: ProviderWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderWebhookEvent
     */
    omit?: ProviderWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which ProviderWebhookEvent to fetch.
     */
    where?: ProviderWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderWebhookEvents to fetch.
     */
    orderBy?: ProviderWebhookEventOrderByWithRelationInput | ProviderWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderWebhookEvents.
     */
    cursor?: ProviderWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderWebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderWebhookEvents.
     */
    distinct?: ProviderWebhookEventScalarFieldEnum | ProviderWebhookEventScalarFieldEnum[]
  }

  /**
   * ProviderWebhookEvent findMany
   */
  export type ProviderWebhookEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderWebhookEvent
     */
    select?: ProviderWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderWebhookEvent
     */
    omit?: ProviderWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which ProviderWebhookEvents to fetch.
     */
    where?: ProviderWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderWebhookEvents to fetch.
     */
    orderBy?: ProviderWebhookEventOrderByWithRelationInput | ProviderWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderWebhookEvents.
     */
    cursor?: ProviderWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderWebhookEvents.
     */
    skip?: number
    distinct?: ProviderWebhookEventScalarFieldEnum | ProviderWebhookEventScalarFieldEnum[]
  }

  /**
   * ProviderWebhookEvent create
   */
  export type ProviderWebhookEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderWebhookEvent
     */
    select?: ProviderWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderWebhookEvent
     */
    omit?: ProviderWebhookEventOmit<ExtArgs> | null
    /**
     * The data needed to create a ProviderWebhookEvent.
     */
    data: XOR<ProviderWebhookEventCreateInput, ProviderWebhookEventUncheckedCreateInput>
  }

  /**
   * ProviderWebhookEvent createMany
   */
  export type ProviderWebhookEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderWebhookEvents.
     */
    data: ProviderWebhookEventCreateManyInput | ProviderWebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderWebhookEvent createManyAndReturn
   */
  export type ProviderWebhookEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderWebhookEvent
     */
    select?: ProviderWebhookEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderWebhookEvent
     */
    omit?: ProviderWebhookEventOmit<ExtArgs> | null
    /**
     * The data used to create many ProviderWebhookEvents.
     */
    data: ProviderWebhookEventCreateManyInput | ProviderWebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderWebhookEvent update
   */
  export type ProviderWebhookEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderWebhookEvent
     */
    select?: ProviderWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderWebhookEvent
     */
    omit?: ProviderWebhookEventOmit<ExtArgs> | null
    /**
     * The data needed to update a ProviderWebhookEvent.
     */
    data: XOR<ProviderWebhookEventUpdateInput, ProviderWebhookEventUncheckedUpdateInput>
    /**
     * Choose, which ProviderWebhookEvent to update.
     */
    where: ProviderWebhookEventWhereUniqueInput
  }

  /**
   * ProviderWebhookEvent updateMany
   */
  export type ProviderWebhookEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderWebhookEvents.
     */
    data: XOR<ProviderWebhookEventUpdateManyMutationInput, ProviderWebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which ProviderWebhookEvents to update
     */
    where?: ProviderWebhookEventWhereInput
    /**
     * Limit how many ProviderWebhookEvents to update.
     */
    limit?: number
  }

  /**
   * ProviderWebhookEvent updateManyAndReturn
   */
  export type ProviderWebhookEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderWebhookEvent
     */
    select?: ProviderWebhookEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderWebhookEvent
     */
    omit?: ProviderWebhookEventOmit<ExtArgs> | null
    /**
     * The data used to update ProviderWebhookEvents.
     */
    data: XOR<ProviderWebhookEventUpdateManyMutationInput, ProviderWebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which ProviderWebhookEvents to update
     */
    where?: ProviderWebhookEventWhereInput
    /**
     * Limit how many ProviderWebhookEvents to update.
     */
    limit?: number
  }

  /**
   * ProviderWebhookEvent upsert
   */
  export type ProviderWebhookEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderWebhookEvent
     */
    select?: ProviderWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderWebhookEvent
     */
    omit?: ProviderWebhookEventOmit<ExtArgs> | null
    /**
     * The filter to search for the ProviderWebhookEvent to update in case it exists.
     */
    where: ProviderWebhookEventWhereUniqueInput
    /**
     * In case the ProviderWebhookEvent found by the `where` argument doesn't exist, create a new ProviderWebhookEvent with this data.
     */
    create: XOR<ProviderWebhookEventCreateInput, ProviderWebhookEventUncheckedCreateInput>
    /**
     * In case the ProviderWebhookEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderWebhookEventUpdateInput, ProviderWebhookEventUncheckedUpdateInput>
  }

  /**
   * ProviderWebhookEvent delete
   */
  export type ProviderWebhookEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderWebhookEvent
     */
    select?: ProviderWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderWebhookEvent
     */
    omit?: ProviderWebhookEventOmit<ExtArgs> | null
    /**
     * Filter which ProviderWebhookEvent to delete.
     */
    where: ProviderWebhookEventWhereUniqueInput
  }

  /**
   * ProviderWebhookEvent deleteMany
   */
  export type ProviderWebhookEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderWebhookEvents to delete
     */
    where?: ProviderWebhookEventWhereInput
    /**
     * Limit how many ProviderWebhookEvents to delete.
     */
    limit?: number
  }

  /**
   * ProviderWebhookEvent without action
   */
  export type ProviderWebhookEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderWebhookEvent
     */
    select?: ProviderWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderWebhookEvent
     */
    omit?: ProviderWebhookEventOmit<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    amount: number | null
    rank: number | null
  }

  export type ActivitySumAggregateOutputType = {
    amount: number | null
    rank: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    personId: string | null
    type: $Enums.ActivityType | null
    amount: number | null
    rank: number | null
    createdAt: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    type: $Enums.ActivityType | null
    amount: number | null
    rank: number | null
    createdAt: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    personId: number
    type: number
    amount: number
    rank: number
    createdAt: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    amount?: true
    rank?: true
  }

  export type ActivitySumAggregateInputType = {
    amount?: true
    rank?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    personId?: true
    type?: true
    amount?: true
    rank?: true
    createdAt?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    personId?: true
    type?: true
    amount?: true
    rank?: true
    createdAt?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    personId?: true
    type?: true
    amount?: true
    rank?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    personId: string
    type: $Enums.ActivityType
    amount: number
    rank: number
    createdAt: Date
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    type?: boolean
    amount?: boolean
    rank?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    type?: boolean
    amount?: boolean
    rank?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    type?: boolean
    amount?: boolean
    rank?: boolean
    createdAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    personId?: boolean
    type?: boolean
    amount?: boolean
    rank?: boolean
    createdAt?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personId" | "type" | "amount" | "rank" | "createdAt", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      type: $Enums.ActivityType
      amount: number
      rank: number
      createdAt: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly personId: FieldRef<"Activity", 'String'>
    readonly type: FieldRef<"Activity", 'ActivityType'>
    readonly amount: FieldRef<"Activity", 'Int'>
    readonly rank: FieldRef<"Activity", 'Int'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model AnalyticsEvent
   */

  export type AggregateAnalyticsEvent = {
    _count: AnalyticsEventCountAggregateOutputType | null
    _min: AnalyticsEventMinAggregateOutputType | null
    _max: AnalyticsEventMaxAggregateOutputType | null
  }

  export type AnalyticsEventMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type AnalyticsEventMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type AnalyticsEventCountAggregateOutputType = {
    id: number
    name: number
    payload: number
    createdAt: number
    _all: number
  }


  export type AnalyticsEventMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type AnalyticsEventMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type AnalyticsEventCountAggregateInputType = {
    id?: true
    name?: true
    payload?: true
    createdAt?: true
    _all?: true
  }

  export type AnalyticsEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsEvent to aggregate.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalyticsEvents
    **/
    _count?: true | AnalyticsEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsEventMaxAggregateInputType
  }

  export type GetAnalyticsEventAggregateType<T extends AnalyticsEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalyticsEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalyticsEvent[P]>
      : GetScalarType<T[P], AggregateAnalyticsEvent[P]>
  }




  export type AnalyticsEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsEventWhereInput
    orderBy?: AnalyticsEventOrderByWithAggregationInput | AnalyticsEventOrderByWithAggregationInput[]
    by: AnalyticsEventScalarFieldEnum[] | AnalyticsEventScalarFieldEnum
    having?: AnalyticsEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsEventCountAggregateInputType | true
    _min?: AnalyticsEventMinAggregateInputType
    _max?: AnalyticsEventMaxAggregateInputType
  }

  export type AnalyticsEventGroupByOutputType = {
    id: string
    name: string
    payload: JsonValue | null
    createdAt: Date
    _count: AnalyticsEventCountAggregateOutputType | null
    _min: AnalyticsEventMinAggregateOutputType | null
    _max: AnalyticsEventMaxAggregateOutputType | null
  }

  type GetAnalyticsEventGroupByPayload<T extends AnalyticsEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsEventGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsEventGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analyticsEvent"]>

  export type AnalyticsEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analyticsEvent"]>

  export type AnalyticsEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analyticsEvent"]>

  export type AnalyticsEventSelectScalar = {
    id?: boolean
    name?: boolean
    payload?: boolean
    createdAt?: boolean
  }

  export type AnalyticsEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "payload" | "createdAt", ExtArgs["result"]["analyticsEvent"]>

  export type $AnalyticsEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalyticsEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      payload: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["analyticsEvent"]>
    composites: {}
  }

  type AnalyticsEventGetPayload<S extends boolean | null | undefined | AnalyticsEventDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsEventPayload, S>

  type AnalyticsEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyticsEventCountAggregateInputType | true
    }

  export interface AnalyticsEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalyticsEvent'], meta: { name: 'AnalyticsEvent' } }
    /**
     * Find zero or one AnalyticsEvent that matches the filter.
     * @param {AnalyticsEventFindUniqueArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsEventFindUniqueArgs>(args: SelectSubset<T, AnalyticsEventFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalyticsEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsEventFindUniqueOrThrowArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventFindFirstArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsEventFindFirstArgs>(args?: SelectSubset<T, AnalyticsEventFindFirstArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventFindFirstOrThrowArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalyticsEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalyticsEvents
     * const analyticsEvents = await prisma.analyticsEvent.findMany()
     * 
     * // Get first 10 AnalyticsEvents
     * const analyticsEvents = await prisma.analyticsEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsEventWithIdOnly = await prisma.analyticsEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsEventFindManyArgs>(args?: SelectSubset<T, AnalyticsEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalyticsEvent.
     * @param {AnalyticsEventCreateArgs} args - Arguments to create a AnalyticsEvent.
     * @example
     * // Create one AnalyticsEvent
     * const AnalyticsEvent = await prisma.analyticsEvent.create({
     *   data: {
     *     // ... data to create a AnalyticsEvent
     *   }
     * })
     * 
     */
    create<T extends AnalyticsEventCreateArgs>(args: SelectSubset<T, AnalyticsEventCreateArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalyticsEvents.
     * @param {AnalyticsEventCreateManyArgs} args - Arguments to create many AnalyticsEvents.
     * @example
     * // Create many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsEventCreateManyArgs>(args?: SelectSubset<T, AnalyticsEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalyticsEvents and returns the data saved in the database.
     * @param {AnalyticsEventCreateManyAndReturnArgs} args - Arguments to create many AnalyticsEvents.
     * @example
     * // Create many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalyticsEvents and only return the `id`
     * const analyticsEventWithIdOnly = await prisma.analyticsEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalyticsEvent.
     * @param {AnalyticsEventDeleteArgs} args - Arguments to delete one AnalyticsEvent.
     * @example
     * // Delete one AnalyticsEvent
     * const AnalyticsEvent = await prisma.analyticsEvent.delete({
     *   where: {
     *     // ... filter to delete one AnalyticsEvent
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsEventDeleteArgs>(args: SelectSubset<T, AnalyticsEventDeleteArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalyticsEvent.
     * @param {AnalyticsEventUpdateArgs} args - Arguments to update one AnalyticsEvent.
     * @example
     * // Update one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsEventUpdateArgs>(args: SelectSubset<T, AnalyticsEventUpdateArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalyticsEvents.
     * @param {AnalyticsEventDeleteManyArgs} args - Arguments to filter AnalyticsEvents to delete.
     * @example
     * // Delete a few AnalyticsEvents
     * const { count } = await prisma.analyticsEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsEventDeleteManyArgs>(args?: SelectSubset<T, AnalyticsEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsEventUpdateManyArgs>(args: SelectSubset<T, AnalyticsEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsEvents and returns the data updated in the database.
     * @param {AnalyticsEventUpdateManyAndReturnArgs} args - Arguments to update many AnalyticsEvents.
     * @example
     * // Update many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalyticsEvents and only return the `id`
     * const analyticsEventWithIdOnly = await prisma.analyticsEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnalyticsEventUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalyticsEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalyticsEvent.
     * @param {AnalyticsEventUpsertArgs} args - Arguments to update or create a AnalyticsEvent.
     * @example
     * // Update or create a AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.upsert({
     *   create: {
     *     // ... data to create a AnalyticsEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalyticsEvent we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsEventUpsertArgs>(args: SelectSubset<T, AnalyticsEventUpsertArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalyticsEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventCountArgs} args - Arguments to filter AnalyticsEvents to count.
     * @example
     * // Count the number of AnalyticsEvents
     * const count = await prisma.analyticsEvent.count({
     *   where: {
     *     // ... the filter for the AnalyticsEvents we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsEventCountArgs>(
      args?: Subset<T, AnalyticsEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalyticsEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyticsEventAggregateArgs>(args: Subset<T, AnalyticsEventAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsEventAggregateType<T>>

    /**
     * Group by AnalyticsEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventGroupByArgs} args - Group by arguments.
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
      T extends AnalyticsEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsEventGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalyticsEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalyticsEvent model
   */
  readonly fields: AnalyticsEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalyticsEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AnalyticsEvent model
   */
  interface AnalyticsEventFieldRefs {
    readonly id: FieldRef<"AnalyticsEvent", 'String'>
    readonly name: FieldRef<"AnalyticsEvent", 'String'>
    readonly payload: FieldRef<"AnalyticsEvent", 'Json'>
    readonly createdAt: FieldRef<"AnalyticsEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalyticsEvent findUnique
   */
  export type AnalyticsEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent findUniqueOrThrow
   */
  export type AnalyticsEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent findFirst
   */
  export type AnalyticsEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsEvents.
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsEvents.
     */
    distinct?: AnalyticsEventScalarFieldEnum | AnalyticsEventScalarFieldEnum[]
  }

  /**
   * AnalyticsEvent findFirstOrThrow
   */
  export type AnalyticsEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsEvents.
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsEvents.
     */
    distinct?: AnalyticsEventScalarFieldEnum | AnalyticsEventScalarFieldEnum[]
  }

  /**
   * AnalyticsEvent findMany
   */
  export type AnalyticsEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvents to fetch.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalyticsEvents.
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    distinct?: AnalyticsEventScalarFieldEnum | AnalyticsEventScalarFieldEnum[]
  }

  /**
   * AnalyticsEvent create
   */
  export type AnalyticsEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The data needed to create a AnalyticsEvent.
     */
    data: XOR<AnalyticsEventCreateInput, AnalyticsEventUncheckedCreateInput>
  }

  /**
   * AnalyticsEvent createMany
   */
  export type AnalyticsEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalyticsEvents.
     */
    data: AnalyticsEventCreateManyInput | AnalyticsEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalyticsEvent createManyAndReturn
   */
  export type AnalyticsEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The data used to create many AnalyticsEvents.
     */
    data: AnalyticsEventCreateManyInput | AnalyticsEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalyticsEvent update
   */
  export type AnalyticsEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The data needed to update a AnalyticsEvent.
     */
    data: XOR<AnalyticsEventUpdateInput, AnalyticsEventUncheckedUpdateInput>
    /**
     * Choose, which AnalyticsEvent to update.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent updateMany
   */
  export type AnalyticsEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalyticsEvents.
     */
    data: XOR<AnalyticsEventUpdateManyMutationInput, AnalyticsEventUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsEvents to update
     */
    where?: AnalyticsEventWhereInput
    /**
     * Limit how many AnalyticsEvents to update.
     */
    limit?: number
  }

  /**
   * AnalyticsEvent updateManyAndReturn
   */
  export type AnalyticsEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The data used to update AnalyticsEvents.
     */
    data: XOR<AnalyticsEventUpdateManyMutationInput, AnalyticsEventUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsEvents to update
     */
    where?: AnalyticsEventWhereInput
    /**
     * Limit how many AnalyticsEvents to update.
     */
    limit?: number
  }

  /**
   * AnalyticsEvent upsert
   */
  export type AnalyticsEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The filter to search for the AnalyticsEvent to update in case it exists.
     */
    where: AnalyticsEventWhereUniqueInput
    /**
     * In case the AnalyticsEvent found by the `where` argument doesn't exist, create a new AnalyticsEvent with this data.
     */
    create: XOR<AnalyticsEventCreateInput, AnalyticsEventUncheckedCreateInput>
    /**
     * In case the AnalyticsEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsEventUpdateInput, AnalyticsEventUncheckedUpdateInput>
  }

  /**
   * AnalyticsEvent delete
   */
  export type AnalyticsEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter which AnalyticsEvent to delete.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent deleteMany
   */
  export type AnalyticsEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsEvents to delete
     */
    where?: AnalyticsEventWhereInput
    /**
     * Limit how many AnalyticsEvents to delete.
     */
    limit?: number
  }

  /**
   * AnalyticsEvent without action
   */
  export type AnalyticsEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    username: 'username',
    fullName: 'fullName',
    headline: 'headline',
    bio: 'bio',
    imageUrl: 'imageUrl',
    profileUrl: 'profileUrl',
    categoryId: 'categoryId',
    location: 'location',
    country: 'country',
    currentBid: 'currentBid',
    currentBidAt: 'currentBidAt',
    totalViews: 'totalViews',
    verified: 'verified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const SocialLinkScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    type: 'type',
    url: 'url',
    createdAt: 'createdAt'
  };

  export type SocialLinkScalarFieldEnum = (typeof SocialLinkScalarFieldEnum)[keyof typeof SocialLinkScalarFieldEnum]


  export const BidScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    userId: 'userId',
    targetBidCents: 'targetBidCents',
    chargeAmountCents: 'chargeAmountCents',
    status: 'status',
    providerCheckoutId: 'providerCheckoutId',
    identityInput: 'identityInput',
    createdAt: 'createdAt'
  };

  export type BidScalarFieldEnum = (typeof BidScalarFieldEnum)[keyof typeof BidScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    personId: 'personId',
    bidId: 'bidId',
    amount: 'amount',
    currency: 'currency',
    provider: 'provider',
    providerPaymentId: 'providerPaymentId',
    providerCheckoutId: 'providerCheckoutId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ProfileViewScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    ipHash: 'ipHash',
    userAgentHash: 'userAgentHash',
    createdAt: 'createdAt'
  };

  export type ProfileViewScalarFieldEnum = (typeof ProfileViewScalarFieldEnum)[keyof typeof ProfileViewScalarFieldEnum]


  export const RankSnapshotScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    rank: 'rank',
    bid: 'bid',
    createdAt: 'createdAt'
  };

  export type RankSnapshotScalarFieldEnum = (typeof RankSnapshotScalarFieldEnum)[keyof typeof RankSnapshotScalarFieldEnum]


  export const LinkClickScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    socialLinkId: 'socialLinkId',
    ipHash: 'ipHash',
    createdAt: 'createdAt'
  };

  export type LinkClickScalarFieldEnum = (typeof LinkClickScalarFieldEnum)[keyof typeof LinkClickScalarFieldEnum]


  export const ProviderWebhookEventScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    eventId: 'eventId',
    eventType: 'eventType',
    processedAt: 'processedAt',
    createdAt: 'createdAt'
  };

  export type ProviderWebhookEventScalarFieldEnum = (typeof ProviderWebhookEventScalarFieldEnum)[keyof typeof ProviderWebhookEventScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    type: 'type',
    amount: 'amount',
    rank: 'rank',
    createdAt: 'createdAt'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const AnalyticsEventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    payload: 'payload',
    createdAt: 'createdAt'
  };

  export type AnalyticsEventScalarFieldEnum = (typeof AnalyticsEventScalarFieldEnum)[keyof typeof AnalyticsEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SocialLinkType'
   */
  export type EnumSocialLinkTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SocialLinkType'>
    


  /**
   * Reference to a field of type 'SocialLinkType[]'
   */
  export type ListEnumSocialLinkTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SocialLinkType[]'>
    


  /**
   * Reference to a field of type 'BidStatus'
   */
  export type EnumBidStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BidStatus'>
    


  /**
   * Reference to a field of type 'BidStatus[]'
   */
  export type ListEnumBidStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BidStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentProvider'
   */
  export type EnumPaymentProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProvider'>
    


  /**
   * Reference to a field of type 'PaymentProvider[]'
   */
  export type ListEnumPaymentProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProvider[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'ActivityType'
   */
  export type EnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType'>
    


  /**
   * Reference to a field of type 'ActivityType[]'
   */
  export type ListEnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    person?: XOR<PersonNullableScalarRelationFilter, PersonWhereInput> | null
    bids?: BidListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    person?: PersonOrderByWithRelationInput
    bids?: BidOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    person?: XOR<PersonNullableScalarRelationFilter, PersonWhereInput> | null
    bids?: BidListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    people?: PersonListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    people?: PersonOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    people?: PersonListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: StringFilter<"Person"> | string
    userId?: StringNullableFilter<"Person"> | string | null
    username?: StringFilter<"Person"> | string
    fullName?: StringFilter<"Person"> | string
    headline?: StringFilter<"Person"> | string
    bio?: StringNullableFilter<"Person"> | string | null
    imageUrl?: StringNullableFilter<"Person"> | string | null
    profileUrl?: StringNullableFilter<"Person"> | string | null
    categoryId?: StringFilter<"Person"> | string
    location?: StringNullableFilter<"Person"> | string | null
    country?: StringNullableFilter<"Person"> | string | null
    currentBid?: IntFilter<"Person"> | number
    currentBidAt?: DateTimeFilter<"Person"> | Date | string
    totalViews?: IntFilter<"Person"> | number
    verified?: BoolFilter<"Person"> | boolean
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    socialLinks?: SocialLinkListRelationFilter
    bids?: BidListRelationFilter
    views?: ProfileViewListRelationFilter
    snapshots?: RankSnapshotListRelationFilter
    payments?: PaymentListRelationFilter
    linkClicks?: LinkClickListRelationFilter
    activities?: ActivityListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    username?: SortOrder
    fullName?: SortOrder
    headline?: SortOrder
    bio?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    location?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    currentBid?: SortOrder
    currentBidAt?: SortOrder
    totalViews?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    socialLinks?: SocialLinkOrderByRelationAggregateInput
    bids?: BidOrderByRelationAggregateInput
    views?: ProfileViewOrderByRelationAggregateInput
    snapshots?: RankSnapshotOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    linkClicks?: LinkClickOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    username?: string
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    fullName?: StringFilter<"Person"> | string
    headline?: StringFilter<"Person"> | string
    bio?: StringNullableFilter<"Person"> | string | null
    imageUrl?: StringNullableFilter<"Person"> | string | null
    profileUrl?: StringNullableFilter<"Person"> | string | null
    categoryId?: StringFilter<"Person"> | string
    location?: StringNullableFilter<"Person"> | string | null
    country?: StringNullableFilter<"Person"> | string | null
    currentBid?: IntFilter<"Person"> | number
    currentBidAt?: DateTimeFilter<"Person"> | Date | string
    totalViews?: IntFilter<"Person"> | number
    verified?: BoolFilter<"Person"> | boolean
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    socialLinks?: SocialLinkListRelationFilter
    bids?: BidListRelationFilter
    views?: ProfileViewListRelationFilter
    snapshots?: RankSnapshotListRelationFilter
    payments?: PaymentListRelationFilter
    linkClicks?: LinkClickListRelationFilter
    activities?: ActivityListRelationFilter
  }, "id" | "userId" | "username">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    username?: SortOrder
    fullName?: SortOrder
    headline?: SortOrder
    bio?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    location?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    currentBid?: SortOrder
    currentBidAt?: SortOrder
    totalViews?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _avg?: PersonAvgOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
    _sum?: PersonSumOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Person"> | string
    userId?: StringNullableWithAggregatesFilter<"Person"> | string | null
    username?: StringWithAggregatesFilter<"Person"> | string
    fullName?: StringWithAggregatesFilter<"Person"> | string
    headline?: StringWithAggregatesFilter<"Person"> | string
    bio?: StringNullableWithAggregatesFilter<"Person"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Person"> | string | null
    profileUrl?: StringNullableWithAggregatesFilter<"Person"> | string | null
    categoryId?: StringWithAggregatesFilter<"Person"> | string
    location?: StringNullableWithAggregatesFilter<"Person"> | string | null
    country?: StringNullableWithAggregatesFilter<"Person"> | string | null
    currentBid?: IntWithAggregatesFilter<"Person"> | number
    currentBidAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    totalViews?: IntWithAggregatesFilter<"Person"> | number
    verified?: BoolWithAggregatesFilter<"Person"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
  }

  export type SocialLinkWhereInput = {
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    id?: StringFilter<"SocialLink"> | string
    personId?: StringFilter<"SocialLink"> | string
    type?: EnumSocialLinkTypeFilter<"SocialLink"> | $Enums.SocialLinkType
    url?: StringFilter<"SocialLink"> | string
    createdAt?: DateTimeFilter<"SocialLink"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    linkClicks?: LinkClickListRelationFilter
  }

  export type SocialLinkOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    person?: PersonOrderByWithRelationInput
    linkClicks?: LinkClickOrderByRelationAggregateInput
  }

  export type SocialLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    personId_type?: SocialLinkPersonIdTypeCompoundUniqueInput
    type_url?: SocialLinkTypeUrlCompoundUniqueInput
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    personId?: StringFilter<"SocialLink"> | string
    type?: EnumSocialLinkTypeFilter<"SocialLink"> | $Enums.SocialLinkType
    url?: StringFilter<"SocialLink"> | string
    createdAt?: DateTimeFilter<"SocialLink"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    linkClicks?: LinkClickListRelationFilter
  }, "id" | "personId_type" | "type_url">

  export type SocialLinkOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    _count?: SocialLinkCountOrderByAggregateInput
    _max?: SocialLinkMaxOrderByAggregateInput
    _min?: SocialLinkMinOrderByAggregateInput
  }

  export type SocialLinkScalarWhereWithAggregatesInput = {
    AND?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    OR?: SocialLinkScalarWhereWithAggregatesInput[]
    NOT?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialLink"> | string
    personId?: StringWithAggregatesFilter<"SocialLink"> | string
    type?: EnumSocialLinkTypeWithAggregatesFilter<"SocialLink"> | $Enums.SocialLinkType
    url?: StringWithAggregatesFilter<"SocialLink"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SocialLink"> | Date | string
  }

  export type BidWhereInput = {
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    id?: StringFilter<"Bid"> | string
    personId?: StringFilter<"Bid"> | string
    userId?: StringNullableFilter<"Bid"> | string | null
    targetBidCents?: IntFilter<"Bid"> | number
    chargeAmountCents?: IntFilter<"Bid"> | number
    status?: EnumBidStatusFilter<"Bid"> | $Enums.BidStatus
    providerCheckoutId?: StringNullableFilter<"Bid"> | string | null
    identityInput?: StringNullableFilter<"Bid"> | string | null
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type BidOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    userId?: SortOrderInput | SortOrder
    targetBidCents?: SortOrder
    chargeAmountCents?: SortOrder
    status?: SortOrder
    providerCheckoutId?: SortOrderInput | SortOrder
    identityInput?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    person?: PersonOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type BidWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerCheckoutId?: string
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    personId?: StringFilter<"Bid"> | string
    userId?: StringNullableFilter<"Bid"> | string | null
    targetBidCents?: IntFilter<"Bid"> | number
    chargeAmountCents?: IntFilter<"Bid"> | number
    status?: EnumBidStatusFilter<"Bid"> | $Enums.BidStatus
    identityInput?: StringNullableFilter<"Bid"> | string | null
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id" | "providerCheckoutId">

  export type BidOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    userId?: SortOrderInput | SortOrder
    targetBidCents?: SortOrder
    chargeAmountCents?: SortOrder
    status?: SortOrder
    providerCheckoutId?: SortOrderInput | SortOrder
    identityInput?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BidCountOrderByAggregateInput
    _avg?: BidAvgOrderByAggregateInput
    _max?: BidMaxOrderByAggregateInput
    _min?: BidMinOrderByAggregateInput
    _sum?: BidSumOrderByAggregateInput
  }

  export type BidScalarWhereWithAggregatesInput = {
    AND?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    OR?: BidScalarWhereWithAggregatesInput[]
    NOT?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bid"> | string
    personId?: StringWithAggregatesFilter<"Bid"> | string
    userId?: StringNullableWithAggregatesFilter<"Bid"> | string | null
    targetBidCents?: IntWithAggregatesFilter<"Bid"> | number
    chargeAmountCents?: IntWithAggregatesFilter<"Bid"> | number
    status?: EnumBidStatusWithAggregatesFilter<"Bid"> | $Enums.BidStatus
    providerCheckoutId?: StringNullableWithAggregatesFilter<"Bid"> | string | null
    identityInput?: StringNullableWithAggregatesFilter<"Bid"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Bid"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    personId?: StringFilter<"Payment"> | string
    bidId?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    provider?: EnumPaymentProviderFilter<"Payment"> | $Enums.PaymentProvider
    providerPaymentId?: StringNullableFilter<"Payment"> | string | null
    providerCheckoutId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    bid?: XOR<BidScalarRelationFilter, BidWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    personId?: SortOrder
    bidId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    providerPaymentId?: SortOrderInput | SortOrder
    providerCheckoutId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    person?: PersonOrderByWithRelationInput
    bid?: BidOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bidId?: string
    providerPaymentId?: string
    providerCheckoutId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    personId?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    provider?: EnumPaymentProviderFilter<"Payment"> | $Enums.PaymentProvider
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    bid?: XOR<BidScalarRelationFilter, BidWhereInput>
  }, "id" | "bidId" | "providerPaymentId" | "providerCheckoutId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    personId?: SortOrder
    bidId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    providerPaymentId?: SortOrderInput | SortOrder
    providerCheckoutId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    personId?: StringWithAggregatesFilter<"Payment"> | string
    bidId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: IntWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    provider?: EnumPaymentProviderWithAggregatesFilter<"Payment"> | $Enums.PaymentProvider
    providerPaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    providerCheckoutId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type ProfileViewWhereInput = {
    AND?: ProfileViewWhereInput | ProfileViewWhereInput[]
    OR?: ProfileViewWhereInput[]
    NOT?: ProfileViewWhereInput | ProfileViewWhereInput[]
    id?: StringFilter<"ProfileView"> | string
    personId?: StringFilter<"ProfileView"> | string
    ipHash?: StringFilter<"ProfileView"> | string
    userAgentHash?: StringFilter<"ProfileView"> | string
    createdAt?: DateTimeFilter<"ProfileView"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }

  export type ProfileViewOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    ipHash?: SortOrder
    userAgentHash?: SortOrder
    createdAt?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type ProfileViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfileViewWhereInput | ProfileViewWhereInput[]
    OR?: ProfileViewWhereInput[]
    NOT?: ProfileViewWhereInput | ProfileViewWhereInput[]
    personId?: StringFilter<"ProfileView"> | string
    ipHash?: StringFilter<"ProfileView"> | string
    userAgentHash?: StringFilter<"ProfileView"> | string
    createdAt?: DateTimeFilter<"ProfileView"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }, "id">

  export type ProfileViewOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    ipHash?: SortOrder
    userAgentHash?: SortOrder
    createdAt?: SortOrder
    _count?: ProfileViewCountOrderByAggregateInput
    _max?: ProfileViewMaxOrderByAggregateInput
    _min?: ProfileViewMinOrderByAggregateInput
  }

  export type ProfileViewScalarWhereWithAggregatesInput = {
    AND?: ProfileViewScalarWhereWithAggregatesInput | ProfileViewScalarWhereWithAggregatesInput[]
    OR?: ProfileViewScalarWhereWithAggregatesInput[]
    NOT?: ProfileViewScalarWhereWithAggregatesInput | ProfileViewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProfileView"> | string
    personId?: StringWithAggregatesFilter<"ProfileView"> | string
    ipHash?: StringWithAggregatesFilter<"ProfileView"> | string
    userAgentHash?: StringWithAggregatesFilter<"ProfileView"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProfileView"> | Date | string
  }

  export type RankSnapshotWhereInput = {
    AND?: RankSnapshotWhereInput | RankSnapshotWhereInput[]
    OR?: RankSnapshotWhereInput[]
    NOT?: RankSnapshotWhereInput | RankSnapshotWhereInput[]
    id?: StringFilter<"RankSnapshot"> | string
    personId?: StringFilter<"RankSnapshot"> | string
    rank?: IntFilter<"RankSnapshot"> | number
    bid?: IntFilter<"RankSnapshot"> | number
    createdAt?: DateTimeFilter<"RankSnapshot"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }

  export type RankSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    rank?: SortOrder
    bid?: SortOrder
    createdAt?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type RankSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RankSnapshotWhereInput | RankSnapshotWhereInput[]
    OR?: RankSnapshotWhereInput[]
    NOT?: RankSnapshotWhereInput | RankSnapshotWhereInput[]
    personId?: StringFilter<"RankSnapshot"> | string
    rank?: IntFilter<"RankSnapshot"> | number
    bid?: IntFilter<"RankSnapshot"> | number
    createdAt?: DateTimeFilter<"RankSnapshot"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }, "id">

  export type RankSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    rank?: SortOrder
    bid?: SortOrder
    createdAt?: SortOrder
    _count?: RankSnapshotCountOrderByAggregateInput
    _avg?: RankSnapshotAvgOrderByAggregateInput
    _max?: RankSnapshotMaxOrderByAggregateInput
    _min?: RankSnapshotMinOrderByAggregateInput
    _sum?: RankSnapshotSumOrderByAggregateInput
  }

  export type RankSnapshotScalarWhereWithAggregatesInput = {
    AND?: RankSnapshotScalarWhereWithAggregatesInput | RankSnapshotScalarWhereWithAggregatesInput[]
    OR?: RankSnapshotScalarWhereWithAggregatesInput[]
    NOT?: RankSnapshotScalarWhereWithAggregatesInput | RankSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RankSnapshot"> | string
    personId?: StringWithAggregatesFilter<"RankSnapshot"> | string
    rank?: IntWithAggregatesFilter<"RankSnapshot"> | number
    bid?: IntWithAggregatesFilter<"RankSnapshot"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RankSnapshot"> | Date | string
  }

  export type LinkClickWhereInput = {
    AND?: LinkClickWhereInput | LinkClickWhereInput[]
    OR?: LinkClickWhereInput[]
    NOT?: LinkClickWhereInput | LinkClickWhereInput[]
    id?: StringFilter<"LinkClick"> | string
    personId?: StringFilter<"LinkClick"> | string
    socialLinkId?: StringFilter<"LinkClick"> | string
    ipHash?: StringNullableFilter<"LinkClick"> | string | null
    createdAt?: DateTimeFilter<"LinkClick"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    socialLink?: XOR<SocialLinkScalarRelationFilter, SocialLinkWhereInput>
  }

  export type LinkClickOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    socialLinkId?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    person?: PersonOrderByWithRelationInput
    socialLink?: SocialLinkOrderByWithRelationInput
  }

  export type LinkClickWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LinkClickWhereInput | LinkClickWhereInput[]
    OR?: LinkClickWhereInput[]
    NOT?: LinkClickWhereInput | LinkClickWhereInput[]
    personId?: StringFilter<"LinkClick"> | string
    socialLinkId?: StringFilter<"LinkClick"> | string
    ipHash?: StringNullableFilter<"LinkClick"> | string | null
    createdAt?: DateTimeFilter<"LinkClick"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    socialLink?: XOR<SocialLinkScalarRelationFilter, SocialLinkWhereInput>
  }, "id">

  export type LinkClickOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    socialLinkId?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LinkClickCountOrderByAggregateInput
    _max?: LinkClickMaxOrderByAggregateInput
    _min?: LinkClickMinOrderByAggregateInput
  }

  export type LinkClickScalarWhereWithAggregatesInput = {
    AND?: LinkClickScalarWhereWithAggregatesInput | LinkClickScalarWhereWithAggregatesInput[]
    OR?: LinkClickScalarWhereWithAggregatesInput[]
    NOT?: LinkClickScalarWhereWithAggregatesInput | LinkClickScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LinkClick"> | string
    personId?: StringWithAggregatesFilter<"LinkClick"> | string
    socialLinkId?: StringWithAggregatesFilter<"LinkClick"> | string
    ipHash?: StringNullableWithAggregatesFilter<"LinkClick"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LinkClick"> | Date | string
  }

  export type ProviderWebhookEventWhereInput = {
    AND?: ProviderWebhookEventWhereInput | ProviderWebhookEventWhereInput[]
    OR?: ProviderWebhookEventWhereInput[]
    NOT?: ProviderWebhookEventWhereInput | ProviderWebhookEventWhereInput[]
    id?: StringFilter<"ProviderWebhookEvent"> | string
    provider?: StringFilter<"ProviderWebhookEvent"> | string
    eventId?: StringFilter<"ProviderWebhookEvent"> | string
    eventType?: StringFilter<"ProviderWebhookEvent"> | string
    processedAt?: DateTimeFilter<"ProviderWebhookEvent"> | Date | string
    createdAt?: DateTimeFilter<"ProviderWebhookEvent"> | Date | string
  }

  export type ProviderWebhookEventOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderWebhookEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId?: string
    AND?: ProviderWebhookEventWhereInput | ProviderWebhookEventWhereInput[]
    OR?: ProviderWebhookEventWhereInput[]
    NOT?: ProviderWebhookEventWhereInput | ProviderWebhookEventWhereInput[]
    provider?: StringFilter<"ProviderWebhookEvent"> | string
    eventType?: StringFilter<"ProviderWebhookEvent"> | string
    processedAt?: DateTimeFilter<"ProviderWebhookEvent"> | Date | string
    createdAt?: DateTimeFilter<"ProviderWebhookEvent"> | Date | string
  }, "id" | "eventId">

  export type ProviderWebhookEventOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    _count?: ProviderWebhookEventCountOrderByAggregateInput
    _max?: ProviderWebhookEventMaxOrderByAggregateInput
    _min?: ProviderWebhookEventMinOrderByAggregateInput
  }

  export type ProviderWebhookEventScalarWhereWithAggregatesInput = {
    AND?: ProviderWebhookEventScalarWhereWithAggregatesInput | ProviderWebhookEventScalarWhereWithAggregatesInput[]
    OR?: ProviderWebhookEventScalarWhereWithAggregatesInput[]
    NOT?: ProviderWebhookEventScalarWhereWithAggregatesInput | ProviderWebhookEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProviderWebhookEvent"> | string
    provider?: StringWithAggregatesFilter<"ProviderWebhookEvent"> | string
    eventId?: StringWithAggregatesFilter<"ProviderWebhookEvent"> | string
    eventType?: StringWithAggregatesFilter<"ProviderWebhookEvent"> | string
    processedAt?: DateTimeWithAggregatesFilter<"ProviderWebhookEvent"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ProviderWebhookEvent"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    personId?: StringFilter<"Activity"> | string
    type?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    amount?: IntFilter<"Activity"> | number
    rank?: IntFilter<"Activity"> | number
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    personId?: StringFilter<"Activity"> | string
    type?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    amount?: IntFilter<"Activity"> | number
    rank?: IntFilter<"Activity"> | number
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    personId?: StringWithAggregatesFilter<"Activity"> | string
    type?: EnumActivityTypeWithAggregatesFilter<"Activity"> | $Enums.ActivityType
    amount?: IntWithAggregatesFilter<"Activity"> | number
    rank?: IntWithAggregatesFilter<"Activity"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type AnalyticsEventWhereInput = {
    AND?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    OR?: AnalyticsEventWhereInput[]
    NOT?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    id?: StringFilter<"AnalyticsEvent"> | string
    name?: StringFilter<"AnalyticsEvent"> | string
    payload?: JsonNullableFilter<"AnalyticsEvent">
    createdAt?: DateTimeFilter<"AnalyticsEvent"> | Date | string
  }

  export type AnalyticsEventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    payload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    OR?: AnalyticsEventWhereInput[]
    NOT?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    name?: StringFilter<"AnalyticsEvent"> | string
    payload?: JsonNullableFilter<"AnalyticsEvent">
    createdAt?: DateTimeFilter<"AnalyticsEvent"> | Date | string
  }, "id">

  export type AnalyticsEventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    payload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AnalyticsEventCountOrderByAggregateInput
    _max?: AnalyticsEventMaxOrderByAggregateInput
    _min?: AnalyticsEventMinOrderByAggregateInput
  }

  export type AnalyticsEventScalarWhereWithAggregatesInput = {
    AND?: AnalyticsEventScalarWhereWithAggregatesInput | AnalyticsEventScalarWhereWithAggregatesInput[]
    OR?: AnalyticsEventScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsEventScalarWhereWithAggregatesInput | AnalyticsEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalyticsEvent"> | string
    name?: StringWithAggregatesFilter<"AnalyticsEvent"> | string
    payload?: JsonNullableWithAggregatesFilter<"AnalyticsEvent">
    createdAt?: DateTimeWithAggregatesFilter<"AnalyticsEvent"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    person?: PersonCreateNestedOneWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    person?: PersonUncheckedCreateNestedOneWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUncheckedUpdateOneWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    people?: PersonCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    people?: PersonUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    people?: PersonUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    people?: PersonUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateInput = {
    id?: string
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPersonInput
    category: CategoryCreateNestedOneWithoutPeopleInput
    socialLinks?: SocialLinkCreateNestedManyWithoutPersonInput
    bids?: BidCreateNestedManyWithoutPersonInput
    views?: ProfileViewCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotCreateNestedManyWithoutPersonInput
    payments?: PaymentCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickCreateNestedManyWithoutPersonInput
    activities?: ActivityCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    userId?: string | null
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    categoryId: string
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutPersonInput
    bids?: BidUncheckedCreateNestedManyWithoutPersonInput
    views?: ProfileViewUncheckedCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotUncheckedCreateNestedManyWithoutPersonInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickUncheckedCreateNestedManyWithoutPersonInput
    activities?: ActivityUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPersonNestedInput
    category?: CategoryUpdateOneRequiredWithoutPeopleNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutPersonNestedInput
    bids?: BidUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUpdateManyWithoutPersonNestedInput
    payments?: PaymentUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUpdateManyWithoutPersonNestedInput
    activities?: ActivityUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutPersonNestedInput
    bids?: BidUncheckedUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUncheckedUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUncheckedUpdateManyWithoutPersonNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUncheckedUpdateManyWithoutPersonNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id?: string
    userId?: string | null
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    categoryId: string
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkCreateInput = {
    id?: string
    type: $Enums.SocialLinkType
    url: string
    createdAt?: Date | string
    person: PersonCreateNestedOneWithoutSocialLinksInput
    linkClicks?: LinkClickCreateNestedManyWithoutSocialLinkInput
  }

  export type SocialLinkUncheckedCreateInput = {
    id?: string
    personId: string
    type: $Enums.SocialLinkType
    url: string
    createdAt?: Date | string
    linkClicks?: LinkClickUncheckedCreateNestedManyWithoutSocialLinkInput
  }

  export type SocialLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSocialLinkTypeFieldUpdateOperationsInput | $Enums.SocialLinkType
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutSocialLinksNestedInput
    linkClicks?: LinkClickUpdateManyWithoutSocialLinkNestedInput
  }

  export type SocialLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    type?: EnumSocialLinkTypeFieldUpdateOperationsInput | $Enums.SocialLinkType
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkClicks?: LinkClickUncheckedUpdateManyWithoutSocialLinkNestedInput
  }

  export type SocialLinkCreateManyInput = {
    id?: string
    personId: string
    type: $Enums.SocialLinkType
    url: string
    createdAt?: Date | string
  }

  export type SocialLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSocialLinkTypeFieldUpdateOperationsInput | $Enums.SocialLinkType
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    type?: EnumSocialLinkTypeFieldUpdateOperationsInput | $Enums.SocialLinkType
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateInput = {
    id?: string
    targetBidCents: number
    chargeAmountCents: number
    status?: $Enums.BidStatus
    providerCheckoutId?: string | null
    identityInput?: string | null
    createdAt?: Date | string
    person: PersonCreateNestedOneWithoutBidsInput
    user?: UserCreateNestedOneWithoutBidsInput
    payment?: PaymentCreateNestedOneWithoutBidInput
  }

  export type BidUncheckedCreateInput = {
    id?: string
    personId: string
    userId?: string | null
    targetBidCents: number
    chargeAmountCents: number
    status?: $Enums.BidStatus
    providerCheckoutId?: string | null
    identityInput?: string | null
    createdAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBidInput
  }

  export type BidUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetBidCents?: IntFieldUpdateOperationsInput | number
    chargeAmountCents?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    identityInput?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutBidsNestedInput
    user?: UserUpdateOneWithoutBidsNestedInput
    payment?: PaymentUpdateOneWithoutBidNestedInput
  }

  export type BidUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    targetBidCents?: IntFieldUpdateOperationsInput | number
    chargeAmountCents?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    identityInput?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBidNestedInput
  }

  export type BidCreateManyInput = {
    id?: string
    personId: string
    userId?: string | null
    targetBidCents: number
    chargeAmountCents: number
    status?: $Enums.BidStatus
    providerCheckoutId?: string | null
    identityInput?: string | null
    createdAt?: Date | string
  }

  export type BidUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetBidCents?: IntFieldUpdateOperationsInput | number
    chargeAmountCents?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    identityInput?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    targetBidCents?: IntFieldUpdateOperationsInput | number
    chargeAmountCents?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    identityInput?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    currency?: string
    provider: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerCheckoutId?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
    person: PersonCreateNestedOneWithoutPaymentsInput
    bid: BidCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    personId: string
    bidId: string
    amount: number
    currency?: string
    provider: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerCheckoutId?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    person?: PersonUpdateOneRequiredWithoutPaymentsNestedInput
    bid?: BidUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    personId: string
    bidId: string
    amount: number
    currency?: string
    provider: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerCheckoutId?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileViewCreateInput = {
    id?: string
    ipHash: string
    userAgentHash: string
    createdAt?: Date | string
    person: PersonCreateNestedOneWithoutViewsInput
  }

  export type ProfileViewUncheckedCreateInput = {
    id?: string
    personId: string
    ipHash: string
    userAgentHash: string
    createdAt?: Date | string
  }

  export type ProfileViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: StringFieldUpdateOperationsInput | string
    userAgentHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutViewsNestedInput
  }

  export type ProfileViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    ipHash?: StringFieldUpdateOperationsInput | string
    userAgentHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileViewCreateManyInput = {
    id?: string
    personId: string
    ipHash: string
    userAgentHash: string
    createdAt?: Date | string
  }

  export type ProfileViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: StringFieldUpdateOperationsInput | string
    userAgentHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    ipHash?: StringFieldUpdateOperationsInput | string
    userAgentHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankSnapshotCreateInput = {
    id?: string
    rank: number
    bid: number
    createdAt?: Date | string
    person: PersonCreateNestedOneWithoutSnapshotsInput
  }

  export type RankSnapshotUncheckedCreateInput = {
    id?: string
    personId: string
    rank: number
    bid: number
    createdAt?: Date | string
  }

  export type RankSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    bid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutSnapshotsNestedInput
  }

  export type RankSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    bid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankSnapshotCreateManyInput = {
    id?: string
    personId: string
    rank: number
    bid: number
    createdAt?: Date | string
  }

  export type RankSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    bid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    bid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkClickCreateInput = {
    id?: string
    ipHash?: string | null
    createdAt?: Date | string
    person: PersonCreateNestedOneWithoutLinkClicksInput
    socialLink: SocialLinkCreateNestedOneWithoutLinkClicksInput
  }

  export type LinkClickUncheckedCreateInput = {
    id?: string
    personId: string
    socialLinkId: string
    ipHash?: string | null
    createdAt?: Date | string
  }

  export type LinkClickUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutLinkClicksNestedInput
    socialLink?: SocialLinkUpdateOneRequiredWithoutLinkClicksNestedInput
  }

  export type LinkClickUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    socialLinkId?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkClickCreateManyInput = {
    id?: string
    personId: string
    socialLinkId: string
    ipHash?: string | null
    createdAt?: Date | string
  }

  export type LinkClickUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkClickUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    socialLinkId?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderWebhookEventCreateInput = {
    id?: string
    provider: string
    eventId: string
    eventType: string
    processedAt?: Date | string
    createdAt?: Date | string
  }

  export type ProviderWebhookEventUncheckedCreateInput = {
    id?: string
    provider: string
    eventId: string
    eventType: string
    processedAt?: Date | string
    createdAt?: Date | string
  }

  export type ProviderWebhookEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderWebhookEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderWebhookEventCreateManyInput = {
    id?: string
    provider: string
    eventId: string
    eventType: string
    processedAt?: Date | string
    createdAt?: Date | string
  }

  export type ProviderWebhookEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderWebhookEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    id?: string
    type: $Enums.ActivityType
    amount: number
    rank: number
    createdAt?: Date | string
    person: PersonCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    personId: string
    type: $Enums.ActivityType
    amount: number
    rank: number
    createdAt?: Date | string
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    amount?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    amount?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyInput = {
    id?: string
    personId: string
    type: $Enums.ActivityType
    amount: number
    rank: number
    createdAt?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    amount?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    amount?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventCreateInput = {
    id?: string
    name: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalyticsEventUncheckedCreateInput = {
    id?: string
    name: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalyticsEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventCreateManyInput = {
    id?: string
    name: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalyticsEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type PersonNullableScalarRelationFilter = {
    is?: PersonWhereInput | null
    isNot?: PersonWhereInput | null
  }

  export type BidListRelationFilter = {
    every?: BidWhereInput
    some?: BidWhereInput
    none?: BidWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BidOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type PersonListRelationFilter = {
    every?: PersonWhereInput
    some?: PersonWhereInput
    none?: PersonWhereInput
  }

  export type PersonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SocialLinkListRelationFilter = {
    every?: SocialLinkWhereInput
    some?: SocialLinkWhereInput
    none?: SocialLinkWhereInput
  }

  export type ProfileViewListRelationFilter = {
    every?: ProfileViewWhereInput
    some?: ProfileViewWhereInput
    none?: ProfileViewWhereInput
  }

  export type RankSnapshotListRelationFilter = {
    every?: RankSnapshotWhereInput
    some?: RankSnapshotWhereInput
    none?: RankSnapshotWhereInput
  }

  export type LinkClickListRelationFilter = {
    every?: LinkClickWhereInput
    some?: LinkClickWhereInput
    none?: LinkClickWhereInput
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type SocialLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RankSnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkClickOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    headline?: SortOrder
    bio?: SortOrder
    imageUrl?: SortOrder
    profileUrl?: SortOrder
    categoryId?: SortOrder
    location?: SortOrder
    country?: SortOrder
    currentBid?: SortOrder
    currentBidAt?: SortOrder
    totalViews?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonAvgOrderByAggregateInput = {
    currentBid?: SortOrder
    totalViews?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    headline?: SortOrder
    bio?: SortOrder
    imageUrl?: SortOrder
    profileUrl?: SortOrder
    categoryId?: SortOrder
    location?: SortOrder
    country?: SortOrder
    currentBid?: SortOrder
    currentBidAt?: SortOrder
    totalViews?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    headline?: SortOrder
    bio?: SortOrder
    imageUrl?: SortOrder
    profileUrl?: SortOrder
    categoryId?: SortOrder
    location?: SortOrder
    country?: SortOrder
    currentBid?: SortOrder
    currentBidAt?: SortOrder
    totalViews?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonSumOrderByAggregateInput = {
    currentBid?: SortOrder
    totalViews?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumSocialLinkTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialLinkType | EnumSocialLinkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SocialLinkType[] | ListEnumSocialLinkTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SocialLinkType[] | ListEnumSocialLinkTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSocialLinkTypeFilter<$PrismaModel> | $Enums.SocialLinkType
  }

  export type PersonScalarRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type SocialLinkPersonIdTypeCompoundUniqueInput = {
    personId: string
    type: $Enums.SocialLinkType
  }

  export type SocialLinkTypeUrlCompoundUniqueInput = {
    type: $Enums.SocialLinkType
    url: string
  }

  export type SocialLinkCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialLinkMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSocialLinkTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialLinkType | EnumSocialLinkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SocialLinkType[] | ListEnumSocialLinkTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SocialLinkType[] | ListEnumSocialLinkTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSocialLinkTypeWithAggregatesFilter<$PrismaModel> | $Enums.SocialLinkType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSocialLinkTypeFilter<$PrismaModel>
    _max?: NestedEnumSocialLinkTypeFilter<$PrismaModel>
  }

  export type EnumBidStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BidStatus | EnumBidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBidStatusFilter<$PrismaModel> | $Enums.BidStatus
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type BidCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    userId?: SortOrder
    targetBidCents?: SortOrder
    chargeAmountCents?: SortOrder
    status?: SortOrder
    providerCheckoutId?: SortOrder
    identityInput?: SortOrder
    createdAt?: SortOrder
  }

  export type BidAvgOrderByAggregateInput = {
    targetBidCents?: SortOrder
    chargeAmountCents?: SortOrder
  }

  export type BidMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    userId?: SortOrder
    targetBidCents?: SortOrder
    chargeAmountCents?: SortOrder
    status?: SortOrder
    providerCheckoutId?: SortOrder
    identityInput?: SortOrder
    createdAt?: SortOrder
  }

  export type BidMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    userId?: SortOrder
    targetBidCents?: SortOrder
    chargeAmountCents?: SortOrder
    status?: SortOrder
    providerCheckoutId?: SortOrder
    identityInput?: SortOrder
    createdAt?: SortOrder
  }

  export type BidSumOrderByAggregateInput = {
    targetBidCents?: SortOrder
    chargeAmountCents?: SortOrder
  }

  export type EnumBidStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BidStatus | EnumBidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBidStatusWithAggregatesFilter<$PrismaModel> | $Enums.BidStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBidStatusFilter<$PrismaModel>
    _max?: NestedEnumBidStatusFilter<$PrismaModel>
  }

  export type EnumPaymentProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderFilter<$PrismaModel> | $Enums.PaymentProvider
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BidScalarRelationFilter = {
    is?: BidWhereInput
    isNot?: BidWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    personId?: SortOrder
    bidId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    providerPaymentId?: SortOrder
    providerCheckoutId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    personId?: SortOrder
    bidId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    providerPaymentId?: SortOrder
    providerCheckoutId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    personId?: SortOrder
    bidId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    provider?: SortOrder
    providerPaymentId?: SortOrder
    providerCheckoutId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentProviderFilter<$PrismaModel>
    _max?: NestedEnumPaymentProviderFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type ProfileViewCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    ipHash?: SortOrder
    userAgentHash?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfileViewMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    ipHash?: SortOrder
    userAgentHash?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfileViewMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    ipHash?: SortOrder
    userAgentHash?: SortOrder
    createdAt?: SortOrder
  }

  export type RankSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    rank?: SortOrder
    bid?: SortOrder
    createdAt?: SortOrder
  }

  export type RankSnapshotAvgOrderByAggregateInput = {
    rank?: SortOrder
    bid?: SortOrder
  }

  export type RankSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    rank?: SortOrder
    bid?: SortOrder
    createdAt?: SortOrder
  }

  export type RankSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    rank?: SortOrder
    bid?: SortOrder
    createdAt?: SortOrder
  }

  export type RankSnapshotSumOrderByAggregateInput = {
    rank?: SortOrder
    bid?: SortOrder
  }

  export type SocialLinkScalarRelationFilter = {
    is?: SocialLinkWhereInput
    isNot?: SocialLinkWhereInput
  }

  export type LinkClickCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    socialLinkId?: SortOrder
    ipHash?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkClickMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    socialLinkId?: SortOrder
    ipHash?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkClickMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    socialLinkId?: SortOrder
    ipHash?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderWebhookEventCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderWebhookEventMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderWebhookEventMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    amount?: SortOrder
    rank?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    amount?: SortOrder
    rank?: SortOrder
  }

  export type EnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AnalyticsEventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsEventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsEventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type PersonCreateNestedOneWithoutUserInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput
    connect?: PersonWhereUniqueInput
  }

  export type BidCreateNestedManyWithoutUserInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PersonUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput
    connect?: PersonWhereUniqueInput
  }

  export type BidUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PersonUpdateOneWithoutUserNestedInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput
    upsert?: PersonUpsertWithoutUserInput
    disconnect?: PersonWhereInput | boolean
    delete?: PersonWhereInput | boolean
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutUserInput, PersonUpdateWithoutUserInput>, PersonUncheckedUpdateWithoutUserInput>
  }

  export type BidUpdateManyWithoutUserNestedInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutUserInput | BidUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutUserInput | BidUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BidUpdateManyWithWhereWithoutUserInput | BidUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PersonUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput
    upsert?: PersonUpsertWithoutUserInput
    disconnect?: PersonWhereInput | boolean
    delete?: PersonWhereInput | boolean
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutUserInput, PersonUpdateWithoutUserInput>, PersonUncheckedUpdateWithoutUserInput>
  }

  export type BidUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutUserInput | BidUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutUserInput | BidUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BidUpdateManyWithWhereWithoutUserInput | BidUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PersonCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PersonCreateWithoutCategoryInput, PersonUncheckedCreateWithoutCategoryInput> | PersonCreateWithoutCategoryInput[] | PersonUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutCategoryInput | PersonCreateOrConnectWithoutCategoryInput[]
    createMany?: PersonCreateManyCategoryInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type PersonUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PersonCreateWithoutCategoryInput, PersonUncheckedCreateWithoutCategoryInput> | PersonCreateWithoutCategoryInput[] | PersonUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutCategoryInput | PersonCreateOrConnectWithoutCategoryInput[]
    createMany?: PersonCreateManyCategoryInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type PersonUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PersonCreateWithoutCategoryInput, PersonUncheckedCreateWithoutCategoryInput> | PersonCreateWithoutCategoryInput[] | PersonUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutCategoryInput | PersonCreateOrConnectWithoutCategoryInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutCategoryInput | PersonUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PersonCreateManyCategoryInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutCategoryInput | PersonUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutCategoryInput | PersonUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type PersonUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PersonCreateWithoutCategoryInput, PersonUncheckedCreateWithoutCategoryInput> | PersonCreateWithoutCategoryInput[] | PersonUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutCategoryInput | PersonCreateOrConnectWithoutCategoryInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutCategoryInput | PersonUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PersonCreateManyCategoryInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutCategoryInput | PersonUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutCategoryInput | PersonUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPersonInput = {
    create?: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutPeopleInput = {
    create?: XOR<CategoryCreateWithoutPeopleInput, CategoryUncheckedCreateWithoutPeopleInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPeopleInput
    connect?: CategoryWhereUniqueInput
  }

  export type SocialLinkCreateNestedManyWithoutPersonInput = {
    create?: XOR<SocialLinkCreateWithoutPersonInput, SocialLinkUncheckedCreateWithoutPersonInput> | SocialLinkCreateWithoutPersonInput[] | SocialLinkUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutPersonInput | SocialLinkCreateOrConnectWithoutPersonInput[]
    createMany?: SocialLinkCreateManyPersonInputEnvelope
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
  }

  export type BidCreateNestedManyWithoutPersonInput = {
    create?: XOR<BidCreateWithoutPersonInput, BidUncheckedCreateWithoutPersonInput> | BidCreateWithoutPersonInput[] | BidUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: BidCreateOrConnectWithoutPersonInput | BidCreateOrConnectWithoutPersonInput[]
    createMany?: BidCreateManyPersonInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type ProfileViewCreateNestedManyWithoutPersonInput = {
    create?: XOR<ProfileViewCreateWithoutPersonInput, ProfileViewUncheckedCreateWithoutPersonInput> | ProfileViewCreateWithoutPersonInput[] | ProfileViewUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ProfileViewCreateOrConnectWithoutPersonInput | ProfileViewCreateOrConnectWithoutPersonInput[]
    createMany?: ProfileViewCreateManyPersonInputEnvelope
    connect?: ProfileViewWhereUniqueInput | ProfileViewWhereUniqueInput[]
  }

  export type RankSnapshotCreateNestedManyWithoutPersonInput = {
    create?: XOR<RankSnapshotCreateWithoutPersonInput, RankSnapshotUncheckedCreateWithoutPersonInput> | RankSnapshotCreateWithoutPersonInput[] | RankSnapshotUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: RankSnapshotCreateOrConnectWithoutPersonInput | RankSnapshotCreateOrConnectWithoutPersonInput[]
    createMany?: RankSnapshotCreateManyPersonInputEnvelope
    connect?: RankSnapshotWhereUniqueInput | RankSnapshotWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutPersonInput = {
    create?: XOR<PaymentCreateWithoutPersonInput, PaymentUncheckedCreateWithoutPersonInput> | PaymentCreateWithoutPersonInput[] | PaymentUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPersonInput | PaymentCreateOrConnectWithoutPersonInput[]
    createMany?: PaymentCreateManyPersonInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type LinkClickCreateNestedManyWithoutPersonInput = {
    create?: XOR<LinkClickCreateWithoutPersonInput, LinkClickUncheckedCreateWithoutPersonInput> | LinkClickCreateWithoutPersonInput[] | LinkClickUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: LinkClickCreateOrConnectWithoutPersonInput | LinkClickCreateOrConnectWithoutPersonInput[]
    createMany?: LinkClickCreateManyPersonInputEnvelope
    connect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutPersonInput = {
    create?: XOR<ActivityCreateWithoutPersonInput, ActivityUncheckedCreateWithoutPersonInput> | ActivityCreateWithoutPersonInput[] | ActivityUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutPersonInput | ActivityCreateOrConnectWithoutPersonInput[]
    createMany?: ActivityCreateManyPersonInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type SocialLinkUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<SocialLinkCreateWithoutPersonInput, SocialLinkUncheckedCreateWithoutPersonInput> | SocialLinkCreateWithoutPersonInput[] | SocialLinkUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutPersonInput | SocialLinkCreateOrConnectWithoutPersonInput[]
    createMany?: SocialLinkCreateManyPersonInputEnvelope
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<BidCreateWithoutPersonInput, BidUncheckedCreateWithoutPersonInput> | BidCreateWithoutPersonInput[] | BidUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: BidCreateOrConnectWithoutPersonInput | BidCreateOrConnectWithoutPersonInput[]
    createMany?: BidCreateManyPersonInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type ProfileViewUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<ProfileViewCreateWithoutPersonInput, ProfileViewUncheckedCreateWithoutPersonInput> | ProfileViewCreateWithoutPersonInput[] | ProfileViewUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ProfileViewCreateOrConnectWithoutPersonInput | ProfileViewCreateOrConnectWithoutPersonInput[]
    createMany?: ProfileViewCreateManyPersonInputEnvelope
    connect?: ProfileViewWhereUniqueInput | ProfileViewWhereUniqueInput[]
  }

  export type RankSnapshotUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<RankSnapshotCreateWithoutPersonInput, RankSnapshotUncheckedCreateWithoutPersonInput> | RankSnapshotCreateWithoutPersonInput[] | RankSnapshotUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: RankSnapshotCreateOrConnectWithoutPersonInput | RankSnapshotCreateOrConnectWithoutPersonInput[]
    createMany?: RankSnapshotCreateManyPersonInputEnvelope
    connect?: RankSnapshotWhereUniqueInput | RankSnapshotWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<PaymentCreateWithoutPersonInput, PaymentUncheckedCreateWithoutPersonInput> | PaymentCreateWithoutPersonInput[] | PaymentUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPersonInput | PaymentCreateOrConnectWithoutPersonInput[]
    createMany?: PaymentCreateManyPersonInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type LinkClickUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<LinkClickCreateWithoutPersonInput, LinkClickUncheckedCreateWithoutPersonInput> | LinkClickCreateWithoutPersonInput[] | LinkClickUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: LinkClickCreateOrConnectWithoutPersonInput | LinkClickCreateOrConnectWithoutPersonInput[]
    createMany?: LinkClickCreateManyPersonInputEnvelope
    connect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<ActivityCreateWithoutPersonInput, ActivityUncheckedCreateWithoutPersonInput> | ActivityCreateWithoutPersonInput[] | ActivityUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutPersonInput | ActivityCreateOrConnectWithoutPersonInput[]
    createMany?: ActivityCreateManyPersonInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutPersonNestedInput = {
    create?: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonInput
    upsert?: UserUpsertWithoutPersonInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonInput, UserUpdateWithoutPersonInput>, UserUncheckedUpdateWithoutPersonInput>
  }

  export type CategoryUpdateOneRequiredWithoutPeopleNestedInput = {
    create?: XOR<CategoryCreateWithoutPeopleInput, CategoryUncheckedCreateWithoutPeopleInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPeopleInput
    upsert?: CategoryUpsertWithoutPeopleInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPeopleInput, CategoryUpdateWithoutPeopleInput>, CategoryUncheckedUpdateWithoutPeopleInput>
  }

  export type SocialLinkUpdateManyWithoutPersonNestedInput = {
    create?: XOR<SocialLinkCreateWithoutPersonInput, SocialLinkUncheckedCreateWithoutPersonInput> | SocialLinkCreateWithoutPersonInput[] | SocialLinkUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutPersonInput | SocialLinkCreateOrConnectWithoutPersonInput[]
    upsert?: SocialLinkUpsertWithWhereUniqueWithoutPersonInput | SocialLinkUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: SocialLinkCreateManyPersonInputEnvelope
    set?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    disconnect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    delete?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    update?: SocialLinkUpdateWithWhereUniqueWithoutPersonInput | SocialLinkUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: SocialLinkUpdateManyWithWhereWithoutPersonInput | SocialLinkUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
  }

  export type BidUpdateManyWithoutPersonNestedInput = {
    create?: XOR<BidCreateWithoutPersonInput, BidUncheckedCreateWithoutPersonInput> | BidCreateWithoutPersonInput[] | BidUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: BidCreateOrConnectWithoutPersonInput | BidCreateOrConnectWithoutPersonInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutPersonInput | BidUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: BidCreateManyPersonInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutPersonInput | BidUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: BidUpdateManyWithWhereWithoutPersonInput | BidUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type ProfileViewUpdateManyWithoutPersonNestedInput = {
    create?: XOR<ProfileViewCreateWithoutPersonInput, ProfileViewUncheckedCreateWithoutPersonInput> | ProfileViewCreateWithoutPersonInput[] | ProfileViewUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ProfileViewCreateOrConnectWithoutPersonInput | ProfileViewCreateOrConnectWithoutPersonInput[]
    upsert?: ProfileViewUpsertWithWhereUniqueWithoutPersonInput | ProfileViewUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: ProfileViewCreateManyPersonInputEnvelope
    set?: ProfileViewWhereUniqueInput | ProfileViewWhereUniqueInput[]
    disconnect?: ProfileViewWhereUniqueInput | ProfileViewWhereUniqueInput[]
    delete?: ProfileViewWhereUniqueInput | ProfileViewWhereUniqueInput[]
    connect?: ProfileViewWhereUniqueInput | ProfileViewWhereUniqueInput[]
    update?: ProfileViewUpdateWithWhereUniqueWithoutPersonInput | ProfileViewUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: ProfileViewUpdateManyWithWhereWithoutPersonInput | ProfileViewUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: ProfileViewScalarWhereInput | ProfileViewScalarWhereInput[]
  }

  export type RankSnapshotUpdateManyWithoutPersonNestedInput = {
    create?: XOR<RankSnapshotCreateWithoutPersonInput, RankSnapshotUncheckedCreateWithoutPersonInput> | RankSnapshotCreateWithoutPersonInput[] | RankSnapshotUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: RankSnapshotCreateOrConnectWithoutPersonInput | RankSnapshotCreateOrConnectWithoutPersonInput[]
    upsert?: RankSnapshotUpsertWithWhereUniqueWithoutPersonInput | RankSnapshotUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: RankSnapshotCreateManyPersonInputEnvelope
    set?: RankSnapshotWhereUniqueInput | RankSnapshotWhereUniqueInput[]
    disconnect?: RankSnapshotWhereUniqueInput | RankSnapshotWhereUniqueInput[]
    delete?: RankSnapshotWhereUniqueInput | RankSnapshotWhereUniqueInput[]
    connect?: RankSnapshotWhereUniqueInput | RankSnapshotWhereUniqueInput[]
    update?: RankSnapshotUpdateWithWhereUniqueWithoutPersonInput | RankSnapshotUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: RankSnapshotUpdateManyWithWhereWithoutPersonInput | RankSnapshotUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: RankSnapshotScalarWhereInput | RankSnapshotScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutPersonNestedInput = {
    create?: XOR<PaymentCreateWithoutPersonInput, PaymentUncheckedCreateWithoutPersonInput> | PaymentCreateWithoutPersonInput[] | PaymentUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPersonInput | PaymentCreateOrConnectWithoutPersonInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPersonInput | PaymentUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: PaymentCreateManyPersonInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPersonInput | PaymentUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPersonInput | PaymentUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type LinkClickUpdateManyWithoutPersonNestedInput = {
    create?: XOR<LinkClickCreateWithoutPersonInput, LinkClickUncheckedCreateWithoutPersonInput> | LinkClickCreateWithoutPersonInput[] | LinkClickUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: LinkClickCreateOrConnectWithoutPersonInput | LinkClickCreateOrConnectWithoutPersonInput[]
    upsert?: LinkClickUpsertWithWhereUniqueWithoutPersonInput | LinkClickUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: LinkClickCreateManyPersonInputEnvelope
    set?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    disconnect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    delete?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    connect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    update?: LinkClickUpdateWithWhereUniqueWithoutPersonInput | LinkClickUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: LinkClickUpdateManyWithWhereWithoutPersonInput | LinkClickUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: LinkClickScalarWhereInput | LinkClickScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutPersonNestedInput = {
    create?: XOR<ActivityCreateWithoutPersonInput, ActivityUncheckedCreateWithoutPersonInput> | ActivityCreateWithoutPersonInput[] | ActivityUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutPersonInput | ActivityCreateOrConnectWithoutPersonInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutPersonInput | ActivityUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: ActivityCreateManyPersonInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutPersonInput | ActivityUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutPersonInput | ActivityUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type SocialLinkUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<SocialLinkCreateWithoutPersonInput, SocialLinkUncheckedCreateWithoutPersonInput> | SocialLinkCreateWithoutPersonInput[] | SocialLinkUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutPersonInput | SocialLinkCreateOrConnectWithoutPersonInput[]
    upsert?: SocialLinkUpsertWithWhereUniqueWithoutPersonInput | SocialLinkUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: SocialLinkCreateManyPersonInputEnvelope
    set?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    disconnect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    delete?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    update?: SocialLinkUpdateWithWhereUniqueWithoutPersonInput | SocialLinkUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: SocialLinkUpdateManyWithWhereWithoutPersonInput | SocialLinkUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<BidCreateWithoutPersonInput, BidUncheckedCreateWithoutPersonInput> | BidCreateWithoutPersonInput[] | BidUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: BidCreateOrConnectWithoutPersonInput | BidCreateOrConnectWithoutPersonInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutPersonInput | BidUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: BidCreateManyPersonInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutPersonInput | BidUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: BidUpdateManyWithWhereWithoutPersonInput | BidUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type ProfileViewUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<ProfileViewCreateWithoutPersonInput, ProfileViewUncheckedCreateWithoutPersonInput> | ProfileViewCreateWithoutPersonInput[] | ProfileViewUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ProfileViewCreateOrConnectWithoutPersonInput | ProfileViewCreateOrConnectWithoutPersonInput[]
    upsert?: ProfileViewUpsertWithWhereUniqueWithoutPersonInput | ProfileViewUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: ProfileViewCreateManyPersonInputEnvelope
    set?: ProfileViewWhereUniqueInput | ProfileViewWhereUniqueInput[]
    disconnect?: ProfileViewWhereUniqueInput | ProfileViewWhereUniqueInput[]
    delete?: ProfileViewWhereUniqueInput | ProfileViewWhereUniqueInput[]
    connect?: ProfileViewWhereUniqueInput | ProfileViewWhereUniqueInput[]
    update?: ProfileViewUpdateWithWhereUniqueWithoutPersonInput | ProfileViewUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: ProfileViewUpdateManyWithWhereWithoutPersonInput | ProfileViewUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: ProfileViewScalarWhereInput | ProfileViewScalarWhereInput[]
  }

  export type RankSnapshotUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<RankSnapshotCreateWithoutPersonInput, RankSnapshotUncheckedCreateWithoutPersonInput> | RankSnapshotCreateWithoutPersonInput[] | RankSnapshotUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: RankSnapshotCreateOrConnectWithoutPersonInput | RankSnapshotCreateOrConnectWithoutPersonInput[]
    upsert?: RankSnapshotUpsertWithWhereUniqueWithoutPersonInput | RankSnapshotUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: RankSnapshotCreateManyPersonInputEnvelope
    set?: RankSnapshotWhereUniqueInput | RankSnapshotWhereUniqueInput[]
    disconnect?: RankSnapshotWhereUniqueInput | RankSnapshotWhereUniqueInput[]
    delete?: RankSnapshotWhereUniqueInput | RankSnapshotWhereUniqueInput[]
    connect?: RankSnapshotWhereUniqueInput | RankSnapshotWhereUniqueInput[]
    update?: RankSnapshotUpdateWithWhereUniqueWithoutPersonInput | RankSnapshotUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: RankSnapshotUpdateManyWithWhereWithoutPersonInput | RankSnapshotUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: RankSnapshotScalarWhereInput | RankSnapshotScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<PaymentCreateWithoutPersonInput, PaymentUncheckedCreateWithoutPersonInput> | PaymentCreateWithoutPersonInput[] | PaymentUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPersonInput | PaymentCreateOrConnectWithoutPersonInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPersonInput | PaymentUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: PaymentCreateManyPersonInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPersonInput | PaymentUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPersonInput | PaymentUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type LinkClickUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<LinkClickCreateWithoutPersonInput, LinkClickUncheckedCreateWithoutPersonInput> | LinkClickCreateWithoutPersonInput[] | LinkClickUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: LinkClickCreateOrConnectWithoutPersonInput | LinkClickCreateOrConnectWithoutPersonInput[]
    upsert?: LinkClickUpsertWithWhereUniqueWithoutPersonInput | LinkClickUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: LinkClickCreateManyPersonInputEnvelope
    set?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    disconnect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    delete?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    connect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    update?: LinkClickUpdateWithWhereUniqueWithoutPersonInput | LinkClickUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: LinkClickUpdateManyWithWhereWithoutPersonInput | LinkClickUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: LinkClickScalarWhereInput | LinkClickScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<ActivityCreateWithoutPersonInput, ActivityUncheckedCreateWithoutPersonInput> | ActivityCreateWithoutPersonInput[] | ActivityUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutPersonInput | ActivityCreateOrConnectWithoutPersonInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutPersonInput | ActivityUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: ActivityCreateManyPersonInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutPersonInput | ActivityUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutPersonInput | ActivityUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type PersonCreateNestedOneWithoutSocialLinksInput = {
    create?: XOR<PersonCreateWithoutSocialLinksInput, PersonUncheckedCreateWithoutSocialLinksInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSocialLinksInput
    connect?: PersonWhereUniqueInput
  }

  export type LinkClickCreateNestedManyWithoutSocialLinkInput = {
    create?: XOR<LinkClickCreateWithoutSocialLinkInput, LinkClickUncheckedCreateWithoutSocialLinkInput> | LinkClickCreateWithoutSocialLinkInput[] | LinkClickUncheckedCreateWithoutSocialLinkInput[]
    connectOrCreate?: LinkClickCreateOrConnectWithoutSocialLinkInput | LinkClickCreateOrConnectWithoutSocialLinkInput[]
    createMany?: LinkClickCreateManySocialLinkInputEnvelope
    connect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
  }

  export type LinkClickUncheckedCreateNestedManyWithoutSocialLinkInput = {
    create?: XOR<LinkClickCreateWithoutSocialLinkInput, LinkClickUncheckedCreateWithoutSocialLinkInput> | LinkClickCreateWithoutSocialLinkInput[] | LinkClickUncheckedCreateWithoutSocialLinkInput[]
    connectOrCreate?: LinkClickCreateOrConnectWithoutSocialLinkInput | LinkClickCreateOrConnectWithoutSocialLinkInput[]
    createMany?: LinkClickCreateManySocialLinkInputEnvelope
    connect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
  }

  export type EnumSocialLinkTypeFieldUpdateOperationsInput = {
    set?: $Enums.SocialLinkType
  }

  export type PersonUpdateOneRequiredWithoutSocialLinksNestedInput = {
    create?: XOR<PersonCreateWithoutSocialLinksInput, PersonUncheckedCreateWithoutSocialLinksInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSocialLinksInput
    upsert?: PersonUpsertWithoutSocialLinksInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutSocialLinksInput, PersonUpdateWithoutSocialLinksInput>, PersonUncheckedUpdateWithoutSocialLinksInput>
  }

  export type LinkClickUpdateManyWithoutSocialLinkNestedInput = {
    create?: XOR<LinkClickCreateWithoutSocialLinkInput, LinkClickUncheckedCreateWithoutSocialLinkInput> | LinkClickCreateWithoutSocialLinkInput[] | LinkClickUncheckedCreateWithoutSocialLinkInput[]
    connectOrCreate?: LinkClickCreateOrConnectWithoutSocialLinkInput | LinkClickCreateOrConnectWithoutSocialLinkInput[]
    upsert?: LinkClickUpsertWithWhereUniqueWithoutSocialLinkInput | LinkClickUpsertWithWhereUniqueWithoutSocialLinkInput[]
    createMany?: LinkClickCreateManySocialLinkInputEnvelope
    set?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    disconnect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    delete?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    connect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    update?: LinkClickUpdateWithWhereUniqueWithoutSocialLinkInput | LinkClickUpdateWithWhereUniqueWithoutSocialLinkInput[]
    updateMany?: LinkClickUpdateManyWithWhereWithoutSocialLinkInput | LinkClickUpdateManyWithWhereWithoutSocialLinkInput[]
    deleteMany?: LinkClickScalarWhereInput | LinkClickScalarWhereInput[]
  }

  export type LinkClickUncheckedUpdateManyWithoutSocialLinkNestedInput = {
    create?: XOR<LinkClickCreateWithoutSocialLinkInput, LinkClickUncheckedCreateWithoutSocialLinkInput> | LinkClickCreateWithoutSocialLinkInput[] | LinkClickUncheckedCreateWithoutSocialLinkInput[]
    connectOrCreate?: LinkClickCreateOrConnectWithoutSocialLinkInput | LinkClickCreateOrConnectWithoutSocialLinkInput[]
    upsert?: LinkClickUpsertWithWhereUniqueWithoutSocialLinkInput | LinkClickUpsertWithWhereUniqueWithoutSocialLinkInput[]
    createMany?: LinkClickCreateManySocialLinkInputEnvelope
    set?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    disconnect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    delete?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    connect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    update?: LinkClickUpdateWithWhereUniqueWithoutSocialLinkInput | LinkClickUpdateWithWhereUniqueWithoutSocialLinkInput[]
    updateMany?: LinkClickUpdateManyWithWhereWithoutSocialLinkInput | LinkClickUpdateManyWithWhereWithoutSocialLinkInput[]
    deleteMany?: LinkClickScalarWhereInput | LinkClickScalarWhereInput[]
  }

  export type PersonCreateNestedOneWithoutBidsInput = {
    create?: XOR<PersonCreateWithoutBidsInput, PersonUncheckedCreateWithoutBidsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutBidsInput
    connect?: PersonWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBidsInput = {
    create?: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBidsInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutBidInput = {
    create?: XOR<PaymentCreateWithoutBidInput, PaymentUncheckedCreateWithoutBidInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBidInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutBidInput = {
    create?: XOR<PaymentCreateWithoutBidInput, PaymentUncheckedCreateWithoutBidInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBidInput
    connect?: PaymentWhereUniqueInput
  }

  export type EnumBidStatusFieldUpdateOperationsInput = {
    set?: $Enums.BidStatus
  }

  export type PersonUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<PersonCreateWithoutBidsInput, PersonUncheckedCreateWithoutBidsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutBidsInput
    upsert?: PersonUpsertWithoutBidsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutBidsInput, PersonUpdateWithoutBidsInput>, PersonUncheckedUpdateWithoutBidsInput>
  }

  export type UserUpdateOneWithoutBidsNestedInput = {
    create?: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBidsInput
    upsert?: UserUpsertWithoutBidsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBidsInput, UserUpdateWithoutBidsInput>, UserUncheckedUpdateWithoutBidsInput>
  }

  export type PaymentUpdateOneWithoutBidNestedInput = {
    create?: XOR<PaymentCreateWithoutBidInput, PaymentUncheckedCreateWithoutBidInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBidInput
    upsert?: PaymentUpsertWithoutBidInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBidInput, PaymentUpdateWithoutBidInput>, PaymentUncheckedUpdateWithoutBidInput>
  }

  export type PaymentUncheckedUpdateOneWithoutBidNestedInput = {
    create?: XOR<PaymentCreateWithoutBidInput, PaymentUncheckedCreateWithoutBidInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBidInput
    upsert?: PaymentUpsertWithoutBidInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBidInput, PaymentUpdateWithoutBidInput>, PaymentUncheckedUpdateWithoutBidInput>
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PersonCreateWithoutPaymentsInput, PersonUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPaymentsInput
    connect?: PersonWhereUniqueInput
  }

  export type BidCreateNestedOneWithoutPaymentInput = {
    create?: XOR<BidCreateWithoutPaymentInput, BidUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BidCreateOrConnectWithoutPaymentInput
    connect?: BidWhereUniqueInput
  }

  export type EnumPaymentProviderFieldUpdateOperationsInput = {
    set?: $Enums.PaymentProvider
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type PersonUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<PersonCreateWithoutPaymentsInput, PersonUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPaymentsInput
    upsert?: PersonUpsertWithoutPaymentsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutPaymentsInput, PersonUpdateWithoutPaymentsInput>, PersonUncheckedUpdateWithoutPaymentsInput>
  }

  export type BidUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<BidCreateWithoutPaymentInput, BidUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BidCreateOrConnectWithoutPaymentInput
    upsert?: BidUpsertWithoutPaymentInput
    connect?: BidWhereUniqueInput
    update?: XOR<XOR<BidUpdateToOneWithWhereWithoutPaymentInput, BidUpdateWithoutPaymentInput>, BidUncheckedUpdateWithoutPaymentInput>
  }

  export type PersonCreateNestedOneWithoutViewsInput = {
    create?: XOR<PersonCreateWithoutViewsInput, PersonUncheckedCreateWithoutViewsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutViewsInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<PersonCreateWithoutViewsInput, PersonUncheckedCreateWithoutViewsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutViewsInput
    upsert?: PersonUpsertWithoutViewsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutViewsInput, PersonUpdateWithoutViewsInput>, PersonUncheckedUpdateWithoutViewsInput>
  }

  export type PersonCreateNestedOneWithoutSnapshotsInput = {
    create?: XOR<PersonCreateWithoutSnapshotsInput, PersonUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSnapshotsInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutSnapshotsNestedInput = {
    create?: XOR<PersonCreateWithoutSnapshotsInput, PersonUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSnapshotsInput
    upsert?: PersonUpsertWithoutSnapshotsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutSnapshotsInput, PersonUpdateWithoutSnapshotsInput>, PersonUncheckedUpdateWithoutSnapshotsInput>
  }

  export type PersonCreateNestedOneWithoutLinkClicksInput = {
    create?: XOR<PersonCreateWithoutLinkClicksInput, PersonUncheckedCreateWithoutLinkClicksInput>
    connectOrCreate?: PersonCreateOrConnectWithoutLinkClicksInput
    connect?: PersonWhereUniqueInput
  }

  export type SocialLinkCreateNestedOneWithoutLinkClicksInput = {
    create?: XOR<SocialLinkCreateWithoutLinkClicksInput, SocialLinkUncheckedCreateWithoutLinkClicksInput>
    connectOrCreate?: SocialLinkCreateOrConnectWithoutLinkClicksInput
    connect?: SocialLinkWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutLinkClicksNestedInput = {
    create?: XOR<PersonCreateWithoutLinkClicksInput, PersonUncheckedCreateWithoutLinkClicksInput>
    connectOrCreate?: PersonCreateOrConnectWithoutLinkClicksInput
    upsert?: PersonUpsertWithoutLinkClicksInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutLinkClicksInput, PersonUpdateWithoutLinkClicksInput>, PersonUncheckedUpdateWithoutLinkClicksInput>
  }

  export type SocialLinkUpdateOneRequiredWithoutLinkClicksNestedInput = {
    create?: XOR<SocialLinkCreateWithoutLinkClicksInput, SocialLinkUncheckedCreateWithoutLinkClicksInput>
    connectOrCreate?: SocialLinkCreateOrConnectWithoutLinkClicksInput
    upsert?: SocialLinkUpsertWithoutLinkClicksInput
    connect?: SocialLinkWhereUniqueInput
    update?: XOR<XOR<SocialLinkUpdateToOneWithWhereWithoutLinkClicksInput, SocialLinkUpdateWithoutLinkClicksInput>, SocialLinkUncheckedUpdateWithoutLinkClicksInput>
  }

  export type PersonCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<PersonCreateWithoutActivitiesInput, PersonUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutActivitiesInput
    connect?: PersonWhereUniqueInput
  }

  export type EnumActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityType
  }

  export type PersonUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<PersonCreateWithoutActivitiesInput, PersonUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutActivitiesInput
    upsert?: PersonUpsertWithoutActivitiesInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutActivitiesInput, PersonUpdateWithoutActivitiesInput>, PersonUncheckedUpdateWithoutActivitiesInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSocialLinkTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialLinkType | EnumSocialLinkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SocialLinkType[] | ListEnumSocialLinkTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SocialLinkType[] | ListEnumSocialLinkTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSocialLinkTypeFilter<$PrismaModel> | $Enums.SocialLinkType
  }

  export type NestedEnumSocialLinkTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialLinkType | EnumSocialLinkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SocialLinkType[] | ListEnumSocialLinkTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SocialLinkType[] | ListEnumSocialLinkTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSocialLinkTypeWithAggregatesFilter<$PrismaModel> | $Enums.SocialLinkType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSocialLinkTypeFilter<$PrismaModel>
    _max?: NestedEnumSocialLinkTypeFilter<$PrismaModel>
  }

  export type NestedEnumBidStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BidStatus | EnumBidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBidStatusFilter<$PrismaModel> | $Enums.BidStatus
  }

  export type NestedEnumBidStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BidStatus | EnumBidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBidStatusWithAggregatesFilter<$PrismaModel> | $Enums.BidStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBidStatusFilter<$PrismaModel>
    _max?: NestedEnumBidStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderFilter<$PrismaModel> | $Enums.PaymentProvider
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentProviderFilter<$PrismaModel>
    _max?: NestedEnumPaymentProviderFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PersonCreateWithoutUserInput = {
    id?: string
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutPeopleInput
    socialLinks?: SocialLinkCreateNestedManyWithoutPersonInput
    bids?: BidCreateNestedManyWithoutPersonInput
    views?: ProfileViewCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotCreateNestedManyWithoutPersonInput
    payments?: PaymentCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickCreateNestedManyWithoutPersonInput
    activities?: ActivityCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutUserInput = {
    id?: string
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    categoryId: string
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutPersonInput
    bids?: BidUncheckedCreateNestedManyWithoutPersonInput
    views?: ProfileViewUncheckedCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotUncheckedCreateNestedManyWithoutPersonInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickUncheckedCreateNestedManyWithoutPersonInput
    activities?: ActivityUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutUserInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
  }

  export type BidCreateWithoutUserInput = {
    id?: string
    targetBidCents: number
    chargeAmountCents: number
    status?: $Enums.BidStatus
    providerCheckoutId?: string | null
    identityInput?: string | null
    createdAt?: Date | string
    person: PersonCreateNestedOneWithoutBidsInput
    payment?: PaymentCreateNestedOneWithoutBidInput
  }

  export type BidUncheckedCreateWithoutUserInput = {
    id?: string
    personId: string
    targetBidCents: number
    chargeAmountCents: number
    status?: $Enums.BidStatus
    providerCheckoutId?: string | null
    identityInput?: string | null
    createdAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBidInput
  }

  export type BidCreateOrConnectWithoutUserInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput>
  }

  export type BidCreateManyUserInputEnvelope = {
    data: BidCreateManyUserInput | BidCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    amount: number
    currency?: string
    provider: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerCheckoutId?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutPaymentsInput
    bid: BidCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    personId: string
    bidId: string
    amount: number
    currency?: string
    provider: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerCheckoutId?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithoutUserInput = {
    update: XOR<PersonUpdateWithoutUserInput, PersonUncheckedUpdateWithoutUserInput>
    create: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutUserInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutUserInput, PersonUncheckedUpdateWithoutUserInput>
  }

  export type PersonUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutPeopleNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutPersonNestedInput
    bids?: BidUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUpdateManyWithoutPersonNestedInput
    payments?: PaymentUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUpdateManyWithoutPersonNestedInput
    activities?: ActivityUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutPersonNestedInput
    bids?: BidUncheckedUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUncheckedUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUncheckedUpdateManyWithoutPersonNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUncheckedUpdateManyWithoutPersonNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type BidUpsertWithWhereUniqueWithoutUserInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutUserInput, BidUncheckedUpdateWithoutUserInput>
    create: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput>
  }

  export type BidUpdateWithWhereUniqueWithoutUserInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutUserInput, BidUncheckedUpdateWithoutUserInput>
  }

  export type BidUpdateManyWithWhereWithoutUserInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutUserInput>
  }

  export type BidScalarWhereInput = {
    AND?: BidScalarWhereInput | BidScalarWhereInput[]
    OR?: BidScalarWhereInput[]
    NOT?: BidScalarWhereInput | BidScalarWhereInput[]
    id?: StringFilter<"Bid"> | string
    personId?: StringFilter<"Bid"> | string
    userId?: StringNullableFilter<"Bid"> | string | null
    targetBidCents?: IntFilter<"Bid"> | number
    chargeAmountCents?: IntFilter<"Bid"> | number
    status?: EnumBidStatusFilter<"Bid"> | $Enums.BidStatus
    providerCheckoutId?: StringNullableFilter<"Bid"> | string | null
    identityInput?: StringNullableFilter<"Bid"> | string | null
    createdAt?: DateTimeFilter<"Bid"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    personId?: StringFilter<"Payment"> | string
    bidId?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    provider?: EnumPaymentProviderFilter<"Payment"> | $Enums.PaymentProvider
    providerPaymentId?: StringNullableFilter<"Payment"> | string | null
    providerCheckoutId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type PersonCreateWithoutCategoryInput = {
    id?: string
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPersonInput
    socialLinks?: SocialLinkCreateNestedManyWithoutPersonInput
    bids?: BidCreateNestedManyWithoutPersonInput
    views?: ProfileViewCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotCreateNestedManyWithoutPersonInput
    payments?: PaymentCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickCreateNestedManyWithoutPersonInput
    activities?: ActivityCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutCategoryInput = {
    id?: string
    userId?: string | null
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutPersonInput
    bids?: BidUncheckedCreateNestedManyWithoutPersonInput
    views?: ProfileViewUncheckedCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotUncheckedCreateNestedManyWithoutPersonInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickUncheckedCreateNestedManyWithoutPersonInput
    activities?: ActivityUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutCategoryInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutCategoryInput, PersonUncheckedCreateWithoutCategoryInput>
  }

  export type PersonCreateManyCategoryInputEnvelope = {
    data: PersonCreateManyCategoryInput | PersonCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutCategoryInput, PersonUncheckedUpdateWithoutCategoryInput>
    create: XOR<PersonCreateWithoutCategoryInput, PersonUncheckedCreateWithoutCategoryInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutCategoryInput, PersonUncheckedUpdateWithoutCategoryInput>
  }

  export type PersonUpdateManyWithWhereWithoutCategoryInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PersonScalarWhereInput = {
    AND?: PersonScalarWhereInput | PersonScalarWhereInput[]
    OR?: PersonScalarWhereInput[]
    NOT?: PersonScalarWhereInput | PersonScalarWhereInput[]
    id?: StringFilter<"Person"> | string
    userId?: StringNullableFilter<"Person"> | string | null
    username?: StringFilter<"Person"> | string
    fullName?: StringFilter<"Person"> | string
    headline?: StringFilter<"Person"> | string
    bio?: StringNullableFilter<"Person"> | string | null
    imageUrl?: StringNullableFilter<"Person"> | string | null
    profileUrl?: StringNullableFilter<"Person"> | string | null
    categoryId?: StringFilter<"Person"> | string
    location?: StringNullableFilter<"Person"> | string | null
    country?: StringNullableFilter<"Person"> | string | null
    currentBid?: IntFilter<"Person"> | number
    currentBidAt?: DateTimeFilter<"Person"> | Date | string
    totalViews?: IntFilter<"Person"> | number
    verified?: BoolFilter<"Person"> | boolean
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
  }

  export type UserCreateWithoutPersonInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPersonInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPersonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
  }

  export type CategoryCreateWithoutPeopleInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutPeopleInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutPeopleInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPeopleInput, CategoryUncheckedCreateWithoutPeopleInput>
  }

  export type SocialLinkCreateWithoutPersonInput = {
    id?: string
    type: $Enums.SocialLinkType
    url: string
    createdAt?: Date | string
    linkClicks?: LinkClickCreateNestedManyWithoutSocialLinkInput
  }

  export type SocialLinkUncheckedCreateWithoutPersonInput = {
    id?: string
    type: $Enums.SocialLinkType
    url: string
    createdAt?: Date | string
    linkClicks?: LinkClickUncheckedCreateNestedManyWithoutSocialLinkInput
  }

  export type SocialLinkCreateOrConnectWithoutPersonInput = {
    where: SocialLinkWhereUniqueInput
    create: XOR<SocialLinkCreateWithoutPersonInput, SocialLinkUncheckedCreateWithoutPersonInput>
  }

  export type SocialLinkCreateManyPersonInputEnvelope = {
    data: SocialLinkCreateManyPersonInput | SocialLinkCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type BidCreateWithoutPersonInput = {
    id?: string
    targetBidCents: number
    chargeAmountCents: number
    status?: $Enums.BidStatus
    providerCheckoutId?: string | null
    identityInput?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutBidsInput
    payment?: PaymentCreateNestedOneWithoutBidInput
  }

  export type BidUncheckedCreateWithoutPersonInput = {
    id?: string
    userId?: string | null
    targetBidCents: number
    chargeAmountCents: number
    status?: $Enums.BidStatus
    providerCheckoutId?: string | null
    identityInput?: string | null
    createdAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBidInput
  }

  export type BidCreateOrConnectWithoutPersonInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutPersonInput, BidUncheckedCreateWithoutPersonInput>
  }

  export type BidCreateManyPersonInputEnvelope = {
    data: BidCreateManyPersonInput | BidCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type ProfileViewCreateWithoutPersonInput = {
    id?: string
    ipHash: string
    userAgentHash: string
    createdAt?: Date | string
  }

  export type ProfileViewUncheckedCreateWithoutPersonInput = {
    id?: string
    ipHash: string
    userAgentHash: string
    createdAt?: Date | string
  }

  export type ProfileViewCreateOrConnectWithoutPersonInput = {
    where: ProfileViewWhereUniqueInput
    create: XOR<ProfileViewCreateWithoutPersonInput, ProfileViewUncheckedCreateWithoutPersonInput>
  }

  export type ProfileViewCreateManyPersonInputEnvelope = {
    data: ProfileViewCreateManyPersonInput | ProfileViewCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type RankSnapshotCreateWithoutPersonInput = {
    id?: string
    rank: number
    bid: number
    createdAt?: Date | string
  }

  export type RankSnapshotUncheckedCreateWithoutPersonInput = {
    id?: string
    rank: number
    bid: number
    createdAt?: Date | string
  }

  export type RankSnapshotCreateOrConnectWithoutPersonInput = {
    where: RankSnapshotWhereUniqueInput
    create: XOR<RankSnapshotCreateWithoutPersonInput, RankSnapshotUncheckedCreateWithoutPersonInput>
  }

  export type RankSnapshotCreateManyPersonInputEnvelope = {
    data: RankSnapshotCreateManyPersonInput | RankSnapshotCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutPersonInput = {
    id?: string
    amount: number
    currency?: string
    provider: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerCheckoutId?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
    bid: BidCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutPersonInput = {
    id?: string
    userId: string
    bidId: string
    amount: number
    currency?: string
    provider: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerCheckoutId?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutPersonInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPersonInput, PaymentUncheckedCreateWithoutPersonInput>
  }

  export type PaymentCreateManyPersonInputEnvelope = {
    data: PaymentCreateManyPersonInput | PaymentCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type LinkClickCreateWithoutPersonInput = {
    id?: string
    ipHash?: string | null
    createdAt?: Date | string
    socialLink: SocialLinkCreateNestedOneWithoutLinkClicksInput
  }

  export type LinkClickUncheckedCreateWithoutPersonInput = {
    id?: string
    socialLinkId: string
    ipHash?: string | null
    createdAt?: Date | string
  }

  export type LinkClickCreateOrConnectWithoutPersonInput = {
    where: LinkClickWhereUniqueInput
    create: XOR<LinkClickCreateWithoutPersonInput, LinkClickUncheckedCreateWithoutPersonInput>
  }

  export type LinkClickCreateManyPersonInputEnvelope = {
    data: LinkClickCreateManyPersonInput | LinkClickCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutPersonInput = {
    id?: string
    type: $Enums.ActivityType
    amount: number
    rank: number
    createdAt?: Date | string
  }

  export type ActivityUncheckedCreateWithoutPersonInput = {
    id?: string
    type: $Enums.ActivityType
    amount: number
    rank: number
    createdAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutPersonInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutPersonInput, ActivityUncheckedCreateWithoutPersonInput>
  }

  export type ActivityCreateManyPersonInputEnvelope = {
    data: ActivityCreateManyPersonInput | ActivityCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPersonInput = {
    update: XOR<UserUpdateWithoutPersonInput, UserUncheckedUpdateWithoutPersonInput>
    create: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPersonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPersonInput, UserUncheckedUpdateWithoutPersonInput>
  }

  export type UserUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutPeopleInput = {
    update: XOR<CategoryUpdateWithoutPeopleInput, CategoryUncheckedUpdateWithoutPeopleInput>
    create: XOR<CategoryCreateWithoutPeopleInput, CategoryUncheckedCreateWithoutPeopleInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPeopleInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPeopleInput, CategoryUncheckedUpdateWithoutPeopleInput>
  }

  export type CategoryUpdateWithoutPeopleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutPeopleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkUpsertWithWhereUniqueWithoutPersonInput = {
    where: SocialLinkWhereUniqueInput
    update: XOR<SocialLinkUpdateWithoutPersonInput, SocialLinkUncheckedUpdateWithoutPersonInput>
    create: XOR<SocialLinkCreateWithoutPersonInput, SocialLinkUncheckedCreateWithoutPersonInput>
  }

  export type SocialLinkUpdateWithWhereUniqueWithoutPersonInput = {
    where: SocialLinkWhereUniqueInput
    data: XOR<SocialLinkUpdateWithoutPersonInput, SocialLinkUncheckedUpdateWithoutPersonInput>
  }

  export type SocialLinkUpdateManyWithWhereWithoutPersonInput = {
    where: SocialLinkScalarWhereInput
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyWithoutPersonInput>
  }

  export type SocialLinkScalarWhereInput = {
    AND?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
    OR?: SocialLinkScalarWhereInput[]
    NOT?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
    id?: StringFilter<"SocialLink"> | string
    personId?: StringFilter<"SocialLink"> | string
    type?: EnumSocialLinkTypeFilter<"SocialLink"> | $Enums.SocialLinkType
    url?: StringFilter<"SocialLink"> | string
    createdAt?: DateTimeFilter<"SocialLink"> | Date | string
  }

  export type BidUpsertWithWhereUniqueWithoutPersonInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutPersonInput, BidUncheckedUpdateWithoutPersonInput>
    create: XOR<BidCreateWithoutPersonInput, BidUncheckedCreateWithoutPersonInput>
  }

  export type BidUpdateWithWhereUniqueWithoutPersonInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutPersonInput, BidUncheckedUpdateWithoutPersonInput>
  }

  export type BidUpdateManyWithWhereWithoutPersonInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutPersonInput>
  }

  export type ProfileViewUpsertWithWhereUniqueWithoutPersonInput = {
    where: ProfileViewWhereUniqueInput
    update: XOR<ProfileViewUpdateWithoutPersonInput, ProfileViewUncheckedUpdateWithoutPersonInput>
    create: XOR<ProfileViewCreateWithoutPersonInput, ProfileViewUncheckedCreateWithoutPersonInput>
  }

  export type ProfileViewUpdateWithWhereUniqueWithoutPersonInput = {
    where: ProfileViewWhereUniqueInput
    data: XOR<ProfileViewUpdateWithoutPersonInput, ProfileViewUncheckedUpdateWithoutPersonInput>
  }

  export type ProfileViewUpdateManyWithWhereWithoutPersonInput = {
    where: ProfileViewScalarWhereInput
    data: XOR<ProfileViewUpdateManyMutationInput, ProfileViewUncheckedUpdateManyWithoutPersonInput>
  }

  export type ProfileViewScalarWhereInput = {
    AND?: ProfileViewScalarWhereInput | ProfileViewScalarWhereInput[]
    OR?: ProfileViewScalarWhereInput[]
    NOT?: ProfileViewScalarWhereInput | ProfileViewScalarWhereInput[]
    id?: StringFilter<"ProfileView"> | string
    personId?: StringFilter<"ProfileView"> | string
    ipHash?: StringFilter<"ProfileView"> | string
    userAgentHash?: StringFilter<"ProfileView"> | string
    createdAt?: DateTimeFilter<"ProfileView"> | Date | string
  }

  export type RankSnapshotUpsertWithWhereUniqueWithoutPersonInput = {
    where: RankSnapshotWhereUniqueInput
    update: XOR<RankSnapshotUpdateWithoutPersonInput, RankSnapshotUncheckedUpdateWithoutPersonInput>
    create: XOR<RankSnapshotCreateWithoutPersonInput, RankSnapshotUncheckedCreateWithoutPersonInput>
  }

  export type RankSnapshotUpdateWithWhereUniqueWithoutPersonInput = {
    where: RankSnapshotWhereUniqueInput
    data: XOR<RankSnapshotUpdateWithoutPersonInput, RankSnapshotUncheckedUpdateWithoutPersonInput>
  }

  export type RankSnapshotUpdateManyWithWhereWithoutPersonInput = {
    where: RankSnapshotScalarWhereInput
    data: XOR<RankSnapshotUpdateManyMutationInput, RankSnapshotUncheckedUpdateManyWithoutPersonInput>
  }

  export type RankSnapshotScalarWhereInput = {
    AND?: RankSnapshotScalarWhereInput | RankSnapshotScalarWhereInput[]
    OR?: RankSnapshotScalarWhereInput[]
    NOT?: RankSnapshotScalarWhereInput | RankSnapshotScalarWhereInput[]
    id?: StringFilter<"RankSnapshot"> | string
    personId?: StringFilter<"RankSnapshot"> | string
    rank?: IntFilter<"RankSnapshot"> | number
    bid?: IntFilter<"RankSnapshot"> | number
    createdAt?: DateTimeFilter<"RankSnapshot"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutPersonInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutPersonInput, PaymentUncheckedUpdateWithoutPersonInput>
    create: XOR<PaymentCreateWithoutPersonInput, PaymentUncheckedCreateWithoutPersonInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutPersonInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutPersonInput, PaymentUncheckedUpdateWithoutPersonInput>
  }

  export type PaymentUpdateManyWithWhereWithoutPersonInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutPersonInput>
  }

  export type LinkClickUpsertWithWhereUniqueWithoutPersonInput = {
    where: LinkClickWhereUniqueInput
    update: XOR<LinkClickUpdateWithoutPersonInput, LinkClickUncheckedUpdateWithoutPersonInput>
    create: XOR<LinkClickCreateWithoutPersonInput, LinkClickUncheckedCreateWithoutPersonInput>
  }

  export type LinkClickUpdateWithWhereUniqueWithoutPersonInput = {
    where: LinkClickWhereUniqueInput
    data: XOR<LinkClickUpdateWithoutPersonInput, LinkClickUncheckedUpdateWithoutPersonInput>
  }

  export type LinkClickUpdateManyWithWhereWithoutPersonInput = {
    where: LinkClickScalarWhereInput
    data: XOR<LinkClickUpdateManyMutationInput, LinkClickUncheckedUpdateManyWithoutPersonInput>
  }

  export type LinkClickScalarWhereInput = {
    AND?: LinkClickScalarWhereInput | LinkClickScalarWhereInput[]
    OR?: LinkClickScalarWhereInput[]
    NOT?: LinkClickScalarWhereInput | LinkClickScalarWhereInput[]
    id?: StringFilter<"LinkClick"> | string
    personId?: StringFilter<"LinkClick"> | string
    socialLinkId?: StringFilter<"LinkClick"> | string
    ipHash?: StringNullableFilter<"LinkClick"> | string | null
    createdAt?: DateTimeFilter<"LinkClick"> | Date | string
  }

  export type ActivityUpsertWithWhereUniqueWithoutPersonInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutPersonInput, ActivityUncheckedUpdateWithoutPersonInput>
    create: XOR<ActivityCreateWithoutPersonInput, ActivityUncheckedCreateWithoutPersonInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutPersonInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutPersonInput, ActivityUncheckedUpdateWithoutPersonInput>
  }

  export type ActivityUpdateManyWithWhereWithoutPersonInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutPersonInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: StringFilter<"Activity"> | string
    personId?: StringFilter<"Activity"> | string
    type?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    amount?: IntFilter<"Activity"> | number
    rank?: IntFilter<"Activity"> | number
    createdAt?: DateTimeFilter<"Activity"> | Date | string
  }

  export type PersonCreateWithoutSocialLinksInput = {
    id?: string
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPersonInput
    category: CategoryCreateNestedOneWithoutPeopleInput
    bids?: BidCreateNestedManyWithoutPersonInput
    views?: ProfileViewCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotCreateNestedManyWithoutPersonInput
    payments?: PaymentCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickCreateNestedManyWithoutPersonInput
    activities?: ActivityCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutSocialLinksInput = {
    id?: string
    userId?: string | null
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    categoryId: string
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutPersonInput
    views?: ProfileViewUncheckedCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotUncheckedCreateNestedManyWithoutPersonInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickUncheckedCreateNestedManyWithoutPersonInput
    activities?: ActivityUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutSocialLinksInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutSocialLinksInput, PersonUncheckedCreateWithoutSocialLinksInput>
  }

  export type LinkClickCreateWithoutSocialLinkInput = {
    id?: string
    ipHash?: string | null
    createdAt?: Date | string
    person: PersonCreateNestedOneWithoutLinkClicksInput
  }

  export type LinkClickUncheckedCreateWithoutSocialLinkInput = {
    id?: string
    personId: string
    ipHash?: string | null
    createdAt?: Date | string
  }

  export type LinkClickCreateOrConnectWithoutSocialLinkInput = {
    where: LinkClickWhereUniqueInput
    create: XOR<LinkClickCreateWithoutSocialLinkInput, LinkClickUncheckedCreateWithoutSocialLinkInput>
  }

  export type LinkClickCreateManySocialLinkInputEnvelope = {
    data: LinkClickCreateManySocialLinkInput | LinkClickCreateManySocialLinkInput[]
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithoutSocialLinksInput = {
    update: XOR<PersonUpdateWithoutSocialLinksInput, PersonUncheckedUpdateWithoutSocialLinksInput>
    create: XOR<PersonCreateWithoutSocialLinksInput, PersonUncheckedCreateWithoutSocialLinksInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutSocialLinksInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutSocialLinksInput, PersonUncheckedUpdateWithoutSocialLinksInput>
  }

  export type PersonUpdateWithoutSocialLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPersonNestedInput
    category?: CategoryUpdateOneRequiredWithoutPeopleNestedInput
    bids?: BidUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUpdateManyWithoutPersonNestedInput
    payments?: PaymentUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUpdateManyWithoutPersonNestedInput
    activities?: ActivityUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutSocialLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUncheckedUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUncheckedUpdateManyWithoutPersonNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUncheckedUpdateManyWithoutPersonNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type LinkClickUpsertWithWhereUniqueWithoutSocialLinkInput = {
    where: LinkClickWhereUniqueInput
    update: XOR<LinkClickUpdateWithoutSocialLinkInput, LinkClickUncheckedUpdateWithoutSocialLinkInput>
    create: XOR<LinkClickCreateWithoutSocialLinkInput, LinkClickUncheckedCreateWithoutSocialLinkInput>
  }

  export type LinkClickUpdateWithWhereUniqueWithoutSocialLinkInput = {
    where: LinkClickWhereUniqueInput
    data: XOR<LinkClickUpdateWithoutSocialLinkInput, LinkClickUncheckedUpdateWithoutSocialLinkInput>
  }

  export type LinkClickUpdateManyWithWhereWithoutSocialLinkInput = {
    where: LinkClickScalarWhereInput
    data: XOR<LinkClickUpdateManyMutationInput, LinkClickUncheckedUpdateManyWithoutSocialLinkInput>
  }

  export type PersonCreateWithoutBidsInput = {
    id?: string
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPersonInput
    category: CategoryCreateNestedOneWithoutPeopleInput
    socialLinks?: SocialLinkCreateNestedManyWithoutPersonInput
    views?: ProfileViewCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotCreateNestedManyWithoutPersonInput
    payments?: PaymentCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickCreateNestedManyWithoutPersonInput
    activities?: ActivityCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutBidsInput = {
    id?: string
    userId?: string | null
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    categoryId: string
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutPersonInput
    views?: ProfileViewUncheckedCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotUncheckedCreateNestedManyWithoutPersonInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickUncheckedCreateNestedManyWithoutPersonInput
    activities?: ActivityUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutBidsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutBidsInput, PersonUncheckedCreateWithoutBidsInput>
  }

  export type UserCreateWithoutBidsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    person?: PersonCreateNestedOneWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBidsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    person?: PersonUncheckedCreateNestedOneWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBidsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
  }

  export type PaymentCreateWithoutBidInput = {
    id?: string
    amount: number
    currency?: string
    provider: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerCheckoutId?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
    person: PersonCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutBidInput = {
    id?: string
    userId: string
    personId: string
    amount: number
    currency?: string
    provider: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerCheckoutId?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutBidInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBidInput, PaymentUncheckedCreateWithoutBidInput>
  }

  export type PersonUpsertWithoutBidsInput = {
    update: XOR<PersonUpdateWithoutBidsInput, PersonUncheckedUpdateWithoutBidsInput>
    create: XOR<PersonCreateWithoutBidsInput, PersonUncheckedCreateWithoutBidsInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutBidsInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutBidsInput, PersonUncheckedUpdateWithoutBidsInput>
  }

  export type PersonUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPersonNestedInput
    category?: CategoryUpdateOneRequiredWithoutPeopleNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUpdateManyWithoutPersonNestedInput
    payments?: PaymentUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUpdateManyWithoutPersonNestedInput
    activities?: ActivityUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUncheckedUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUncheckedUpdateManyWithoutPersonNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUncheckedUpdateManyWithoutPersonNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type UserUpsertWithoutBidsInput = {
    update: XOR<UserUpdateWithoutBidsInput, UserUncheckedUpdateWithoutBidsInput>
    create: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBidsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBidsInput, UserUncheckedUpdateWithoutBidsInput>
  }

  export type UserUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUncheckedUpdateOneWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentUpsertWithoutBidInput = {
    update: XOR<PaymentUpdateWithoutBidInput, PaymentUncheckedUpdateWithoutBidInput>
    create: XOR<PaymentCreateWithoutBidInput, PaymentUncheckedCreateWithoutBidInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutBidInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutBidInput, PaymentUncheckedUpdateWithoutBidInput>
  }

  export type PaymentUpdateWithoutBidInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    person?: PersonUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutBidInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    person?: PersonCreateNestedOneWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    person?: PersonUncheckedCreateNestedOneWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type PersonCreateWithoutPaymentsInput = {
    id?: string
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPersonInput
    category: CategoryCreateNestedOneWithoutPeopleInput
    socialLinks?: SocialLinkCreateNestedManyWithoutPersonInput
    bids?: BidCreateNestedManyWithoutPersonInput
    views?: ProfileViewCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickCreateNestedManyWithoutPersonInput
    activities?: ActivityCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutPaymentsInput = {
    id?: string
    userId?: string | null
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    categoryId: string
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutPersonInput
    bids?: BidUncheckedCreateNestedManyWithoutPersonInput
    views?: ProfileViewUncheckedCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotUncheckedCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickUncheckedCreateNestedManyWithoutPersonInput
    activities?: ActivityUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutPaymentsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutPaymentsInput, PersonUncheckedCreateWithoutPaymentsInput>
  }

  export type BidCreateWithoutPaymentInput = {
    id?: string
    targetBidCents: number
    chargeAmountCents: number
    status?: $Enums.BidStatus
    providerCheckoutId?: string | null
    identityInput?: string | null
    createdAt?: Date | string
    person: PersonCreateNestedOneWithoutBidsInput
    user?: UserCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateWithoutPaymentInput = {
    id?: string
    personId: string
    userId?: string | null
    targetBidCents: number
    chargeAmountCents: number
    status?: $Enums.BidStatus
    providerCheckoutId?: string | null
    identityInput?: string | null
    createdAt?: Date | string
  }

  export type BidCreateOrConnectWithoutPaymentInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutPaymentInput, BidUncheckedCreateWithoutPaymentInput>
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUncheckedUpdateOneWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PersonUpsertWithoutPaymentsInput = {
    update: XOR<PersonUpdateWithoutPaymentsInput, PersonUncheckedUpdateWithoutPaymentsInput>
    create: XOR<PersonCreateWithoutPaymentsInput, PersonUncheckedCreateWithoutPaymentsInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutPaymentsInput, PersonUncheckedUpdateWithoutPaymentsInput>
  }

  export type PersonUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPersonNestedInput
    category?: CategoryUpdateOneRequiredWithoutPeopleNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutPersonNestedInput
    bids?: BidUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUpdateManyWithoutPersonNestedInput
    activities?: ActivityUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutPersonNestedInput
    bids?: BidUncheckedUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUncheckedUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUncheckedUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUncheckedUpdateManyWithoutPersonNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type BidUpsertWithoutPaymentInput = {
    update: XOR<BidUpdateWithoutPaymentInput, BidUncheckedUpdateWithoutPaymentInput>
    create: XOR<BidCreateWithoutPaymentInput, BidUncheckedCreateWithoutPaymentInput>
    where?: BidWhereInput
  }

  export type BidUpdateToOneWithWhereWithoutPaymentInput = {
    where?: BidWhereInput
    data: XOR<BidUpdateWithoutPaymentInput, BidUncheckedUpdateWithoutPaymentInput>
  }

  export type BidUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetBidCents?: IntFieldUpdateOperationsInput | number
    chargeAmountCents?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    identityInput?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutBidsNestedInput
    user?: UserUpdateOneWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    targetBidCents?: IntFieldUpdateOperationsInput | number
    chargeAmountCents?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    identityInput?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateWithoutViewsInput = {
    id?: string
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPersonInput
    category: CategoryCreateNestedOneWithoutPeopleInput
    socialLinks?: SocialLinkCreateNestedManyWithoutPersonInput
    bids?: BidCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotCreateNestedManyWithoutPersonInput
    payments?: PaymentCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickCreateNestedManyWithoutPersonInput
    activities?: ActivityCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutViewsInput = {
    id?: string
    userId?: string | null
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    categoryId: string
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutPersonInput
    bids?: BidUncheckedCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotUncheckedCreateNestedManyWithoutPersonInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickUncheckedCreateNestedManyWithoutPersonInput
    activities?: ActivityUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutViewsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutViewsInput, PersonUncheckedCreateWithoutViewsInput>
  }

  export type PersonUpsertWithoutViewsInput = {
    update: XOR<PersonUpdateWithoutViewsInput, PersonUncheckedUpdateWithoutViewsInput>
    create: XOR<PersonCreateWithoutViewsInput, PersonUncheckedCreateWithoutViewsInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutViewsInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutViewsInput, PersonUncheckedUpdateWithoutViewsInput>
  }

  export type PersonUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPersonNestedInput
    category?: CategoryUpdateOneRequiredWithoutPeopleNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutPersonNestedInput
    bids?: BidUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUpdateManyWithoutPersonNestedInput
    payments?: PaymentUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUpdateManyWithoutPersonNestedInput
    activities?: ActivityUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutPersonNestedInput
    bids?: BidUncheckedUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUncheckedUpdateManyWithoutPersonNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUncheckedUpdateManyWithoutPersonNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateWithoutSnapshotsInput = {
    id?: string
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPersonInput
    category: CategoryCreateNestedOneWithoutPeopleInput
    socialLinks?: SocialLinkCreateNestedManyWithoutPersonInput
    bids?: BidCreateNestedManyWithoutPersonInput
    views?: ProfileViewCreateNestedManyWithoutPersonInput
    payments?: PaymentCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickCreateNestedManyWithoutPersonInput
    activities?: ActivityCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutSnapshotsInput = {
    id?: string
    userId?: string | null
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    categoryId: string
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutPersonInput
    bids?: BidUncheckedCreateNestedManyWithoutPersonInput
    views?: ProfileViewUncheckedCreateNestedManyWithoutPersonInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickUncheckedCreateNestedManyWithoutPersonInput
    activities?: ActivityUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutSnapshotsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutSnapshotsInput, PersonUncheckedCreateWithoutSnapshotsInput>
  }

  export type PersonUpsertWithoutSnapshotsInput = {
    update: XOR<PersonUpdateWithoutSnapshotsInput, PersonUncheckedUpdateWithoutSnapshotsInput>
    create: XOR<PersonCreateWithoutSnapshotsInput, PersonUncheckedCreateWithoutSnapshotsInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutSnapshotsInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutSnapshotsInput, PersonUncheckedUpdateWithoutSnapshotsInput>
  }

  export type PersonUpdateWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPersonNestedInput
    category?: CategoryUpdateOneRequiredWithoutPeopleNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutPersonNestedInput
    bids?: BidUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUpdateManyWithoutPersonNestedInput
    payments?: PaymentUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUpdateManyWithoutPersonNestedInput
    activities?: ActivityUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutPersonNestedInput
    bids?: BidUncheckedUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUncheckedUpdateManyWithoutPersonNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUncheckedUpdateManyWithoutPersonNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateWithoutLinkClicksInput = {
    id?: string
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPersonInput
    category: CategoryCreateNestedOneWithoutPeopleInput
    socialLinks?: SocialLinkCreateNestedManyWithoutPersonInput
    bids?: BidCreateNestedManyWithoutPersonInput
    views?: ProfileViewCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotCreateNestedManyWithoutPersonInput
    payments?: PaymentCreateNestedManyWithoutPersonInput
    activities?: ActivityCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutLinkClicksInput = {
    id?: string
    userId?: string | null
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    categoryId: string
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutPersonInput
    bids?: BidUncheckedCreateNestedManyWithoutPersonInput
    views?: ProfileViewUncheckedCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotUncheckedCreateNestedManyWithoutPersonInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPersonInput
    activities?: ActivityUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutLinkClicksInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutLinkClicksInput, PersonUncheckedCreateWithoutLinkClicksInput>
  }

  export type SocialLinkCreateWithoutLinkClicksInput = {
    id?: string
    type: $Enums.SocialLinkType
    url: string
    createdAt?: Date | string
    person: PersonCreateNestedOneWithoutSocialLinksInput
  }

  export type SocialLinkUncheckedCreateWithoutLinkClicksInput = {
    id?: string
    personId: string
    type: $Enums.SocialLinkType
    url: string
    createdAt?: Date | string
  }

  export type SocialLinkCreateOrConnectWithoutLinkClicksInput = {
    where: SocialLinkWhereUniqueInput
    create: XOR<SocialLinkCreateWithoutLinkClicksInput, SocialLinkUncheckedCreateWithoutLinkClicksInput>
  }

  export type PersonUpsertWithoutLinkClicksInput = {
    update: XOR<PersonUpdateWithoutLinkClicksInput, PersonUncheckedUpdateWithoutLinkClicksInput>
    create: XOR<PersonCreateWithoutLinkClicksInput, PersonUncheckedCreateWithoutLinkClicksInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutLinkClicksInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutLinkClicksInput, PersonUncheckedUpdateWithoutLinkClicksInput>
  }

  export type PersonUpdateWithoutLinkClicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPersonNestedInput
    category?: CategoryUpdateOneRequiredWithoutPeopleNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutPersonNestedInput
    bids?: BidUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUpdateManyWithoutPersonNestedInput
    payments?: PaymentUpdateManyWithoutPersonNestedInput
    activities?: ActivityUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutLinkClicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutPersonNestedInput
    bids?: BidUncheckedUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUncheckedUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUncheckedUpdateManyWithoutPersonNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPersonNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type SocialLinkUpsertWithoutLinkClicksInput = {
    update: XOR<SocialLinkUpdateWithoutLinkClicksInput, SocialLinkUncheckedUpdateWithoutLinkClicksInput>
    create: XOR<SocialLinkCreateWithoutLinkClicksInput, SocialLinkUncheckedCreateWithoutLinkClicksInput>
    where?: SocialLinkWhereInput
  }

  export type SocialLinkUpdateToOneWithWhereWithoutLinkClicksInput = {
    where?: SocialLinkWhereInput
    data: XOR<SocialLinkUpdateWithoutLinkClicksInput, SocialLinkUncheckedUpdateWithoutLinkClicksInput>
  }

  export type SocialLinkUpdateWithoutLinkClicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSocialLinkTypeFieldUpdateOperationsInput | $Enums.SocialLinkType
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutSocialLinksNestedInput
  }

  export type SocialLinkUncheckedUpdateWithoutLinkClicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    type?: EnumSocialLinkTypeFieldUpdateOperationsInput | $Enums.SocialLinkType
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateWithoutActivitiesInput = {
    id?: string
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPersonInput
    category: CategoryCreateNestedOneWithoutPeopleInput
    socialLinks?: SocialLinkCreateNestedManyWithoutPersonInput
    bids?: BidCreateNestedManyWithoutPersonInput
    views?: ProfileViewCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotCreateNestedManyWithoutPersonInput
    payments?: PaymentCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutActivitiesInput = {
    id?: string
    userId?: string | null
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    categoryId: string
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutPersonInput
    bids?: BidUncheckedCreateNestedManyWithoutPersonInput
    views?: ProfileViewUncheckedCreateNestedManyWithoutPersonInput
    snapshots?: RankSnapshotUncheckedCreateNestedManyWithoutPersonInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPersonInput
    linkClicks?: LinkClickUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutActivitiesInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutActivitiesInput, PersonUncheckedCreateWithoutActivitiesInput>
  }

  export type PersonUpsertWithoutActivitiesInput = {
    update: XOR<PersonUpdateWithoutActivitiesInput, PersonUncheckedUpdateWithoutActivitiesInput>
    create: XOR<PersonCreateWithoutActivitiesInput, PersonUncheckedCreateWithoutActivitiesInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutActivitiesInput, PersonUncheckedUpdateWithoutActivitiesInput>
  }

  export type PersonUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPersonNestedInput
    category?: CategoryUpdateOneRequiredWithoutPeopleNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutPersonNestedInput
    bids?: BidUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUpdateManyWithoutPersonNestedInput
    payments?: PaymentUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutPersonNestedInput
    bids?: BidUncheckedUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUncheckedUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUncheckedUpdateManyWithoutPersonNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type BidCreateManyUserInput = {
    id?: string
    personId: string
    targetBidCents: number
    chargeAmountCents: number
    status?: $Enums.BidStatus
    providerCheckoutId?: string | null
    identityInput?: string | null
    createdAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    personId: string
    bidId: string
    amount: number
    currency?: string
    provider: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerCheckoutId?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BidUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetBidCents?: IntFieldUpdateOperationsInput | number
    chargeAmountCents?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    identityInput?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutBidsNestedInput
    payment?: PaymentUpdateOneWithoutBidNestedInput
  }

  export type BidUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    targetBidCents?: IntFieldUpdateOperationsInput | number
    chargeAmountCents?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    identityInput?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBidNestedInput
  }

  export type BidUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    targetBidCents?: IntFieldUpdateOperationsInput | number
    chargeAmountCents?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    identityInput?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutPaymentsNestedInput
    bid?: BidUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateManyCategoryInput = {
    id?: string
    userId?: string | null
    username: string
    fullName: string
    headline: string
    bio?: string | null
    imageUrl?: string | null
    profileUrl?: string | null
    location?: string | null
    country?: string | null
    currentBid?: number
    currentBidAt?: Date | string
    totalViews?: number
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPersonNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutPersonNestedInput
    bids?: BidUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUpdateManyWithoutPersonNestedInput
    payments?: PaymentUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUpdateManyWithoutPersonNestedInput
    activities?: ActivityUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutPersonNestedInput
    bids?: BidUncheckedUpdateManyWithoutPersonNestedInput
    views?: ProfileViewUncheckedUpdateManyWithoutPersonNestedInput
    snapshots?: RankSnapshotUncheckedUpdateManyWithoutPersonNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPersonNestedInput
    linkClicks?: LinkClickUncheckedUpdateManyWithoutPersonNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currentBid?: IntFieldUpdateOperationsInput | number
    currentBidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalViews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkCreateManyPersonInput = {
    id?: string
    type: $Enums.SocialLinkType
    url: string
    createdAt?: Date | string
  }

  export type BidCreateManyPersonInput = {
    id?: string
    userId?: string | null
    targetBidCents: number
    chargeAmountCents: number
    status?: $Enums.BidStatus
    providerCheckoutId?: string | null
    identityInput?: string | null
    createdAt?: Date | string
  }

  export type ProfileViewCreateManyPersonInput = {
    id?: string
    ipHash: string
    userAgentHash: string
    createdAt?: Date | string
  }

  export type RankSnapshotCreateManyPersonInput = {
    id?: string
    rank: number
    bid: number
    createdAt?: Date | string
  }

  export type PaymentCreateManyPersonInput = {
    id?: string
    userId: string
    bidId: string
    amount: number
    currency?: string
    provider: $Enums.PaymentProvider
    providerPaymentId?: string | null
    providerCheckoutId?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkClickCreateManyPersonInput = {
    id?: string
    socialLinkId: string
    ipHash?: string | null
    createdAt?: Date | string
  }

  export type ActivityCreateManyPersonInput = {
    id?: string
    type: $Enums.ActivityType
    amount: number
    rank: number
    createdAt?: Date | string
  }

  export type SocialLinkUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSocialLinkTypeFieldUpdateOperationsInput | $Enums.SocialLinkType
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkClicks?: LinkClickUpdateManyWithoutSocialLinkNestedInput
  }

  export type SocialLinkUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSocialLinkTypeFieldUpdateOperationsInput | $Enums.SocialLinkType
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkClicks?: LinkClickUncheckedUpdateManyWithoutSocialLinkNestedInput
  }

  export type SocialLinkUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSocialLinkTypeFieldUpdateOperationsInput | $Enums.SocialLinkType
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetBidCents?: IntFieldUpdateOperationsInput | number
    chargeAmountCents?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    identityInput?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutBidsNestedInput
    payment?: PaymentUpdateOneWithoutBidNestedInput
  }

  export type BidUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    targetBidCents?: IntFieldUpdateOperationsInput | number
    chargeAmountCents?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    identityInput?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBidNestedInput
  }

  export type BidUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    targetBidCents?: IntFieldUpdateOperationsInput | number
    chargeAmountCents?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    identityInput?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileViewUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: StringFieldUpdateOperationsInput | string
    userAgentHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileViewUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: StringFieldUpdateOperationsInput | string
    userAgentHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileViewUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: StringFieldUpdateOperationsInput | string
    userAgentHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankSnapshotUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    bid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankSnapshotUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    bid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankSnapshotUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    bid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    bid?: BidUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    providerCheckoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkClickUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialLink?: SocialLinkUpdateOneRequiredWithoutLinkClicksNestedInput
  }

  export type LinkClickUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    socialLinkId?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkClickUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    socialLinkId?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    amount?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    amount?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    amount?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkClickCreateManySocialLinkInput = {
    id?: string
    personId: string
    ipHash?: string | null
    createdAt?: Date | string
  }

  export type LinkClickUpdateWithoutSocialLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutLinkClicksNestedInput
  }

  export type LinkClickUncheckedUpdateWithoutSocialLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkClickUncheckedUpdateManyWithoutSocialLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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