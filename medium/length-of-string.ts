// Compute the length of a string literal, which behaves like String#length.
type LengthOfString<
  S extends string,
  A extends string[] = []
> = S extends `${infer C}${infer T}`
  ? LengthOfString<T, [C, ...A]>
  : A['length'];

type length = LengthOfString<'My string'>;
