import { useState } from "react"

export default function Form(){
  let [fullName, setFullName] = useState("")

  let handleNameChange = (e) =>{
    setFullName(e.target.value);
  } 
  
  return(
    <form>
      <label htmlFor="userNmae">Full Name</label> 
      <br />
      <input placeholder="enter your name" type="text"  value={fullName} onChange={handleNameChange}  id="username"/><br/>
      <br />
      <br />
      <br />
      <button>Submit</button>
    </form>
  )
}