import React from "react";
import ReactDOM from "react-dom/client";
import { Counter } from "./Components/Counter";
import { Usuario } from "./Components/Usuario";
import { TimerPadre } from "./Components/TimerPadre";
import { ContadorRed } from "./Components/ContadorRed";
import { Formulario } from "./Components/Formulario";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <h1>REACT + TYPESCRIPT</h1>

    <hr />
    <h2>UseState</h2>
    <Counter />
    <Usuario />

    <hr />
    <h2>UseEffect - useRef</h2>
    <TimerPadre />

    <hr />
    <ContadorRed />

    <h2>Custom hooks</h2>
    <hr />
    <Formulario />

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </React.StrictMode>
);
