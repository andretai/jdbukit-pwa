import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { login, logout, register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class Auth extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    msg: null,
    // 
    clickedLogin: false,
    clickedRegister: false
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    // If error is changed, return the specified error.
    if(error !== prevProps.error) {
      error.id === 'LOGIN_FAIL' || error.id === 'REGISTER_FAIL' ? this.setState({ msg: error.msg.msg }) : this.setState({ msg: null });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    // Create user object.
    const user = {
      email, password
    };
    // Logs in user.
    this.props.login(user);
  }

  onSubmitRegister = e => {
    e.preventDefault();
    const { name, email, password } = this.state;

    // Create user object.
    const newUser = {
      name, email, password
    };

    // Attempt to register
    this.props.register(newUser);
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    // const LoggedIn = (
    //   <div>
    //     <p>Welcome, user { name }!</p>
    //     <button onClick={ () => {
    //       this.setState({ clickedLogin: false, clickedRegister: false })
    //       this.props.logout()
    //     } }>Logout</button>
    //   </div>
    // );
    const NotLoggedIn = (
      <div>
        <button onClick={ () => {
          this.setState({ clickedLogin: true })
          this.props.clearErrors()
        } }>Login</button>
        <button onClick={ () => {
          this.setState({ clickedRegister: true })
          this.props.clearErrors()
        } } className="ml-6">Register</button>
        {/* Login form */}
        {
          this.state.clickedLogin ?
          <div className="text-gray-900">
            <button onClick={ () => {
                this.setState({ clickedLogin: false })
                this.props.clearErrors()
              } } className="z-40 fixed inset-0 w-full h-full bg-black opacity-50">
            </button>
            <form className="z-50 fixed left-0 right-0 bg-white border border-gray-300 rounded-lg
              mx-6 my-24 px-3 py-6">
              <p className="mb-6 font-semibold text-xl">Login</p>
              { this.state.msg ? <p className="text-red-600">{ this.state.msg }</p> : null }
              {/* Email */}
              <div className="my-3">
                <label htmlFor="email" className="text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="block w-full mt-3 px-2 py-2 border border-gray-300 rounded-md focus:outline-none"
                  onChange={ this.onChange }
                />
              </div>
              {/* Password */}
              <div className="my-3">
                <label htmlFor="password" className="text-sm">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="block w-full mt-3 px-2 py-2 border border-gray-300 rounded-md focus:outline-none"
                  onChange={ this.onChange }
                />
              </div>
              {/* Buttons */}
              <div className="flex justify-center my-8">
                <button onClick={ this.onSubmitLogin } className="mx-3 px-3 py-1 bg-blue-600 rounded-md shadow-sm text-white">Login</button>
                <button onClick={ () => {
                    this.setState({ clickedLogin: false })
                    this.props.clearErrors()
                  } } className="mx-3 text-red-600">Cancel</button>
              </div>
              <p className="my-6 text-sm">
                Don't have an account? Register <button onClick={ () => { 
                    this.setState({ clickedLogin: false, clickedRegister: true })
                    this.props.clearErrors()
                  } } className="text-blue-600 underline">here</button>.
              </p>
            </form>
          </div>
          :
          null
        }
        {/* Register form */}
        {
          this.state.clickedRegister ?
          <div className="text-gray-900">
            <button onClick={ () => {
                this.setState({ clickedRegister: false })
                this.props.clearErrors()
              } } className="z-40 fixed inset-0 w-full h-full bg-black opacity-50">
            </button>
            <form className="z-50 fixed left-0 right-0 bg-white border border-gray-300 rounded-lg
              mx-6 my-12 px-3 py-6">
              <p className="mb-6 font-semibold text-xl">Registration</p>
              { this.state.msg ? <p className="text-red-600">{ this.state.msg }</p> : null }
              {/* Name */}
              <div className="my-3">
                <label htmlFor="name" className="text-sm">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="block w-full mt-3 px-2 py-2 border border-gray-300 rounded-md focus:outline-none"
                  onChange={ this.onChange }
                />
              </div>
              {/* Email */}
              <div className="my-3">
                <label htmlFor="email" className="text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="block w-full mt-3 px-2 py-2 border border-gray-300 rounded-md focus:outline-none"
                  onChange={ this.onChange }
                />
              </div>
              {/* Password */}
              <div className="my-3">
                <label htmlFor="password" className="text-sm">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="block w-full mt-3 px-2 py-2 border border-gray-300 rounded-md focus:outline-none"
                  onChange={ this.onChange }
                />
              </div>
              {/* Buttons */}
              <div className="flex justify-center my-8">
                <button onClick={ this.onSubmitRegister } className="mx-3 px-3 py-1 bg-blue-600 rounded-md shadow-sm text-white">Register</button>
                <button onClick={ () => {
                    this.setState({ clickedRegister: false })
                    this.props.clearErrors()
                  } } className="mx-3 text-red-600">Cancel</button>
              </div>
              <p className="my-6 text-sm">
                Have an account? Login <button onClick={ () => { 
                    this.setState({ clickedLogin: true, clickedRegister: false })
                    this.props.clearErrors()
                  } } className="text-blue-600 underline">here</button>.
              </p>
            </form>
          </div>
          :
          null
        }
      </div>
    );
    return (
      <div>
        { isAuthenticated ? null : NotLoggedIn }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});

export default connect(mapStateToProps, { login, logout, register, clearErrors })(Auth);