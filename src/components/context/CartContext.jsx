import React from 'react'
/* import { useContext } from 'react'; */
import { createContext, useState} from 'react';

export const CartContext = createContext([]);

/* export const useCartContext = () => useContext(CartContext); */

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map(productos =>{
        return productos.id === item.id ? {...productos, quantity: productos.quantity + quantity} : productos
      }));
    } else {
      setCart([...cart, {...item, quantity}]);
    }
  } 

  const clear = () => setCart([]);

  const isInCart = (id) => cart.find(productos => productos.id === id) ? true : false;

  const removeItem = (id) => setCart(cart.filter(productos => productos.id !== id));

  const totalPrice = () => {
    let total=0;
    cart.forEach((productos) => {
      total += productos.quantity * productos.precio;
    });
  return total;
  }

  const totalProductos = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

  
return (
    <div>
      <CartContext.Provider value={{
        addItem,
        clear,
        isInCart,
        removeItem,
        totalPrice,
        totalProductos,
        cart,
      }}>

        {children}

      </CartContext.Provider>
        
    </div>
  )
}

export default CartProvider