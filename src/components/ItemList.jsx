import React, { useEffect, useState } from 'react';
import Item from './Item';
import RacionPerro from '../img/Racion Perro.jpg';
import RacionGato from '../img/Racion Gato.jpg';
import ArenaGato from '../img/Arena Gatos.jpg';
import JuguetePerro from '../img/Juguete Perro.jpg';
import Rascador from '../img/Rascador.jpg';
import Transportador from '../img/Transportador.jpeg';


const ItemList = () => {
   
      
    const [itemList, setItemList] = useState ([
        {
            id:1,
            nombre: "Racion de Perros 3kg.",
            precio: 550,
            stock: 7,
            categoria: "Comida Perros",
            img: RacionPerro,
        },
        {
            id:2,
            nombre: "Racion de Perros 7kg.",
            precio: 950,
            stock: 11,
            categoria: "Comida Perros",
            img: RacionPerro,
        },
        {
            id:3,
            nombre: "Racion de Perros 15kg.",
            precio: 1250,
            stock: 4,
            categoria: "Comida Perros",
            img: RacionPerro,
        },
        {
            id:4,
            nombre: "Racion de Gatos 3kg.",
            precio: 550,
            stock: 10,
            categoria: "Comida Gatos",
            img: RacionGato,
        },
        {
            id:5,
            nombre: "Racion de Gatos 7kg.",
            precio: 950,
            stock: 8,
            categoria: "Comida Gatos",
            img: RacionGato,
        },
        {
            id:6,
            nombre: "Racion de Gatos 15kg.",
            precio: 1250,
            stock: 6,
            categoria: "Comida Gatos",
            img: RacionGato,
        },
        {
            id:7,
            nombre: "Arena de Gatos 5kg.",
            precio: 690,
            stock: 10,
            categoria: "Arena de Gatos",
            img: ArenaGato,
        },
        {
            id:8,
            nombre: "Arena de Gatos 15kg.",
            precio: 1290,
            stock: 13,
            categoria: "Arena de Gatos",
            img: ArenaGato,
        },
        {
            id:9,
            nombre: "Arena de Gatos 25kg.",
            precio: 1990,
            stock: 8,
            categoria: "Arena de Gatos",
            img: ArenaGato,
        },
        {
            id:10,
            nombre: "Juguete de Perros",
            precio: 1550,
            stock: 20,
            categoria: "Juguetes de Mascotas",
            img: JuguetePerro,
        },
        {
            id:11,
            nombre: "Rascador para Gatos",
            precio: 990,
            stock: 16,
            categoria: "Juguetes de Mascotas",
            img: Rascador,
        },
        {
            id:12,
            nombre: "Transportador de Gatos",
            precio: 2550,
            stock: 14,
            categoria: "Transportadores",
            img: Transportador,
        },


    ]);

    useEffect(() =>{
        const getItem = new Promise ((res, rej) => {
            setTimeout (() =>{
                res(Item);
            }, 2000)
    
        });
        
    
            getItem.then((data) =>{
                setItemList(data);
            })
            .catch((error) =>{
                console.log(error);
            })
            .finally(() =>{
                console.log('Renderizado correctamente')
            })
           
    });
            
  return (
    <div className="row">
        {itemList.map(item => {
            return (
                <Item 
                key={item.id}
                categoria={item.categoria}
                nombre={item.nombre}
                img={item.img}
                precio={item.precio}
                stock={item.stock}
                />    
            )


        } )

        }


    </div>
  )
}

export default ItemList;