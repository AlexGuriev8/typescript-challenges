// Implement a generic First<T> that takes an Array T and returns its first element's type.

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type First<T extends any[]> = T extends [] ? never : T[0];
type FirstInfer<T extends any[]> = T extends [infer First, ...any[]]
  ? First
  : never;

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3

type head3 = FirstInfer<arr1>; // expected to be 'a'
type head4 = FirstInfer<arr2>; // expected to be 3
