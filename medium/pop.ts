// Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.

type arrPop1 = ['a', 'b', 'c', 'd'];
type arrPop2 = [3, 2, 1];

type Pop<T extends any[]> = T extends [...infer Rest, infer _] ? Rest : [];

type re1 = Pop<arrPop1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arrPop2>; // expected to be [3, 2]
