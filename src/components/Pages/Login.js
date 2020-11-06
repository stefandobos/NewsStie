import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }
render() {
  return (
    <div className='bg-singUp'>
      <video src='/videos/video3.mov' autoPlay loop muted />
      <div className='container-login'>
        <div>
          <label className='label-1' htmlFor='email-adress'>Email</label>
          <input
            className='input'
            type='email'
            name='email-adress'
            id='email-adress'
            onChange={this.onEmailChange}
            />
        </div>
          <div>
            <label className='label-2' htmlFor='password'>Password</label>
            <input
              className='input'
              type='password'
              name='password'
              id='password'
              onChange={this.onPasswordChange}
              />
          </div>
          <div className="log-buttons">
                <input
                  onClick={this.onSubmitSignIn}
                  className="inp-signin"
                  type="submit"
                  value="Sign in"
                />
                <Link to='/register' className='reg--button'>Register</Link>
          </div>
      </div>
    </div>
  );
}
}