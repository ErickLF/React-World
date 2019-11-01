import React from 'react';
import './UserOutput.css';

const userOuput = (props) =>{
    return(
        <div className="UserOutput">
            <p>Hola {props.user}, sabias que: </p>
            <p>Halloween (contracción del inglés All Hallows' 
                Eve, en español: «Víspera de Todos los Santos»), también 
                conocido como Noche de Brujas o Noche de Víspera de Difuntos, 
                es una celebración moderna resultado del sincretismo originado 
                por la cristianización de la 
                fiesta del fin de verano de origen celta llamada Samhain.
            </p>
            <p>Se celebra internacionalmente en la noche del 31 de octubre, 
                sobre todo en la angloesfera, como 
                Estados Unidos y en menor medida en otros 
                lugares como España e Iberoamérica.
            </p>
        </div>
    )
}

export default userOuput;