import React,{useState} from 'react';
import './App.css'
import Operands from './components/operands'
import Operators from './components/operators'
function App(props){
  const [result,setResult] = useState('')
  const [operator, setOperator] = useState(null)
  function parseNumber(num){
    setResult(result + String(num))
  }
  function parseOperation(op){
    if(op === '=') {
      let [op1, op2]= result.split(/[\+\-\*\%]/);
      [op1, op2] = [parseInt(op1),parseInt(op2)];
      if(!(isNaN(op1) || isNaN(op2))) {
        const operator_temp = operator;
        setOperator(null);
        switch(operator_temp) {
          case '+':
            setResult(String(parseInt(op1+op2)));
            break
          case '-':
            setResult(String(parseInt(op1-op2)));
            break
          case '*':
            setResult(String(parseInt(op1*op2)));
            break
          case '%':
            setResult(String(parseInt(op1/op2)));
            break
        }
      }
    }
    else {
      if(!operator) {
        setOperator(op);
        setResult(result+op);
      }
    }  
  }
  function handleClear() {
    const chars = ['+','-','*','%']
    if (chars.indexOf(result.slice(-1))!=-1) {
        setOperator(null)
    }
    setResult(result.slice(0,-1)) ;
  }
  return(
      <div className = 'container'>
        <div className = 'result-bar'>{result}</div>
        <button 
          className = 'clear-bar'
          onClick = {handleClear}>
            clear
        </button>
        <Operands parseNumber = {parseNumber}/>
        <Operators parseOperation = {parseOperation}/>
      </div>
  )
}
export default App;