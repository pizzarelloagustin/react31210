import React, { useEffect, useState } from 'react'
import './style.css'
import Loader from '../Loader/Loader'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase'
import { doc, getDoc, collection } from 'firebase/firestore'

const ItemDetailContainer = () => {


    const [productList, setProductList] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams();

    useEffect(() => {
        setLoading(true);
        const productsCollection = collection(db, 'products');
        const refDoc = doc(productsCollection, productId);
        getDoc(refDoc)
            .then(result => {
                setProductList({
                    id: result.id,
                    ...result.data()
                });
            }
            )
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