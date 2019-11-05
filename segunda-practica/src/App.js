import React, {Component} from 'react';
import './App.css';
import ValidationComponet from './ValidationComponet/ValidationComponet';
import CharComponent from './CharComponet/CharComponet';

class App extends Component{

  state = {
    text:""
  }

  nameChangeHandler = (event) =>{
    this.setState({text:event.target.value})
  }
  deleteCharHandler = (indexLetter)=>{
    const textChar = this.state.text.split('')
    textChar.splice(indexLetter,1)
    const updateText = textChar.join('');
    this.setState({text:updateText});
  }
  render(){
    const charlist = this.state.text.split('').map( (item,index) =>{
      return <CharComponent 
      click={()=> this.deleteCharHandler(index)}
      letter={item} 
      key={index}/>
    })

     return (
    <div className="App">
      
        <p>
        1. Create an input field (in App Componet) with a change listener which output the length of the entredtetxt below it.
        </p>
        <p>
        2. Create a new Componet ( ValidationComponet) which recives the text length as a prop 
        </p>
        <p>
          3. Inside the ValidationComponet, either output "Text too short" or "Text too long enough" depending of the text length
        </p>
        <p>
          4. Create another Componet (CharComponent) and style it as an inline box (display: inline-block, padding: 16px, text-aling:center, margin:16px, border:1px, solid)
        </p>
        <p>
          5. Render a list of CharComponent where each CharComponent recives a diferent letter of the entred text as a prop
        </p>
        <p>
          6. When you click a CharComponent, it should be removed from the entred text
        </p>
        <hr/>
        <div>
          <input type="text" onChange={this.nameChangeHandler} value ={this.state.text} />
          <p>{this.state.text}</p>
          <ValidationComponet longitud={this.state.text.length}/>
          {charlist}
        </div>
    </div>
  );
  }
}

export default App;
