import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducers from './reduces/index'
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Product from './component/product/product';
import Cart from './component/cart/cart';
import Details from './component/details/details'
const store = createStore(
  appReducers,
);
ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router>
        <App>
          <Switch>
            <Route path="/" exact component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path='/product/details/:id' component={Details} />
          </Switch>
        </App>
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
);

