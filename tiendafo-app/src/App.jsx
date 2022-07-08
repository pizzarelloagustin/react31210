import React from 'react';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const onAdd = (cartItems) => {
    console.log(cartItems)
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Esto es TIENDAFO"} onAdd={onAdd} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting='Filtrado'/>}/>
          <Route path="/product/:productId" element={<ItemDetailContainer onAdd={onAdd} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;