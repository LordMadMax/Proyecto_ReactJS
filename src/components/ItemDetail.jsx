import React from 'react'

const ItemDetail = ({data}) => {

  return (
        <div className="col-12 col-md-4">
            <h1>CAT: {data.categoria} </h1>
            <h2>Articulo: {data.nombre} </h2>
            <img src={data.img} alt=""/>
            <h3>${data.precio} </h3>
            <p>Detalle: {data.detalle} </p>
        </div>
    )
}

export default ItemDetail