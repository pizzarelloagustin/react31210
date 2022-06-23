import './style.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='landing'>
            <div>{greeting}</div>
        </div>
    );
};

export default ItemListContainer;