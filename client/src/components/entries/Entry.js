import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getEntries, deleteEntry } from '../../actions/entryActions';
import { getGoals } from '../../actions/goalActions';
import PropTypes from 'prop-types';

import Row from './Row';
import GoalRow from './GoalRow';

class Entry extends Component {
  state = {
    page: 0,
    showOpt: false
  }
  static propTypes = {
    getEntries: PropTypes.func.isRequired,
    deleteEntry: PropTypes.func.isRequired,
    entry: PropTypes.object.isRequired,
  };
  componentDidMount() {
    document.getElementById('default').focus();
    const { isAuthenticated, id } = this.props.auth;
    if(isAuthenticated) {
      this.props.getEntries(id);
      this.props.getGoals(id);
    }
  }
  turnPage = (num) => {
    this.setState({ page: num });
  }
  clickedDelete = id => {
    this.props.deleteEntry(id);
  }
  render() {
    const { entries } = this.props.entry;
    const { goals } = this.props.goal;
    const { isAuthenticated } = this.props.auth;
    let dateCat = '';
    const dateString = (oriDate, newDate) => {
      if(oriDate !== newDate) {
        dateCat = newDate
        return (
          <div>
            {
              this.state.page !== 2 ?
              <p className="py-1 font-hairline text-center text-sm">{ dateCat }</p>
              :
              null
            }                                
          </div>
        );
      } else {
        return null;
      }
    };
    const Savedpage = (
      <div className="flex items-baseline justify-center my-3">
        <p className="font-bold text-gray-400 text-sm">RM</p>
        <p className="font-hairline text-blue-300 text-center text-6xl">
          {
            // array.reduce(function, initialValue)
            entries.length === 0 ? '' : entries.reduce((sum, item) => sum + item.saved, 0).toFixed(2)
          }
        </p>
      </div>
    );
    const Spentpage = (
      <div className="flex items-baseline justify-center my-3">
        <p className="font-bold text-gray-600 text-sm">RM</p>
        <p className="font-hairline text-red-600 text-center text-6xl">
          {
            // array.reduce(function, initialValue)
            entries.length === 0 ? '' : entries.reduce((sum, item) => sum + item.spent, 0).toFixed(2)
          }
        </p>
      </div>
    );
    const Goalpage = (
      <div className="flex items-baseline justify-center my-3">
        <p className="font-bold text-gray-600 text-sm">RM</p>
        {
          goals.length !== 0 ?
          <p className="font-hairline text-yellow-500 text-center text-6xl">
            { goals[0].amount.toFixed(2) }
          </p>
          :
          <p>0.00</p>
        }
      </div>
    );
    const Loggedin = (
      <div className="relative min-h-screen max-h-screen overflow-auto">
        <div>
          { 
            this.state.page === 0 ? <p className="font-hairline text-lg">You've saved.</p> : null
          }
          {
            this.state.page === 1 ? <p className="font-hairline text-lg">You've spent.</p> : null
          }
          {
            this.state.page === 2 ? <p className="font-hairline text-lg">Your current goal.</p> : null
          }
        </div>
        <div>
          { 
            this.state.page === 0 ? Savedpage : null
          }
          {
            this.state.page === 1 ? Spentpage : null
          }
          {
            this.state.page === 2 ? Goalpage : null
          }
        </div>
        <div className="grid grid-cols-3 my-3 border border-gray-600 rounded-md shadow-sm overflow-hidden text-gray-200 text-xs">
          <button id="default" onClick={ () => this.turnPage(0) } className="px-4 py-1 bg-gray-700 border-r border-gray-600 focus:outline-none focus:bg-gray-800">Saved</button>
          <button onClick={ () => this.turnPage(1) } className="px-4 py-1 bg-gray-700 border-r border-gray-600 focus:outline-none focus:bg-gray-800">Spent</button>
          <button onClick={ () => this.turnPage(2) } className="px-4 py-1 bg-gray-700 focus:outline-none focus:bg-gray-800">Goals</button>
        </div>
        <div className="">
          <ol>
            {entries.map(({ _id, date, day, type, spent, saved }) => (
              <div key={_id}>
                { dateString(dateCat, date) }
                { 
                  this.state.page === 0 ? <Row type={'saved'} clickedDelete={this.clickedDelete} entry={{ _id, date, day, type, spent, saved }}/> : null
                }
                {
                  this.state.page === 1 ? <Row type={'spent'} clickedDelete={this.clickedDelete} entry={{ _id, date, day, type, spent, saved }}/> : null
                }     
              </div>
            ))}
            {
              this.state.page === 2 ? 
              <div>
                {
                  goals.length !== 0 ?
                    <GoalRow entry={ entries } saved={ entries.length === 0 ? '' : entries.reduce((sum, item) => sum + item.saved, 0).toFixed(2) } goal={ goals.find(goal => goal.status === false) }/>
                  :
                  null
                }
              </div> 
              : null
            } 
          </ol>
        </div>
      </div>
    );
    return (
      <div className="relative px-3 py-6 text-white">
        <button className="absolute inset-0 w-full h-full bg-black opacity-75"></button>
        {
          isAuthenticated ? Loggedin : <p>Log in or Register to Start Saving!</p>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  entry: state.entry,
  goal: state.goal
});

export default connect(mapStateToProps, { getEntries, deleteEntry, getGoals })(Entry);
