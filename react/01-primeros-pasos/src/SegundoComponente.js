import React from 'react'

const SegundoComponente = () => {

    const libros = ["Padre Rico", "Mentalidad Estoica", "Poder Subconciente"];
    // const libros = []
    return (
        <div>
            <h1>Segundo Componente</h1>
            <h2>Listado de libros</h2>
            {libros.length >= 1 ? (
                <ul>
                        {
                            libros.map((libro, indice) => {
                                return <li key={indice}>{libro}</li>;
                            })
                        }
                </ul>)
                : (<p>No hay libros</p>)
            }
        </div>
    )
}

export default SegundoComponente
