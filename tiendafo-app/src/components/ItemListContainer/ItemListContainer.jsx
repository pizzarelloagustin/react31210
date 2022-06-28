import './style.css'
import 'materialize-css/dist/css/materialize.min.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ greeting, onAdd }) => {
    return (
        <>
            <div className='landing'>
                <div>{greeting}</div>
            </div>
            <div class="row">
                <ItemCount stock={5} initial={1} onAdd={onAdd} name={"Producto 1"} price={200} />
                <ItemCount stock={0} initial={1} onAdd={onAdd} name={"Producto 2"} price={300} />
                <ItemCount stock={10} initial={1} onAdd={onAdd} name={"Producto 3"} price={400} />
            </div>
        </>
    );
};

export default ItemListContainer;