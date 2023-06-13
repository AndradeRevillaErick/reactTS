import React from "react";
import ReactDOM from "react-dom/client";
// import { Counter } from "./Components/Counter";
import { Usuario } from "./Components/Usuario";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <Counter /> */}
    <Usuario />
  </React.StrictMode>
);
