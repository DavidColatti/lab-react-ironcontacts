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
          <td><button onClick={() => this.deleteContact(i)}>Delete</button></td>
        </tr>
      )
    }
    return infoArray
  }

  deleteContact = (index) => {
    let actorsCopy = [...this.state.actors]
    actorsCopy.splice(index, 1)

    this.setState({
      actors: actorsCopy
    })
  }

  addRandomContact = () => {
    let randomNum = Math.floor(Math.random() * this.state.restOfActors.length)
    let randomPick = this.state.restOfActors[randomNum]
    
    let remainingCopy = [...this.state.restOfActors]
    remainingCopy.splice(randomNum, 1)

    let actorsCopy = [...this.state.actors]
    actorsCopy.push(randomPick)

    this.setState({
      actors: actorsCopy,
      restOfActors: remainingCopy
    })
  }

  sortName = () => {
    let actorsCopySorted = [...this.state.actors].sort((a, b) => {
      return a.name.localeCompare(b.name)
    })

    this.setState({
      actors: actorsCopySorted
    })
  }

  sortPopularity = () => {
    let actorsCopySorted = [...this.state.actors].sort((a, b) => {
        return b.popularity - a.popularity
      })

      this.setState({
        actors: actorsCopySorted
      })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort By Name</button>
        <button onClick={this.sortPopularity}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
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
