import React from 'react';
import  '../stylesheets/series.css';

function Series(props) {
  return(
    <div className='contenedor-serie'>
      <img className='imagen-serie' 
      src={require(`../imgs/serie-${props.imagen}.jpg`)}
      alt='Img de DrHouse'/>
      <div className='contenedor-text-serie'>
        <p className='nombre-serie'>
         <strong>
          {props.nombre}
          </strong> 
          </p>
        <p className='ficha-tecnica'>Creator <span className='ficha'>"{props.ficha}"</span> </p>
        <p className='sipnosis'>
        {props.sinopsis}
        </p>
      </div>
    </div>

  );
}


export default Series; 