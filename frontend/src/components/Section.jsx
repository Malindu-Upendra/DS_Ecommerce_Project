import React, { Component } from 'react'
import Products from './pages/Products'
import Details from './pages/Details'
import {Route} from "react-router-dom"
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import Register from './FormPages/regformAlign'
import Login from './FormPages/logformAlign'
import UploadProduct from './pages/UploadProductPage'
import AdminHomePage from "./pages/AdminHomePage";
import UpdateProduct from "./pages/UpdateProduct";

export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Products} exact />
                    <Route path="/product" component={Products} exact  />z
                    <Route path="/product/:title" component={Details} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/payment/:total" component={Payment} exact />
                    <Route path="/register" component={Register} exact />
                    <Route path="/login" component={Login} exact/>
                    <Route path="/upload" component={UploadProduct} exact/>
                    <Route path="/Admin" component={AdminHomePage} exact/>
                    <Route path="/update/:title" component={UpdateProduct} exact/>
            </section>
        )
    }
}

export default Section
