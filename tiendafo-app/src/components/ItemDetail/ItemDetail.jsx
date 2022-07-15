import React, { useState, useEffect, useContext } from "react";
import "materialize-css/dist/css/materialize.min.css";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { cartContext } from '../../Context/CartContext';

const ItemDetail = ({ product }) => {
    
    const { name, description, img, price, initial, stock } = product;
    
    const [finish, setFinish] = useState(false);
    const { addProduct } = useContext(cartContext);
    
    const onAdd = (count) => {
        addProduct({...product, qty: count});
        setFinish(true);
    }
    
    return (
        <>
            <div class="row">
                <div class="col s12">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <div class="card-image">
                                <img src={img} alt='imagen producto' />
                            </div>
                            <span class="card-title">{name}</span>
                            <p>{description}</p>
                            <p>${price}</p>
                        </div>
                        {finish ?
                            (
                                <div className='divBtnAdd'>
                                    <Link to="/cart">
                                    <a class="waves-effect waves-light btn-large">Finalizar Compra</a>
                                    </Link>
                                </div>
                            ) : (
                                <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
