import React, { useState } from "react";
import DataApi from "../DataApi";
import { data } from "../testData.json";
import ArticlesList from "./ArticlesList";

const api = new DataApi(data);

const App = () => {
  const [state, setState] = useState({
    articles: api.getArticles(),
    authors: api.getAuthors(),
  });

  const articleActions = {
    lookupAuthor: (authorId) => state.authors[authorId],
  };

  return (
    <ArticlesList
      articles={state.articles}
      articleActions={articleActions}
    ></ArticlesList>
  );
};

export default App;
