import React, { Component } from 'react'

import { connect } from 'react-redux';
import { addEntry } from '../../actions/entryActions';

class Form extends Component {
  state = {
    type: '',
    spent: 0,
    saved: 0
  }
  onChange = e => {
    if(e.target.name === 'spent'){
      if(e.target.value > 1) {
        this.setState({ saved: (1-(e.target.value-Math.trunc(e.target.value))) })
      } else {
        this.setState({ saved: (1-e.target.value) })
      }
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit = e => {
    e.preventDefault();
    const newEntry = {
      type: this.state.type,
      spent: this.state.spent,
      saved: this.state.saved
    };
    console.log(newEntry)
    this.props.addEntry(newEntry);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="type" className="block">Type</label>
          <input 
            type="text"
            id="type"
            name="type"
            onChange={ this.onChange }
          />
          <label htmlFor="spent" className="block">Spent</label>
          <input 
            type="number"
            id="spent"
            name="spent"
            onChange={ this.onChange }
          />
          <button onClick={ this.onSubmit } className="block bg-green-500">Add Entry</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  entry: state.entry
});

export default connect(mapStateToProps, { addEntry })(Form);
