import React, { Component } from 'react';
import UpdateForm from './UpdateForm';

class Row extends Component {
  state = {
    showOpt: false,
    showUpd: false
  }
  offShowUpd = () => {
    this.setState({
      showUpd: false
    })
  }
  render() {
    const { _id, type, spent, saved } = this.props.entry;
    const updateForm = (
      <UpdateForm entry={this.props.entry} offShowUpd={this.offShowUpd}/>
    );
    const rows = () => {
      if(this.props.type === 'saved') {
        return (
          <div>
            <p className="text-green-300 text-lg">
              +RM { saved.toFixed(2) }
            </p>
            <p className="text-gray-300 text-sm">RM { spent.toFixed(2) } on { type }</p>
          </div>
        );
      }
      if(this.props.type === 'spent') {
        return (
          <div>
            <p className="text-red-500 text-lg">
              - RM { spent.toFixed(2) }
            </p>
            <p className="text-gray-300 text-sm">spent on { type }</p>
          </div>
        );
      }
    }
    return (
      <li key={ _id }>
        <div className="flex justify-between items-center my-2 px-3 py-1 bg-gray-900 border border-gray-500 rounded-md font-hairline">
          <div>
            { rows() }
          </div>
          <div>
            {
              !this.state.showOpt ? 
              <button onClick={ () => this.setState({ showOpt: true })}>
                <svg className="w-3 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/></svg>
              </button>
              :
              <ol className="flex text-white">
                <li className="ml-6">
                  <button onClick={() => this.setState({ showUpd: true })} className="p-1 bg-blue-500 rounded-full shadow-sm">
                    <svg className="w-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/></svg>
                  </button>
                  { this.state.showUpd ? updateForm : null}
                </li>
                <li className="ml-6">
                  <button onClick={() => this.props.clickedDelete(_id)} className="p-1 bg-orange-500 rounded-full shadow-sm">
                    <svg className="w-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/></svg>
                  </button>
                </li>
                <li className="ml-6">
                  <button className="p-1 bg-red-600 rounded-full shadow-sm" onClick={ () => this.setState({ showOpt: false })}>
                    <svg className="w-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                  </button>
                </li>
              </ol>
            }
          </div>
        </div>
      </li>
    )
  }
}

export default Row;