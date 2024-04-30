import { useState } from "react"

export default function Form(){
  let [fullName, setFullName] = useState("")

  let handleNameChange = (e) =>{
    setFullName(e.target.value);
  } 
  
  return(
    <form>
      <input placeholder="enter your name" type="text"  value={fullName} onChange={handleNameChange}/>
      <br />
      <br />
      <br />
      <button>Submit</button>
    </form>
  )
}