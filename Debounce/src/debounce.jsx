 import { useState,useCallback } from "react";
 import { debounce } from "lodash";

const Debounce=()=>{
    const [inputValue,setInputValue]=useState('');
    const [debouncedValue,setDebouncedValue]=useState('');

    const HandleDebounce=useCallback(
        debounce((value)=>{
        setDebouncedValue(value)
        },1000)
    )

    const HandleInput=(e)=>{
      let value=e.target.value;
      setInputValue(value);
     HandleDebounce(value);
    }
    return(
        <>
          <p style={{
            textAlign:'center'
          }}>Debouncing Practice</p>

          <div style={{
              display:'flex',
              flexDirection:'column'
          }}>
             <input
              onChange={HandleInput}
              value={inputValue}
              style={{
                textAlign:'center',
                width:'200px',
                marginLeft:'650px',
                height:'35px',
                borderRadius:'2px',
                border:'none',
                boxShadow:'1px 2px 2px 2px gray'
              }}
             type="text"  placeholder="Enter the Items.."/>
             <p style={{
                textAlign:'center',
                color:'red'
             }}>Debounced Value: <span style={{
                color:'goldenrod'
             }}>{debouncedValue}</span></p>
          </div>
        </>
        
    )
}
export default Debounce;