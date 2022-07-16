const products = [
  {
    id: 1,
    name: "Drop 2 Hilos",
    description: "Descripción pruducto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    img: "/img/drop.jpg",
    price: 200,
    initial: 1,
    stock: 4,
    category: "fibras-opticas",
  },
  {
    id: 2,
    name: "Fibra Optica 24 Hilos",
    description: "Descripción pruducto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis",
    img: "/img/fo.jpg",
    price: 300,
    initial: 1,
    stock: 8,
    category: "fibras-opticas",
  },
  {
    id: 3,
    name: "Caja de empalme",
    description: "Descripción pruducto 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.",
    img: "/img/cajaempalme.jpg",
    price: 450,
    initial: 1,
    stock: 6,
    category: "cajas-empalmes",
  },
  {
    id: 4,
    name: "CTO",
    description: "Descripción pruducto 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.",
    img: "/img/cto.jpg",
    price: 150,
    initial: 1,
    stock: 0,
    category: "cajas-empalmes",
  },
  {
    id: 5,
    name: "Splitter 1x2",
    description: "Descripción pruducto 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.",
    img: "/img/splitter2.jpg",
    price: 600,
    initial: 1,
    stock: 10,
    category: "splitters",
  },
  {
    id: 6,
    name: "Splitter 1x4",
    description: "Descripción pruducto 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.",
    img: "/img/splitter4.jpg",
    price: 325,
    initial: 1,
    stock: 7,
    category: "splitters",
  },
];

const getData = (categoryId) => {
  return new Promise((resolve, reject) => {
    let condition = true;
    const productsFiltered = products.filter(
      (prod) => prod.category === categoryId
    );
    setTimeout(() => {
      if (condition) {
        categoryId ? resolve(productsFiltered) : resolve(products);
      } else {
        reject("Error en fakeApi");
      }
    }, 2000);
  })
};

export default getData;

export const getProduct = (productId) => {
  return new Promise((resolve, reject) => {
    let condition = true;
    const productFind = products.find(
      (prod) => prod.id === Number(productId)
    );
    setTimeout(() => {
      if (condition) {
        resolve(productFind);
      } else {
        reject("Error en fakeApi");
      }
    }, 2000);
  })
};