import React, { Component } from 'react';
import './App.css';
import data from './data/users.json';
import { CardList } from './components/cardlist/cardlist';
import { SearchBox } from './components/search-box/search-box.component.jsx';

class App extends Component {  
  constructor() {
    super();
    
    this.state = {
      users: [],
      searchString: ''
    };
  }

  handleChange = (e) => {
    this.setState({searchString: e.target.value});
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => this.setState({users: data}));
  }

  render() {
    const { searchString, users } = this.state;   

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search Monsters' handleChange={this.handleChange} />

        <CardList users={users.filter(user => {
          let username = user.name.toLowerCase();
          let search = searchString.toLowerCase();
          return username.includes(search);
        })} 

        />
      </div>
    );
  }
}

export default App;
