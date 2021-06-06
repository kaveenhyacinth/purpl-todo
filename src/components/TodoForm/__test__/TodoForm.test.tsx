import React from "react";
import TodoForm from "../TodoForm";
import { cleanup } from "@testing-library/react";
import { shallow } from "enzyme";

afterEach(cleanup);

test("Matches snapshot", () => {
  const comp = shallow(
    <TodoForm buttonLabel="Add" placeholder="New Task" value="" />
  );
  expect(comp).toMatchSnapshot();
});
