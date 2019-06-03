import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import surveyList from "./survey";
import surveyDetail from "./survey-detail";

const Applications = ({ match }) => (
  <div className="dashboard-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/survey`} />
      <Route
        path={`${match.url}/survey/:surveyid`}
        component={surveyDetail}
        isExact
      />
      <Route path={`${match.url}/survey`} component={surveyList} isExact />
      <Redirect to="/error" />
    </Switch>
  </div>
);

export default Applications;
