// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.

// K specify the set of properties of T that should set to Readonly. When K is not provided,
//it should make all properties readonly just like the normal Readonly<T>.

interface TodoReadonly2 {
  title: string;
  description: string;
  completed: boolean;
}

type MyReadonly2<T, K extends keyof T> = {
  readonly [Key in keyof T]: T[Key];
} & {
  [Key in Exclude<keyof T, K>]: T[Key];
};

type MyReadonly3<T, K extends keyof T> = Readonly<T> & Omit<T, K>;

const todoReadOnly2: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
};

todoReadOnly2.title = 'Hello'; // Error: cannot reassign a readonly property
todoReadOnly2.description = 'barFoo'; // Error: cannot reassign a readonly property
todoReadOnly2.completed = true; // OK
