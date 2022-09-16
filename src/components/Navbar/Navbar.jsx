import React from 'react'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom';


const navbar = () => {
  return (
    <div>

        <h1>VETERINARIA</h1>
        <div className="container__nav">
                <nav id="nav">
                    <ul>
                        <li><Link to="/" className="select">HOME</Link></li>
                        <li><Link to="/category/perros">PERROS</Link></li>
                        <li><Link to="/category/gatos">GATOS</Link></li>
                        <li><Link to="/category/varios">VARIOS</Link></li>
                        <Link to="/cart"><CartWidget /></Link>
                    </ul>
                    
                </nav>
                             
          </div>

    </div>
  )
}

export default navbar