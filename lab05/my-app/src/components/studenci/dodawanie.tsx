import { useState } from "react";
type ProductNameProps = {
  students: Student[];
};
function Dodawanie({ students }: DodawanieProps) {
  return (
    <div>
      {" "}
      <label htmlFor="firstName">Imię:</label> <br />
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={(e) => {
          setfirstName(e.target.value);
        }}
      ></input>
      <br />
      <label htmlFor="surname">Nazwisko:</label>
      <br />
      <input
        type="text"
        id="surname"
        name="surname"
        onChange={(e) => {
          setSurname(e.target.value);
        }}
      ></input>
      <br />
      <label htmlFor="year">Powtórz hasło:</label>
      <br />
      <input
        type="number"
        id="year"
        name="year"
        onChange={(e) => {
          setYear(e.target.value);
        }}
      ></input>
      <br />
      <button onClick={Login}>Zaloguj</button>
    </div>
  );
}

export default Dodawanie;
