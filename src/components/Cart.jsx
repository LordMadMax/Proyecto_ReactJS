import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext'
import { collection, getFirestore, addDoc} from 'firebase/firestore';
import ItemCart from './ItemCart'

const Cart = () => {

const {cart, totalPrice} = useContext(CartContext);

const order = {
    buyer: {
        name:'Maximiliano Cabrera',
        address:'18 de Julio 1234',
        phone: '025876331',
        email:'maxicabel07@gmail.com'
    },
        items: cart.map(products => ({id: products.id, nombre: products.nombre, quantity: products.quantity, precio: products.precio})),
        total: totalPrice(),

}

const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc (ordersCollection, order)
        .then(({id}) => console.log(id));
}

    if (cart.lenght === 0) {
        return (
            <>
                <p>No hay ningún artículo en el carrito.</p>
                <Link to="/cart">Ir al carrito para ver los productos.</Link>
            </>
             
        );
    }
    

  return (
    <div>
        {
            cart.map(productos => <ItemCart key={productos.id} productos={productos}/>)
        }
        <p>
            TOTAL: ${totalPrice()}
        </p>
        <button onClick={handleClick}>Emitir orden de compra</button>

    </div>
  )
}

export default Cart