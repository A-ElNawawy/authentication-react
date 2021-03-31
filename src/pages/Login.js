import React from 'react';

export default class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      username: "",
      password: ""
    }
  }
  
  render(){
    //console.log(this.state.username, this.state.password);
    return(
      <div className="Login">
        <h1>Please Log In</h1>
        <form>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => this.setState({username: e.target.value})} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => this.setState({password: e.target.value})} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}