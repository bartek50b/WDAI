let currentProducts = [];
let allProducts = [];
async function loadProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  allProducts = data.products;
  currentProducts = data.products.slice(0, 30);
  renderTable();
}

function renderTable() {
  document.getElementById("products-tbody").innerHTML = "";
  currentProducts.forEach((p) => {
    const tr = document.createElement("tr");

    const imgTd = document.createElement("td");
    const img = document.createElement("img");
    img.src = p.thumbnail || (p.images && p.images[0]) || "";
    img.alt = p.title;
    imgTd.appendChild(img);

    const titleTd = document.createElement("td");
    titleTd.textContent = p.title;

    const descTd = document.createElement("td");
    descTd.textContent = p.description;

    tr.appendChild(imgTd);
    tr.appendChild(titleTd);
    tr.appendChild(descTd);
    document.getElementById("products-tbody").appendChild(tr);
  });
}

function filterAndSort() {
  const enteredFilter = document.getElementById("filter").value.toLowerCase();
  let filtered = allProducts.filter((p) => {
    const inTitle = p.title.toLowerCase().includes(enteredFilter);
    const inDesc = p.description.toLowerCase().includes(enteredFilter);
    return inTitle || inDesc;
  });

  const sortMode = document.getElementById("sort").value;
  if (sortMode === "asc") {
    filtered = filtered.slice().sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      return 0;
    });
  } else if (sortMode === "desc") {
    filtered = filtered.slice().sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
      return 0;
    });
  }
  currentProducts = filtered;
  renderTable();
}

document.getElementById("filter").addEventListener("input", filterAndSort);
document.getElementById("sort").addEventListener("change", filterAndSort);

loadProducts();
