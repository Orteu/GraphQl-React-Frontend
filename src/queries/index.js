import gql from 'graphql-tag';

export const CUSTOMERS_QUERY = gql`{
    getAllCustomers{
      id
      name
      surname
      email
    }
  }`;