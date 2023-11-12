import React from "react";
import Home from "../pages/Home";
import OneProduct from "../pages/oneproduct/OneProduct";
import Register from "../pages/register/Register";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import Success from "../pages/Success";
import Failure from "../pages/Failure";
import Gallery from "../pages/gallery/Gallery";
import AllProducts from "../pages/AllProducts";

import {
  Routes,
  Route,      
  Navigate,
} from "react-router-dom";

import { useSelector } from "react-redux";

const Nested = () => {

  // const Auth = () => {
  //   let user = JSON.parse(sessionStorage.getItem("user"));
  //   return user;
  // };
  
  // const ProtectedRoutes = () => {
  //   const userAuth = Auth();
  
  //   return userAuth ? <Outlet /> : <Navigate to="/login" />;
  // };
const user = useSelector((state) => state.user.currentUser);

  console.log(user);
  


    return (
      // <Route  index element={<ProtectedRoute><Home /></ProtectedRoute>} />

      <Routes>
      <Route path="/">
          <Route  index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="register" element={user ? <Navigate to="/" /> : <Register />}/> */}
          <Route path="products/all" element={<AllProducts />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="product/:id" element={<OneProduct />} />
          <Route path="cart" element={user ? <Cart /> : <Navigate to="/login" />} />
          <Route path="success" element={<Success />} />
          <Route path="failure" element={<Failure />} />
      </Route>
  </Routes>
  
    )
}


export default Nested;


//  <Switch>
  // <Route path="/" exact>
  //   <Home />
  // </Route>
  // <Route path="/products/all" exact>
  //   <AllProducts />
  // </Route>
  // <Route path="/products/cake">
  // {/* FOR CAKE ROUTE */}
  //   <Cake />
  // </Route>
  // <Route path="/products/grill">
  // {/* FOR GRLL ROUTE */}
  //   <AllProducts />
  // </Route>
  // <Route path="/products/snack">
  // {/* SNACK ROUTE */}
  //   <AllProducts />
  // </Route>
  // <Route path="/products/cream">
  // {/* CREAM ROUTE */}
  //   <AllProducts />
  // </Route>
  // <Route path="/products/meal">
  // {/* MEAL ROUTE */}
  //   <AllProducts />
  // </Route>
  // <Route path="/product/:id">
  //   <OneProduct />
  // </Route>
  // <Route path="/cart">
  //   <Cart />
  // </Route>
  // <Route path="/success" exact>
  //   <Success />
  // </Route>
  // <Route path="/register">
  // {user ? <Redirect to="/" /> : <Register />}
  // </Route>
  // <Route path="/login">
  // {user ? <Redirect to="/" /> : <Login />}
  // </Route>
  // <Route to="/gallery" exact>
  //   <Gallery />
  // </Route>

  // <Route to="/failure" exact>
  //   <Failure />
  // </Route>
  

  //  </Switch>