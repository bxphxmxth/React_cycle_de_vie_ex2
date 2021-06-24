import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  state = {
    dateCourante : new Date()
  }

  render(){

    let jour = this.state.dateCourante.getDate();
    let cMonth =this.state.dateCourante.getMonth() + 1;
    let cYear =this.state.dateCourante.getFullYear();
    // {this.state.dateCourante.getDate()}/{this.state.dateCourante.getMonth()+1}/{this.state.dateCourante.getFullYear()}
    let time = this.state.dateCourante.getHours() + ":" + this.state.dateCourante.getMinutes() + ":" + this.state.dateCourante.getSeconds();

    
    return (
      <div className="App">
        {/* <p>Il est {this.state.dateCourante}</p> */}
        <p>il est {time}</p>
  
      </div>
    );
  }
}

export default App;
