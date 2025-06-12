import React, { useMemo, useState } from 'react'

const Tareas = () => {

    const [tareas, setTareas] = useState ([]);
    const [contador, setContador] = useState (100);
    const guardarTareas = (e) => {
        e.preventDefault();
        let tareas_actualizadas = [...tareas, e.target.descripcion.value]
        setTareas (tareas_actualizadas)
    }
    const borrarTarea = (id) => {
        // Filtrar la tarea que quiero borrar
        let nuevas_tareas = tareas.filter((tareas, indice) => indice !== id);

            console.log(nuevas_tareas)

        // Actualziar el set Tareas

        setTareas (nuevas_tareas)
    }

    const sumarAlContador = e => {
        setContador (contador + 1)
    }

    const contadorPasado = (acumulacion) => {

        for (let i = 0; i <= acumulacion; i++) {
            console.log("Cargando contadores pasados")
        }
        
        return `Contador manual de tareas: ${acumulacion}`;
    }
    
    const contadorMemo = useMemo (() => contadorPasado(contador),[contador])

    return (
        <div className='tareas-container'>
            <h1>Mis tareas</h1>
            <form onSubmit={guardarTareas}>
                <input type='text' name="descripcion" placeholder='Nombre de la tarea'></input>
                <input type='submit' value={"Guardar"} ></input>
            </form>
            <h3>{contadorPasado(contador)}</h3>
            <button onClick={sumarAlContador}>Sumar</button>  
            <h3>Lista de tareas</h3>
            <ul>
                {tareas.map ((tarea, indice) => {
                    return (
                        <li key={indice}>
                            {tarea}
                            &nbsp;
                            <button onClick={() => borrarTarea(indice)}>x</button>
                        </li>
                    )
                    })
                }
            </ul>
        </div>
    )
}

export default Tareas
