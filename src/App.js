import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css' 
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {

  const onAdd = (quantity) => {
    alert('Has añadido '+quantity+' unidades al carrito')

  }

  return (
    <div>

    
      <Navbar />

      <ItemListContainer 
        saludo="Bienvenidos a nuestro Carrito de Compras"
      />

      <ItemCount
        initial={1} 
        stock={7}
        onAdd={onAdd}
      />
    

    </div>
  );
}

export default App;
