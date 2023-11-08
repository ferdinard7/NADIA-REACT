import React, { useEffect, useState } from "react";
import Bonus from "../../components/bonus/Bonus";
import Navbar2 from "../../components/navbar2/Navbar2";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import { useSelector } from "react-redux";
import { PaystackButton } from 'react-paystack';
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


const publicKey = 'pk_test_f9fd3ddf5826d25939a3774ce57402d95fc696ad';


const SummaryTitle = styled.h1`
font-weight:  200;
font-size: 30px;
`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``





const Cart =() => {

  const user = useSelector((state) => state.user.currentUser);

  const email = user.email;

 

  const cart = useSelector(state=> state.cart);
  const navigate = useNavigate();
  
  const config = {
    reference: (new Date()).getTime(),
    email: `${email}`,
    amount: `${cart.total * 100 }`,
    publicKey: publicKey,
  };

  const [payButton, setPayButton] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    const initiatePayment = async () => {
      try {
        // setIsLoading(true);

        const res = await axios.post("https://nadia-backend.onrender.com/api/checkout/payment", {
        // const res = await userRequest.post("/checkout/payment", {
          key: publicKey,
          amount: `${cart.total * 100}`,
          email: `${email}`,
          metadata: {
            orderId: "123456",
          },
        });

        console.log(res.data.status);
         

        // history.push({data: res.data});

      }catch (error) {
        console.log(error);
        // Handle the error
      } finally {
        // setIsLoading(true);
      }
    };

    payButton && cart.total>= 0 && initiatePayment();
    // history.push("/success");
  }, [payButton,cart]);

  const onSuccess = (reference) => {
    const success = reference.status;
    if (success === "success") {
      navigate("/success")
    } else {
      navigate("/failure")
    }
  };


  const onClose = () => {
    console.log('Payment closed');
    // history.push("/failure");
  };

    return (
   <div>
    <Bonus />
    <Navbar2 />  
    <div className="cart-wrapper">
        <h1 className="cart-title">YOUR BAG</h1>
        <div className="cart-top">
          <button className="cart-top-button">
          <Link className="top-link" to="/products/all">CONTINUE SHOPPING</Link>
          </button>
          <div className="top-texts">
            <div className="top-text">
              Shopping Bag(2)
            </div>
            <div className="top-text">
              Your Wishlist(0)
            </div>
          </div>
          <button className="cart-top-button" style={{ border: "none", backgroundColor: "black", color: "white" }}>
            CHECKOUT NOW
          </button>
        </div>
        <div className="cart-bottom">
          <div className="cart-info">
              {cart.products.map((product) => {
                return (
                  <div className="cart-product" key={product._id}>
                <div className="cart-product-detail">
                  <img  className="cart-product-img" src={product.img} alt={product.title} />
                  <div className="cart-details">
                    <span className="cart-product-name"> <b>Product: </b> {product.title} </span>
                    <span className="cart-product-id"> <b>ID: </b> 7546937692 </span>
                    <div className="cart-product-color" style={{ backgroundColor: "red" }}></div>
                  </div>
                </div>
                <div className="cart-price-detail">
                  <div className="cart-product-amount-container">
                  <AddIcon className="add-icon" />
                    <span className="cart-product-amount">
                      {product.quantity} 
                    </span>
                    <RemoveIcon  className="remove-icon" />
                  </div>
                  <span className="cart-product-price"> ₦ {product.price * product.quantity} </span>
                </div>
              </div>
                )
              })}
          
            </div>
          <hr />
          <div className="summary">
            <SummaryTitle>
              CART SUMMARY
            </SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>₦ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₦ 5.70</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₦ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem style={{ fontWeight: "500", fontSize: "24px" }}>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₦ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <PaystackButton className="button" onClick={() => setPayButton(true)}
      text="CHECK OUT NOW"
      onSuccess={onSuccess}
      onClose={onClose}
      {...config}
    />
          </div>
        </div>
      </div>
     <Footer />
    </div>
  
   
    )
}


export default Cart;