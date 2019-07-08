import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import { PRODUCT_GET_BY_ID } from '../../../queries';
import EditProductForm from '../EditProductForm';

export default class EditProduct extends Component {
	render() {
    	const { id } = this.props.match.params;
		return (
			<Fragment>
				<h2>Edit Product</h2>

				<div className="row justify-content-center">
					<Query query={PRODUCT_GET_BY_ID} variables={{ id }}>
						{({ loading, error, data, refetch }) => {
							if (loading) {
								return 'Loading...';
							}
							if (error) {
                return `Error ${error}`
              }
              return (
                <EditProductForm
				  product={data.getProductById}
				  refetch={refetch}
                />
              )
						}}
					</Query>
				</div>
			</Fragment>
		);
	}
}
