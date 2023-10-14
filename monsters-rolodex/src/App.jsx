import React, { Component } from "react";

import CardList from './components/card-list/card-list'
import Search from './components/search-box/search-box'
import './App.css'

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  onSearchChange = (e) => {
     this.setState({ searchField: e.target.value})
  }

  render(){
    const {monsters, searchField} = this.state
    const filteredItems = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )


    return (
      <div className="App">
        <h1 className="title">Monters Rolodex</h1>
        <Search placeholder={'Search monsters'} onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredItems} /> 
      </div>
    )
  }
}

export default App