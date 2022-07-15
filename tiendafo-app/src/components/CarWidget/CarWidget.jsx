import React, { useContext } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './style.css'
import { cartContext } from '../../Context/CartContext';

const CartWidget = () => {

  const { qtyProducts } = useContext(cartContext);

  return (
    <>
      <button className="brand-logo right cart-btn">
      <a href="#"><i class="large material-icons">shopping_cart</i><span>{qtyProducts}</span></a>
      </button>
    </>
  );
};

export default CartWidget;