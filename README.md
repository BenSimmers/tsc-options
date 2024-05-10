# Types

This document describes a set of TypeScript types used to represent the presence or absence of values, HTTP headers, and HTTP requests.

## Option Types

### `None`

Represents the absence of a value.

- **type** (`string`): The type identifier indicating the absence of a value ("none").

### `Some<T>`

Represents the presence of a value.

- **type** (`string`): The type identifier indicating the presence of a value ("some").
- **value** (`T`): The value wrapped by Some.

### `Option<T>`

Represents the presence or absence of a value.

- **None | Some\<T>**: Either None or Some type.

## HTTP Types

### `Headers`

Represents HTTP headers as a key-value pair where both key and value are strings.

- **Record\<string, string>**

### `Request`

Represents an HTTP request object.

- **url** (`string`): The URL of the request.
- **headers** (`Headers`): The headers of the request.
- **method** (`string`, optional): The HTTP method of the request.
- **body** (`string`, optional): The body of the request.

## Partial Types

### `PartialOption<T>`

Represents a partial option, where all properties of the Option type are optional.

- **Partial\<Option\<T>>**

### `PartialSome<T>`

Represents a partial Some, where all properties of the Some type are optional.

- **Partial\<Some\<T>>**

### `PartialNone`

Represents a partial None, where all properties of the None type are optional.

- **Partial\<None>**

## Optional Record Types

### `OptionalRecord<T>`

Represents an optional record where each value is of type Option\<T>.

- **Record\<string, Option\<T>>**

### `OptionalSomeRecord<T>`

Represents an optional record where each value is of type Some\<T>.

- **Record\<string, Some\<T>>**

### `OptionalNoneRecord`

Represents an optional record where each value is of type None.

- **Record\<string, None>**

### `OptionalPartialRecord<T>`

Represents an optional record where each value is of type Partial\<Option\<T>>.

- **Record\<string, Partial\<Option\<T>>>**

# Result

**export type Result<T, E> = Ok<T> | Err<E>;**

- Represents the result of an operation that can either succeed with a value of type T or fail with an error of type E.

```typescript
const result: Result<number, string> = { type: "ok", value: 42 };
```

## OK Type

- **type Ok<T> = { type: "ok"; value: T };**
  Creates an OK type that wraps the value.

```typescript
const ok: Ok<number> = { type: "ok", value: 42 };
```

## Error Type

- **type Err<E> = { type: "err"; error: E };**
  Creates an error type that wraps the error value.

```typescript
const error: Err<string> = { type: "err", error: "An error occurred" };
```

# Methods - Optional Utilities Documentation

## Creation Functions

### `some<T>(value: T): Some<T>`

Creates a Some value wrapping the provided value.

- **value** (`T`): The value to wrap in a Some.

```typescript
const someValue = some(42);
```

### `none: None`

Represents the absence of a value.

```typescript
const noneValue = none;
```

## Error Handling Functions

### `OptionalCatch<T>(fn: Function): Option<T>`

Executes the provided function and wraps its result in Some if successful, otherwise returns None.

- **fn** (`Function`): The function to call to get the value.

```typescript
const result = OptionalCatch(() => {
  throw new Error("An error occurred");
});
```

### `optionalResolve<T>(promise: Promise<T>): Promise<Option<T>>`

Executes the provided promise and wraps its result in Some if resolved successfully, otherwise returns None.

- **promise** (`Promise<T>`): The promise to resolve.

## Mapping and Transformation Functions

### `OptionalMap<T, U>(option: Option<T>, fn: Function): Option<U>`

Maps the value of an Option using the provided function.

- **option** (`Option<T>`): The Option to map.
- **fn** (`Function`): The mapping function.

```typescript
const result = OptionalMap(some(42), (value) => value * 2);
```

### `toOptional(fn: Function): Function`

Converts a function into an Optional function, returning Some if successful, otherwise returns None.

- **fn** (`Function`): The function to convert.

```typescript
const optionalFunction = toOptional(() => 42);
const result = optionalFunction(); // Some(42)
```

## Validation and Unwrapping Functions

### `optionalDefined: Function`

Checks if the argument is defined (neither null nor undefined).

- **arg** (`unknown`): The argument to check.

```typescript
const result = optionalDefined(42); // Some(42)
```

### `unwrap<T>(option: Option<T>): T`

Unwraps the value from the Option. Throws an error if the Option is None.

- **option** (`Option<T>`): The Option to unwrap.

```typescript
const value = unwrap(some(42)); // 42
```

### `unwrapOr<T>(opt: Option<T>, fallback: T): T`

Unwraps the value from the Option or returns a fallback value if the Option is None.

- **opt** (`Option<T>`): The Option to unwrap.
- **fallback** (`T`): The fallback value to return if the Option is None.

```typescript
const value = unwrapOr(some(42), 0); // 42
```

### `unwrapExpect<T>(opt: Option<T>, message: string): T`

Unwraps the value from the Option or throws an error with the provided message if the Option is None.

- **opt** (`Option<T>`): The Option to unwrap.
- **message** (`string`): The message to include in the error if the Option is None.

```typescript
const value = unwrapExpect(some(42), "Value is None"); // 42
```

## HTTP Utilities

### `fetchWithOption<T>(request: Request): Promise<Option<T>>`

Represents an HTTP request.

- **request** (`Request`): The HTTP request object.

Returns: A promise resolving to a Some value containing the response data, or None if an error occurs.

```ts
const request: Request = {
  url: "https://api.example.com",
  headers: { "Content-Type": "application/json" },
  method: "GET",
};

const response = await fetchWithOption(request);
response.map((data) => console.log(data));
```

## Types

- **Some\<T>**: Represents the presence of a value.
- **None**: Represents the absence of a value.
- **Option\<T>**: Represents the presence or absence of a value.
- **Request**: Represents an HTTP request object.
