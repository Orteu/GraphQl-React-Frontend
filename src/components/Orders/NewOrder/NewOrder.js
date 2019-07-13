import React, { Component } from 'react';
import CustomerData from './CustomerData';
import OrderData from './OrderData';

export default class NewOrder extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedProducts: []
        }
    }

    setProducts = (products) => {
       this.setState({ selectedProducts: products });
        
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
                        />
                    </div>
                </div>
            </div>

        );
    }
}