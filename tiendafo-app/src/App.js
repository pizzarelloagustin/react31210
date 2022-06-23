import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Esto es TIENDAFO"} />
    </div>
  );
}

export default App;
