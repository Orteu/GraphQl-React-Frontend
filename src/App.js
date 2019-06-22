import React, { Component, Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

// Imported components
import Header from './components/Header';
import Customers from './components/Customers';
import NewCustomer from './components/NewCustomer';
import EditCustomer from './components/EditCustomer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  onError: ({ networkError, graphQLErrors }) => {
    console.log('networkError', networkError);
    console.log('graphQLErrors', graphQLErrors);
  },
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Customers} />
                <Route exact path="/customer/edit/:id" component={EditCustomer} />
                <Route exact path="/customer/new" component={NewCustomer} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
