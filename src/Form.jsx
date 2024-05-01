import { useState } from "react"

export default function Form(){
  let [formData, setFormData] = useState({
    fullName: "",
    userName:  "",
    password:""
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
     return {...currData,[fieldName] : newValue}
   })
  }
  
  let  submitHandler= (event) =>{
    console.log(formData);
    event.preventDefault()
    setFormData({
      fullName: "",
      userName:  "",
      password:""
    })
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
      <label htmlFor="password">password</label> 
      <br />
      <input placeholder="enter password" type="password"  value={formData.password} name="password" onChange={handleInputChange} id="password"/><br/>
      <br />
      <br />
      <br />
      <button>Submit</button>
    </form>
  )
}