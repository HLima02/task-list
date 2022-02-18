import { Switch } from 'react-router-dom';
import Login from '../pages/Login';
import SingUp from '../pages/signUp';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/sign-up" component={SingUp}/>
    </Switch>
  )
}
