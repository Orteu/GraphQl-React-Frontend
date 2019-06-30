import gql from 'graphql-tag';

export const CUSTOMERS_QUERY = gql`
  query getAllCustomers($limit: Int, $offset: Int){
    getAllCustomers(limit: $limit, offset: $offset){
      id
      name
      surname
      email
    }
    totalCustomers

  }
`;

export const CUSTOMER_GET_BY_ID = gql`
  query getCustomerById($id: ID){
    getCustomerById(id: $id){
      id
      name
      surname
      email
      type
    }
  }
`;