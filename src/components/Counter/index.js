import { useEffect, useState } from "react";

function Counter() {
  //   let angka = 0;

  const [angka, setAngka] = useState(0);
  function addAngka() {
    // angka = angka + 1;
    setAngka(angka + 1);
  }
  function manipulateDOM() {
    console.log("LifeCycle:Mount");
    document.title = `hasil:${angka}`;
  }
  useEffect(manipulateDOM, [angka]);
  console.log("LifeCycle:dirender");
  return (
    <div>
      <p>hasil :{angka}</p>
      <button onClick={addAngka}>add</button>
    </div>
  );
}

export default Counter;
