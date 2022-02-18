import {Route, Redirect} from 'react-router-dom';

export default function RouteWrapper({component: Component, isPrivate, ...rest}) {
  const signed = false;

  if(signed && !isPrivate){
    <Redirect to="/dashboard" />
  }

  if(!signed && isPrivate){
    <Redirect to="/" />
  }

  return (
    <Route {...rest} render={props => (
      <Component {...props} />
    )} />
  )
}
