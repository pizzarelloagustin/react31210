import './App.css';
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
    </div>
  );
}

export default App;