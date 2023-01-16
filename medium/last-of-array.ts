// Implement a generic Last<T> that takes an Array T and returns its last element.

type array1 = ['a', 'b', 'c'];
type array2 = [3, 2, 1];

type Last<T extends any[]> = T extends [...any[], infer Last] ? Last : never;

type tail1 = Last<array1>; // expected to be 'c'
type tail2 = Last<array2>; // expected to be 1
