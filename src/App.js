import React from 'react'
import './website/dist/Fontawsome/fontawsome'
import './App.css';

// import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './website/home'
// import { Button, Alert } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <Home />
    // <Router>
    //   <Route path='/'><Home /></Route>
    // </Router>
  );
}

export default App;
