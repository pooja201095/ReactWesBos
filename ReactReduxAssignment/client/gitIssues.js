// let's go!
import React from 'react';
import {render} from 'react-dom';

import App from './components/App';
import List from "./components/List";
import IssueDescription from "./components/IssueDescription";

import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux"; //connect react n redux
import store, { history } from "./store";


const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
            <IndexRoute component={List} />
            <Route path="/view/:issueId" component={IssueDescription} />
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));