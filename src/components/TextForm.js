import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("handleUpclick was clicked!");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success")
    }
    const onHandleChange = (event)=>{
        setText(event.target.value)
    }
    const clearText = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!","success")
    }
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value); 
        props.showAlert("Text has been Copied!","success")
    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success")
    }
    const[text, setText] = useState("");
    return (
        <>
        <div>
            <div className="container" style={{color: props.mode === "dark"? "white":"black"}}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" rows="8" onChange={onHandleChange} style={{backgroundColor : props.mode === "dark"? "gray":"white", color: props.mode === "dark"? "white":"black"}}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
                <div className="container" style={{color: props.mode === "dark"? "white" : "black"}}>
                    <h2 className="mt-3">Your Text Summary</h2>
                    <p>{text.split(" ").length} words and {text.length} characters.</p>
                    <p>{0.008 * text.split(" ").length} Minutes read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Enter something in to the textbox above to  preview here!"}</p>
                </div>
        </div>
        
        </>
    )
}
