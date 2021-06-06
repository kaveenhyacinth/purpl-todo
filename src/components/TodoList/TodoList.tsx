import React, { useState } from "react";
import { Typography } from "antd";
import TodoForm from "../TodoForm/TodoForm";
import TodoTile from "../TodoTile/TodoTile";

const { Title } = Typography;

const TodoList = () => {
  const [input, setInput] = useState<string>("");

  return (
    <>
      <div className="mx-auto w-36">
        <Title className="title">Purpl Todo</Title>
      </div>
      <div className="flex-column w-3/4 mx-auto justify-center">
        <TodoForm
          buttonLabel="Add"
          onChangeText={() => {}}
          onSubmit={() => {}}
          placeholder="New Task"
          value={input}
        />
      </div>
      <div className="flex-column w-3/4 mx-auto justify-center">
        <TodoTile
          onComplete={() => {}}
          onDelete={function noRefCheck() {}}
          text="Complete the Purpl Todo web application"
          completed
        />
      </div>
    </>
  );
};

export default TodoList;
