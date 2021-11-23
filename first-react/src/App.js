import React from 'react';
import "./index.css"
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { Button,Alert } from 'react-bootstrap';
function App() {
  return (
    <div className="container">
      <h1><i className="fa fa-address-card"></i>Hello from react</h1>
      <Alert variant="success">My alert</Alert>
      <p>lorem</p>
      <Button variant="primary" >button</Button>
    </div>
  );
}

export default App;
