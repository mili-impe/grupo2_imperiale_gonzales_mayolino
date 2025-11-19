const productos = [
  {
    nombre: "Capuccino",
    descripcion: "Café 50% - Leche 50%",
    precio: 8500,
    imagen: "IMG/Rectangle7.jpg"
  },
  {
    nombre: "Chai Latte",
    descripcion: "Té 30% - Leche 70%",
    precio: 8500,
    imagen: "img/Rectangle9.jpg"
  },
  {
    nombre: "Macchiato",
    descripcion: "Café 80% - Leche 20%",
    precio: 8500,
    imagen: "img/Rectangle11.jpg"
  },
  {
    nombre: "Espresso",
    descripcion: "Café 90% - Leche 10%",
    precio: 8500,
    imagen: "img/Rectangle13.jpg"
  },
  {
    nombre: "Chocolatada",
    descripcion: "Caliente o fría",
    precio: 8500,
    imagen: "img/leche-chocolatada-caratula-0848.jpg"
  },
  {
    nombre: "Matcha Latte",
    descripcion: "30% matcha - 10% café - 60% leche",
    precio: 8500,
    imagen: "img/iced-matcha-latte.jpg"
  },
  {
    nombre: "Frutos rojos latte",
    descripcion: "30% matcha - 10% café - 60% leche",
    precio: 8500,
    imagen: "img/mousse-cafe-frutos-rojos-postre.jpg"
  },
  {
    nombre: "Bubble Tea",
    descripcion: "con perlas de tapioca",
    precio: 8500,
    imagen: "img/bubbletea.jpg"
  },
  {
    nombre: "Zumo + fruta",
    descripcion: "con perlas de tapioca",
    precio: 8500,
    imagen: "img/zumo-y-fruta.jpg"
  }
];


const contenedor = document.getElementById("lista-productos");

productos.forEach(prod => {
  contenedor.innerHTML += `
    <div class="card m-2">
      <img src="${prod.imagen}" class="card-img-top">
      <div class="card-body text-center">
        <h5 class="card-title">${prod.nombre}</h5>
        <p class="small">${prod.descripcion}</p>
        <p class="precio">$${prod.precio}</p>
<a href="Carrito/index.html" class="btn btn-agregar">Agregar al carrito</a>
      </div>
    </div>
  `;
});
