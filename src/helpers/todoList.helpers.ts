export const addNewTodo = (
  todoList: Array<Todo>,
  newTodo: Todo
): Array<Todo> => {
  return [newTodo, ...todoList];
};

export const completeTodo = (
  todoList: Array<Todo>,
  index: number
): Array<Todo> => {
  const stub = [...todoList];
  stub[index].completed = true;
  return stub;
};

export const deleteTodo = (todoList: Array<Todo>, id: number) => {
  return todoList.filter((todo) => todo.id !== id);
};
