
import { useState } from 'react';
import './App.css';
import Navbar from  './components/Navbar';
import TextForm from  './components/TextForm';
import Alert from  './components/Alert';
function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=(cls)=>
  {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.add('bg-'+cls)
    if(mode=== 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='rgb(17 30 46)';
      showAlert("Dark mode enabled", "Sucess");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled", "Sucess");
  
    }
  }
  const [alert , setAlert]=useState(null);
  const showAlert=(msg,type)=>
  {
    setAlert(
      {
        msg:msg,
        type:type
      }
    )
    setTimeout(()=>{
      setAlert(
        null
      )
    },2000)
  }
  return (
    <>

        <Navbar title="pavan" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
        <Alert alert={alert} />
        <div className="container my-5">
            <TextForm heading="Enter text to analyse" showAlert={showAlert} mode={mode}/>
         </div>
         
          
            
                   
        
              
            


    </>
    
  );
}

export  default  App;
