import React from 'react';
import PropTypes from 'prop-types';

const TercerComponente = ({nombre, apellido, ficha}) => {

    return (
      <div className="Tercer-Componente">
        <h1>Tercer Componente</h1>
        <h2>Comuniciacion entre componentes</h2>
          
        <ul>
          <li>{nombre}</li>
          <li>{apellido}</li>
          <li>{ficha.estado}</li>
          <li>{ficha.grupo}</li>
          <li>{ficha.alergias}</li>
          <li>{ficha.altura}</li>
        </ul>
      </div>
      )    
    }
    
        TercerComponente.propTypes = {
          nombre: PropTypes.string.isRequired,
          apellido: PropTypes.string.isRequired,
          ficha: PropTypes.object
        };

        TercerComponente.defaultProps ={
          nombre: "Stiven",
          apellido: "Garzon"
        }

    

export default TercerComponente;