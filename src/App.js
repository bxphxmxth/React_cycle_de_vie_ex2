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
    
    return (
      <div className="App">
        {/* <p>Il est {this.state.dateCourante}</p> */}
        <p>{jour}/{cMonth}/{cYear}</p>
  
      </div>
    );
  }
}

export default App;
