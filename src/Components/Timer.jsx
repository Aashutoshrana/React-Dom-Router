import { useRef, useState } from "react";

 const Timer=()=>{
    const [Time,setTime]=useState(0);
      const timeReff=useRef(null)
    const StartTimer=()=>{
         timeReff.current=setInterval(()=>{
          setTime((time)=>time+1);
         },1000);
    }

    const StopTimer=()=>{
       clearInterval(timeReff.current);
       timeReff.current=null;
    }

    const ResetTimer=()=>{
          StopTimer();
          setTime(0);
    }
    return (
        <> 
          <div style={{
           
            marginTop:50,
            display:'flex',
            flexDirection:'column',
            gap:20,
            height:'50vh',
            width:'50%',
            textAlign:'center',
            marginLeft:250,
            background:'slice',
             // border:'1px solid gray',
              boxShadow:'3px 10px 8px 3px gray'
          }}>
          <h1 style={{
            color:'darkgoldenrod'
          }}>StopWatch:{Time} Second</h1>
          <div style={{
             display:'flex',
             flexDirection:'row',
             gap:12,
             alignContent:'center',
             textAlign:'center'
          }}>
          <button 
           style={{
            width:100,
            height:30,
            alignItems:'center',
           
            backgroundColor:'dodgerblue',
            border:'none',
            borderRadius:4,
            color:'white'

           }}
          onClick={StartTimer}>Start</button>
          <button 
            style={{
              width:100,
              height:30,
              alignItems:'center',
              
              backgroundColor:'dodgerblue',
              border:'none',
              borderRadius:4,
                color:'white'
  
             }}
          onClick={StopTimer}>Stop</button>
          <button
            style={{
              width:100,
              height:30,
              alignItems:'center',
              backgroundColor:'dodgerblue',
              border:'none',
              borderRadius:4,
                color:'white'
  
             }}
          onClick={ResetTimer}>Reset</button>
              </div>
          </div>
        </>
    )
 }
 export default Timer;