// For given function type Fn, and any type A (any in this context means we don't restrict the type, and I don't have in mind any type 😉) create a generic type which will take Fn as the first argument, A as the second, and will produce function type G which will be the same as Fn but with appended argument A as a last one.

type Fn = (a: number, b: string) => number;

type AppendArgument<Fn extends (...args: any) => any, U> = Fn extends (
  ...args: infer Args
) => infer R
  ? (...args: [...Args, U]) => R
  : never;

type ResultApendArgs = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number
