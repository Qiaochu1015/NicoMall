import { useState,useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../stateProvider/StateProvider";

function Header() {
  const [{ cart, detail }, dispatch] = useStateValue();
  const [products, setProducts] = useState([]);
  const [catagory,setCatagory] = useState(null)

  useEffect(() => {
  
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((product) => {
        setCatagory(product);
      });
  }, []);
console.log(catagory)
  const filterProduct =(cat)=>{
    const updatedList=products.filter((x)=>x.catagory===cat)
    setProducts (updatedList)
    
  }
  
  return (
    <div className="header">
      <Link to="/">

        <h1 >Bit-Store</h1>
      </Link>
      <div className="header__option">
      <div className="header__search">
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
      <button className="btn btn-outline-dark me-2" onClick={()=>setCatagory(catagory)}>All</button>
      <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
      <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("women's clothing")} >Women's Clothing</button>
      <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("jewelery")} >Jewlery</button>
      <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("electronics")} >Electronic</button>
    </div>
    </div>
      </div>
      <div className="header__nav">
        <Link to="/" className="header__clearlink">
          <div className="header__option">
            <span className="header__optionLineOne">sign In </span>
            <span className="header__optionLineTwo">Join Free </span>
          </div>
        </Link>
        <Link to="/" className="header__clearlink">
          <div className="header__option">
            <span className="header__optionLineOne"> Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__clearlink">
          <div className="header__option">
            <span className="header__optionLineOne"> Messages</span>
            <span className="header__optionLineTwo">
    
            </span>
          </div>
        </Link>
        <Link to="/cart" className="header__clearlink">
          <div className="header__optionBasket">
            <span className="header__optionLineTwo header__basketCount">
              {cart?.length}
            </span>
            <ShoppingCartIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
