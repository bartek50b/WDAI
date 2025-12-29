import { useEffect, useState } from "react";
function Tytul() {
  const [title, setTitle] = useState(" ");

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default Tytul;
