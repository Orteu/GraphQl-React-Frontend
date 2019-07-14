import React from 'react';
import './index.css';

const ProductInfo = ({ checkProductInList, index, product, setProductQuantity }) => (
    <div className="product-card">
        <div className="card-beauty" />
        <div className="product-info">
            <p>{`Product: ${product.name}`}</p>
            <p>{`Unit price: ${product.price} €`}</p>
            <p>{`Stock: ${product.stock} Units`}</p>
            <p>{`Total price: ${isNaN(product.quantity) ? 0 : product.price*product.quantity} €`}</p>

        </div>
        <div className="order-quantity">
            <p>Quantity:</p>
            <input
                min={0}
                className="input-quantity"
                type="number"
                onChange={e => setProductQuantity(index, e.target.value)}
                onBlur={e => checkProductInList(index, e.target.value)}
            />
            {/* <button
                onClick={() => checkProductInList(index, 0)}
            /> */}
        </div>
    </div>
);

export default ProductInfo;