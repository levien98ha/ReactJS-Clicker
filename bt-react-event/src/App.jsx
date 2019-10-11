import React, {Component} from 'react';
import './App.css';
import ReactClicker from './react-clicker.png'
import ResetImg from './reset-icon-5.jpg'
import PropTypes from 'prop-types';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            valueNumber: props.valueNumber,
        }
    }
onClickIncrease = () =>{
    this.setState((prevState) => ({
        valueNumber: prevState.valueNumber + 1
    }));
}
onClickDecrease = () =>{
    this.setState((prevState) => ({
        valueNumber: prevState.valueNumber - 1
    }));
}
onClickReset = () =>{
    this.setState((prevState) => ({
        valueNumber: prevState.valueNumber * 0
    }));
}
render(){
  return (
    <div className="App">
        <img src={ReactClicker} alt="Title" className="titleImg"></img>
        <div className="formClick">
            <p className="result">{this.state.valueNumber}</p>
            <div className="buttonClick">
                <input type="button" className="increase" value="+" onClick={this.onClickIncrease}></input>
                <input type="image" src={ResetImg} alt="resetButton" className="resetButton" onClick={this.onClickReset}></input>
                <input type="button" className="decrease" value="-" onClick={this.onClickDecrease}></input>
            </div>
        </div>
    </div>
  );
}}

App.defaultProps = {
    valueNumber: 0
  };
App.propTypes = {
    valueNumber: PropTypes.number
  };
export default App;
