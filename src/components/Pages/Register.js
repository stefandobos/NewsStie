import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    return (
      <div className='bg-singUp'>
        <video src='/videos/video3.mov' autoPlay loop muted />
        <div className='container-register'>
          <div className="">
            <label className="" htmlFor="name">Name</label>
              <input
                className="input"
                type="text"
                name="name"
                id="name"
                onChange={this.onNameChange}
              />
          </div>
          <div className="">
            <label className="" htmlFor="email-address">Email</label>
              <input
              className="input"
              type="email"
              name="email-address"
              id="email-address"
              onChange={this.onEmailChange}
              />
          </div>
          <div className="">
            <label className="" htmlFor="password">Password</label>
              <input
              className="input"
              type="password"
              name="password"
              id="password"
              onChange={this.onPasswordChange}
              />
          </div>
          <div className="reg-buttons">
            <input
            onClick={this.onSubmitSignIn}
            className="inp-register"
            type="submit"
            value="Register"
            />
            <Link to='/login' className='log--button'>login</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;