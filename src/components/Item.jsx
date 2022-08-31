import React from 'react';

const Item = (props) => {
  return (
    <div className="col-12 col-md-4">
        <h1>CAT: {props.categoria} </h1>
        <h2>Articulo: {props.nombre} </h2>
        <img src={props.img} alt=""/>
        <h3>${props.precio} </h3>
        <p>Disponibles: {props.stock} </p>

    </div>
  )
}

export default Item;