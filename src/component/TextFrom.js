import React, {useState} from 'react';

export default function TextFrom(props) {
    var[text, setText] = useState("");
    var buttonClicked = ()=>{
        var newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase", "success");
    }
    var changed = (event)=>{
        setText(event.target.value);
    }
    var lower = ()=>{
        var lowText = text.toLowerCase();
        setText(lowText);
        props.showAlert("Converted To LowerCase", "success");
    }
    var clearText = ()=>{
      setText(" ");
      props.showAlert("Cleared text", "success");
    }
    var removeExtraSpaces = ()=>{
      var newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed extra spaces", "success");
    }
    var copyText = ()=>{
      var sameText = document.getElementById("myBox");
      // sameText.select();
      navigator.clipboard.writeText(sameText.value);
      props.showAlert("text got copied to clip Board", "success");
      
    }
  return (
    <>
    <div className="container" style={{backgroundColor: props.mode==='dark'?'#042743':'white'}}>
      <h1 className="my-3">{props.heading}</h1>
      
      <div className="mb-3">
        <textarea id="myBox" style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode === 'dark'?'white':'black'}} rows="8" value={text} onChange={changed} className="form-control"></textarea>
        <button disabled={text.length===0} className="btn btn-primary" onClick={buttonClicked} >Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={lower}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={clearText}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={copyText}>Copy Text</button>

      </div>
    </div>
    <div className="container">
        <h1>Your Text Summary</h1>
        <p>Your text has {text.split(" ").filter((element) => { return element.length!==0}).length} world and {text.length} characters</p>
        <p>This can be read in {0.008 * text.split(" ").filter((element) => { return element.length!==0}).length}</p>
        <h2>{text.length>0?text:"Enter text to preview"}</h2>
        {/* <p>{text}</p> */}
    </div>
    </>
  );
}
