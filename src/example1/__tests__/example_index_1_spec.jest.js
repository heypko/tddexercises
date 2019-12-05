import { shallow } from "enzyme";
import React, { Fragment } from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import EmptyApp from "../example_index_1";
import { getEnzymeId } from "../../enzyme-helper";

const STARTER_TEXT = getEnzymeId("starter-text");

it("Write the test first, then write the implementation", () => {
  Enzyme.configure({ adapter: new Adapter() });

  // First test here
});
