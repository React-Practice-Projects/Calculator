import React,{Component} from 'react';
import './App.css'
import Operands from './components/operands'
import Operators from './components/operators'
class App extends Component {
  render(){
    return(
      <div className = 'container'>
        <div className = 'result-bar'>result</div>
        <div className = 'clear-bar'>clear</div>
        <Operands />
        <Operators />
      </div>
    )
  }
}
export default App;