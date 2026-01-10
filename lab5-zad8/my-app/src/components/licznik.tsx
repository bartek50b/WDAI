import { useEffect, useState } from "react";

function Licznik() {
  const [count, setCount] = useState<number>(0);

  function incrementLicznik() {
    setCount((prev) => {
      localStorage.setItem("licznik", (prev + 1).toString());
      return prev + 1;
    });
  }
  useEffect(() => {
    const savedCounter = localStorage.getItem("licznik");
    if (savedCounter) {
      setCount(parseInt(savedCounter));
    }
  }, []);
  return (
    <div>
      <span>{count}</span>
      <br />
      <button onClick={incrementLicznik}>Dodaj</button>
    </div>
  );
}

export default Licznik;
