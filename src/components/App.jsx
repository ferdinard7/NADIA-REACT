import React from "react";
import Nested from "./Routes";
import {
    BrowserRouter
  } from "react-router-dom";

function App() {
    return (

       <BrowserRouter> 

       <Nested />
      
        </BrowserRouter>
    )
}

export default App;