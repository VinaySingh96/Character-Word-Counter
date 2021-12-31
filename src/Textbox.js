import Button from "./Buttons"
import { useState } from "react"

export default function Textbox() {
  const [text,setText] = useState("Enter text here");
  const onChange = (event)=>{
    setText(event.target.value);
  }
  const toUpper =()=>{
    // console.log("To Uppercase clicked");
    setText(text.toUpperCase());
  }
  const toLower =()=>{
    // console.log("To Lowercase clicked");
    setText(text.toLowerCase());
  }
  let words=0;
  for(let i=0;i<text.length;i++)
  {
    if(text[i]==' ')
    words++;
  }
  words++;
  if(text.charAt(text.length-1)==' ')
  words--;
  if(text.length==0)
  words=0;
  
  return (
    <>
      <div className="container">
      <h3>Count word/Character in your Text</h3>
      <textarea className="form-control" value={text} onChange={onChange} id="myBox" rows="10" ></textarea>
      <button className="btn btn-primary my-3 " onClick={toUpper} >To Uppercase</button>
      <button className="btn btn-primary my-3 mx-3" onClick={toLower} >To Lowercase</button>
      <p>No. of Characters in the Text : {text.length}</p>
      <p>No. of Words in the Text : {words}</p>
      </div>
    </>
  )
}