// Implement the built-in Omit<T, K> generic without using it.

// Constructs a type by picking all properties from T and then removing K

interface TodoOmit {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, K extends string | number | symbol> = {
  [Key in Exclude<keyof T, K>]: T[Key];
};

type TodoOmitPreview = MyOmit<TodoOmit, 'description' | 'title'>;

const omitTodo: TodoOmitPreview = {
  completed: false,
};
