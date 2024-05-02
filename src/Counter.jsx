import { useState } from "react";
export default function Counter(){
  let [count, setCount] = useState(0);
  let inCount = ()=>{
    setCount (c => c +1)
  }
  return(
    <div>
      <h3 >Count = {count}</h3>
      <button onClick={inCount}>increase</button>
    </div>
  )
}