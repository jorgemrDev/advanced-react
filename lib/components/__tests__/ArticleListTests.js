import React from "react";
import ArticlesList from "../ArticlesList";
import renderer from "react-test-renderer";

describe("ArticleList", () => {
  const testProps = {
    articles: {
      a: { id: a },
      b: { id: b },
    },
    articleActions: {
      lookupAuthor: jest.fn(() => ({})),
    },
  };
  it("renders conrrectly", () => {
    const tree = renderer
      .create(<ArticlesList {...testProps}></ArticlesList>)
      .toJSON();
    console.log(tree);

    expect(tree).toMatchSnapshot();
    expect(tree.children.length).toBe(2);
  });
});
