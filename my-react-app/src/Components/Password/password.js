import React, {Component} from 'react';


class Password extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: "",
      password: ""
    }
  }

  handlePasswordChange = () => {
    const {user, pass} = event.target

    this.setState({
        username: user.value,
        password: pass.value
    })

  }

  handleLogInSubmit = () => {
    event.preventDefault();
    this.setState({
      username: "",
      password: ""
    })
  }

  render(){
    return(
      <form>
      <div className="form-group">
        <label for="username">Username</label>
        <input type="text" className="form-control" id="username" value={this.state.username} onChange={this.handlePasswordChange} aria-describedby="userword" placeholder="Username"/>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password"/>
      </div>
      <button type="submit" className="btn btn-primary" onChange={this.handleLogInSubmit}>Submit</button>
    </form>

    )








  }







}

export default Password;