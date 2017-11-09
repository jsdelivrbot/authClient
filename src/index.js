import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHystory, hashHistory} from 'react-router';
import reduxThunk from 'redux-thunk';
import App from './components/app';
import reducers from './reducers';
import Signin from './components/auth/signin';
import Feature from './components/feature';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
   <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={hashHistory}>
         <Route path="/" component={App}>
            <Route path="/signin" component={Signin} />
            <Route path="/feature" component={Feature} />
            <Route path="/signout" component={Signout} />
            <Route path="/signup" component={Signup} />

         </Route>
      </Router>
   </Provider>
  , document.querySelector('.container'));
