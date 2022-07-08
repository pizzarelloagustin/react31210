import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import logo from '../../assets/images/circle-nodes-solid.svg'
import './style.css'
import CartWidget from '../CarWidget/CarWidget';
import { Link } from 'react-router-dom';

function NavBar() {

  const categories = [
    {
      id: 1,
      path: '/category/fibras-opticas',
      name: 'Fibras Opticas',
    },
    {
      id: 2,
      path: '/category/cajas-empalmes',
      name: 'Cajas de Empalme',
    },
    {
      id: 3,
      path: '/category/splitters',
      name: 'Splitters',
    },
  ];

  return (
    <nav>
      <div class="nav-wrapper blue">
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><Link to="/"><a href="/" className='flex-logo'><img src={logo} className="logo"></img>TIENDAFO</a></Link></li>
            {categories.map((category) => (
              <li>
                <Link to={category.path} key={category.id}>
                  {category.name}
                </Link>
              </li>
            ))}
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;