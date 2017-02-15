import React from 'react';
import '../App.css';
import NavBar from './NavBar'

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}

export default App;
