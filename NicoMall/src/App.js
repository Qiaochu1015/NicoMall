import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import ProductsPage from "./components/product/ProductsPage";
import ProductDetails from "./components/product/ProductDetails";

import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51ILWaRK6FJ4NvQJQAfitXtvoOesU79Mex29dVJK0y2CXbqoOdmeceakJ0NaCWwvKbUuKTtaSsOj4U2KQeBtfoNZA005UNamqdp"
);
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/productdetail">
            <Header />
            <ProductDetails />
          </Route>
          <Route path="/cart">
            <Header />
            <Checkout />
          </Route>
          <Route path="/checkout">
            <Elements stripe={promise}>
              <Header />
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <ProductsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
