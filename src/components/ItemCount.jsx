import React, {useState} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }


  return (

    <div>
        <div className='contador'>
            <button disabled={count >= (stock)} onClick={increase}>Agregar</button>
            <span>{count}</span>
            <button disabled={count <= 1} onClick={decrease}>Quitar</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)} >Agregar al carrito</button>
            </div>

        </div>

    </div>
  )
}

export default ItemCount