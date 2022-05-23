import React from 'react';
import NavbarComponent from './components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <ItemListContainer greeting="Coder House"/>
    </div>
  );
}

export default App;
