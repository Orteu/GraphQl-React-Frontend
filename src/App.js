import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  onError: ({ networkError, graphQLErrors }) => {
    console.log('networkError', networkError);
    console.log('graphQLErrors', graphQLErrors);
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <p>aaaaa</p>
    </ApolloProvider>
  );
}

export default App;
