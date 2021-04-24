import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [state, setState] = useState({ answer: 43 });
  return <h2>Hello World {state.answer} </h2>;
};
ReactDOM.render(<App></App>, document.getElementById("root"));
