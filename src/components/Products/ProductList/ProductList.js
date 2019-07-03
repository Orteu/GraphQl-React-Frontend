import React, { Component, Fragment } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';

import Paginator from '../../Base/Paginator';
import { PRODUCT_GET_ALL } from '../../../queries';
import { REMOVE_PRODUCT } from '../../../mutations';

export default class ProductList extends Component {
    constructor(props) {
		super(props);
		this.state = {
			paginator: {
				currentPage: 1,
				offset: 0,
				pageSize: 10
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
            query={PRODUCT_GET_ALL}
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
                                <h2 className="text-center">Products list</h2>
                                <ul className="list-group mt-4">
                                    {data.getAllProducts.map((product) => (
                                        <li key={product.id} className="list-group-item">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-md-8 d-flex justify-content-between align-items-center">
                                                    {product.name}
                                                </div>
                                                <div className="col-md-4 d-flex justify-content-end">
                                                    <Mutation mutation={REMOVE_PRODUCT}>
                                                        {(removeProduct) => (
                                                            <button
                                                                className="btn btn-danger d-block d-md-inline-block mr-2"
                                                                onClick={() =>
                                                                    removeProduct({ variables: { id: product.id } })}
                                                                type="button"
                                                            >
                                                                &times; Remove
                                                            </button>
                                                        )}
                                                    </Mutation>
                                                    <Link
                                                        to={`/product/edit/${product.id}`}
                                                        className="btn btn-success d-block d-md-inline-block"
                                                    >
                                                        Edit product
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <Paginator
                                    changeCurrentPage={this.changeCurrentPage}
                                    paginator={paginator}
                                    total={data.totalProducts}
                                />
                            </Fragment>
                        );
                    }}
                </Query>
            );
        }
    }
    