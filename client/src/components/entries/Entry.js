import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getEntries, deleteEntry } from '../../actions/entryActions';
import PropTypes from 'prop-types';

class Entry extends Component {
  componentDidMount() {
    this.props.getEntries();
  }
  clickedDelete = id => {
    this.props.deleteEntry(id);
  }
  render() {
    const { entries } = this.props.entry;
    return (
      <div>
        <p>total saved:
          {
            // array.reduce(function, initialValue)
            entries.length === 0 ? '' : entries.reduce((sum, item) => sum + item.saved, 0)
          }
        </p>
        <ol>
          {entries.map(({ _id, date, day, type, spent, saved }) => (
            <li key={ _id }>
              <p>{ date }</p>
              <p>{ day }</p>
              <p>type: { type }</p>
              <p>spent: { spent.toFixed(2) }</p>
              <p>saved: { saved.toFixed(2) }</p>
              <button onClick={ this.clickedDelete.bind(this, _id) } className="bg-red-500">delete entry number { _id }</button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

Entry.propTypes = {
  getEntries: PropTypes.func.isRequired,
  deleteEntry: PropTypes.func.isRequired,
  entry: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  entry: state.entry
});

export default connect(mapStateToProps, { getEntries, deleteEntry })(Entry);
