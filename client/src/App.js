import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';

import Nav from './root/Nav';
import Side from './root/Side';
import Home from './root/Home';
import Entry from './components/entries/Entry';
import Goal from './components/goals/Goal';
import Dash from './components/dash/Dash';

class App extends Component {
  state = {
    page: 2
  }
  static propTypes = {
    auth: PropTypes.object.isRequired
  }
  switchPage = num => {
    this.setState({ page: num });
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="main">
          {
            isAuthenticated ? 
            <div className="app">
              <Nav/>
              <div className="content flex">
                <div className="w-1/6">
                  <Side switchPage={ this.switchPage }/>
                </div>
                <div className="w-5/6">
                  {
                    this.state.page === 0 ? <Entry/> : null
                  }
                  {
                    this.state.page === 1 ? <Goal/> : null
                  }
                  {
                    this.state.page === 2 ? <Dash/> : null
                  }
                </div>
              </div>
            </div> 
            : 
            <div>
              <Nav/>
              <Home />
            </div>
          }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth 
});

export default connect(mapStateToProps, {})(App);