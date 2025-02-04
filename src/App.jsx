import React from "react";

// import Side from './Components/Side'

// import Hook from "./Components/UseRef1";
import Timer from "./Components/Timer";
const App=()=>{

return(
  <>
  {/* <Side/> */}
  {/* <Hook/> */}
  <Timer/>
  </>
)
//   const [count,setCount]=useState(0);
//  const [running,setRunning]=useState(true);

//   const Increment=()=>{
//     setCount(count+1);
//   }
//   const Decrement=()=>{
//     if(count>0){
//       setCount(count-1);
//     }
//   }


//   useEffect(()=>{
  
//       if(!running){
//         return;
//       }
//      //case:1 when component mounted or rendered
//     //  console.log("Components is rendered");
//     // // case 2: when component is running an effect on state or props change
//     //   setCount((prev)=>prev+1);
//     // },3000);
     
//     const intervalId=setInterval(()=>{
//       setCount((prevCount)=>prevCount+1);
//     },3000);

//      return()=>{
//        //case 3:unmounted or cleanup
//          clearInterval(intervalId);
//       console.log(`Cleaning up...`)
//      }
//   },[count])
//    const stopTimer=()=>setRunning(false);
//   return(
//     <>
//      <p>count:{count}</p>
//      <button onClick={Decrement}
//      style={
//       {color:'white',
//         backgroundColor:'dodgerblue',
//         width:80,
//         border:'none',
//         borderRadius:4,
//         height:40
//       }
//       }>Previous</button>

// <button onClick={Increment}
//  style={
//       {color:'white',
//         backgroundColor:'dodgerblue',
//         width:80,
//         border:'none',
//         borderRadius:4,
//         height:40,
//         marginLeft:20
//       }
//       }>Next</button>

// <button onClick={stopTimer}
//  style={
//       {color:'white',
//         backgroundColor:'red',
//         width:80,
//         border:'none',
//         borderRadius:4,
//         height:40,
//         marginLeft:20
//       }
//       }>StopTimer</button>
//     </>
//   )
}

export default App;
