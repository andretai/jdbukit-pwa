import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Dash extends Component {
  state = {
    quotes: [
      '“The principles of wealth are true regarding large amounts and small amounts. It all begins with the smallest unit of currency.” ― Hendrith Smith',
      '“Savings, remember, is the prerequisite of investment.” ― Campbell McConnell',
      '“Mind your coin, you may never know when!” ― Ernest Agyemang Yeboah'
    ]
  }
  static propTypes = {
    auth: PropTypes.object.isRequired
  }
  render() {
    const { name } = this.props.auth;
    return (
      <div className="relative min-h-screen max-h-screen flex justify-center items-center font-hairline text-white">
        <button className="absolute inset-0 w-full h-full bg-black opacity-50"></button>
        <div className="relative min-h-screen max-h-screen flex justify-center items-center">
          <div className="px-3 text-center">
            <p className="text-3xl">Welcome, { name.split(' ')[0] }</p>
            <p className="py-3 italic text-lg">{ this.state.quotes[Math.floor(Math.random() * 3)] }</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(Dash);