import React, { Component } from 'react'

import { connect } from 'react-redux';
import { getGoals, deleteGoal } from '../../actions/goalActions';
import PropTypes from 'prop-types';

import Row from './Row';

class Goal extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    goal: PropTypes.object.isRequired,
    getGoals: PropTypes.func.isRequired,
    deleteGoal: PropTypes.func.isRequired
  }
  componentDidMount() {
    const { isAuthenticated, id } = this.props.auth;
    if(isAuthenticated) {
      this.props.getGoals(id);
    }
  }
  clickedDelete = id => {
    this.props.deleteGoal(id);
  }
  render() {
    const { goals } = this.props.goal;
    const { isAuthenticated } = this.props.auth;
    const tiers = tier => {
      let css = ''
      switch(tier) {
        case 0: css = 'p-1 bg-gray-500 border border-gray-100 rounded-full'; break;
        case 1: css = 'p-1 bg-green-500 border border-gray-100 rounded-full'; break;
        case 2: css = 'p-1 bg-yellow-500 border border-gray-100 rounded-full'; break;
        default: break;
      }
      return css;
    }
    const board = (tier, count) => {
      let arr = []
      for (let index = 0; index < count; index++) {
        arr.push(
          <button className={ tiers(tier) }>
            <svg className="w-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
          </button>
        );
      }
      return arr;
    }
    const Loggedin = (
      <div className="relative min-h-screen max-h-screen overflow-auto">
        <div>
          <div>
            <p className="uppercase text-center">achievements</p>
            <p className="py-1">Tier 1</p>
            <div className="grid grid-cols-7 row-gap-3 pb-3 border-b text-gray-500 rounded-md text-center">
              {
                board(0, 5).map(x => <div>{x}</div>)
              }
            </div>
            <p className="py-1">Tier 2</p>
            <div className="grid grid-cols-7 row-gap-3 pb-3 border-b text-gray-500 rounded-md text-center">
              {
                board(1, 3).map(x => <div>{x}</div>)
              }
            </div>
            <p className="py-1">Tier 3</p>
            <div className="grid grid-cols-7 row-gap-3 pb-3 border-b text-gray-500 rounded-md text-center">
              {
                board(2, 2).map(x => <div>{x}</div>)
              }
            </div>
          </div>
          <p className="py-3 uppercase text-center">goals</p>
          {
            goals ? 
            <ol className="list-none">
              {
                goals.map(({ _id, goal, amount, status, date }) => (
                  <li key={_id}>
                    <Row clickedDelete={this.clickedDelete} goal={ { _id, goal, amount, status, date } } goals={ goals }/>
                  </li>
                ))
              }
            </ol>
            :
            <p>Set up a goal by clicking the '+Goal' button.</p>
          }
        </div>
      </div>
    );
    return (
      <div className="relative px-3 py-6 font-hairline text-white">
        <button className="absolute inset-0 w-full h-full bg-black opacity-75"></button>
        {
          isAuthenticated ? Loggedin : <p>Log in or Register to Start Saving!</p>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  goal: state.goal
});

export default connect(mapStateToProps, { getGoals, deleteGoal })(Goal);