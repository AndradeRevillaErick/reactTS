import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

export const Usuario = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Erick Andrade",
    });
  };

  return (
    <>
      <h3>Usuario: UseState</h3>
      <button onClick={login}>Login</button>
      {user ? <pre>{JSON.stringify(user)}</pre> : <h3>No hay ususarios</h3>}
    </>
  );
};
