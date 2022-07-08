import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import getData from '../../moks/fakeApi'
import './style.css'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting, onAdd }) => {

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)
        getData(categoryId)
            .then((result) => setProductList(result))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId])

    return (
        <>
            <div className='landing'>
                <div>{greeting}</div>
            </div>
            <div>
                {loading ? <Loader /> : <ItemList productList={productList} onAdd={onAdd} />}
            </div>
        </>
    );
};

export default ItemListContainer;