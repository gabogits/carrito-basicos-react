import React from 'react';

function Header ({titulo}) {
    const edad = 18;
    return (
        <h1>Desde el header {edad}  {titulo}</h1> //esto entre llaves {edad} lo interpreta como codigo javascript por eso lee la variable
    )
}

export default Header;