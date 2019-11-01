import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

//REACK Hooks
const app = props =>{
  
  const [personState, setPersonState] = useState({
    persons: [
      {name:"Erick", age:24},
      {name: "Pau", age:22}
    ]
  });
  const [otherState, setOtherState] = useState('Some value');

  console.log(personState, otherState);
  
  const switchNameHandle = () =>{
    //console.log("Heu")
    //DON'T DO THIS: this.state.persons[0].name = 'ErickL'
    setPersonState({//Sobre escribe el estado y borra todo lo anterior si no se ha hecho una referencia aqui
      persons: [
        {name:"Erick Fernando", age:25},
        {name: "Paula", age:22}
      ]
    })
  }
    return (
      //se debe de regresar en un solo elemento al root
      <div className="App">
        <h2>Hello World React!</h2>
        <button onClick={switchNameHandle}>Switch Name</button>
        
        <Person name={personState.persons[1].name} age={personState.persons[1].age} > My friend</Person>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      </div>
    );
    //Asi es como funciona es compilado jsx
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hola Erick'));
  
}

export default app;


