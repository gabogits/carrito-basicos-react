import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto'
import Carrito from './components/Carrito'


function App() {

  //crear lisatdo de productos
  const [productos, guardarProductos] =useState([
    {id: 1, nombre: 'Camisa reactJS', precio:50},
    {id: 2, nombre: 'Camisa vueJS', precio:20},
    {id: 3, nombre: 'Camisa node.js', precio:30},
    {id: 4, nombre: 'Camisa Angular', precio:20},
  ]
  );

  //state para un carrito de compras

  const [carrito, agregarProducto] =useState([]);


  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header  titulo= 'Tienda virtual' numero={20} />
      <h1>Lista de productos</h1>
      {productos.map(producto =>(
        <Producto 
        key={producto.id}  
        productos={productos}
        producto={producto}
        carrito={carrito}
  
        agregarProducto={agregarProducto}
        />
      ))}
      <Carrito
       carrito={carrito}  
       agregarProducto={agregarProducto}/>
      <Footer fecha={fecha}  />
    </Fragment>
  );
}

//jsx mexclar codigo html con codigo js, e inclusive css

export default App;
