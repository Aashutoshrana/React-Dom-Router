# This Project is based on the React-Router-Dom
# How to installReact-Router-Dom
npm i react-router-dom enter in terminal an install this library
# How to add React-Router-Dom in user jsx pages
import {BrowserRouter,Routes,Route} from "react-router-dom"

# How to do Routing in your page
<BrowserRouter>
  <Routes>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/login" element={<Login/>}/>
  </Routes>

</BrowserRouter>

# How to use useNavigate Dynamically router(move one page to another page)
inside the SignUp Component
 store in a varible
 const navigate=useNavigate();

 call inside the HandleSubmit(){
 navigate('/login');
 }
 
//There are Two hooks is used in this project
//useStates:useState having two properties one is variavle, and other is stateChanger
//useNagativation:This is two navigate Dynamically one web page to another web page;
