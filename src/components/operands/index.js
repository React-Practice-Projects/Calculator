import React from 'react'
import './index.css'
export default function Operands(props) {
    function handleClick(e) {
        props.parseNumber(e.target.value)
    }
    return(
        <div className = 'operands'>
            {[...Array(10).keys()].map( num => {
                return (
                    <button 
                        key = {num}
                        value = {num} 
                        onClick = {handleClick}>
                        {num}
                    </button>
                )
            })}
        </div>
    )
}