import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {first_num:0, second_num:0};
  }
  render()
  {
    var that = this;
    var solution = 0;
    return (
      <div>
          <input value={that.state.first_num} onChange={function(event){that.setState({first_num:event.target.value})}}></input>
          <input value={that.state.second_num} onChange={function(event){that.setState({second_num:event.target.value})}}></input>
        <br></br>
          <button onClick={function(){solution = that.state.first_num + that.state.second_num}}>
            +
          </button>
          <button onClick={function(){solution = that.state.first_num - that.state.second_num}}>
            -
          </button>
          <button onClick={function(){solution = that.state.first_num / that.state.second_num}}>
            /
          </button>
          <button onClick={function(){solution = that.state.first_num * that.state.second_num}}>
           *
         </button>
        <br></br>
          <button onClick={function(){alert(solution)}}>
            =
          </button>
      </div>);
  }
}
export default App;