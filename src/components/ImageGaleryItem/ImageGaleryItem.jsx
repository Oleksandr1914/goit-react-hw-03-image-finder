import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

class ImageGaleryItem extends Component {
  render() {
    const { objElement, onItem } = this.props;
    // key={objElement.id}
    return (
      <li className="ImageGalleryItem" onClick={onItem}>
        <img
          src={objElement.webformatURL}
          alt={objElement.user}
          name={objElement.largeImageURL}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}

ImageGaleryItem.propTypes = {
  objElement: PropTypes.object,
  onItem: PropTypes.func,
};

export default ImageGaleryItem;
