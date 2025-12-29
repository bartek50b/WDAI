import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Welcome from "./Welcome";
import reportWebVitals from "./reportWebVitals";
import Koszyk from "./components/koszyk/koszyk";
import NowyKoszyk from "./components/koszyk/nowyKoszyk";
import Licznik from "./components/efekty/licznik";
import NowyLicznik from "./components/liczniki/nowyLicznik";
import Formularz from "./components/formularze/formularz";
import Haslo from "./components/formularze/haslo";
import Logowanie from "./components/formularze/logowanie";
import Ternaty from "./components/inne/ternaty";
import Aktualizacja from "./components/inne/aktualizacja";
import Studenci from "./components/studenci/studenci";
import StudentManager from "./components/studenci/studentManager";
import Tytul from "./components/efekty/tytul";
import Odliczanie from "./components/efekty/odliczanie";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Odliczanie></Odliczanie>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
