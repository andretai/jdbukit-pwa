import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Home extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  }
  render() {
    const { isAuthenticated, name } = this.props.auth
    const Loggedin = (
      <div>
        Welcome! { name }.
      </div>
    );
    const Notloggedin = (
      <div className="px-6 pt-12 text-lg">
        <div className="py-24 border-b border-gray-300">
          <img src="/assets/images/bukit.png" alt="a mountain with clouds" className="w-1/3 mx-auto"/>
          <p className="pt-12">JDB is a progressive web app that lets you record spending, calculate savings and set up a goal to achieve.</p>
        </div>
        <div className="py-24 border-b border-gray-300">
          <img src="/assets/images/jar.png" alt="a jar of coins" className="w-1/3 mx-auto"/>
          <p className="pt-12">Think of it as a jar of coins you're saving, whether for a rainy day or a new pair of shoes!</p>
        </div>
        <div className="p-6 flex justify-center content-center">
          <div className="flex text-sm">
            <p>Designed by </p>
            <a href="https://www.linkedin.com/in/andre-tai-534396145/" target="_blank" rel="noopener noreferrer" className="mx-1 underline">Andre</a>
          </div>
        </div>
      </div>
    );
    return (
      <div>
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
