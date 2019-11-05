import React from 'react'; 
const validation = (props)=>{
    let text = "Text too short"
    if (props.longitud > 5){
        text = "Text too long"
    }
    return (
        <div>
            <p>{text}</p>
        </div>
    )
}
export default validation;