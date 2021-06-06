import React from "react";
import { cleanup } from "@testing-library/react";
import App from "../App";
import { shallow } from "enzyme";

afterEach(cleanup);

test("Matches snapshot", () => {
  const comp = shallow(<App />);
  expect(comp).toMatchSnapshot();
});
