import React from 'react';
import Nav from './Components/Nav/Nav';
import router from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      {router}
    </div>
  );
}

export default App;
