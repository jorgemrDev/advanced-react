import React from "react";
import ReactDOM from "react-dom";

import StateApi from "state-api";
import App from "components/App";

//yarn dev
//yarn pm2 logs
//other terminal
//yarn webpack
//yarn pm2 list
//yarn pm2 delete server
//sudo lsof -i :8080
//kill -9 9473

const store = new StateApi(window.initialData);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
