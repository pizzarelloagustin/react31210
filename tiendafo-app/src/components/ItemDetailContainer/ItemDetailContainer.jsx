import React, { useEffect, useState } from 'react'
import { getProduct } from '../../moks/fakeApi'
import './style.css'
import Loader from '../Loader/Loader'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    
    const [productList, setProductList] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams();

    useEffect(() => {
        setLoading(true)
        getProduct(productId)
            .then((result) => setProductList(result))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [productId])

    return (
            <div>
                {loading ? <Loader /> : <ItemDetail product={productList} />}
            </div>
    );
};

export default ItemDetailContainer;