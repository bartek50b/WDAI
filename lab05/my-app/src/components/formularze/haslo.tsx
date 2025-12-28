import { useState } from "react";
function Haslo() {
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [passwordInfo, setpasswordInfo] = useState("Proszę wprowadzić hasło");
  function passwordValidation() {
    if (password == "" || repeatedPassword == "") {
      setpasswordInfo("Proszę wprowadzić hasło");
    } else if (password == repeatedPassword) {
      setpasswordInfo("");
    } else if (password != repeatedPassword) {
      setpasswordInfo("Hasła nie są identyczne");
    }
  }
  return (
    <div>
      <label htmlFor="password">Hasło:</label>
      <br />
      <input
        type="password"
        id="password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
          passwordValidation();
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
          passwordValidation();
        }}
      ></input>
      <br />
      <div>{passwordInfo}</div>
      <br />
    </div>
  );
}

export default Haslo;
