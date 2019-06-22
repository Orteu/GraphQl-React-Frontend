import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import { CUSTOMERS_QUERY } from '../../queries';

const Customers = () => (
    <Query query={CUSTOMERS_QUERY}>
        {
            ({ loading, error, data }) => {
                if (loading) {
                    return "...loading"
                }
                if (error) {
                    return `Error: ${error.message}`
                }
                return (
                    <Fragment>
                        <h2 className="text-center">Customers list</h2>
                        <ul className="list-group mt-4">
                            {
                                data.getAllCustomers.map((customer) => (
                                    <li key={customer.id} className="list-group-item">
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-md-8 d-flex justify-content-between align-items-center">
                                                {`${customer.name} ${customer.surname}`}
                                            </div>
                                            <div className="col-md-4 d-flex justify-content-end">
                                                <Link to={`/customer/edit/${customer.id}`} className="btn btn-success d-block d-md-inline-block">
                                                    Edit customer
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </Fragment>
                )
                
            }    
        }
    </Query>
);

export default Customers;
