import React, { Component } from 'react';
import axios from 'axios';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPW: ''
    }
  }

  handleChange(field, event) {
    this.setState({
      [field]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post('/api/users', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password //
    })
    .then(res => res.data)
    .then(user => console.log(user.data))
  }

  render() { 

      return (
        <div className='row'>
          <div className="col-md-4 col-md-offset-4">
            <h2>Sign Up</h2>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label htmlFor="name">First Name</label>
                <input type='text'
                       value={this.state.name}
                       onChange={this.handleChange.bind(this, 'name')}
                       className="form-control"
                       placeholder='Name'/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type='text'
                       value={this.state.email}
                       onChange={this.handleChange.bind(this, 'email')}
                       className="form-control"
                       placeholder='Email'/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type='text'
                       value={this.state.password}
                       onChange={this.handleChange.bind(this, 'password')}
                       className="form-control"
                       placeholder='Password'/>
              </div>
              <div className="form-group">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type='text'
                       value={this.state.confirmPW}
                       onChange={this.handleChange.bind(this, 'confirmPW')}
                       className="form-control"
                       placeholder='Confirm Password'/>
              </div>
              <div className='button-container'>
                <button type="submit" className="btn btn-primary">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
}

export default SignUpForm
