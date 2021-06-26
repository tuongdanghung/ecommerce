import React, { Component } from "react";
import callApi from "../../callAPI/callApi"
import "./product.scss";
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/index';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getApi: []
        }
    }
    componentDidMount() {
        callApi('product', 'GET', null).then((res) => {
            const getApi = res.data;
            this.setState({
                getApi,
            });
        })
    }
    showProduct() {
        let data = this.state.getApi
        var result = null;
        if (data.length > 0) {
            result = data.map((product, index) => {
                return (
                    < Card key={index} >
                        < CardActionArea >
                            < CardMedia className="classes-media"
                                image={product.image}
                                title="Contemplative Reptile" /
                            >
                            < CardContent >
                                < Typography gutterBottom variant="h5"
                                    component="h2" > {product.name} </Typography>
                                < Typography className="description"
                                    variant="body2"
                                    color="textSecondary"
                                    component="p" > {product.description} </Typography>
                                <Typography gutterBottom variant="h5"
                                    component="h2" >
                                    <span > Price: </span>{product.price} $ </Typography >
                            </CardContent>
                            <Link size="small"
                                color="primary"
                                className="addCart btn btn-primary"
                                onClick={
                                    () => this.onAddToCart(product)
                                } >
                                <i className="fa fa-cart-plus"
                                    aria-hidden="true"> </i> Mua hàng </Link >
                            <Link className="btn btn-primary"
                                to={"/product/details/" + product['id']} > Chi tiết sản phẩm </Link>
                        </CardActionArea >
                    </Card>
                )
            })
        }
        return result;
    }
    onAddToCart = (product) => {
        this.props.onAddToCart(product)
        alert("mua hàng thành công!!!")
    }

    render() {
        var { products } = this.props;
        return (<div className="main-content" > {this.showProduct(products)} </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(addToCart(product, 1))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);