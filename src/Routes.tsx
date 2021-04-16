import { Switch, Route, Redirect } from 'react-router-dom';
//views
import { Overview } from 'views/Overview';
import { Tickets } from 'views/Tickets';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/overview">
        <Overview />
      </Route>
      <Route path="/tickets">
        <Tickets />
      </Route>
      <Route path="/">
        <Redirect to="/overview" />
      </Route>
    </Switch>
  );
};
