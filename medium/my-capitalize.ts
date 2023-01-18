// Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

interface CaseMap {
  a: 'A';
  b: 'B';
  c: 'C';
  d: 'D';
  e: 'E';
  f: 'F';
  g: 'G';
  h: 'H';
  i: 'I';
  j: 'J';
  k: 'K';
  l: 'L';
  m: 'M';
  n: 'N';
  o: 'O';
  p: 'P';
  q: 'Q';
  r: 'R';
  s: 'S';
  t: 'T';
  u: 'U';
  v: 'V';
  w: 'W';
  x: 'X';
  y: 'Y';
  z: 'Z';
}

type MyCapitalize<S extends string> =
  S extends `${infer FirstChar}${infer Rest}`
    ? `${FirstChar extends keyof CaseMap
        ? CaseMap[FirstChar]
        : FirstChar}${Rest}`
    : S;

type capitalized = MyCapitalize<'hello world'>; // expected to be 'Hello world'
