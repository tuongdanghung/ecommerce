import React, { Component } from "react";
import { connect } from 'react-redux'
import "./cart.scss";
import { removeToCart } from '../../actions/index'
class Cart extends Component {
    constructor(props) {
        super(props);
    }
    showCart(cart) {
        var result = null;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <tbody>
                        <tr key={index}>
                            <td><img src={item.product.image} /></td>
                            <td>{item.product.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.product.price} $</td>
                            <td>{this.showSubToTal(item.product.price, item.quantity)} $</td>
                            <td><i
                                onClick={() => this.onDelete(item.product)}
                                className="fa fa-times" aria-hidden="true">
                            </i>
                            </td>
                        </tr>
                    </tbody>
                )
            })
        }
        return result;
    }

    showSubToTal = (price, quantity) => {
        return price * quantity
    }


    // delete
    onDelete(product) {
        this.props.onDelete(product)
        alert("Xóa sản phẩm thành công !!!")
    }
    render() {
        var { cart } = this.props;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {this.showCart(cart)}
            </table>
        );
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelete: (product) => {
            dispatch(removeToCart(product))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);