import 'materialize-css/dist/css/materialize.min.css';

function NavBar() {
  return (
    <nav>
      <div class="nav-wrapper blue">
        <a href="#" class="brand-logo right"><i class="large material-icons">shopping_cart</i></a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="#">TIENDAFO</a></li>
          <li><a href="#">Categoria 1</a></li>
          <li><a href="#">Categoria 2</a></li>
          <li><a href="#">Categoria 3</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;