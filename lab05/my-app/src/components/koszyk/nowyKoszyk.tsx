import Produkt from "./produkt";
const products = ["Mleko", "Chleb", "Piwo", "Woda", "Masło"];

function NowyKoszyk() {
  return (
    <div>
      <h2>Koszyk</h2>
      <ul>
        {products.map((name) => (
          <li key={name}>
            <Produkt name={name}></Produkt>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NowyKoszyk;
