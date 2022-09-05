import React from 'react'
import { useEffect , useState } from 'react';
import ItemDetail from './ItemDetail'
import JuguetePerro from '../img/Juguete Perro.jpg';


const producto = {id:10,
    nombre: "Juguete de Perros",
    precio: 1550,
    detalle: "Juguete para perros suave y con sonido de chillido, atractivo a los perros y de alta durabilidad.",
    categoria: "Juguetes de Mascotas",
    img: JuguetePerro,};


const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    useEffect(() => {
        const getData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(producto);
            }, 2000);
        });

        getData.then(res => setData(res));

        }, [])

        
  return (
    <ItemDetail data={data} />
  );
}

export default ItemDetailContainer