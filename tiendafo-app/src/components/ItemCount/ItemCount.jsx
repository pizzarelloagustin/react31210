import React, { useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import "./style.css";

const ItemCount = ({ stock, initial, onAdd }) => {

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
        <div class="card-content white-text">
            <div className='divBtn'>
                <a onClick={handlerClickSubtrack} class="waves-effect waves-light btn">-</a>
                <span>{count}</span>
                <a onClick={handlerClickAdd} class="waves-effect waves-light btn">+</a>
            </div>
            <div>
                <p>Stock: {stock}</p>
            </div>
            <div className='divBtnAdd'>
                <a onClick={handlerClickAddToCart} class="waves-effect waves-light btn">Añadir al Carrito</a>
            </div>
        </div>
    );
};

export default ItemCount;