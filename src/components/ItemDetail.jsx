import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../components/ItemCount'

const ItemDetail = ({data}) => {

    const [irAlCart, setIrAlCart] = useState(false);

    const onAdd = (quantity) => {
        setIrAlCart(true);
    }
    
return (
        <div className="col-12 col-md-4">
            <h1>CAT: {data.categoria} </h1>
            <h2>Articulo: {data.nombre} </h2>
            <img src={data.img} alt=""/>
            <h3>${data.precio} </h3>
            <p>Detalle: {data.detalle} </p>
            {
                irAlCart 
                ? <Link to='/cart'>Finalizar compra</Link>
                : <ItemCount
                initial={1} 
                stock={7}
                onAdd={onAdd}
            />
            }
        </div>
    )
}

export default ItemDetail