import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {

    
    return(
        <>
            <h1>Hola {greeting}</h1>
            <ItemCount stock={0} initial={1} /> 
            {/*le paso por props el stock y el estado inicial, si agregan stock se va a ejecutar la funcion onAdd en el onClick*/ }
        </>
    )
}

export default ItemListContainer