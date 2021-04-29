// import React, { useState, useEffect } from "react";
// import ArticlesList from "./ArticlesList";
// import PropTypes from "prop-types";

// const App = (props) => {
//   const childContextTypes = {
//     store: PropTypes.object,
//   };
//   const getChildContext = () => {
//     return { store: props.store };
//   };

//   const [state, setState] = useState(props.store.getState());

//   return <ArticlesList articles={state.articles}></ArticlesList>;
// };

// export default App;

//////////
import React from "react";
import PropTypes from "prop-types";

import ArticleList from "./ArticlesList";

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  };
  getChildContext() {
    return {
      store: this.props.store,
    };
  }
  state = this.props.store.getState();
  render() {
    return (
      <ArticleList articles={this.state.articles} store={this.props.store} />
    );
  }
}

export default App;
