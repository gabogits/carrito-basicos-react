import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {
    const {nombre, precio, id} = producto;
    //agregra producto al carrito

    const seleccionaProducto = (id) => {
        console.log('comprando.. ', id)
        const producto  = productos.filter(producto => producto.id === id )[0];
        console.log(producto);  
        agregarProducto([
            ...carrito,
            producto
           ] )
    }

    //elimina un producto del carrito

    const eliminarProducto = (id) =>{
        const producto  = carrito.filter(producto => producto.id !== id );
         //colocar los productos en el state
        agregarProducto(producto )
    }
    return (  
    <div> 
        { nombre } 
        <p> {precio }</p>
        {productos ? 
        ( 
            <button 
            type="button"
            onClick={()=>  seleccionaProducto(id)}> 
            Comprar 
            </button>
        ): 
        (
            <button 
            type="button"
            onClick={()=>  eliminarProducto(id)}> 
            Eliminar  
            </button>
        )}
    </div>);
}
//el state de productos tiene un array de productos cuando este se ocupa en el componente App, ya este le pasa esa prop, pero cuando este se ocupa en el componente carrito no existe la props producto
//en este caso existe un array vacio
//aunque sea el mismo componente estamos pasando diferentes valores desde el padre



// onClick={()=>  seleccionaProducto()}>  ()=> esto espera que el usuario de click para que se ejecute la acción
export default Producto;