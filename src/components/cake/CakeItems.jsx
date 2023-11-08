import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from "@mui/icons-material";
import  { Cake } from "../../data";
import styled from "styled-components";
import Left from "../left/Left";
import { Link } from "react-router-dom";


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  `;
  
  const Container = styled.div`
  flex: 1;
  margin: 13px;
  min-width: 140px;
  height: 190px;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${'' /* justify-content: center; */}
  background-color: #f5fbfd;
  position: relative;
    &:hover ${Info}{
      opacity: 1;
    }
  `;

  const Para = styled.p`
  position: relative;
  z-index: 4;
  font-size: 15px;
  cursor: pointer;
  `
  
  const Circle = styled.div`
  width: 150px;
  height: 150px;
  ${'' /* border-radius: 50%; */}
  background-color: white;
  position: absolute;
  `;
  
  const Image = styled.img`
  height: 65%;
  z-index: 2;
  `;
  
  const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;

  const Span = styled.span`
  position: relative;
  z-index: 4;
  font-size: 15px;
  cursor: pointer;
  `

function CakeItems() {
    return (
    <div className="shop-container">
        <div className="shop-wrapper">
    <Left />
    <div className="shop-right">
       {Cake.map((oneItem) => {
        return (
            <Container key={oneItem.id}>
            <Circle />
        <Image src={oneItem.img}/>
        <Para>{oneItem.title}</Para>
        <Span>{oneItem.price}</Span>
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Link to={`/product/${oneItem.id}`}>
          <Icon>
            <SearchOutlined />
          </Icon>
          </Link>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
       </Container>
        )
       })}
       
      
    </div>
        </div>
    </div>
    )
}


export default CakeItems;