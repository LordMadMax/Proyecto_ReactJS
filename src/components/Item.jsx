import React from 'react';
import { Link } from 'react-router-dom';


const Item = ( {info} ) => {

  

  return (
    <Link to={`/item/${info.id}`}>
      <div className="col-12 col-md-4">

          <h1>CAT: {info.categoria} </h1>
          <h2>Articulo: {info.nombre} </h2>
          <img src={info.img} alt=""/>
          <h3>${info.precio} </h3>
          <p>Disponibles: {info.stock} </p>

      </div>
    </Link>
  )
}

export default Item;