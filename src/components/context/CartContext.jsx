import React from 'react'
import { createContext, useState} from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const clear = () => setCart([]);

  const isInCart = (id) => {
    return cart.find(productos => productos.id === id) ? true:false;
  }

  const removeItem = (id) => setCart(cart.filter(productos => productos.id !== id));

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map(productos =>{
        return productos.id === item.id ? {...productos, quantity: productos.quantity + quantity} : productos
      }));
    } else {
      setCart([...cart, {...item, quantity}]);
    }
  } 

return (
    <div>
      <CartContext.Provider value={{
        cart,
        clear,
        addItem,
        removeItem,
        isInCart
      }}>

        {children}

      </CartContext.Provider>
        
    </div>
  )
}

export default CartProvider