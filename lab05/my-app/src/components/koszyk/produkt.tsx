type ProductNameProps = {
  name: string;
};

function Produkt({ name }: ProductNameProps) {
  return <span>{name}</span>;
}

export default Produkt;
