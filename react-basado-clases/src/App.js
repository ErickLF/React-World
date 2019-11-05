import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons:[
      {
        id:"xfg2", name:"Erick Fernando", age:25
      },
      {
        id:"2345", name:"Pau", age:23
      }
    ],
    showPerson:false,
    user:"Fernando"
  }
  switchNameHandle = (newName) =>{
    this.setState({
      persons:[
        {
          id:"xfg2", name:"Erick Fernando", age:25
        },
        {
          id:"2345", name:newName, age:23
        }
      ]
    })
  }

  nameChangedHandler = (event, id) =>{
    //obtenemos la persona con ese id
    const personIndex = this.state.persons.findIndex(p => {
      return p.id ===id
    })
    
    //hacemos una copia de la persona
    const person = {...this.state.persons[personIndex]}

    //actualizamos el valor de la persona
    person.name = event.target.value;
    //hacemos una copia del estado
    const persons = [...this.state.persons]
    //asignamos el valor
    persons[personIndex] = person;

    //event.target.value obtiene el valor del input
    this.setState({persons:persons})
  }
  togglePersonHandler = ()=>{
    let doesShowPerson = this.state.showPerson;
    this.setState({showPerson:!doesShowPerson});
  }

  userChangedHandler = (event) =>{
    this.setState({
      user:event.target.value
    })
  }

  deletePersonHandler = (indexPerson)=>{
    //const persons = this.state.persons;
    const persons = [...this.state.persons]//hacemos una copia para despues actualizar el estado
    persons.splice(indexPerson,1);
    this.setState({persons:persons});
  }
  render() {
    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid green',
      padding:'10px',
      cursor:'pointer'

    }
    let persons = null;

    if (this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map( (person,index) =>{
            return <Person 
              changed = {(event) => this.nameChangedHandler(event, person.id)}
              click={()=>this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}//Es importante para hacer mas eficiente la lista (al eliminar elementos, etc)
              />
          })}
            
            {/* Podemos usar bind para mandar llamar la funcion pero debemos pasar this, seguido de los parametros */}
            {/* <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}
            click={this.switchNameHandle.bind(this,"Pau")}
            >Hey hey hey</Person>
            */}
          </div>
      );
    }
    return (
      <div className="App">
        <h2>Hello World React</h2>
        {/* Cuando recibe parametos podemos usar una funcion anonima para que ejecute nuestro codigo al dar click */}
        <button style={style}
         onClick={this.togglePersonHandler} >toggle</button>
        {persons}
      </div>
    );
  }
}

export default App;
