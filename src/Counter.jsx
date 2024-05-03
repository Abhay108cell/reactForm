import { useState, useEffect } from "react";
export default function Counter(){
  let [count, setCount] = useState(0);
  let inCount = ()=>{
    setCount (c => c +1)
  }

  useEffect(function printSomething(){
    console.log("this is our side effect");
  })

  return(
    <div>
      <h3 >Count = {count}</h3>
      <button onClick={inCount}>increase + 1</button>
    </div>
  )
}