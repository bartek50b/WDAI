function Ternaty() {
  let a: boolean = true;
  let b: boolean = false;
  return (
    <div>
      <div>
        {a ? "Stwierdzenie a jest prawdziwe" : "Stwierdzenie a jest fałszywe"}
      </div>
      <div>
        {b ? "Stwierdzenie a jest prawdziwe" : "Stwierdzenie a jest fałszywe"}
      </div>
    </div>
  );
}

export default Ternaty;
