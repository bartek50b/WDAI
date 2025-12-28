import Produkt from "./produkt";

function Koszyk() {
  return (
    <div>
      <h2>Koszyk</h2>
      <ul>
        <li>
          <Produkt name="Mleko" />
        </li>
        <li>
          <Produkt name="Chleb" />
        </li>
        <li>
          <Produkt name="Masło" />
        </li>
        <li>
          <Produkt name="Woda" />
        </li>
        <li>
          <Produkt name="Piwo" />
        </li>
      </ul>
    </div>
  );
}

export default Koszyk;
