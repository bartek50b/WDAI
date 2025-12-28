import { useState } from "react";
import Przycisk from "./przycisk";

function NowyLicznik() {
  const [count, setCount] = useState(0);

  function incrementLicznik() {
    setCount((prev) => prev + 1);
  }
  return (
    <div>
      <span>{count}</span>
      <br />
      <Przycisk clicked={incrementLicznik}></Przycisk>
    </div>
  );
}

export default NowyLicznik;
