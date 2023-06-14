import { Timer } from "./Timer";
import { useState } from "react";

export const TimerPadre = () => {
  const [millisegundos, setMillisegundos] = useState(1000);

  // const setMillisegundos = (sec: number) => {
  //   setMillisegundos(sec);
  // };

  return (
    <>
      <span>Milisegundos {millisegundos}</span>

      <br />

      <button onClick={() => setMillisegundos(1000)}>1000</button>
      <button onClick={() => setMillisegundos(2000)}>2000</button>
      <Timer milisegundos={millisegundos} />
    </>
  );
};
