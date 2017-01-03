import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import User from './User'
import {browserHistory} from 'react-router';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      userId: ''
    }

     this.handleChange=this.handleChange.bind(this)
     this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleChange(field, event) {
    this.setState({
      [field]: event.target.value,
      loggedIn: true
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post('/api/sessions/login', {
      email: this.state.email,
      password: this.state.password //
    })
    .then(res => {
      this.setState({userId: res.data.userId})
    })

    //reset the state
    this.setState({
      email: '', 
      password: '', 
      loggedIn: false
    })

    //props.router.transitionTo(`/api/users/${this.state.userId}`)
    browserHistory.push('/login');

  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h1>Login</h1>
            <div className="form-group">
              <label>Email address</label>
              <input 
                onChange={this.handleChange.bind(this, 'email')} 
                value={this.state.email}
                type="email"
                className="form-control"
                placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                onChange={this.handleChange.bind(this,'password')}
                value={this.state.password}
                type="password"
                className="form-control"
                placeholder="Password"/>
            </div>
              <button type="submit" className="btn btn-primary">Login</button>
          </form>
          <br/>
          <div>
            <medium>Not a member? Sign Up here: 
              <Link className="sign-up" to={`/signup`}> Sign up</Link>
            </medium>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
