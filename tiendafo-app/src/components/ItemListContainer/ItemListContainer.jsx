import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './style.css'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const productsCollection = collection(db, 'products');
        console.log(productsCollection)
        let auxCollection = productsCollection
        if (categoryId !== undefined) {
            auxCollection = query(productsCollection, where('category', '==', categoryId));
            console.log(auxCollection)
        }
        getDocs(auxCollection)
            .then(result => {
                const list = result.docs.map(product => {
                    return {
                        id: product.id,
                        ...product.data(),
                    }
                });
                setProductList(list);
            }
            )
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId])

    return (
        <>
            <div className='landing'>
                <div>{greeting}</div>
            </div>
            <div>
                {loading ? <Loader /> : <ItemList productList={productList} />}
            </div>
        </>
    );
};

export default ItemListContainer;