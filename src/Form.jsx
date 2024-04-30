import { useState } from "react"

export default function Form(){
  let [fullName, setFullName] = useState("")

  let handleNameChange = (e) =>{
    setFullName(e.target.value);
  } 
  
  return(
    <form>
      <label htmlFor="userName">Full Name</label> 
      <br />
      <input placeholder="enter your name" type="text"  value={fullName} onChange={handleNameChange}  id="username"/><br/>
      <br />
      <label htmlFor="username">user Name</label> 
      <br />
      <input placeholder="enter username" type="text"  value={fullName} onChange={handleNameChange}  id="username"/><br/>
      <br />
      <br />
      <br />
      <button>Submit</button>
    </form>
  )
}