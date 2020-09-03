import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Foot from './Foot';
import Policy from './Policy';
import Install from './Install';
import Auth from '../components/auth/Auth';

class Home extends Component {
  state = {
    showPolicy: false,
    showInstall: false
  }
  static propTypes = {
    auth: PropTypes.object.isRequired
  }
  toggleShowPolicy = () => {
    this.setState({ showPolicy: !this.state.showPolicy });
  }
  toggleShowInstall = () => {
    this.setState({ showInstall: !this.state.showInstall });
  }
  render() {
    const { isAuthenticated, name } = this.props.auth
    const Loggedin = (
      <div>
        Welcome! { name }.
      </div>
    );
    const Notloggedin = (
      <div>
        <div className="px-6 pt-12 text-lg">
          <div className="py-12 border-b border-gray-300">
            <img src="/assets/images/bukit.png" alt="a mountain with clouds" className="w-1/3 mx-auto"/>
            <p className="pt-12">JDB is a progressive web app that lets you record spending, calculate savings and set up a goal to achieve.</p>
            <Auth />
          </div>
          <div className="py-12 border-b border-gray-300">
            <img src="/assets/images/jar.png" alt="a jar of coins" className="w-1/3 mx-auto"/>
            <p className="pt-12">Think of it as a jar of coins you're saving, whether for a rainy day or a new pair of shoes!</p>
          </div>
          <div className="py-12">
            <p className="italic text-center text-xl">"Sikit-sikit, lama-lama jadi bukit."</p>
          </div>
        </div>
        { this.state.showPolicy ? <Policy toggleShowPolicy={this.toggleShowPolicy}/> : null }
        { this.state.showInstall ? <Install toggleShowInstall={this.toggleShowInstall}/> : null }
        <Foot toggleShowPolicy={this.toggleShowPolicy} toggleShowInstall={this.toggleShowInstall}/>
      </div>
    );
    return (
      <div className="font-hairline">
        {
          isAuthenticated ? 
          Loggedin
          :
          Notloggedin
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Home);
