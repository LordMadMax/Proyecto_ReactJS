import React from 'react'
import CartWidget from './CartWidget'


const navbar = () => {
  return (
    <div>

        <h1>VETERINARIA</h1>
        <div className="container__nav">
                <nav id="nav">
                    <ul>
                        <li><a href="https://www.google.com/" className="select">HOME</a></li>
                        <li><a href="https://www.google.com/">PEDIDOS</a></li>
                        <li><a href="https://www.google.com/">ADOPCIONES</a></li>
                        <li><a href="https://www.google.com/">CONTACTANOS</a></li>
                        <CartWidget />
                    </ul>
                    
                </nav>
                             
          </div>

    </div>
  )
}

export default navbar