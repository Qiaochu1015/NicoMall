import React from "react";
import styled from "styled-components";
import { useStateValue } from "../stateProvider/StateProvider";
function CheckoutProduct({ id, image, title, price }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = (id) => {

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };
  return (
    <CheckoutProduct>
      <img src={image} />

      <div>
        <p className="checkoutProduct__title">{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <button onClick={() => removeFromCart(id)}>Remove from Cart</button>
      </div>
    </CheckoutProduct>
  );
}

export default CheckoutProduct;

const CheckoutProduct = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;

  img {
    object-fit: contain;
    width: 180px;
    height: 180px;
  }
  div {
    padding-left: 20px;
  }
  button {
    background: #731649;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #fff;
    cursor: pointer;
  }
  .checkoutProduct__title {
    font-size: 17px;
    font-weight: 800;
  }
`;
