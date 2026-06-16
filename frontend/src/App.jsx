import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Detection from "./pages/Detection";


function App(){

return(

<BrowserRouter>

<Routes>


<Route
path="/"
element={<Home/>}
/>


<Route
path="/detect"
element={<Detection/>}
/>


</Routes>


</BrowserRouter>

)

}


export default App;