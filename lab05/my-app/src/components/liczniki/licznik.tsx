import { useState } from "react";

function Licznik() {
  const [count, setCount] = useState(0);

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
