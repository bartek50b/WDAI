import { useEffect, useState } from "react";

function Licznik() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Licznik zwiększył się do " + count);
  }, [count]);

  useEffect(() => {
    console.log("Hello world");
  }, []);

  function incrementLicznik() {
    setCount((prev) => prev + 1);
  }
  return (
    <div>
      <span>{count}</span>
      <br />
      <button onClick={incrementLicznik}>Dodaj</button>
    </div>
  );
}

export default Licznik;
