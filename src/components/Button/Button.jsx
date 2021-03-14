import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="Button">
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
