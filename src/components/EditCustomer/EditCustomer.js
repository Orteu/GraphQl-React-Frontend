import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import { CUSTOMER_GET_BY_ID } from '../../queries';
import EditCustomerForm from '../EditCustomerForm';

export default class EditCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

	render() {
    const { id } = this.props.match.params;
		return (
			<Fragment>
				<p>Edit Customer</p>

				<div className="row justify-content-center">
					<Query query={CUSTOMER_GET_BY_ID} variables={{ id }}>
						{({ loading, error, data }) => {
							if (loading) {
								return 'Loading...';
							}
							if (error) {
                return `Error ${error}`
              }
              return (
                <EditCustomerForm
                  customer={data.getCustomerById}
                />
              )
						}}
					</Query>
				</div>
			</Fragment>
		);
	}
}
