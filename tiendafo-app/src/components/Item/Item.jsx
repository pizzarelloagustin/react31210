import React, { useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import './style.css'
import { Link } from 'react-router-dom';

const Item = ({ product }) => {

    const { id, name, img, price } = product

    return (
        <div class="col s3">
            <div class="card">
                <div class="card-image">
                    <img src={img} alt='imagen producto' />
                </div>
                <div class="card-content">
                    <span class="card-title">{name}</span>
                    <p>${price}</p>
                    <div className='divBtn'>
                        <Link to={`/product/${id}`}><a class="waves-effect waves-light btn">Ver Detalle</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item