import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ListElement from './Components/ListElement';
import Create from './Components/Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/list" element={<ListElement />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
