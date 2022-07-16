import React, { useContext } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './style.css'
import { cartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";

const CartWidget = () => {

  const { qtyProducts } = useContext(cartContext);

  return (
    <>
        <button className="brand-logo right cart-btn">
      <Link to="/cart">
          <a href="#"><i class="large material-icons">shopping_cart</i>
            <span>
              {qtyProducts === 0
                ?
                ""
                :
                qtyProducts
              }
            </span></a>
      </Link>
        </button>
    </>
  );
};

export default CartWidget;