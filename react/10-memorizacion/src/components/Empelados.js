import React, { useEffect, useState } from 'react'

const Empelados = React.memo(
    ({pagina, mensaje}) => {
    
        const [empleados, setEmpleados] = useState([]);

        useEffect(() => {
            console.log("Se ha vuelto a renderizar Empleados!!");
        },[empleados]);
        
        const conseguirEmpleados = async(p) => {
            const url = "https://reqres.in/api/users?page="+p;
            const peticion = await fetch (url);
            const {data : empleados} = await peticion.json();

            setEmpleados(empleados)
        }

        useEffect (() => {
            conseguirEmpleados(pagina);
        }, [pagina]);

        mensaje()

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
    );

export default Empelados
