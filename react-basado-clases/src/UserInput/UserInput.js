import React from 'react';

const userInput = (props)=>{
    const style = {
        border: '3px solid red',
        width: '50%'
    }
    return(
        
        <input 
            style = {style}    
            type="text" 
            onChange={props.changed} 
            value={props.user} />
        
    )
}

export default userInput;