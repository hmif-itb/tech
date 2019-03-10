import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import Home from 'components/@Home';
import About from 'components/@About';
import Bootcamp from 'components/@Bootcamp';
import BootcampCP from 'components/@Bootcamp/@CP';
import BootcampDS from 'components/@Bootcamp/@DS';
import BootcampUX from 'components/@Bootcamp/@UX';
import {
    ROUTE_HOME,
    ROUTE_ABOUT,
    ROUTE_BOOTCAMP,
    ROUTE_BOOTCAMP_CP,
    ROUTE_BOOTCAMP_UX,
    ROUTE_BOOTCAMP_DS,
} from 'routes';
import 'styles/index.scss';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path={ROUTE_ABOUT} component={About} />
            <Route path={ROUTE_BOOTCAMP_UX} component={BootcampUX} />
            <Route path={ROUTE_BOOTCAMP_CP} component={BootcampCP} />
            <Route path={ROUTE_BOOTCAMP_DS} component={BootcampDS} />
            <Route path={ROUTE_BOOTCAMP} component={Bootcamp} />
            <Route path={ROUTE_HOME} component={Home} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('app'));

serviceWorker.unregister();
