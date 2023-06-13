import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementar = (numero: number = 1): void => {
    setCounter(counter + numero);
  };

  return (
    <>
      <h1>Counter: UseState</h1>
      <h1>Valor: {counter}</h1>
      <button onClick={() => incrementar()}>+1</button>
      <button onClick={() => incrementar(2)}>+2</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </>
  );
};
