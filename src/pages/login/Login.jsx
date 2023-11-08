import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useCookies } from "react-cookie";
// import axios from "axios";

const Button = styled.button`
  width: 82%;
  border: none;
  font-size: 16px;
  padding: 3% 0;
  background-color: #FF0D0D;
  color: white;
  cursor: pointer;
  margin-top: 10%;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;

function Login() {

  const [cookies, setCookie, removeCookie] = useCookies(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    const user = { email, password}
    console.log(user);
    login(dispatch, user);
  };




    return (
        <div className="login-container">
        <div className="login-wrapper">
        <div className="bread-login-wrapper" >
        <img  className="login-logo" src="/images/nadia.png" alt="logo" />
         <h3> Welcome to Nadia Bakery </h3>
         <form>
         <p>Email: </p>
         <input type="text"  placeholder="Enter your email" name="email"
         onChange={(e) => setEmail(e.target.value)}
         />
         <p> Password:</p>
         <input type="password" placeholder="password"  name="password"
         onChange={(e) => setPassword(e.target.value)}
         />

<Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
         {error && <Error>Something went wrong...</Error>}
         </form>
        <p className="login-paragraph">Don't have an account? <Link to="/register"> Register here</Link></p>


        </div>


        </div>
      </div>
    )
}


export default Login;