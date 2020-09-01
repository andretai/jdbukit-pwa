import React, { Component } from 'react'
import Auth from '../components/auth/Auth';
import { connect } from 'react-redux';

class Nav extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated ? null : 
          <div className="flex justify-between content-center p-6">
            <p className="uppercase font-bold leading-tight text-xl">jdb</p>
            <Auth />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {  })(Nav);
