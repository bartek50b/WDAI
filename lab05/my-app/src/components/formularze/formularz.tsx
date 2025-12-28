import { useState } from "react";

function Formularz() {
  const [input, setInput] = useState("");

  function updateDiv(inputText: string) {
    setInput(inputText);
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          updateDiv(e.target.value);
        }}
      ></input>
      <br />
      <div>{input}</div>
    </div>
  );
}

export default Formularz;
