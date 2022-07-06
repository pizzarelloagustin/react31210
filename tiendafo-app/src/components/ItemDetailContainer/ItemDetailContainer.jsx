import React, { useEffect, useState } from 'react'
//import ItemList from '../ItemList/ItemList'
import getData from '../../moks/fakeApi'
import './style.css'
import Loader from '../Loader/Loader'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ( { onAdd } ) => {

    
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData
            .then((result) => setProductList(result))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])
    

    return (
            <div>
                {loading ? <Loader /> : <ItemDetail product={productList[0]} onAdd={onAdd} />}
            </div>
    );
};

export default ItemDetailContainer;