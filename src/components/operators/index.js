import React from 'react'
import './index.css'
export default function Operators(props){
    const operators = ["+","-","x","%","="];
    function handleClick(e){
        props.parseOperation(e.target.value)
    }
    return(
        <div className = 'operators'>
            {operators.map(operator =>
                <button onClick = {handleClick}>
                    {operator}
                </button>  )}
        </div>
    )
}