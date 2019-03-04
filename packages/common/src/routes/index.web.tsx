import React from 'react';
import { LoginConnector } from '../controllers/LoginConnector';
import EventDetail from '../modules/content/events/EventDetails';
import Events from '../modules/content/events/Events';
import Content from '../modules/content/index';
import News from '../modules/content/news/News';
import NewsDetails from '../modules/content/news/NewsDetails';
import { Route, Router, Switch } from '../router/index';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginConnector} />
                <Route exact path="/" component={Content} />
                <Route exact path="/news" component={News} />
                <Route exact path="/news/:news" component={NewsDetails} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/events/:event" component={EventDetail} />
            </Switch>
        </Router>
    )
}

export default Routes
