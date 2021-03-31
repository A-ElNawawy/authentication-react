import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

export default class App extends React.Component{
  setToken(token){
  }

  getToken(){

  }
  render(){
    const token = this.getToken();
    if(!token) {
      return <Login setToken={this.setToken} />
    }
    return (
      <div className="App">
        <div className="wrapper">
          <h1>Application</h1>
          <BrowserRouter>
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }



};