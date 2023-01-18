// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

type Whitespace = ' ' | '\n' | '\t';

type TrimLeft<T extends string> = T extends `${Whitespace}${infer Rest}`
  ? TrimLeft<Rest>
  : T;

type trimed = TrimLeft<'  Hello World  '>; // expected to be 'Hello World  '
