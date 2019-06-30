import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import { CUSTOMER_GET_BY_ID } from '../../queries';
import EditCustomerForm from '../EditCustomerForm';

export default class EditCustomer extends Component {
	render() {
    	const { id } = this.props.match.params;
		return (
			<Fragment>
				<h2>Edit Customer</h2>

				<div className="row justify-content-center">
					<Query query={CUSTOMER_GET_BY_ID} variables={{ id }}>
						{({ loading, error, data, refetch }) => {
							if (loading) {
								return 'Loading...';
							}
							if (error) {
                return `Error ${error}`
              }
              return (
                <EditCustomerForm
				  customer={data.getCustomerById}
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
