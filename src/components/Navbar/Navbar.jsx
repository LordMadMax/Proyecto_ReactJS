import React from 'react'



const navbar = () => {
  return (
    <div>

        <h1>VETERINARIA BASSET</h1>
        <div className="container__nav">
                <nav id="nav">
                    <ul>
                        <li><a href="https://www.google.com/" className="select">HOME</a></li>
                        <li><a href="https://www.google.com/">PEDIDOS</a></li>
                        <li><a href="https://www.google.com/">ADOPCIONES</a></li>
                        <li><a href="https://www.google.com/">CONTACTANOS</a></li>
                    </ul>
                </nav>
                <div className="btn__menu" id="btn_menu"><i className="fas fa-bars"></i></div>
            </div>


    </div>
  )
}

export default navbar