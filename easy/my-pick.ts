interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key];
};

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

// T is the original type from which properties are being picked.
// K is a set of keys that extend keyof T, which ensures that the keys passed in are valid keys of the original type.

// The implementation uses a mapped type, { [P in K]: T[P]; }, which iterates over the keys in K and creates a new type with properties that have the same names and types as the properties in the original type T with the same names.
