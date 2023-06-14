import { Timer } from "./Timer";
import { useState } from "react";

export const TimerPadre = () => {
  const [millisegundos, setMillisegundos] = useState(1000);

  const handleMillisec = (sec: number) => {
    setMillisegundos(sec);
  };
  return (
    <>
      <span>Milisegundos {millisegundos}</span>

      <br />

      <button onClick={() => handleMillisec(1000)}>1000</button>
      <button onClick={() => handleMillisec(2000)}>2000</button>
      <Timer milisegundos={millisegundos} />
    </>
  );
};
