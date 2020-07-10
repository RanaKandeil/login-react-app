import React, { Component } from 'react';
import ListUsers from './components/ListUsers/listUsers';
import Login from './components/Login/Login';
import Register from './components/Login/register';
import {BrowserRouter, Route, Switch, BrowserHistory } from 'react-router-dom';
import UserDetails from './components/ListUsers/UserDetails/userDetails';


class App extends Component{
 
  render(){
    return(
      <BrowserRouter>
      <div className="App container">
        <Switch>
        <Route exact path="/" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/listUsers" component={ListUsers} />
          <Route name="/UserDetails" path="/UserDetails/:userId" component={UserDetails} />
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}
export default App;