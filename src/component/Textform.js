import React, { useState } from "react";

export default function Textform(props) {

    const handleUpperClick = () => { let newText = text.toUpperCase(); setText(newText) }
    const handleLowerClick = () => { let newText = text.toLowerCase(); setText(newText) }
    const handleClearClick = () => { setText("") }

    const handleOnChange = (event) => { setText(event.target.value); }

  const [text, setText] = useState("");
  

  return (
    <>
    <form style={{color: props.mode === 'dark'?'white':'black'}}>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea value={text} onChange={handleOnChange} className="form-control" id="exampleInputEmail1" rows={props.rows} 
        style={{backgroundColor: props.mode === 'dark'?'grey':'white' , color: props.mode === 'dark'?'white':'black'}} />
      </div>
      <div className="container">
      <button type="button" className="btn btn-primary mx-1" onClick={handleUpperClick}> Convert to Uppercase </button>
      <button type="button" className="btn btn-primary mx-1" onClick={handleLowerClick}> Convert to Lowercase </button>
      <button type="button" className="btn btn-primary mx-1" onClick={handleClearClick}> Clear text </button>
      </div>
    </form>
    <div style={{color: props.mode === 'dark'?'white':'black'}}>
    <h2 className="container mt-4">Your Text Summary</h2>
    <div className="container">{text.split(" ").length - 1} words and {text.length} characters.</div>
    <div className="container">{(text.split(" ").length - 1)*0.008 } minutes required to read.</div>
    <h2 className="container mt-4">Preview</h2>
    <p className="container">{text.length>0?text:"Enter Something"}</p>
    </div>
    </>
  );
}

Textform.propTypes = {
  heading: "propTypes.string",
  rows: "propTypes.integer",
};

Textform.defaultProps = {
  heading: "Enter Text",
  rows: 8,
};
