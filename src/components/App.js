import React from 'react';
import NavBar from './nav-bar'

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
