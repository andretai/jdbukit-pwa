import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateGoal } from '../../actions/goalActions';
import PropTypes from 'prop-types';

class UpdateForm extends Component {
  state = {
    goal: '',
    amount: 0,
    status: false,
  }
  static propTypes = {
    updateGoal: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.setState({
      goal: this.props.goal.goal,
      amount: this.props.goal.amount,
    });
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit = e => {
    e.preventDefault();
    const updatedGoal = {
      ...this.props.goal,
      goal: this.state.goal,
      amount: this.state.amount,
    }
    this.props.updateGoal(updatedGoal);
    this.props.offShowUpd();
  }
  render() {
    return (
      <div>
        <button onClick={ () => this.props.offShowUpd() } className="z-40 fixed inset-0 w-full h-full bg-black opacity-50">
        </button>
        <div className="z-50 fixed top-0 left-0 right-0 bg-gray-900 border border-gray-700 rounded-lg text-white
          mx-6 my-24 px-3 py-6">
          <p className="block mb-6 font-semibold">Update Goal</p>
          <form className="">
            <div className="my-3">
              <label htmlFor="goal" className="text-sm">Goal</label>
              <input
                type="text"
                id="goal"
                name="goal"
                placeholder="Goal"
                value={this.state.goal}
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
                value={this.state.amount}
                className="block w-full mt-3 px-2 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-400 focus:outline-none"
                onChange={ this.onChange }
              />
            </div>
            <div className="flex justify-center mt-8">
              <button onClick={ this.onSubmit } className="mx-3 px-3 py-1 bg-blue-600 rounded-md shadow-sm text-white">Set</button>
              <button onClick={ () => this.props.offShowUpd() } className="mx-3 text-red-600">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps, { updateGoal })(UpdateForm);