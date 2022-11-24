import { Component } from 'react';
import ImageGaleryItem from '../ImageGaleryItem/ImageGaleryItem';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import '../styles.css';

class ImageGalery extends Component {
  render() {
    const {
      arrResponse,
      onItem,
      stateVis,
      cardName,
      onModalClose,
      onEscapeModalClose,
    } = this.props;
    return (
      <ul className="ImageGallery">
        <ImageGaleryItem arrayCard={arrResponse} onItem={onItem} />
        {stateVis && (
          <Modal
            nameCard={cardName}
            onModalClose={onModalClose}
            onEscapeModalClose={onEscapeModalClose}
          />
        )}
      </ul>
    );
  }
}

ImageGalery.propTypes = {
  arrResponse: PropTypes.object,
  onItem: PropTypes.func,
  stateVis: PropTypes.bool,
  cardName: PropTypes.string,
  onModalClose: PropTypes.func,
  onEscapeModalClose: PropTypes.func,
};

export default ImageGalery;
