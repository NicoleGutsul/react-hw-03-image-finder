import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";

class App extends Component {
  state = {
    inputFilter: '',
  };

  render() {
    return(
      <>
         <SearchBar/>
      
      </>
    )
  }
};

export default App;
