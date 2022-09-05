import './App.css';
import './index.css' 
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  const onAdd = (quantity) => {
    alert('Has añadido '+quantity+' unidades al carrito')

  }

  return (
    <div>

    
      <Navbar />

      <ItemDetailContainer />

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
