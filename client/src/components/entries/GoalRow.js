import React, { Component } from 'react'

class GoalRow extends Component {
  state = {
    showOpt: false
  }
  parseDates = (entries, saved, amount) => {
    let arr = []
    entries.forEach(entry => {
      arr = [...arr, new Date(entry.date)]
    });
    arr = [...new Set(arr)];
    const perDay = (saved / arr.length);
    const perMonth = perDay * 30;
    const perYear = perMonth * 12;
    return (
      <div>
        <p>You save rm { perDay.toFixed(2) } per day.</p>
        <p>You will reach your goal in approximately</p>
        <div className="grid grid-cols-3 my-3 text-center">
          <p>{ Math.trunc((amount - saved) / perDay) } day(s).</p>
          <p>{ ((amount - saved) / perMonth).toFixed(1) } month(s).</p>
          <p>{ ((amount - saved) / perYear).toFixed(1) } year(s).</p>
        </div>
      </div>
    );
  }
  render() {
    const { goal, amount } = this.props.goal;
    const saved = this.props.saved;
    const entries = this.props.entry;
    return (
      <div className="font-hairline">
        <div className="pb-3 border-b border-gray-500">
          <p className="font-semibold">Description</p>
          <p>{ goal }</p>
        </div>
        <div className="py-3 border-b border-gray-500">
          <p className="font-semibold">Your progress</p>
          <div className="flex justify-end items-baseline">
            <p className="text-4xl">{ (saved / amount * 100).toFixed(2) }</p>
            <p>% towards goal.</p>
          </div>
          <div className="flex justify-start items-baseline">
            <p className="text-sm">RM</p>
            <p className="text-blue-500 text-4xl">{ saved }</p>
          </div>
          <div className="flex justify-end items-baseline">
            <p className="text-sm">of RM</p>
            <p className="text-green-500 text-4xl">RM{ amount.toFixed(2) }</p>
          </div>
        </div>
        <div className="py-3">
          <p className="font-semibold">Statistics</p>
          { this.parseDates(entries, saved, amount) }
        </div>
      </div>
    );
  }
}

export default GoalRow;