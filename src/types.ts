/**
 * Represents the absence of a value.
 * @typedef {Object} None
 * @property {string} type - The type identifier indicating absence of value ("none").
 */
export type None = { type: "none" };

/**
 * Represents the presence of a value.
 * @typedef {Object} Some
 * @template T
 * @property {string} type - The type identifier indicating presence of value ("some").
 * @property {T} value - The value wrapped by Some.
 */
export type Some<T> = { type: "some"; value: T };

/**
 * Represents the presence or absence of a value.
 * @typedef {None | Some<T>} Option
 * @template T
 */
export type Option<T> = None | Some<T>;

/**
 * Represents HTTP headers as a key-value pair where both key and value are strings.
 */
export type Headers = Record<string, string>;

/**
 * Represents a partial option, where all properties of the Option type are optional.
 * @template T - The type of the option.
 */
export type PartialOption<T> = Partial<Option<T>>;

/**
 * Represents a partial Some, where all properties of the Some type are optional.
 * @template T - The type of the Some.
 */
export type PartialSome<T> = Partial<Some<T>>;

/**
 * Represents a partial None, where all properties of the None type are optional.
 */
export type PartialNone = Partial<None>;

/**
 * Represents an optional record where each value is of type Option<T>.
 * @template T - The type of the option.
 */
export type OptionalRecord<T> = Record<string, Option<T>>;

/**
 * Represents an optional record where each value is of type Some<T>.
 * @template T - The type of the Some.
 */
export type OptionalSomeRecord<T> = Record<string, Some<T>>;

/**
 * Represents an optional record where each value is of type None.
 */
export type OptionalNoneRecord = Record<string, None>;

/**
 * Represents an optional record where each value is of type Partial<Option<T>>.
 * @template T - The type of the option.
 */
export type OptionalPartialRecord<T> = Record<string, Partial<Option<T>>>;

/**
 * Represents an HTTP request object.
 */
export type Request = {
  /** The URL of the request. */
  url: string;
  /** The headers of the request. */
  headers: Headers;
  /** The HTTP method of the request. */
  method?: string;
  /** The body of the request. */
  body?: string;
};

/**
 * Ok type for Result.
 * @template T - The type of the value.
 * @typedef {Object} Ok
 * @property {string} type - The type identifier indicating success ("ok").
 * @property {T} value - The value wrapped by Ok.
 */
export type Result<T, E> = Ok<T> | Err<E>;

/**
 * Ok type for Result.
 * @template T - The type of the value.
 * @typedef {Object} Ok
 * @property {string} type - The type identifier indicating success ("ok").
 * @property {T} value - The value wrapped by Ok.
 */
type Ok<T> = { type: "ok"; value: T };

/**
 * Err type for Result.
 * @template E - The type of the error.
 * @typedef {Object} Err
 * @property {string} type - The type identifier indicating error ("err").
 * @property {E} error - The error wrapped by Err.
 */
type Err<E> = { type: "err"; error: E };
