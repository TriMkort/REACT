import React, { useEffect, useState } from 'react'

const Empelados = ({pagina = 1}) => {
    
    const [empleados, setEmpleados] = useState([]);

    useEffect (() => {
        conseguirEmpleados(pagina);
    }, []);
    
    const conseguirEmpleados = async(p) => {
        const url = "https://reqres.in/api/users?page="+p;
        const peticion = await fetch (url);
        const {data : empleados} = await peticion.json();

        setEmpleados(empleados);

        console.log("Se ejecuto la peticion Ajax")
    }
        console.log("Se ha vuelto a renderizar Empleados!!");
        return (
            <div>
                <p>Mostrando la pagina: {pagina}</p>
                <ul className="empleados">
                    {empleados.length >= 1 && empleados.map(empleado =>{
                        return <li key={empleado.id}>{empleado.first_name + "" + empleado.last_name}</li>
                    })}
                </ul>
            </div>
        );
    }

export default Empelados
