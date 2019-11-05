import React from 'react';

const charcomponet = (props)=>{
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin:'16px', 
        border:'1px solid black',
        textAling:'center', 
    }
    return(
        <div style={style} onClick={props.click} >
            <p>
                {props.letter}
            </p>
        </div>
    )
}

export default charcomponet;