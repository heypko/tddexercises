import { shallow } from "enzyme";
import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LessEmptyApp from "../example_index_2";
import { getEnzymeId } from "../../enzyme-helper";

const STARTER_TEXT = getEnzymeId("starter-text");
const CLICK_ME_BUTTON = getEnzymeId("click-me-button");

it("Write the test first, then write the implementation", () => {
  Enzyme.configure({ adapter: new Adapter() });

  const wrapper = shallow(<LessEmptyApp />);
  expect(wrapper.find(STARTER_TEXT).exists()).toBe(true);
});

// Write your second test here
