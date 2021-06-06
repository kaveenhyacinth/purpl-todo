import React from "react";
import TodoTile from "../TodoTile";
import { cleanup } from "@testing-library/react";
import { shallow } from "enzyme";

afterEach(cleanup);

test("Matches snapshot", () => {
  const comp = shallow(
    <TodoTile
      text="Complete the Purpl Todo web application"
      completed={false}
    />
  );
  expect(comp).toMatchSnapshot();
});
