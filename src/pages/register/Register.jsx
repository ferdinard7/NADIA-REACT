import React from "react";
import { Link } from "react-router-dom";


function Register() {
    return (
        <div className="register-container">
        <div className="register-wrapper">
        <div className="bread-register-wrapper" >
        <img  className="register-logo" src="/images/nadia.png" alt="logo" />
         <h3> Welcome to Nadia Bakery </h3>
         <form>
         <p>Username: </p>
         <input  type="text" placeholder="Enter your username"/>
         <p>Email: </p>
         <input type="text"  placeholder="Enter your email"/>
         <p> Password:</p>
         <input type="password" placeholder="password"/>

         <button  className="register-button"> Register </button>

         </form>
        <p className="register-paragraph">Already have an account? <Link to="/login">Login here</Link></p>


        </div>


        </div>
      </div>

   
    )
}


export default Register;