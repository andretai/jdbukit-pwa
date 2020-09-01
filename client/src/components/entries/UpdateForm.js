import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEntry } from '../../actions/entryActions';

class UpdateForm extends Component {
  state = {
    type: '',
    spent: 0,
    saved: 0,
  }
  componentDidMount() {
    this.setState({
      type: this.props.entry.type,
      spent: this.props.entry.spent,
      saved: this.props.entry.saved
    })
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
    const updatedEntry = {
      ...this.props.entry,
      type: this.state.type,
      spent: this.state.spent,
      saved: this.state.saved
    };
    this.props.updateEntry(updatedEntry);
    this.props.offShowUpd();
  }
  render() {
    return (
      <div>
        <button onClick={ () => this.props.offShowUpd } className="z-40 fixed inset-0 w-full h-full bg-black opacity-50">
        </button>
        <div className="z-50 fixed top-0 left-0 right-0 bg-white border border-gray-300 rounded-lg text-gray-800
          mx-6 my-24 px-3 py-6">
          <p className="block mb-6 font-semibold">Add an Entry</p>
          <form className="">
            <div className="my-3">
              <label htmlFor="type" className="text-sm">Description</label>
              <input
                type="text"
                id="type"
                name="type"
                placeholder="Description"
                value={this.state.type}
                className="block w-full mt-3 px-2 py-2 border border-gray-300 rounded-md focus:outline-none"
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
                value={this.state.spent}
                className="block w-full mt-3 px-2 py-2 border border-gray-300 rounded-md focus:outline-none"
                onChange={ this.onChange }
              />
            </div>
            <div className="flex justify-center mt-8">
              <button onClick={ this.onSubmit } className="mx-3 px-3 py-1 bg-blue-600 rounded-md shadow-sm text-white">Save</button>
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

export default connect(mapStateToProps, { updateEntry })(UpdateForm);