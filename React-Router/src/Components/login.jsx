import { useState } from "react";

const Login = () =>{
    const [formValue,setFormValue] =useState({
        "email":"",
        "password":""
    });
      const HandleChange=(e)=>{
        const input=e.target;
        const name=input.name;
        const value=input.value;
        setFormValue({
            ...formValue,
            [name]:value
        })
      };

      const HandleSubmit=(e)=>{
          e.preventDefault();
          console.log(formValue);
      }

    return(
        <form onSubmit={HandleSubmit}>
        <h1 style={{
         color:"dodgerblue"
        }}>Login Form</h1>
         
          <div className="div">
             <input type="email"
              name="email" 
              onChange={HandleChange}
              placeholder="ex123@gmail.com"
              required
              />
          </div>
          <hr/>

          <div className="div">
             <input type="password"
              name="password" 
              onChange={HandleChange}
              placeholder="******"
              required
              />
          </div>
          <hr/>
            <button>Login</button>
        </form>
    )
}

export default Login;