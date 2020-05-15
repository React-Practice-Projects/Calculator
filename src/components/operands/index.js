import React from 'react'
import './index.css'
export default function Operands(props) {
    function handleClick(e) {
        props.parseNumber(e.target.value)
    }
    return(
        <div className = 'operands'>
            {[...Array(9).keys()].map( num => {
                return (
                    <button 
                        value = {num+1} 
                        onClick = {handleClick}>
                        {num+1}
                    </button>
                )
            })}
        </div>
    )
}