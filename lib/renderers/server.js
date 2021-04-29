import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../components/App";
import StateApi from "state-api";
import config from "../config";
import axios from "axios";

const serverRender = async () => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(resp.data);

  return {
    initialMarkup: ReactDOMServer.renderToString(<App store={store}></App>),
    initialData: resp.data,
  };
};

export default serverRender;
