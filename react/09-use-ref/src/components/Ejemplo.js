import React, { useEffect, useRef, useState } from 'react'

const Ejemplo = () => {

    const [saludosEnviados, setsaludosEnviados] = useState(0);
    const saludosEnCola = useRef(saludosEnviados);

    useEffect(() =>{
        saludosEnCola.current = saludosEnviados;
        setTimeout(()=>{
            console.log("SALUDOS EN COLA: " +saludosEnCola.current);
        },2000)
    },[saludosEnviados])

    const saludo = () => {
        setsaludosEnviados(saludosEnviados + 1)
    }

    return (
        <div>
        <h1>Ejemplo con use ref</h1>
        <h2>Saludos enviados {saludosEnviados}</h2>
        <button onClick={saludo}>Enviar Saludos</button>
        <hr/>
        </div>
    )
}

export default Ejemplo
