import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends Component {

  state = {
    actors: contacts.splice(0, 5),
    restOfActors: contacts
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

  addRandomContact = () => {
    let randomNum = Math.floor(Math.random() * this.state.restOfActors.length)
    let randomPick = this.state.restOfActors[randomNum]
    
    let remainingCopy = [...this.state.restOfActors]
    remainingCopy.splice(randomNum, 1)
    console.log(remainingCopy)
    let actorsCopy = [...this.state.actors]
    actorsCopy.push(randomPick)

    this.setState({
      actors: actorsCopy,
      restOfActors: remainingCopy
    })
  }


  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button>Sort By Name</button>
        <button>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
          {this.getInfo()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
