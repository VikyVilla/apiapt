import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import electric from './electric';


const Pages = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/electric`} />
            <Route path={`${match.url}/electric`} component={electric} />
            <Redirect to="/error" />

        </Switch>
    </div>
);

export default Pages;
