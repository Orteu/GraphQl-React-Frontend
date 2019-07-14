import React from 'react';
import { Query } from 'react-apollo';
import { PRODUCT_GET_ALL } from '../../../../queries';

import Select from 'react-select';
import Animated from 'react-select/animated';
import ProductInfo from '../ProductInfo';

const OrderData = ({ selectedProducts, setProducts, setProductQuantity }) => (
	<div>
		<Query query={PRODUCT_GET_ALL} pollInterval={500}>
			{({ loading, error, data, pollInterval }) => {
				if (loading) {
					return (
						<div className="spinner">
							<div className="cube1" />
							<div className="cube2" />
						</div>
					);
				}
				if (error) {
					return <p>Error</p>;
				}
				const { getAllProducts } = data;
				return (
					<div>
						<Select
							options={getAllProducts}
							isMulti
							components={Animated()}
							getOptionValue={(options) => options.id}
							getOptionLabel={(options) => options.name}
							placeholder="Select a product"
							onChange={setProducts}
							value={selectedProducts}
						/>
						{selectedProducts &&
							0 < selectedProducts.length &&
							selectedProducts.map((product, index) => {
								if (product.quantity) {
									return (
										<ProductInfo
										index={index}
										key={product.id}
										product={product}
										setProductQuantity={setProductQuantity}
									/>
									)
								}		
								return null;					
							}
							)}
					</div>
				);
			}}
		</Query>
	</div>
);

export default OrderData;
