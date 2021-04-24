import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./components/App";

const serverRender = () => {
  ReactDOMServer.renderToString(<App></App>);
};

export default serverRender;
