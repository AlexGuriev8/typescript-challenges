// Type the function PromiseAll that accepts an array of PromiseLike objects,
//  the returning value should be Promise<T> where T is the resolved result array.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [Key in keyof T]: Awaited<T[Key]>;
}>;

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);
