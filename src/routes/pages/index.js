import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import details from './details';


const Pages = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/details`} />
            <Route path={`${match.url}/details`} component={details} />
            <Redirect to="/error" />

        </Switch>
    </div>
);

export default Pages;
