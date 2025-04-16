import React, {useState } from 'react'
import Empelados from './Empelados'

const Gestion = () => {
    const [nombre, setNombre] = useState('');
    const [pagina, setPagina] = useState(1);
    const asignarGestor = e => {
        setNombre (e.target.value)
    }
    // const gestorInput = useRef();

    // useEffect (() => {
    //     console.log("La vista se ha renderizado: ")
    // })

    console.log("Vista de cambio actualizada!!: ");
    return (
        <div>
            <h1>Nombre del gestor: {nombre}</h1>
            <input type='text'  onChange={asignarGestor} placeholder='Indroduce tu nombre de gestor'/>

            <h2>Listado de empleados:</h2>
            <p>Los usuarios gestionados por {nombre} vienen de jasonplacholder..</p>
            <button onClick={() => {setPagina(1)}}>Pagina 1</button> 
            <button onClick={() => {setPagina(2)}}>pagina 2</button>            
            <Empelados pagina={pagina}/>
        </div>
    )
}

export default Gestion
