import { useState } from "react"

export default function Form(){
  let [formData, setFormData] = useState({
    fullName: "",
    userName:  ""
  })
  

  // let handleNameChange = (e) =>{
  //   setFullName(e.target.value);
  // } 
  // let handleUserName = (e) =>{
  //   setUserName(e.target.value);
  // } 

  let handleInputChange=(event)=>{
    let fieldName = event.target.name
    let newValue = event.target.value
   setFormData((currData)=>{
    currData[fieldName]=newValue;
     return {...currData}
   })
  }
  
  let  submitHandler= (event) =>{
    event.preventDefault()
  }
  return(
    <form onSubmit={submitHandler}>
      <label htmlFor="fullName">Full Name</label> 
      <br />
      <input placeholder="enter your name" type="text"  value={formData.fullName} name="fullName" onChange={handleInputChange} id="fullName"/><br/>
      <br />
      <label htmlFor="username">user Name</label> 
      <br />
      <input placeholder="enter username" type="text"  value={formData.userName} name="userName" onChange={handleInputChange} id="username"/><br/>
      <br />
      <br />
      <br />
      <button>Submit</button>
    </form>
  )
}