import React from "react";
import Cart from "./cart";
import { connect } from "react-redux";
import { shallowWithStore } from "enzyme-redux";
import { createMockStore } from "redux-test-utils";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("cart shallow with store", () => {
  // This is my cart component
  const CartComponent = () => <Cart />;

  // create mock store -  test mapstatetoprops works
  describe("Shallow rendering with mocked store", () => {
    it("Cart works", () => {
      const expectedState = "expectedState";
      const mapStateToProps = state => ({
        state
      });
      const ConnectedComponent = connect(mapStateToProps)(CartComponent);
      const component = shallowWithStore(
        <ConnectedComponent />,
        createMockStore(expectedState)
      );
      expect(component.props().state).toBe(expectedState);
    });
  });

  describe("Testing dispatch/action with mocked store", () => {
    it("Cart works", () => {
      const action = {
        type: "type"
      };
      const mapDispatchToProps = dispatch => ({
        dispatchProp() {
          dispatch(action);
        }
      });
      const store = createMockStore();

      const ConnectedComponent = connect(undefined, mapDispatchToProps)(
        CartComponent
      );
      const component = shallowWithStore(<ConnectedComponent />, store);
      component.props().dispatchProp();
      expect(store.isActionDispatched(action)).toBe(true);
    });
  });
});
