import React, {useContext} from 'react'
import {CartContext} from '../context/CartContext'

const ItemCart = ({productos}) => {

const {removeItem} = useContext(CartContext);
  return (
   
    <div className="cartItem">
            <h1>Cantidad: {productos.quantity} </h1>
            <h2>Articulo: {productos.nombre} </h2>
            <h3>${productos.precio} </h3>
            <p>Subtotal: ${productos.quantity * productos.precio}</p>
            <button onClick={() => removeItem(productos.id)}>Eliminar Artículo</button>
        </div>
  )
}

export default ItemCart