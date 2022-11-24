import { Component } from 'react';
import ImageGaleryItem from '../ImageGaleryItem/ImageGaleryItem';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import '../styles.css';

class ImageGalery extends Component {
  render() {
    const {
      objResponse,
      onItem,
      stateVis,
      cardName,
      onModalClose,
      onEscapeModalClose,
    } = this.props;
    return (
      <ul className="ImageGallery">
        {objResponse &&
          objResponse.response.map(el => (
            <ImageGaleryItem key={el.id} onItem={onItem} objElement={el} />
          ))}

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
  objResponse: PropTypes.object,
  onItem: PropTypes.func,
  stateVis: PropTypes.bool,
  cardName: PropTypes.string,
  onModalClose: PropTypes.func,
  onEscapeModalClose: PropTypes.func,
};

export default ImageGalery;
