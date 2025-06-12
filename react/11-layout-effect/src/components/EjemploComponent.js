import React, { useEffect, useLayoutEffect, useState } from 'react'

const EjemploComponent = () => {

    const [mostrar, setMostrar] = useState(true);

    useLayoutEffect(() => {
        console.log('UseLayoutEffect: Componente cargado');
        // let caja = document.querySelector("#caja");
        // console.log(caja.getBoundingClientRect());
        // caja.innerHTML = "Hola, soy una caja";
        // Aquí podrías realizar operaciones que necesiten medir el DOM o manipularlo antes de que se pinte en pantalla.
    }, [])

    useEffect(() => {
        console.log('UseEffect: Componente cargado');
        //     let caja = document.querySelector("#caja");
        // console.log(caja.getBoundingClientRect());
        // caja.innerHTML = "Hola, soy una caja2";
        // Aquí podrías realizar operaciones que no necesitan medir el DOM o manipularlo después de que se haya pintado en pantalla.
    }, [])

    return (
        <div>
            <h1>Ejemplo useEffect y useLayoutEffect</h1>
            <button onClick={() => setMostrar(!mostrar)}>
                Mostrar mensaje
            </button>
                console.log(mostrar);
                return mostrar
            {mostrar && (
                <div id='caja'>
                    Hola, soy un mensaje  
                </div>
            )}
        </div>
    )
}

export default EjemploComponent
