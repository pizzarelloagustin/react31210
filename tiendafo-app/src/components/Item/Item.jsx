import React, { useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import './style.css'
import { Link } from 'react-router-dom';

const Item = ({ product }) => {

    const { id, name, img, price, stock } = product

    return (
        <div class="col s3">
            <div class="card">
                <div className='divImg'>
                    <img height="200" src={img} alt='imagen producto' />
                </div>
                <div class="card-content">
                    <span class="card-title">{name}</span>
                    <p>${price}</p>
                    <p>Stock: {stock}</p>
                    <div className='divBtn'>
                        <Link to={`/product/${id}`}><a class="waves-effect waves-light btn">Ver Detalle</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item