import "./App.css";
import Navbar from './components/Navbar.js'
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Textutils" />
      <TextForm heading="Enter text to analyze" />
    </>
  );
}

export default App;
