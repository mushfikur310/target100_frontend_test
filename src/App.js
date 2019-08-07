import React from "react";
import logo from "./logo.svg";
import image from "./target.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <p style={{color:"#596275"}}>Oops.!! You are in right place, but we are under construction.</p>
        <p style={{fontWeight:"500", color:"rgb(104, 131, 115)"}}> <i className="fa fa-graduation-cap"></i>&nbsp;&nbsp;Keep Learning...</p>
        
      </header>
    </div>
  );
}

export default App;
