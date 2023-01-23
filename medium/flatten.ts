// In this challenge, you would need to write a type that takes an array and emitted the flatten array type.

type Flatten<T> = T extends []
  ? []
  : T extends [infer H, ...infer P]
  ? [...Flatten<H>, ...Flatten<P>]
  : [T];

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]
