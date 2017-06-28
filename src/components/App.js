import React from 'react';
import NavBar from './nav-bar'

function App(props) {
  return (
    <div className="App">
      <NavBar />
      {props.children}
    </div>
  );
}

export default App;
