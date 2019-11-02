import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons:[
      {
        name:"Erick", age:24
      },
      {
        name:"Paula", age:22
      }
    ],
    showPerson:false,
    user:"Fernando"
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

  nameChangedHandler = (event) =>{
    //event.target.value obtiene el valor del input
    this.setState({
      persons:[
        {name:"Erick", age:25},
        {name:event.target.value, age:22}
      ]
    })
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
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}>
            
            </Person>
            {/* Podemos usar bind para mandar llamar la funcion pero debemos pasar this, seguido de los parametros */}
            <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}
            click={this.switchNameHandle.bind(this,"Pau")}
            >Hey hey hey</Person>
            <UserInput 
            changed = {this.userChangedHandler}
            //changed ={this.userChangedHandler.bind()}
            user = {this.state.user}
            />
            <UserOutput
            user={this.state.user}
            />
            <UserOutput
            />
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
