import "./App.css";
import Navbar from './components/Navbar.js'
import TextForm from "./components/TextForm.js";
import React, { useState } from 'react'

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = "#d5e0de";
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = "#29221f";
    }
  }

  return (
    <>
      <Navbar togglemode={toggleMode} mode={mode} title="Textutils" />
      <TextForm mode={mode} heading="Enter Text Below" />
    </>
  );
}

export default App;