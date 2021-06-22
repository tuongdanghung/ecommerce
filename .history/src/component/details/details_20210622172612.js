import React, { Component } from "react";
import "./details.scss";
import axios from 'axios'
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getApi: [],
        };
    }

    componentDidMount() {
        axios
            .get(
                `http://localhost:3000/product/` +
                this.props.match.params.id
            )
            .then((res) => {
                const getApi = res.data;
                this.setState({
                    getApi,
                });
            })

            .catch((error) => console.log(error));
    }

    render() {
        let data = this.state.getApi;
        console.log(data);
        return (
            <div className="main-contents">
                <div className="main-details">
                    <div className="image">
                        <img src={data.image} />
                    </div>
                    <div className="content">
                        <h6>Tên sản phẩm: <span>{data.name}</span></h6>
                        <h6>Giá sản phẩm: <span>{data.price}</span></h6>
                        <h6>Mô tả sản phẩm : </h6><p><span>{data.description}</span></p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Details;