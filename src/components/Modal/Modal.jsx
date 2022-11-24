import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  modalClose = event => {
    console.log(event.code);
    if (event.code === 'Escape') {
      this.props.onEscapeModalClose();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.modalClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.modalClose);
  }

  render() {
    const { nameCard, onModalClose } = this.props;
    return (
      <div className="Overlay" onClick={onModalClose}>
        <div className="Modal">
          <img src={nameCard} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  nameCard: PropTypes.string,
  onModalClose: PropTypes.func,
};

export default Modal;
