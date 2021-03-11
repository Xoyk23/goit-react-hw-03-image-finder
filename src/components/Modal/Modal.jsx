import React, { Component } from 'react';
import { createPortal } from 'react';
import PropTypes from 'prop-types';

import Loader from 'react-loader-spinner';

const modalRef = document.querySelector('#root-modal');

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown');
  }
}
