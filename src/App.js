import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

// Imported components
import Header from './components/Header';
import Customers from './components/Customers';

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
      <Header />
      <div className="container">
        <Customers />
      </div>
    </ApolloProvider>
  );
}

export default App;
