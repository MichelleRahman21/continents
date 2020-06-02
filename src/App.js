import React {Component} from 'react';
import {SearchBox} from './components/search-box/search-box';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      countries: [],
      searchField: ''
    };
  }
  componentDidMount
}
onSearchChange = event => {
  this.setState({ searchField: event.target.value});
}

render() {
  const {countries, searchField} = this.state;

}

return (
    <div className="App">
    <h1> Continents </h1>
    <SearchBox onSearchChange={this.onSearchChange} />
    
    </div>
  );
}

export default App;
