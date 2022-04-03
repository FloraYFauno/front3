//todo el trabajo en react se hace principalmente dentro de esta carpeta SRC. Dentro del archivo index.js es que renderizamos el dic con el id="root".

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
