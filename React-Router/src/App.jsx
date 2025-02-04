
 import { BrowserRouter, Routes,Route } from "react-router-dom";
 import Signup from "./Components/signup";
 import Login from "./Components/login";
 const App=()=>{

  return (
    <>
     
      <BrowserRouter>
        <Routes>
           <Route path="/signup" element={<Signup/>} />
           <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App;