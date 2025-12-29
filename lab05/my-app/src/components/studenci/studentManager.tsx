import { useState } from "react";

interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}
function StudentManager() {
  const [students, setStudents] = useState<Student[]>([
    { imie: "Maciek", nazwisko: "Kowalski", rocznik: 2023 },
    { imie: "Adam", nazwisko: "Nowak", rocznik: 2023 },
    { imie: "Wojciech", nazwisko: "Wysocki", rocznik: 2024 },
  ]);
  const [formData, setFormData] = useState<Student>({
    imie: "",
    nazwisko: "",
    rocznik: 0,
  });

  function addStudent() {
    if (formData.imie && formData.nazwisko && formData.rocznik) {
      setStudents((prev) => [...prev, formData]);

      setFormData({ imie: "", nazwisko: "", rocznik: 0 });
    }
  }

  return (
    <div>
      <table>
        <tr>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Rocznik</th>
        </tr>
        {students.map((student) => (
          <tr>
            <td>{student.imie}</td>
            <td>{student.nazwisko}</td>
            <td>{student.rocznik}</td>
          </tr>
        ))}
      </table>
      <Dodawanie></Dodawanie>
    </div>
  );

  function Dodawanie() {
    return (
      <form>
        {" "}
        <label htmlFor="firstName">Imię:</label> <br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.imie}
          required
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, imie: e.target.value }));
          }}
        ></input>
        <br />
        <label htmlFor="surname">Nazwisko:</label>
        <br />
        <input
          type="text"
          id="surname"
          name="surname"
          value={formData.nazwisko}
          required
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, nazwisko: e.target.value }));
          }}
        ></input>
        <br />
        <label htmlFor="year">Rocznik:</label>
        <br />
        <input
          type="number"
          id="year"
          name="year"
          value={formData.rocznik}
          required
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              rocznik: parseInt(e.target.value),
            }));
          }}
        ></input>
        <br />
        <button type="button" onClick={addStudent}>
          Dodaj Studenta
        </button>
      </form>
    );
  }
}
export default StudentManager;
