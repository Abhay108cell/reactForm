import { useState, useEffect } from "react";
export default function Counter(){
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);
  let inCountx = ()=>{
    setCountx (c => c +1)
  }
  let inCounty = ()=>{
    setCounty (c => c +1)
  }

  useEffect(function printSomething(){
    console.log("this is our side effect");
  },[])

  return(
    <div>
      <h3 >Count = {countx}</h3>
      <button onClick={inCountx}>increase + 1</button>
      <h3 >Count = {county}</h3>
      <button onClick={inCounty}>increase + 1</button>
    </div>
  )
}