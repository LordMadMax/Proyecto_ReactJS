import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import {CartContext} from './context/CartContext'
import ItemCart from './ItemCart'

const Cart = () => {

const {cart, totalPrice} = useContext(CartContext);

    if (cart.lenght === 0) {
        return (
            <div>
                <p>No hay ningún artículo en el carrito.</p>
                <Link to="/cart">Ir al carrito para ver los productos.</Link>
            </div>
             
        );
    }
    console.log(totalPrice);

  return (
    <div>
        {
            cart.map(productos => <ItemCart key={productos.id} productos={productos}/>)
        }
        <p>
            TOTAL: ${totalPrice()}
        </p>

    </div>
  )
}

export default Cart