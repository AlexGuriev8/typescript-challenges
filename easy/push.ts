// Implement the generic version of Array.push

type Push<T extends any[], U> = [...T, U];
type ResultPush = Push<[1, 2], '3'>; // [1, 2, '3']
