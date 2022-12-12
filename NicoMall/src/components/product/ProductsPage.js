import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../stateProvider/StateProvider";
import "./productsPage.css";


function ProductsPage() {
  const [{ cart, detail }, dispatch] = useStateValue();
  const [products, setProducts] = useState([]);
   
  
  useEffect(() => {
    // fetch("./products.json")
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);

 // dispatch the item into the data layer
  const addToDetail = (product) => {
    dispatch({
      type: "ADD_TO_DETAIL",
      payload: product,
    });
  };

  return (
    <div>

      
        <div className="product__row">
          {products.map((product ) => (
            <div className="product" key={product.id}>
              <img
                src={product.image}
                    />
              <div className="product__info">
              <h5>{product.title}</h5>
                <h6 className="product__price">
                  ${product.price}
                  
                </h6>
              </div>
              <div className="info_container">
        <h5>{product.rating.rate}</h5>
        <Link to="/productdetail" className="link">
        <button 
          onClick={() => addToDetail(product)}
        
          className="more_info"
        >
          More Info
        </button>
        </Link>
      </div>
            </div>
          ))}
        </div>
     
    </div>
  );
}

export default ProductsPage;
