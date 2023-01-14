// Implement the JavaScript Array.includes function in the type system.
//  A type takes the two arguments. The output should be a boolean true or false.

//https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-421529650

export type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false;

type MyIncludes<T extends any[], U> = U extends T[number] ? true : false;

type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
  ? Equals<F, U> extends true
    ? true
    : Includes<R, U>
  : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'k'>; // expected to be `false`
