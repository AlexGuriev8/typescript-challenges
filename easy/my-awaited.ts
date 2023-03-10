// If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

// For example: if we have Promise<ExampleType> how to get ExampleType?

type ExampleType = Promise<string>;

type MyAwaited<T> = T extends PromiseLike<infer R> ? MyAwaited<R> : T;

type ResultAwaited = MyAwaited<ExampleType>; // string
