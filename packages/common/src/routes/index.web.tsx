import React from 'react';
import About from '../modules/content/about/index';
import EventDetail from '../modules/content/events/EventDetails';
import Events from '../modules/content/events/index';
import News from '../modules/content/news/index';
import NewsDetails from '../modules/content/news/NewsDetails';
import Policy from '../modules/content/policy/index';
import Support from '../modules/content/support/index';
import EmailConfirm from '../modules/emailConfirmation/EmailConfirm';
import Login from '../modules/login/index';
import SignUp from '../modules/signup/index';
import { Route, Router, Switch } from '../router/index';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/news" component={News} />
                <Route exact path="/news/:news" component={NewsDetails} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/event/:event" component={EventDetail} />
                <Route exact path="/support" component={Support} />
                <Route exact path="/about" component={About} />
                <Route exact path="/policy" component={Policy} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/emailconfirm/:key" component={EmailConfirm} />
            </Switch>
        </Router>
    )
}

export default Routes
