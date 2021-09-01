import React, {useState} from 'react'
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
function App() {
  const [mode, setMode] = useState("light"); //shows wheter dark mode is enabled or not
  const [alert, setalert] = useState(null)// Alert state
  const showAlert =(message, type)=>{
    setalert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setalert("null")
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
  
 
    <>
  <Navbar title="TextUtils" abouttext="About TextUtils"  mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert} />

            

  <div className="container my-4">
  <TextForm showAlert={showAlert} heading="Enter the text to anylize below" mode={mode}/>
  </div>
  </>
 

  );
}

export default App;
