import 'materialize-css/dist/css/materialize.min.css';
import './style.css'

const CartWidget = () => {
  return (
    <>
      <button className="brand-logo right cart-btn">
      <a href="#"><i class="large material-icons">shopping_cart</i><span>0</span></a>
      </button>
    </>
  );
};

export default CartWidget;