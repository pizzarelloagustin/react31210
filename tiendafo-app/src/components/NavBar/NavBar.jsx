import 'materialize-css/dist/css/materialize.min.css';
import logo from '../../assets/images/circle-nodes-solid.svg'
import './style.css'
import CartWidget from '../CarWidget/CarWidget';

function NavBar( { cartItems } ) {
  return (
    <nav>
      <div class="nav-wrapper blue">
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="#" className='flex-logo'><img src={logo} className="logo"></img>TIENDAFO</a></li>
          <li><a href="#">Categoria 1</a></li>
          <li><a href="#">Categoria 2</a></li>
          <li><a href="#">Categoria 3</a></li>
        </ul>
        <CartWidget cartItems={cartItems} />
      </div>
    </nav>
  );
}

export default NavBar;