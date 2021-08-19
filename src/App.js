import "./App.css";
import Navbar from './components/Navbar.js'
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Textutils" />
      <TextForm heading="Enter Text Below" />
    </>
  );
}

export default App;
