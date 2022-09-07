import React from 'react'
import { useEffect , useState } from 'react';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
/* IMAGENES */
import RacionPerro from '../img/Racion Perro.jpg';
import RacionGato from '../img/Racion Gato.jpg';
import ArenaGato from '../img/Arena Gatos.jpg';
import JuguetePerro from '../img/Juguete Perro.jpg';
import Rascador from '../img/Rascador.jpg';
import Transportador from '../img/Transportador.jpeg';


const productos = [
    {
        id:1,
        nombre: "Racion de Perros 3kg.",
        precio: 550,
        stock: 7,
        category: "perros",
        img: RacionPerro,
    },
    {
        id:2,
        nombre: "Racion de Perros 7kg.",
        precio: 950,
        stock: 11,
        category: "perros",
        img: RacionPerro,
    },
    {
        id:3,
        nombre: "Racion de Perros 15kg.",
        precio: 1250,
        stock: 4,
        category: "perros",
        img: RacionPerro,
    },
    {
        id:4,
        nombre: "Racion de Gatos 3kg.",
        precio: 550,
        stock: 10,
        category: "gatos",
        img: RacionGato,
    },
    {
        id:5,
        nombre: "Racion de Gatos 7kg.",
        precio: 950,
        stock: 8,
        category: "gatos",
        img: RacionGato,
    },
    {
        id:6,
        nombre: "Racion de Gatos 15kg.",
        precio: 1250,
        stock: 6,
        category: "gatos",
        img: RacionGato,
    },
    {
        id:7,
        nombre: "Arena de Gatos 5kg.",
        precio: 690,
        stock: 10,
        category: "gatos",
        img: ArenaGato,
    },
    {
        id:8,
        nombre: "Arena de Gatos 15kg.",
        precio: 1290,
        stock: 13,
        category: "gatos",
        img: ArenaGato,
    },
    {
        id:9,
        nombre: "Arena de Gatos 25kg.",
        precio: 1990,
        stock: 8,
        category: "varios",
        img: ArenaGato,
    },
    {
        id:10,
        nombre: "Juguete de Perros",
        precio: 1550,
        stock: 20,
        category: "varios",
        img: JuguetePerro,
    },
    {
        id:11,
        nombre: "Rascador para Gatos",
        precio: 990,
        stock: 16,
        category: "varios",
        img: Rascador,
    },
    {
        id:12,
        nombre: "Transportador de Gatos",
        precio: 2550,
        stock: 14,
        category: "varios",
        img: Transportador,
    },
  ];


const ItemDetailContainer = () => {
    const [data, setData] = useState ({});
    const {itemId} = useParams();

    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getData.then(res => setData(res.find(productos => productos.id === parseInt(itemId))));

    }, [itemId])

        
  return (
    <ItemDetail data={data} />
  );
}

export default ItemDetailContainer