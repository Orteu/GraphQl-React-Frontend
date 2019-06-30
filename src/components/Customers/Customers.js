import React, { Component, Fragment } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';

import { CUSTOMERS_QUERY } from '../../queries';
import { REMOVE_CUSTOMER } from '../../mutations';

import Paginator from '../Paginator';

export default class Customers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			paginator: {
				currentPage: 1,
        offset: 0,
        pageSize: 3
			}
		};
  }
  
  changeCurrentPage = (value) => {
    const { paginator } = this.state;
    const { currentPage, offset, pageSize } = paginator;
    let newOffset = null;
    if (value < currentPage) {
      newOffset = offset - pageSize;
    } else {
      newOffset = offset + pageSize;
    }
    this.setState({ paginator: {
      ...paginator,
      offset: newOffset,
      currentPage: value
    }})
  };

	render() {
    const { paginator } = this.state;
		return (
      <Query
        query={CUSTOMERS_QUERY}
        pollInterval={100}
        variables={{
          limit: paginator.pageSize,
          offset: paginator.offset
        }}
      >
				{({ loading, error, data, startPolling, stopPolling }) => {
					if (loading) {
						return '...loading';
					}
					if (error) {
						return `Error: ${error.message}`;
					}
					return (
						<Fragment>
							<h2 className="text-center">Customers list</h2>
							<ul className="list-group mt-4">
								{data.getAllCustomers.map((customer) => (
									<li key={customer.id} className="list-group-item">
										<div className="row justify-content-between align-items-center">
											<div className="col-md-8 d-flex justify-content-between align-items-center">
												{`${customer.name} ${customer.surname}`}
											</div>
											<div className="col-md-4 d-flex justify-content-end">
												<Mutation mutation={REMOVE_CUSTOMER}>
													{(removeCustomer) => (
														<button
															className="btn btn-danger d-block d-md-inline-block mr-2"
															onClick={() =>
																removeCustomer({ variables: { id: customer.id } })}
															type="button"
														>
															&times; Remove
														</button>
													)}
												</Mutation>
												<Link
													to={`/customer/edit/${customer.id}`}
													className="btn btn-success d-block d-md-inline-block"
												>
													Edit customer
												</Link>
											</div>
										</div>
									</li>
								))}
							</ul>
              <Paginator
                changeCurrentPage={this.changeCurrentPage}
                paginator={paginator}
                total={data.totalCustomers}
              />
						</Fragment>
					);
				}}
			</Query>
		);
	}
}
