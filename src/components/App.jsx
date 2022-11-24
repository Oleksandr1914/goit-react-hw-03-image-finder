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
    loader: 'off',
    visabiliti: false,
    card: '',
    calcCard: null,
  };

  onSupmit = data => {
    this.setState({
      number: 1,
      loader: 'onSubmit',
      name: data,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.name}&page=${this.state.number}&key=31516310-7380ad7b276f6caf864428c6c&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          return response.json();
        })
        .then(res => {
          this.setState({
            calcCard: res.totalHits,
          });
          return this.setState({ response: res.hits });
        })
        .catch(error => console.log(error));
      this.setState({
        loader: 'off',
      });
    } else if (prevState.number !== this.state.number) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.name}&page=${this.state.number}&key=31516310-7380ad7b276f6caf864428c6c&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(res =>
          this.setState(prevState => ({
            response: [...prevState.response, ...res.hits],
          }))
        )
        .catch(error => console.log(error));
      this.setState({
        loader: 'off',
      });
    }
  }

  onClickLoadMore = () => {
    this.setState(prevState => ({
      number: prevState.number + 1,
      loader: 'onClick',
    }));
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
    if (this.state.loader === 'onSubmit') {
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
          objResponse={
            this.state.response.length !== 0 ? this.state : undefined
          }
          onItem={this.onItem}
          stateVis={this.state.visabiliti}
          cardName={this.state.card}
          onModalClose={this.onModalClose}
          onEscapeModalClose={this.onEscapeModalClose}
        />

        {this.state.response.length !== 0 ? (
          this.state.loader === 'onClick' ? (
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
