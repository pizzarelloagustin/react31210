import React, { useContext } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import './style.css'
import { cartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";

const Cart = () => {

    const { products, deleteProduct, total } = useContext(cartContext);

    return (
        <>
            {
                products.length === 0
                    ?
                    <>
                        <h2 className='titulo'>Está vacío tu carrito</h2>
                        <div className='divBtnAdd'>
                            <Link to="/">
                                <a class="waves-effect waves-light btn-large">Compra por aqui</a>
                            </Link>
                        </div>
                    </>
                    :
                    <div>
                        {products.map((prod) => (
                            <div className="divMargin" key={prod.id}>
                                <div class="row teal teal accent-4 white-text">
                                    <div class="col s4">
                                        <div className='divImg'>
                                            <img height="200" src={prod.img} alt='imagen producto' />
                                        </div>
                                    </div>
                                    <div class="col s8">
                                        <div>
                                            <span class="card-title">{prod.name}</span>
                                            <p>${prod.price}</p>
                                            <p>Cantidad: {prod.qty}</p>
                                        </div>
                                        <div className='divBtnAdd'>
                                            <a onClick={() => deleteProduct(prod.id)} class="waves-effect waves-light btn-large">Borrar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <h3>Total: $ {total()} </h3>
                    </div>
            }
        </>
    );
}

export default Cart