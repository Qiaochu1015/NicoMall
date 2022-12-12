import React from "react";
import { useStateValue } from "../stateProvider/StateProvider";
import styled from "styled-components";
function ProductDetails() {
  const [{ cart, detail }, dispatch] = useStateValue();
  const addToCart = (product) => {
  
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
  return (
    <div>
      {detail.map((product) => (
        <Product_Detail>
          <img className="details_image" src={product.image} alt={product.title}/>

          <ProductInfo>
            <h3>{product.title}</h3>
            <p className="details_price">
              <small>$</small>
              <strong>{product.price}</strong>
            </p>
            <h3>{product.category}</h3>
            <p className="details_title">{product.description}</p>

            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </ProductInfo>
        </Product_Detail>
      ))}
    </div>
  );
}

const Product_Detail = styled.div`
  background-color: #fff;
  display: flex;
  margin-top: 20px;
  margin-left: 40px;

  h3 {
    margin: 20px 0;
  }

  img {
    object-fit: contain;
    width: 400px;
    height: 500px;
  }
`;
const ProductInfo = styled.div`
  padding-left: 20px;
  .details_image {
    object-fit: contain;
    width: 300px;
    height: 500px;
  }

  .details_title {
    font-size: 17px;
    font-weight: 400;
    margin: 20px 0;
    width: 600px;
  }
  button {
    background:blue;
    width: 200px;
    height: 30px;
    font-weight: 800;
    font-size: 15px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #fff;
    cursor: pointer;
  }
`;

export default ProductDetails;
