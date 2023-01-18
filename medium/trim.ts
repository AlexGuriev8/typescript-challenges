//Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.
type WhitespaceTrim = ' ' | '\n' | '\t';

type Trim<T extends string> = T extends
  | `${WhitespaceTrim}${infer Rest}`
  | `${infer Rest}${WhitespaceTrim}`
  ? Trim<Rest>
  : T;

type trimmed = Trim<'  Hello World  '>; // expected to be 'Hello World'
