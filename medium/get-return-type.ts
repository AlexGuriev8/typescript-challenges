// Implement the built-in ReturnType<T> generic without using it.

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type t = ReturnType<typeof fn>;

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

type a = MyReturnType<typeof fn>; // should be "1 | 2"
