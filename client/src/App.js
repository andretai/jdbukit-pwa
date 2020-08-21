import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import Entry from './components/entries/Entry';
import Form from './components/entries/Form';

class App extends Component {
  // state = {
  //   entries: [],
  //   type: '',
  //   spent: 0,
  //   saved: 0,
  //   sum: 0
  // }
  // getEntries() {
  //   axios.get('/api/entries')
  //     .then(res => {
  //       res.data.forEach(entry => {
  //         this.setState({
  //           entries: [...this.state.entries, FORMAT_ENTRY(entry)],
  //           sum: this.state.sum + entry.saved
  //         });
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }
  // setSpent = ( newValue ) => {
  //   let spent = newValue;
  //   let saved = 0;
  //   if (spent > 1) {
  //     saved = 1 - (spent - Math.trunc(spent));
  //   } else {
  //     saved = 1 - spent;
  //   }
  //   this.setState({
  //     spent: spent,
  //     saved: saved
  //   });
  // }
  // submitForm = () => {
  //   const entry = {
  //     type: this.state.type,
  //     spent: this.state.spent,
  //     saved: this.state.saved
  //   }
  //   axios.post('/api/entries/add', entry)
  //     .then(res => {
  //       this.setState({
  //         entries: [...this.state.entries, FORMAT_ENTRY(res.data)],
  //         sum: this.state.sum + entry.saved
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }
  render() {
    return (
      <Provider store={store}>
        <Entry/>
        <Form />
      </Provider>
      // <div>
      //   <p>JdBukit.com</p>
      //   {/* <p>Sum: { this.state.sum }</p>
      //   <ol>
      //     {this.state.entries}
      //   </ol>
      //   <label htmlFor="type">Type:</label>
      //   <input type="text" name="type" value={ this.state.type } onChange={ (e) => this.setState({ type: e.target.value }) }></input>
      //   <label htmlFor="spent">Spent</label>
      //   <input type="number" name="spent" value={ this.state.spent } onChange={ (e) => this.setSpent(e.target.value) } ></input>
      //   <button type="submit" onClick={ this.submitForm }>Add</button> */}
      //   <Entry />
      // </div>
    );
  }
}

export default App;