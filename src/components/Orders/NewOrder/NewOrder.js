import React, { Component } from 'react';
import CustomerData from './CustomerData';
import OrderData from './OrderData';

// Imports from utils
import { formatProducts } from '../../../utils/formatters';

export default class NewOrder extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedProducts: [],
            totalPrice: 0
        }
    }

    checkProductInList = (index, value) => {
        const { selectedProducts } = this.state;
        const updatedQuantities = [ ...selectedProducts ];
        if (!parseInt(value) || parseInt(value) < 0) {
            updatedQuantities.splice(index, 1);
        }
        this.setState({ selectedProducts: updatedQuantities });

    }

    removeItem = (index) => {
        let totalPrice = 0;
        const { selectedProducts } = this.state;
        const updatedQuantities = [ ...selectedProducts ];
        updatedQuantities.splice(index, 1);
        updatedQuantities.map((product) => totalPrice += (product.price * product.quantity))
        this.setState({ selectedProducts: updatedQuantities, totalPrice });

    }

    setProducts = (products) => {
        let formattedProducts = [];
        if (products && 0 < products.length) {
            formattedProducts = formatProducts(products);
        }
        this.setState({ selectedProducts: formattedProducts });
        
    }

    setProductQuantity = (index, value) => {
        const { selectedProducts } = this.state;
        const updatedQuantities = [ ...selectedProducts ];
        let totalPrice = 0;
        parseInt(value) < 0 ? updatedQuantities[index].quantity = 0 : updatedQuantities[index].quantity = parseInt(value);
        updatedQuantities.map((product) => totalPrice += (product.price * product.quantity))
        this.setState({ selectedProducts: updatedQuantities, totalPrice });
    }

    render() {
        const { id } = this.props.match.params;
        const { selectedProducts, totalPrice } = this.state;
        return (
            <div>
                <h2 className="text-center mb-4">New orders</h2>
                <div className="row">
                    <div className="col-md-4">
                        <CustomerData
                            id={id}
                        />
                    </div>
                    <div className="col-md-8">
                        <OrderData
                            checkProductInList={this.checkProductInList}
                            removeItem={this.removeItem}
                            selectedProducts={selectedProducts}
                            setProducts={this.setProducts}
                            setProductQuantity={this.setProductQuantity}
                            totalPrice={totalPrice}
                        />
                    </div>
                </div>
            </div>

        );
    }
}