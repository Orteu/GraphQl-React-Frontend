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