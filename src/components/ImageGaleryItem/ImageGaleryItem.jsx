import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

class ImageGaleryItem extends Component {
  render() {
    const { arrayCard, onItem } = this.props;

    if (arrayCard) {
      return arrayCard.response.map(el => (
        <li className="ImageGalleryItem" key={el.id} onClick={onItem}>
          <img
            src={el.webformatURL}
            alt={el.user}
            name={el.largeImageURL}
            className="ImageGalleryItem-image"
          />
        </li>
      ));
    }
  }
}

ImageGaleryItem.propTypes = {
  arrayCard: PropTypes.object,
  onItem: PropTypes.func,
};

export default ImageGaleryItem;
