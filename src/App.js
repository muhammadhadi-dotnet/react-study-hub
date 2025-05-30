import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ListElement from './Components/ListElement';

function App() {
  return (
    <>
        <Navbar />
        <Home/>
        <div className="container">
            <h1 className="text-center my-5">List of Items</h1>
            <ListElement />
        </div>    
    </>
  );
}

export default App;
