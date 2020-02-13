import React, { Component } from "react";
import "./App.css";
import { CardList } from "./component/card-list/card-list.component.jsx";
import Search from "./component/search/search.component.jsx";

class App extends Component {
  state = {
    monsters: [],
    searchFilter: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleSearch = e => {
    this.setState({ searchFilter: e.target.value });
  };

  render() {
    const { monsters, searchFilter } = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFilter.toLowerCase())
    );
    return (
      <div className="App">
        <h1
          style={{
            paddingTop: "50px",
            fontFamily: "Lacquer",
            color: "green"
          }}
        >
          Monster Mania!!!
        </h1>
        <Search handleSearch={this.handleSearch} />
        <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
