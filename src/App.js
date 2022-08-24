import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css' 
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div>

    
      <Navbar />

      <ItemListContainer 
        saludo="Bienvenidos a nuestro Carrito de Compras"
      />
    

    </div>
  );
}

export default App;
