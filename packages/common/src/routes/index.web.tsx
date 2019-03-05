import React from 'react';
import EventDetail from '../modules/content/events/EventDetails';
import Events from '../modules/content/events/index';
import Content from '../modules/content/index';
import News from '../modules/content/news/index';
import NewsDetails from '../modules/content/news/NewsDetails';
import { LoginConnector } from '../modules/login/index';
import { Route, Router, Switch } from '../router/index';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginConnector} />
                <Route exact path="/content" component={Content} />
                <Route exact path="/news" component={News} />
                <Route exact path="/news/:news" component={NewsDetails} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/event/:event" component={EventDetail} />
            </Switch>
        </Router>
    )
}

export default Routes
