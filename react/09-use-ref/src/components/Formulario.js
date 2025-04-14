import React, { useRef } from 'react'

const Formulario = () => {

  const nombreInput = useRef ()
  const apellidoInput = useRef ()
  const emailInput = useRef ()
  const micaja = useRef()

  const mostrar = e => {
    e.preventDefault();

    console.log(nombreInput.current.value)
    console.log(apellidoInput.current.value)
    console.log(emailInput.current.value)

    // caja
    console.log(micaja)
    let {current: caja} = micaja
    caja.classList.add("fondoverde")
    caja.innerHTML = "Formulario Enviado!"

  }

  return (
    <div>
      <h1>Formulario</h1>
      <div ref={micaja} className='micaja'>
        <h2> Pruebas con use Ref</h2>
      </div>
      <form onSubmit={mostrar}>
        <input type="text" placeholder="Nombre" ref={nombreInput}></input> <br/>
        <input type="text" placeholder="Apellido" ref={apellidoInput}></input><br/>
        <input typer="email" placeholder="Email" ref={emailInput}></input> <br/>
        <input type='submit' value="Enviar" />
      </form>
        <button onClick={() => nombreInput.current.select()}>Empezar a rellenar form</button>
    </div>
  )
}

export default Formulario
