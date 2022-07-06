import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";
import M from "materialize-css"

const ItemDetail = ({ product, onAdd }) => {

    const { name, description, img, price, initial, stock } = product

    const [count, setCount] = useState(initial);

    const handlerClickAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const handlerClickSubtrack = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const handlerClickAddToCart = () => {
        if (count <= stock && stock != 0) {
            onAdd(count);
        }
    }

    return (
        <>
            <div class="row">
                <div class="col s12">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <div class="card-image">
                                <img src={img} alt='imagen producto' />
                                <a onClick={handlerClickAddToCart} class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons">add</i></a>
                            </div>
                            <span class="card-title">{name}</span>
                            <p>{description}</p>
                            <div>
                                <p>${price}</p>
                                <div className='divBtn'>
                                    <a onClick={handlerClickSubtrack} class="waves-effect waves-light btn">-</a>
                                    <span>{count}</span>
                                    <a onClick={handlerClickAdd} class="waves-effect waves-light btn">+</a>
                                </div>
                                <div>
                                    <p>Stock: {stock}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
