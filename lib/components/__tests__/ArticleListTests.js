import React from "react";
import ArticlesList from "../ArticlesList";
import { shallow } from "enzyme";

describe("ArticleList", () => {
  const testProps = {
    articles: {
      a: { id: a },
      b: { id: b },
    },
  };

  it("renders conrrectly", () => {
    const wrapper = shallow(<ArticlesList {...testProps}></ArticlesList>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.node.props.children.length).toBe(2);
    expect(wrapper.find("ArticleContainer").length).toBe(2);
  });
});
