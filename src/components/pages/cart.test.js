import React from "react";
import Cart from "./cart";
import { connect } from "react-redux";
import { shallowWithStore } from "enzyme-redux";
import { createMockStore } from "redux-test-utils";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("cart shallow with store", () => {
  const ReactComponent = () => <Cart />;
  describe("state", () => {
    it("works", () => {
      const expectedState = "expectedState";
      const mapStateToProps = state => ({
        state
      });
      const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
      const component = shallowWithStore(
        <ConnectedComponent />,
        createMockStore(expectedState)
      );
      expect(component.props().state).toBe(expectedState);
    });
  });
});
