import React, { useEffect, useRef, useState } from "react";
const Hook=()=>{
    const [count,setCount]=useState(0);
     
       const value=useRef(0);
       const bgColor=useRef("red");
    const HandleFunction=()=>{
        value.current=value.current+1;
        console.log("Value of Val:",value.current);
        setCount(count+1);
    }

    const ChangeColor=()=>{
     bgColor.current.style.backgroundColor='dodgerblue';
    }
      
    useEffect(()=>{

        console.log("I am render each And every time");
    })

return(
    <>
      <p style={{color:'dodgerblue'}}>Count:{count}</p>
      <button 
      ref={bgColor}
      onClick={HandleFunction}
      style={{
         backgroundColor:'rebeccapurple',
         color:'white',
         height:30,
         width:100,
         border:'none',
         borderRadius:5
      }}>Increment</button>

      <button onClick={ChangeColor}
      style={{
        marginLeft:10,
        height:30,
         width:350,
         border:'none',
         borderRadius:5
      }}
      >Plz change the backgroundColor of Increment button</button>
    </>
)
}
export default Hook;