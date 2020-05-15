import React from 'react'
import './index.css'
export default function Operators(props){
    const operators = ["+","-","*","%","="];
    function handleClick(e){
        props.parseOperation(e.target.value)
    }
    return(
        <div className = 'operators'>
            {operators.map(operator =>
                <button key = {operator} onClick = {handleClick} value = {operator}>
                    {operator}
                </button>  )}
        </div>
    )
}