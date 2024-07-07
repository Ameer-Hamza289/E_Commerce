import { Fragment, useState, useEffect } from "react";
import "./App.css";
// import Header from "./components/layout/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import {store} from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./components/layout/Header/UserOptions";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";
import Products from "./components/Products/Products/Products";
import Search from "./components/Products/Search/Search";
import LoginSignUp from "./components/User/LoginSignUp/LoginSignUp";
import Contact from "./components/layout/Contact/Contact";
import NotFound from "./components/layout/Not Found/NotFound";
import ForgotPassword from "./components/User/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword/ResetPassword";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import Profile from "./components/User/Profile/Profile";
import UpdateProfile from "./components/User/UpdateProfile/UpdateProfile";
import UpdatedPassword from "./components/User/UpdatePassword/UpdatePassword";
import Shipping from "./components/Cart/Shipping/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder/ConfirmOrder";
import Payment from "./components/Cart/Payment/Payment";
import MyOrders from "./components/Order/MyOrder/MyOrder";
import OrderDetails from "./components/Order/OrderDetails/OrderDetails";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import ProductList from "./components/Admin/ProductsList/ProductList";
import NewProduct from "./components/Admin/NewProduct/NewProduct";
import UpdateProduct from "./components/Admin/UpdateProduct";
import OrderList from "./components/Admin/OrderList";
import ProcessOrder from "./components/Admin/ProcessOrder/ProcessOrder";
import UsersList from "./components/Admin/UsersList";
import UpdateUser from "./components/Admin/UpdateUser";
import ProductReviews from "./components/Admin/ProductReview/ProductReviews";
import OrderSuccess from "./components/Cart/OrderSuccess/OrderSuccess";
import About from "./components/layout/About/About";
import Footer from "./components/layout/Footer/Footer"
import Cart from "./components/Cart/Cart/CArt";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get(`/api/v1/stripeapikey`);

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);
   return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        {isAuthenticated && <UserOptions user={user} />}
        <Fragment>
          <Elements stripe={loadStripe(stripeApiKey)}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/product/:id" element={<ProductDetails />} />
              <Route exact path="/products" element={<Products />} />
              <Route path="/products/:keyword" element={<Products />} />
              <Route exact path="/search" element={<Search />} />
              <Route exact path="/login" element={<LoginSignUp />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
              <Route
                exact
                path="/password/forgot"
                element={<ForgotPassword />}
              />
              <Route
                exact
                path="/password/reset/:token"
                element={<ResetPassword />}
              />
              <Route exact path="/cart" element={<Cart />} />

              {/* Protected Routes */}

              <Route element={<ProtectedRoute />}>
                <Route path="/account" element={<Profile />} />
                <Route path="/me/update" element={<UpdateProfile />} />
                <Route path="/password/update" element={<UpdatedPassword />} />
                <Route exact path="/login/shipping" element={<Shipping />} />
                <Route exact path="/order/confirm" element={<ConfirmOrder />} />
                {stripeApiKey && (
                  <Route exact path="/process/payment" element={<Payment />} />
                )}
                <Route exact path="/success" element={<OrderSuccess />} />
                <Route exact path="/orders" element={<MyOrders />} />
                <Route exact path="/order/:id" element={<OrderDetails />} />
                <Route exact path="/admin/dashboard" element={<Dashboard />} />
                <Route exact path="/admin/products" element={<ProductList />} />
                <Route exact path="/admin/product" element={<NewProduct />} />
                <Route
                  exact
                  path="/admin/product/:id"
                  element={<UpdateProduct />}
                />
                <Route exact path="/admin/orders" element={<OrderList />} />
                <Route
                  exact
                  path="/admin/order/:id"
                  element={<ProcessOrder />}
                />
                <Route exact path="/admin/users" element={<UsersList />} />
                <Route exact path="/admin/user/:id" element={<UpdateUser />} />
                <Route
                  exact
                  path="/admin/reviews"
                  element={<ProductReviews />}
                />
              </Route>
            </Routes>
          </Elements>
        </Fragment>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
