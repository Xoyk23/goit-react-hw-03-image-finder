import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, query, largeImage }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={image} alt={query} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
