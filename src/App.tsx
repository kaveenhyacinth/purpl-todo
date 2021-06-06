import React from "react";
import { Typography } from "antd";
import TodoList from "./components/TodoList/TodoList";

const { Title } = Typography;

function App() {
  return (
    <div className="w-screen py-10">
      <div className="mx-auto w-3/4">
        <Title className="title">Purpl Todo</Title>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
