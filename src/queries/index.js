import gql from 'graphql-tag';

export const CUSTOMERS_QUERY = gql`{
  getAllCustomers{
    id
    name
    surname
    email
  }
}`;

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