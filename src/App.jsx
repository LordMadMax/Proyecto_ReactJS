import './App.css';
import './index.css' 
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './components/context/CartContext'


function App() {

  return (
    <div>
    
    <BrowserRouter>
     <CartProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>

    </div>
  );
}

export default App;
