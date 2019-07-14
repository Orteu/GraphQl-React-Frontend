import React from 'react';
import './index.css';

const ProductInfo = ({ index, product, setProductQuantity }) => (
    <div className="product-card">
        <div className="card-beauty" />
        <div className="product-info">
            <p>{`Product: ${product.name}`}</p>
            <p>{`Price: ${product.price} €`}</p>
            <p>{`Stock: ${product.stock} Units`}</p>
        </div>
        <div className="order-quantity">
            <p>Quantity:</p>
            <input
                className="input-quantity"
                type="number"
                onBlur={e => setProductQuantity(index, e.target.value)}
            />
        </div>
    </div>
);

export default ProductInfo;