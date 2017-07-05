import React from 'react';
import NavBar from './nav-bar'

function App(props) {
  return (
    <div className="App">
      <NavBar />
      {props.routes}
    </div>
  );
}

export default App;
