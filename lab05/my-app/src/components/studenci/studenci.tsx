interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}
const Students: Student[] = [
  { imie: "Maciek", nazwisko: "Kowalski", rocznik: 2023 },
  { imie: "Adam", nazwisko: "Nowak", rocznik: 2023 },
  { imie: "Wojciech", nazwisko: "Wysocki", rocznik: 2024 },
];

function Studenci() {
  return (
    <table>
      <tr>
        <th>Imię</th>
        <th>Nazwisko</th>
        <th>Rocznik</th>
      </tr>
      {Students.map((student) => (
        <tr>
          <td>{student.imie}</td>
          <td>{student.nazwisko}</td>
          <td>{student.rocznik}</td>
        </tr>
      ))}
    </table>
  );
}

function Dodawanie() {}

export default Studenci;
