import React from 'react';
import { Query } from 'react-apollo';
import { PRODUCT_GET_ALL } from '../../../../queries';

const OrderData = () => (
    <div>
        <Query query={PRODUCT_GET_ALL}>
            {
                ({ loading, error, data, pollInterval }) => {
                    if (loading) {
                        return (
                            <div class="spinner">
                                <div class="cube1"></div>
                                <div class="cube2"></div>
                            </div>
                        )
                    }
                    if (error) {
                        return <p>Error</p>
                    }
                    const { getAllProducts } = data;
                    console.log(data);
                    return (
                        <div>
                            {
                                getAllProducts.map((product) => (
                                    <div>
                                        <p>{product.name}</p>
                                        <p>{product.price}</p>
                                        <p>{product.stock}</p>
                                    </div>
                                ))
                            }   
                        </div>
                    );
                }
            }
        </Query>
    </div>
);

export default OrderData;