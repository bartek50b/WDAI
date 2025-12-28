import { useState } from "react";

function Aktualizacja() {
  const [product, setProduct] = useState({ name: "Pomidor", price: 50 });
  function changePrice() {
    setProduct((prev) => ({ ...prev, price: 100 }));
  }
  return (
    <div>
      <div>
        Aktualnie {product.name} kosztuje {product.price} zł
      </div>
      <br />
      <button>Zmień cenę</button>
    </div>
  );
}

export default Aktualizacja;
