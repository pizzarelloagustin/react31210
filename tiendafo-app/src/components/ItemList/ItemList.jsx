import React from 'react'
import Item from '../Item/Item'
import 'materialize-css/dist/css/materialize.min.css';

const ItemList = ({ productList }) => {

    return (
        <>
            <h3>Productos</h3>
            <div class="row">
                {productList.map((product) => <Item key={product.id} product={product} />)}
            </div>
        </>
    )
}

export default ItemList