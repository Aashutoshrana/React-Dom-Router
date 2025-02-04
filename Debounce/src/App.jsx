// import React, {useState,useCallback} from "react";

import Debounce from "./debounce";

//  import { debounce } from "lodash";
const App=()=>{
  //  const [inputValue,setInputValue]=useState('');
  //  const [debouncedValue,setDebouncedValue]=useState('');

  //  //create a debounced version of the handler function

  //  const handleChange=useCallback(
  //   debounce((value)=>{
  //     setDebouncedValue(value)
  //   },1000),
  //   []
  //  );

  //  //Handle input change
  //  const HandleInput=(e)=>{
  //   const value=e.target.value;
  //   setInputValue(value);
  //   handleChange(value);
  //  }

  return(
    <>
     {/* <p style={{
        textAlign:'center',

     }}>Using Debouncing </p>
         <div>
          <input  
           onChange={HandleInput}
           value={inputValue}
           style={{
            textAlign:'center'
           }}
          type="text" placeholder="Enter item.." />
          <p>Debounced Value:{debouncedValue}</p>
         </div> */}
        <div>
        <Debounce/>
        </div>
    </>
  )
}
export default App;