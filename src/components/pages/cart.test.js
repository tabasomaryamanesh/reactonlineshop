import React from "react";
import { shallow } from "enzyme";
import Cart from "./cart";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Welcome", () => {
  it("Welcome renders hello world", () => {
    const welcome = shallow(<Cart />);
    expect(welcome.find("h4").text()).toEqual("Total amount:");
  });
});
