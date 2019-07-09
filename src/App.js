import React, { Component, Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Imported components
import Header from './components/Base/Header';
import CustomersList from './components/Customers/CustomersList';
import NewCustomer from './components/Customers/NewCustomer';
import EditCustomer from './components/Customers/EditCustomer';
import ProductList from './components/Products/ProductList';
import NewProduct from './components/Products/NewProduct';
import EditProduct from './components/Products/EditProduct';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache({
    addTypename: false
  }),
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
                <Route exact path="/customers" component={CustomersList} />
                <Route exact path="/customer/edit/:id" component={EditCustomer} />
                <Route exact path="/customer/new" component={NewCustomer} />
                <Route exact path="/product" component={ProductList} />
                <Route exact path="/product/edit/:id" component={EditProduct} />
                <Route exact path="/product/new" component={NewProduct} />
                
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
