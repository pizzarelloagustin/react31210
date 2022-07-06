const products = [
  {
    id: "1",
    name: "Producto 1",
    description:"Descripción pruducto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    img: "/img/producto.svg",
    price: 200,
    initial: 1,
    stock: 4,
  },
  {
    id: "2",
    name: "Producto 2",
    description:"Descripción pruducto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.",
    img: "/img/producto.svg",
    price: 300,
    initial: 1,
    stock: 8,
  },
  {
    id: "3",
    name: "Producto 3",
    description:"Descripción pruducto 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.",
    img: "/img/producto.svg",
    price: 450,
    initial: 1,
    stock: 6,
  },
  {
    id: "4",
    name: "Producto 4",
    description:"Descripción pruducto 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.",
    img: "/img/producto.svg",
    price: 150,
    initial: 1,
    stock: 0,
  },
  {
    id: "5",
    name: "Producto 5",
    description:"Descripción pruducto 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.",
    img: "/img/producto.svg",
    price: 600,
    initial: 1,
    stock: 10,
  },
  {
    id: "6",
    name: "Producto 6",
    description:"Descripción pruducto 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.",
    img: "/img/producto.svg",
    price: 325,
    initial: 1,
    stock: 7,
  },
];

const getData = new Promise((resolve, reject) => {
    let condition = true;
    setTimeout(() => {
        if (condition) {
            resolve(products);
        } else {
            reject("Error en fakeApi");
        }
    }, 2000);
});

export default getData;
