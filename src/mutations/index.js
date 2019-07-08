import gql from 'graphql-tag';

export const NEW_CUSTOMER = gql`
mutation createCustomer($input: customerInput) {
    createCustomer(input: $input){
        id
        name
        surname
    }
}
`;

export const UPDATE_CUSTOMER = gql`
    mutation updateCustomer($input: customerInput){
        updateCustomer(input: $input){
            id
            name
            surname
            type
            email
        }
    }
`;

export const REMOVE_CUSTOMER = gql`
    mutation removeCustomer($id: ID){
        removeCustomer(id: $id)
    }
`;

export const NEW_PRODUCT = gql`
mutation createProduct($input: productInput) {
    createProduct(input: $input){
        id
        name
        price
        stock
    }
}
`;

export const UPDATE_PRODUCT = gql`
    mutation updateProduct($input: productInput){
        updateProduct(input: $input){
            id
            name
            stock
            price
        }
    }
`;

export const REMOVE_PRODUCT = gql`
    mutation removeProduct($id: ID){
        removeProduct(id: $id)
    }
`;