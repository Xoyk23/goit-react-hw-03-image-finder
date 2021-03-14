import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, alt, largeImage }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={image}
        alt={alt}
        className="ImageGalleryItem-image"
        datalarge={largeImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
