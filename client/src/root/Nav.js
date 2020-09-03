import React, { Component } from 'react'
import { connect } from 'react-redux';

import Install from '../root/Install';

class Nav extends Component {
  state = {
    showInstall: false
  }
  toggleShowInstall = () => {
    this.setState({ showInstall: !this.state.showInstall });
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated ? null : 
          <div className="flex justify-between content-center p-6 bg-gray-900 text-white">
            <p className="uppercase font-bold leading-tight text-xl">jdb</p>
            <div>
              <button onClick={() => this.toggleShowInstall()} className="flex justify-between items-center">
                <svg className="w-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <p>Install</p>
              </button>
              { this.state.showInstall ? <div className="text-gray-900"><Install toggleShowInstall={this.toggleShowInstall}/></div> : null }
            </div>
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
