import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
function Logowanie() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const isDisabled = username == "" || password == "" || repeatedPassword == "";

  function Login() {
    if (password != repeatedPassword) {
      alert("Hasła się nie zgadzają");
    } else {
      alert("Zalogowano poprawnie");
    }
  }
  return (
    <div>
      <label htmlFor="username">Nazwa użytkownika:</label> <br />
      <input
        type="text"
        id="username"
        name="username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      ></input>
      <br />
      <label htmlFor="password">Hasło:</label>
      <br />
      <input
        type="password"
        id="password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <br />
      <label htmlFor="repeatPassword">Powtórz hasło:</label>
      <br />
      <input
        type="password"
        id="repeatPassword"
        name="repeatPassword"
        onChange={(e) => {
          setRepeatedPassword(e.target.value);
        }}
      ></input>
      <br />
      <button disabled={isDisabled} onClick={Login}>
        Zaloguj
      </button>
    </div>
  );
}

export default Logowanie;
