import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  onInputText = ev => {
    this.setState({
      search: ev.currentTarget.value,
    });
  };

  submitForm = event => {
    event.preventDefault();
    this.props.submitSearch(this.state.search);
    this.setState({
      search: '',
    });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.submitForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            value={this.state.search}
            onChange={this.onInputText}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  submitSearch: PropTypes.func,
};

export default Searchbar;
