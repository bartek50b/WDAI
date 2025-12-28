type PrzyciskProps = {
  clicked: () => void;
};

function Przycisk({ clicked }: PrzyciskProps) {
  return <button onClick={clicked}>Dodaj</button>;
}

export default Przycisk;
