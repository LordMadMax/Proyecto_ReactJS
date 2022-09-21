import React, { useEffect , useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const {categoryId} = useParams();


  useEffect(() =>{
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'productos');
      /* console.log(queryCollection); */
      if(categoryId) {
        const queryFilter = query(queryCollection, where('category', '==', categoryId))
        getDocs(queryFilter)
            .then(res => setData(res.docs.map(products => ({ id: products.id, ...products.data()}))))
      }
      else {
        getDocs(queryCollection)
            .then(res => setData(res.docs.map(products => ({ id: products.id, ...products.data()}))))
      }
    }, [categoryId]) 

  return (
    <div>
        
        <h1>BASSET HOUND</h1>
        
        <ItemList data={data} />
        
    </div>
  )
}

export default ItemListContainer;