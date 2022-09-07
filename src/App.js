import './App.css';
import './index.css' 
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const onAdd = (quantity) => {
    alert('Has añadido '+quantity+' unidades al carrito')

  }

  return (
    <div>
    
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
    
      <ItemCount
        initial={1} 
        stock={7}
        onAdd={onAdd}
      />
      
    </BrowserRouter>

    </div>
  );
}

export default App;
