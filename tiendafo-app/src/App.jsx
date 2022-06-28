import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {

  var cartItems = 0;

  const onAdd = (count) => {
    cartItems = cartItems + count;
    console.log("app");
    console.log(cartItems)
  }

  return (
    <div>
      <NavBar cartItems={cartItems} />
      <ItemListContainer greeting={"Esto es TIENDAFO"} onAdd={onAdd} />
    </div>
  );
}

export default App;