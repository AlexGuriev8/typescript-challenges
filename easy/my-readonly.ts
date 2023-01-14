// Implement the built-in Readonly<T> generic without using it.

// Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

interface TodoReadonly {
  title: string;
  description: string;
}

type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key];
};

const todoOmit: MyReadonly<TodoReadonly> = {
  title: 'Hey',
  description: 'foobar',
};

todoOmit.title = 'Hello'; // Error: cannot reassign a readonly property
todoOmit.description = 'barFoo'; // Error: cannot reassign a readonly property
