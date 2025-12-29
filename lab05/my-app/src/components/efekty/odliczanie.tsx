import { useEffect, useState } from "react";

function Odliczanie() {
  const [licznik, setLicznik] = useState(15);
  const [buttonState, setButtonState] = useState("START");
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  useEffect(() => {
    if (buttonState == "STOP") {
      let id = setInterval(() => {
        setLicznik((prev) => prev - 0.01);
      }, 10);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }
  }, [buttonState]);

  useEffect(() => {
    if (licznik <= 0) {
      setButtonState("Odliczanie Zakończone");
      document
        .getElementById("odliczanie-button")
        ?.setAttribute("disabled", "");
    }
  }, [licznik]);

  function buttonClicked() {
    if (buttonState == "START") {
      setButtonState("STOP");
    } else if (buttonState == "STOP") {
      setButtonState("START");
    }
  }
  return (
    <div>
      <div>{Math.round(licznik * 10) / 10} sek</div>
      <br />
      <button id="odliczanie-button" onClick={buttonClicked}>
        {buttonState}
      </button>
    </div>
  );
}

export default Odliczanie;
