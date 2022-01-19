import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Contact from "./components/Contact";
import React, { useState } from "react";
import About from "./components/About";
// import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import { Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#d5e0de";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#29221f";
    }
  };

  return (
    <>
      <Navbar
        togglemode={toggleMode}
        showAlert={showAlert}
        mode={mode}
        title="Textutils"
      />
      <Routes>
        <Route exact path="/" element={
          <TextForm
            mode={mode}
            showAlert={showAlert}
            alert={alert}
            heading="Enter Text Below"
          />
        }>
        </Route>
        <Route exact path="/about" element={
          <About mode={mode} />
        }>
        </Route>
        <Route exact path="/contact" element={
          <Contact mode={mode} />
        }>
        </Route>
      </Routes>
    </>
  );
}

export default App;
