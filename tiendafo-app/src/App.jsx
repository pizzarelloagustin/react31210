import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {

  const onAdd = (cartItems) => {
    console.log(cartItems)
  }

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Esto es TIENDAFO"} onAdd={onAdd} />
      <ItemDetailContainer onAdd={onAdd} />
    </div>
  );
}

export default App;