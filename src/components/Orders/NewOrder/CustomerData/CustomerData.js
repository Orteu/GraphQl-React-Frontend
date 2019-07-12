import React from 'react';
import { Query } from 'react-apollo';
import { CUSTOMER_GET_BY_ID } from '../../../../queries';

const CustomerData = ({ id }) => (
  <div>
      <p className="text-center mb-3">CustomerData</p>

      <Query query={CUSTOMER_GET_BY_ID} variables={{id}} pollInterval={500}>
          {
              ({ loading, error, data, startPolling, stopPolling}) => {
                if (loading) {
                    return <p>loading</p>
                }
                if (error) {    
                    return <p>Error</p>
                }
                const {name, surname, email, type} = data.getCustomerById;
                return (
                    <ul className="list-unstyled">
                        <li className="border font-weight-bold p-2">
                            <span className="font-weight-normal">
                                Name: {name}
                            </span>
                        </li>
                        <li className="border font-weight-bold p-2">
                            <span className="font-weight-normal">
                                Surname: {surname}
                            </span>
                        </li>
                        <li className="border font-weight-bold p-2">
                            <span className="font-weight-normal">
                                Email: {email}
                            </span>
                        </li>
                        <li className="border font-weight-bold p-2">
                            <span className="font-weight-normal">
                                Type: {type}
                            </span>
                        </li>
                    </ul>
                );
              }
          }
      </Query>
  </div>
);


export default CustomerData;