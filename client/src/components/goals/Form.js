import React, { Component } from 'react'

import { connect } from 'react-redux';
import { addGoal } from '../../actions/goalActions';

import PropTypes from 'prop-types';

class GForm extends Component {
  state = {
    goal: '',
    amount: 0,
    showAdd: false
  }
  static propTypes = {
    auth: PropTypes.object.isRequired
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit = e => {
    e.preventDefault();
    const { id } = this.props.auth;
    const newGoal = {
      userId: id,
      goal: this.state.goal,
      amount: this.state.amount
    };
    this.props.addGoal(newGoal);
    this.setState({ showAdd: false });
  }

  render() {
    const showAdd = this.state.showAdd;
    let entryForm;
    if(showAdd){
      entryForm = 
        <div>
          <button onClick={ () => this.setState({ showAdd: false }) } className="z-40 fixed inset-0 w-full h-full bg-black opacity-50">
          </button>
          <div className="z-50 fixed top-0 left-0 right-0 bg-gray-900 border border-gray-700 rounded-lg text-white
            mx-6 my-24 px-3 py-6">
            <p className="block mb-6 font-semibold">Set Goal</p>
            <form className="">
              <div className="my-3">
                <label htmlFor="goal" className="text-sm">Goal</label>
                <input
                  type="text"
                  id="goal"
                  name="goal"
                  placeholder="Goal"
                  className="block w-full mt-3 px-2 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-400 focus:outline-none"
                  onChange={ this.onChange }
                />
              </div>
              <div className="my-3">
                <label htmlFor="amount" className="text-sm">Amount</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="Amount"
                  className="block w-full mt-3 px-2 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-400 focus:outline-none"
                  onChange={ this.onChange }
                />
              </div>
              <div className="flex justify-center mt-8">
                <button onClick={ this.onSubmit } className="mx-3 px-3 py-1 bg-blue-600 rounded-md shadow-sm text-white">Set</button>
                <button onClick={ () => {
                    this.setState({ showAdd: false })
                  } } className="mx-3 text-red-600">Cancel</button>
              </div>
            </form>
          </div>
        </div>
    }
    return (
      <div>
        { entryForm }
        <button onClick={ () => this.setState({ showAdd: true }) } className="p-2 bg-teal-500 border border-gray-300 rounded-full shadow-sm focus:outline-none">
          <svg className="w-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9.27V0l6 11-4 6H7l-4-6L9 0v9.27a2 2 0 1 0 2 0zM6 18h8v2H6v-2z"/></svg>
        </button>
        <p className="text-center text-xs">+Goal</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  goal: state.goal
});

export default connect(mapStateToProps, { addGoal })(GForm);