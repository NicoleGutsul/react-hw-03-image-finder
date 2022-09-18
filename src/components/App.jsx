import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";

class App extends Component {
  state = {
    inputFilter: '',
  };

  handleOnSubmit = inputFilter => {
    this.setState({ inputFilter});
  };

  render() {
    return(
      <>
         <SearchBar onSubmit={this.handleOnSubmit}/>
      
      </>
    )
  }
};

export default App;
