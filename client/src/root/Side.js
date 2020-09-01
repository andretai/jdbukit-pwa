import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import PropTypes from 'prop-types';

import Form from '../components/entries/Form';
import GForm from '../components/goals/Form';

class Side extends Component {

  static propTypes = {
    logout: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <nav className="flex justify-center min-h-screen py-3 bg-gray-900 shadow-md text-white">
          <ol>
            <li className="my-3">
              <button onClick={ () => this.props.switchPage(2)} className="p-2 bg-indigo-500 border border-gray-300 rounded-full shadow-sm focus:outline-none">
                <svg className="w-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"/></svg>
              </button>
              <p className="text-center text-xs">Home</p>
            </li>
            <li className="my-3">
              <button onClick={ () => this.props.switchPage(0)} className="p-2 bg-blue-500 border border-gray-300 rounded-full shadow-sm focus:outline-none">
                <svg className="w-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"/></svg>
              </button>
              <p className="text-center text-xs">Entries</p>
            </li>
            <li className="my-3">
              <button onClick={ () => this.props.switchPage(1)} className="p-2 bg-red-500 border border-gray-300 rounded-full shadow-sm focus:outline-none">
                <svg className="w-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5 5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z"/></svg>
              </button>
              <p className="text-center text-xs">Goals</p>
            </li>
            <li className="my-3"><Form/></li>
            <li className="my-3"><GForm/></li>
          </ol>
          <div className="fixed bottom-0 my-3">
            <button onClick={ () => this.props.logout()} className="p-2 bg-red-600 border border-gray-300 rounded-full shadow-sm focus:outline-none">
              <svg className="w-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 7l1.44 2.16c.31.47 1.01.84 1.57.84H17V8h-3l-1.44-2.16a5.94 5.94 0 0 0-1.4-1.4l-1.32-.88a1.72 1.72 0 0 0-1.7-.04L4 6v5h2V7l2-1-3 14h2l2.35-7.65L11 14v6h2v-8l-2.7-2.7L11 7zm1-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
            </button>
            <p className="text-center text-xs">Logout</p>
          </div>
        </nav>
      </div>
    );
  };
};

export default connect(null, { logout })(Side);
