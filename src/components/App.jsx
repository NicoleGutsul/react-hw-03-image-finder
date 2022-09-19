import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";

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
      <ImageGallery inputFilter={this.state.inputFilter}/>
      </>
    )
  }
};

export default App;
