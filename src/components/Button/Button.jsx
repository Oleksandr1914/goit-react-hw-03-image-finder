import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

class Button extends Component {
  render() {
    return (
      <button className="Button" onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
