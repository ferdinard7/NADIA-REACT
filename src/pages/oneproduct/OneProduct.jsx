import React, { useEffect, useState } from "react";
import Navbar2 from "../../components/navbar2/Navbar2";
import Footer from "../../components/footer/Footer"
import Bonus from "../../components/bonus/Bonus";
import { Remove, Add } from '@mui/icons-material';
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";
import axios from "axios";
import CartButton from "../../components/CartButton";

function OneProduct() {
    

    const location= useLocation();
    const id = location.pathname.split("/")[2];
    console.log(id);

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

// TO FETCH THE PRODUCTS IN THE DATA.JS FILE AND DEPENDING ON THE ID, IT RENDERS DIFFERENT PRODUCTS PAGES AND DETAILS E.G LIKE IF THE ID IS GREATER THAN 24/25, IT RENDERS THE CAKE PAGE
    useEffect(() => {
        const getProduct = async () => {
            const res = await axios.get("https://nadia-backend.onrender.com/api/products/find/" + id);
            // const res = await  publicRequest.get("/products/find/" + id);
            console.log(res.data);
            setProduct(res.data); 
        }

        getProduct();
        
      }, [id]);

    //   TO DECREASE AND INCREASE THE AMOUNT
    function handleQuantity(type) {
        if(type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }


    // UPDATE CART
    function handleClick() {
        dispatch(addProduct({ ...product, quantity }));
    }

    return (
    <div>
    <Bonus />
    <Navbar2 />
    <CartButton />
    <div className="one-product-container">
    <div className="one-product-wrapper">
    
    <div className="one-product-right">
        <div className="one-product-img">
         <img src={product.img} alt="bread" />
        </div>
        <div className="one-product-details">
       <h3> {product.title} </h3>

       <p> ₦ {product.price}</p>
       <p className="share"><Remove  onClick={() => handleQuantity("dec")} />
        <span className="my-span">
            {quantity}
        </span>
         <Add onClick={() => handleQuantity("inc")} /> 
        
         </p>
         <button onClick={handleClick}>ADD TO CART</button>
       
        </div>
    </div>

    </div>

    </div>
    <Footer />

        
    </div>
    )
}


export default OneProduct;