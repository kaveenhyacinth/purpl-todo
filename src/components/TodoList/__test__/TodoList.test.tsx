import React from "react";
import TodoList from "../TodoList";
import { cleanup } from "@testing-library/react";
import { shallow } from "enzyme";

afterEach(cleanup);

test("Matches snapshot", () => {
  const comp = shallow(<TodoList />);
  expect(comp).toMatchSnapshot();
});
