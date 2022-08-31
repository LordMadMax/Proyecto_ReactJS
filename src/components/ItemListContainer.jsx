import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = (props) => {

  return (
    <div>
        
        <h1>BASSET HOUND</h1>
        {alert(props.saludo)}

        <ItemList />
        
    </div>
  )
}

export default ItemListContainer;