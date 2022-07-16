import React, { useState, useEffect, useContext } from "react";
import "materialize-css/dist/css/materialize.min.css";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { cartContext } from '../../Context/CartContext';
import "./style.css"

const ItemDetail = ({ product }) => {

    const { name, description, img, price, initial, stock } = product;

    const [finish, setFinish] = useState(false);
    const { addProduct } = useContext(cartContext);

    const onAdd = (count) => {
        addProduct({ ...product, qty: count });
        setFinish(true);
    }

    return (
        <div className="divMargin">
            <div class="row teal lighten-2 white-text">
                <div class="col s4">
                    <div className='divImg'>
                        <img height="300" src={img} alt='imagen producto' />
                    </div>
                </div>
                <div class="col s8">
                    <div>
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
    );
};

export default ItemDetail;
