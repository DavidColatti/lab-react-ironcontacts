import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends Component {

  state = {
    actors: contacts.slice(0,5)
  }

  getInfo() {
    let actors = this.state.actors
    let infoArray = []

    for (let i = 0; i < actors.length; i++) {
      infoArray.push(
        <tr>
          <td><img src={actors[i].pictureUrl} class="photo"/></td>
          <td>{actors[i].name}</td>
          <td>{actors[i].popularity}</td>
        </tr>
      )
    }
    
    return infoArray
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          {this.getInfo()}
        </table>
      </div>
    );
  }
}

export default App;
