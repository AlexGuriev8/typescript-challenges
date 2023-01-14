// Implement the built-in Exclude<T, U>

// Exclude from T those types that are assignable to U

type MyExclude<T, U> = T extends U ? never : T;

type Result = MyExclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'
