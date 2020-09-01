import React, { Component } from 'react'

import { connect } from 'react-redux';
import { addEntry } from '../../actions/entryActions';

import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    type: '',
    spent: 0,
    saved: 0,
    showAdd: false
  }
  static propTypes = {
    auth: PropTypes.object.isRequired
  }
  onChange = e => {
    if(e.target.name === 'spent'){
      const spent = e.target.value;
      if(e.target.value > 1) {
        this.setState({ saved: (spent % 1 === 0) ? 0 : (1-(spent-Math.trunc(spent))) })
      } else {
        this.setState({ saved: (1-spent) })
      }
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit = e => {
    e.preventDefault();
    const { id } = this.props.auth;
    const newEntry = {
      userId: id,
      type: this.state.type,
      spent: this.state.spent,
      saved: this.state.saved
    };
    this.props.addEntry(newEntry);
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
            <p className="block mb-6 font-semibold">Add Entry</p>
            <form className="">
              <div className="my-3">
                <label htmlFor="type" className="text-sm">Description</label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  placeholder="Description"
                  className="block w-full mt-3 px-2 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-400 focus:outline-none"
                  onChange={ this.onChange }
                />
              </div>
              <div className="my-3">
                <label htmlFor="spent" className="text-sm">Amount</label>
                <input
                  type="number"
                  id="spent"
                  name="spent"
                  placeholder="Amount"
                  className="block w-full mt-3 px-2 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-400 focus:outline-none"
                  onChange={ this.onChange }
                />
              </div>
              <div className="flex justify-center mt-8">
                <button onClick={ this.onSubmit } className="mx-3 px-3 py-1 bg-blue-600 rounded-md shadow-sm text-white">Save</button>
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
        <button onClick={ () => this.setState({ showAdd: true }) } className="p-2 bg-green-500 border border-gray-300 rounded-full shadow-sm focus:outline-none">
          <svg className="w-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 9h-3v2h3v3h2v-3h3V9h-3V6h-2v3zM0 3h10v2H0V3zm0 8h10v2H0v-2zm0-4h10v2H0V7zm0 8h10v2H0v-2z"/></svg>
        </button>
        <p className="text-center text-xs">+Entry</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  entry: state.entry
});

export default connect(mapStateToProps, { addEntry })(Form);
