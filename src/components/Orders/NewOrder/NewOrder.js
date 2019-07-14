import React, { Component } from 'react';
import CustomerData from './CustomerData';
import OrderData from './OrderData';

// Imports from utils
import { formatProducts } from '../../../utils/formatters';

export default class NewOrder extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedProducts: []
        }
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
        if (!parseInt(value)) {
            updatedQuantities.splice(index, 1);
        } else {
            updatedQuantities[index].quantity = parseInt(value);
        }
        this.setState({ selectedProducts: updatedQuantities });
    }

    render() {
        const { id } = this.props.match.params;
        const { selectedProducts } = this.state;
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
                            selectedProducts={selectedProducts}
                            setProducts={this.setProducts}
                            setProductQuantity={this.setProductQuantity}
                        />
                    </div>
                </div>
            </div>

        );
    }
}