import React, {useState, Fragment} from 'react'


const Contador = () => {
    
    
    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        //console.log("Hiciste Click")
        setNumero(numero + 1)
    }


    const restar = () => {
        //console.log("Hiciste Click")
        setNumero(numero - 1)
    }
    
    
    return (

            <Fragment>
                <h3>AGREGASTE AL CARRITO  {numero} PRODUCTOS</h3>
                <button onClick = {aumentar}>Agregar</button>
                <p></p>
                <button onClick = {restar}>Quitar</button>
            
               
            </Fragment>

    );
}

export default Contador;