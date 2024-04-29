import { useState } from "react"

export default function Form(){
  let [fullName, setFullName] = useState("")
  return(
    <form>
      <input placeholder="enter your name" type="text"  value={fullName}/>
      <br />
      <button>Submit</button>
    </form>
  )
}