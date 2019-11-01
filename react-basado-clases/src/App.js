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
  switchNameHandle = () =>{
    this.setState({
      persons:[
        {
          name:"Erick Fernando", age:25
        },
        {
          name:"Paula Londra", age:23
        }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h2>Hello World React</h2>
        <button onClick={this.switchNameHandle} >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hey hey hey</Person>

      </div>
    );
  }
}

export default App;
