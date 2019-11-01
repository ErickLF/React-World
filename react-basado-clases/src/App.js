import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {
        name:"Erick", age:24
      },
      {
        name:"Paula", age:22
      }
    ]
  }
  switchNameHandle = (newName) =>{
    this.setState({
      persons:[
        {
          name:"Erick Fernando", age:25
        },
        {
          name:newName, age:23
        }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h2>Hello World React</h2>
        {/* Cuando recibe parametos podemos usar una funcion anonima para que ejecute nuestro codigo al dar click */}
        <button onClick={()=> this.switchNameHandle('Paula!!')} >Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}>

        </Person>
        {/* Podemos usar bind para mandar llamar la funcion pero debemos pasar this, seguido de los parametros */}
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandle.bind(this,"Pau")}
        >Hey hey hey</Person>

      </div>
    );
  }
}

export default App;
