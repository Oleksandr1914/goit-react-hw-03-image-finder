import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGalery from './ImageGalery/ImageGalery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    name: '',
    number: 1,
    response: [],
    loader: false,
    visabiliti: false,
    card: '',
  };

  onSupmit = data => {
    this.setState({
      number: 1,
      loader: true,
    });
    fetch(
      `https://pixabay.com/api/?q=${data}&page=${this.state.number}&key=31516310-7380ad7b276f6caf864428c6c&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(res => this.setState({ response: res.hits, name: data }));

    this.setState({
      loader: false,
    });
  };

  onClickLoadMore = () => {
    this.setState(prevState => ({
      number: prevState.number + 1,
      loader: true,
    }));
    fetch(
      `https://pixabay.com/api/?q=${this.state.name}&page=${this.state.number}&key=31516310-7380ad7b276f6caf864428c6c&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(res => this.setState({ response: res.hits }))
      .catch(error => console.log(error));

    this.setState({
      loader: false,
    });
  };

  onItem = event => {
    this.setState({
      visabiliti: true,
      card: event.target.name,
    });
  };
  onModalClose = event => {
    if (event.target === event.currentTarget) {
      this.setState({
        visabiliti: false,
      });
    }
  };
  onEscapeModalClose = () => {
    this.setState({
      visabiliti: false,
    });
  };

  render() {
    if (this.state.loader) {
      return (
        <>
          <Searchbar submitSearch={this.onSupmit} />
          <Loader />
        </>
      );
    }
    return (
      <>
        <Searchbar submitSearch={this.onSupmit} />

        <ImageGalery
          arrResponse={
            this.state.response.length !== 0 ? this.state : undefined
          }
          onItem={this.onItem}
          stateVis={this.state.visabiliti}
          cardName={this.state.card}
          onModalClose={this.onModalClose}
          onEscapeModalClose={this.onEscapeModalClose}
        />

        {this.state.response.length !== 0 ? (
          this.state.loader ? (
            <Loader />
          ) : (
            <Button onClick={this.onClickLoadMore} />
          )
        ) : undefined}
      </>
    );
  }
}

export default App;
