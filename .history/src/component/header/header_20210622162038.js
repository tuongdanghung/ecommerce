import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./header.scss"
class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( <
            nav >
            <
            div className = "logo" > < h1 > Product List < /h1></div >
            <
            ul >
            <
            li >
            <
            NavLink exact = { true }
            to = "/" > < i className = "fa fa-home"
            aria - hidden = "true" > < /i>Product</NavLink >
            <
            /li> <
            li >
            <
            NavLink exact = { true }
            to = "/cart" > < i className = "fa fa-cart-plus"
            aria - hidden = "true" > < /i>Cart</NavLink >
            <
            /li> <
            /ul> <
            /nav >
        );
    }
}
export default Header;