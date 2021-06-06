import React, { ChangeEvent, useReducer, useState } from "react";
import { Typography } from "antd";
import TodoForm from "../TodoForm/TodoForm";
import TodoTile from "../TodoTile/TodoTile";
import {
  addNewTodo,
  completeTodo,
  deleteTodo,
} from "../../helpers/todoList.helpers";

const { Title } = Typography;
const ADD = "ADD";
const COMPLETE = "COMPLETE";
const DELETE = "DELETE";

const TodoReducer = (state: Array<Todo>, action: TodoActions) => {
  switch (action.type) {
    case ADD:
      return addNewTodo(state, action.payload);
    case COMPLETE:
      return completeTodo(state, action.payload);
    case DELETE:
      return deleteTodo(state, action.payload);
  }
};

const TodoList = () => {
  const [input, setInput] = useState<string>("");
  const [todos, dispatch] = useReducer(TodoReducer, []);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e: ChangeEvent<HTMLInputElement>, input: string) => {
    e.preventDefault();
    dispatch({
      type: ADD,
      payload: {
        id: Math.floor(Math.random() * 1000),
        text: input,
        completed: false,
      },
    });
  };

  const handleCompleteTodo = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    e.preventDefault();
    dispatch({
      type: COMPLETE,
      payload: id,
    });
  };

  const handleDeleteTodo = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    e.preventDefault();
    dispatch({
      type: DELETE,
      payload: idx,
    });
  };

  return (
    <>
      <div className="mx-auto w-36">
        <Title className="title">Purpl Todo</Title>
      </div>
      <div className="flex-column w-3/4 mx-auto justify-center">
        <TodoForm
          buttonLabel="Add"
          onChangeText={(e) => handleChangeInput(e)}
          onSubmit={(e) => handleAddTodo(e, input)}
          placeholder="New Task"
          value={input}
        />
      </div>
      <div className="flex-column w-3/4 mx-auto justify-center">
        {todos.map((todo, index) => (
          <TodoTile
            key={index.toString()}
            onComplete={(e) => handleCompleteTodo(e, todo.id)}
            onDelete={(e) => handleDeleteTodo(e, index)}
            text="Complete the Purpl Todo web application"
            completed
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
