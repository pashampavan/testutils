import React , {useState} from 'react'
export default function TextForm(props) {
  const [text ,setText]=useState('Enter text here');
  const handleUpClick=()=>{
    console.log("upp...")
    let t=text.toUpperCase();
    setText(t);
    props.showAlert("Converted to uppercase", "Sucess");
  }
  const handleLoClick=()=>{
    console.log("upp...")
    let t=text.toLowerCase();
    setText(t);
    props.showAlert("Converted to lowercase", "Sucess");
  }
  const handleOnChange=(event)=>{
    console.log("change..")
    setText(event.target.value)
  }
  const handleClear=()=>{
    setText('');
    props.showAlert("Cleared", "Sucess");
  }
  return (
    <>
    <div className="container my-auto" >
      <h1 style={{ color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey' , color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="area" rows="8"></textarea>
      </div>
      <button onClick={handleUpClick} className="btn btn-primary mx-1">convert to Upper case</button>
      <button onClick={handleLoClick} className="btn btn-primary mx-1">convert to lower case</button>
      <button onClick={handleClear} className="btn btn-primary mx-1">clear</button>
    <div className="container my-4" style={{ color:props.mode==='light'?'black':'white'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words   {text.length} charecters</p>
      <h2>Preview</h2>
      <p>{text.length > 0?text:"Enter text to preview"}</p>
    </div>
    </div>
    </>
  )
}