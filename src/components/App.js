import { Component } from 'react';

import './App.css';

// import axios from 'axios';

import getImages from '../services/pixabayApi';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

import LoaderSpinner from './Loader';
class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    imageArray: [],
    loading: false,
    showModal: false,
    largeSrc: '',
    error: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
      this.scrollTo();
    }
  }

  updateQuery = query => {
    this.setState({ searchQuery: query, page: 1, imageArray: [] });
  };

  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    const q = searchQuery;
    const options = { q, page };
    this.setState(prevState => ({
      page: prevState.page + 1,
      loading: true,
    }));

    getImages(options)
      .then(imageArray => {
        if (imageArray.length > 0) {
          this.setState(prevState => ({
            imageArray: [...prevState.imageArray, ...imageArray],
          }));
        } else {
          this.setState({ error: true });
        }
      })
      .catch(() => this.setState({ error: true }))
      .finally(() => this.setState({ loading: false }));
  };

  showModal = event => {
    const { datalarge } = event.target.attributes;

    this.setState({
      showModal: true,
      largeSrc: datalarge.value,
    });
  };

  closeModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.setState({
        showModal: false,

        largeSrc: '',
      });
    }
  };

  render() {
    const {
      searchQuery,
      imageArray,
      loading,
      showModal,
      largeSrc,
      error,
    } = this.state;

    const showLoadMoreButton = imageArray.length > 0 && !loading;

    return (
      <>
        <Searchbar onSubmit={this.updateQuery} />
        {error && (
          <h1 className="error">
            Search result '{searchQuery}' not found! ¯\_(ツ)_/¯
          </h1>
        )}
        {loading && <LoaderSpinner />}
        <ImageGallery
          images={this.state.imageArray}
          query={this.state.searchQuery}
          onClick={this.showModal}
        />
        {showLoadMoreButton && <Button onClick={this.fetchImages} />}

        {showModal && (
          <Modal
            largeSrc={largeSrc}
            alt={searchQuery}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}

export default App;
