import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, query, onClick }) => {
  return (
    <ul className="ImageGallery" onClick={onClick}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image.webformatURL}
          alt={query}
          largeImage={image.largeImageURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
};

export default ImageGallery;
