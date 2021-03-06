import React from 'react';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import CartCustomProvider from './Context/CartContext.jsx'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <CartCustomProvider >
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Esto es TIENDAFO"} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting='Filtrado' />} />
            <Route path="/product/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartCustomProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;