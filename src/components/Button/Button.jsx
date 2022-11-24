import { Component } from 'react';
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

export default Button;
