import React, { Component } from 'react'
import UpdateForm from './UpdateForm';

class Row extends Component {
  state = {
    showOpt: false,
    showUpd: false
  }
  offShowUpd = () => {
    this.setState({ showUpd: false });
  }
  render() {
    const goal = this.props.goal;
    const updateForm = (
      <UpdateForm goal={goal} offShowUpd={this.offShowUpd}/>
    );
    return (
      <div className="my-2 px-3 py-1 bg-gray-900 border border-gray-500 rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex items-baseline">
            <p className="text-sm">RM</p>
            <p className="text-xl">{ goal.amount.toFixed(2) }</p>
          </div>            
          <div className="flex">
            <div className="mx-3 my-2 text-xs">
              {
                goal.status ?
                <p className="text-green-500">Reached</p>
                :
                <p className="text-red-500">Incomplete</p>
              }
            </div>
            <button onClick={ () => this.setState({ showOpt: !this.state.showOpt })} className="focus:outline-none">
              <svg className="w-3 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/></svg>
            </button>          
          </div>
          
        </div>
        {
          this.state.showOpt ?
          <ol className="my-2 text-white">
            <li><p>{ goal.goal }</p></li>
            <li className="flex justify-end my-2 text-xs">
              <button onClick={() => this.setState({ showUpd: true })} className="ml-3 px-2 py-1 bg-blue-500 rounded-full shadow-sm focus:outline-none">
                Update
              </button>
              { this.state.showUpd ? updateForm : null }
              <button onClick={() => this.props.clickedDelete(goal._id)} className="ml-3 px-2 py-1 bg-orange-500 rounded-full shadow-sm focus:outline-none">
                Delete
              </button>
            </li>
          </ol>
          :
          null
        }
      </div>
    )
  }
}

export default Row;