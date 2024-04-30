import { useState } from "react"

export default function Form(){
  let [fullName, setFullName] = useState("")
  let [userName, setUserName] = useState("")

  let handleNameChange = (e) =>{
    setFullName(e.target.value);
  } 
  let handleUserName = (e) =>{
    setUserName(e.target.value);
  } 
  
  return(
    <form>
      <label htmlFor="fullName">Full Name</label> 
      <br />
      <input placeholder="enter your name" type="text"  value={fullName} onChange={handleNameChange}  id="fullName"/><br/>
      <br />
      <label htmlFor="username">user Name</label> 
      <br />
      <input placeholder="enter username" type="text"  value={userName} onChange={handleUserName}  id="username"/><br/>
      <br />
      <br />
      <br />
      <button>Submit</button>
    </form>
  )
}