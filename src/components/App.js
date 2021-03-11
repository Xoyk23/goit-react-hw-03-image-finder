import { Component } from 'react';

import './App.css';

import Loader from 'react-loader-spinner';

import axios from 'axios';

import { getImages } from '../services/pixabayApi';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';

import LoaderSpinner from './Loader';
class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    imageArray: [],
    loading: false,
    showModal: false,
    largeSrc: '',
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

  // fetchImages = () => {
  //   this.setState({ loading: true });
  //   const { searchQuery, page } = this.state;

  //   getImages(searchQuery, page)
  //     .then(images => {
  //       this.setState(prevState => ({
  //         imageArray: [...prevState.imageArray, ...images],
  //       }));
  //     })
  //     .finally(this.setState({ loading: false }));
  // };

  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  fetchImages = () => {
    const API_KEY = '19772171-226cd242ef8307a66747d7d05';
    const { page, searchQuery } = this.state;
    axios.defaults.baseURL = 'https://pixabay.com/api';

    this.setState({ loading: true });

    axios
      .get(
        `/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => {
        this.setState(prevState => ({
          imageArray: [...prevState.imageArray, ...response.data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  // fetchImages = () => {
  //   this.setState = { loading: true };

  //   const API_KEY = '19772171-226cd242ef8307a66747d7d05';
  //   const { searchQuery, page } = this.state;

  //   axios.defaults.baseURL = 'https://pixabay.com/api';
  //   axios
  //     .get(
  //       `/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  //     )
  //     .then(response => {
  //       this.setState({ imageArray: response.data.hits });
  //     });
  // };

  onClick = () => {};

  render() {
    const {
      searchQuery,
      imageArray,
      loading,
      showModal,
      largeSrc,
    } = this.state;

    const showLoadMoreButton = imageArray.length > 0 && !loading;

    return (
      <>
        <Searchbar onSubmit={this.updateQuery} />
        {loading && <LoaderSpinner />}
        <ImageGallery
          images={this.state.imageArray}
          query={this.state.searchQuery}
        />
        {showLoadMoreButton && <Button onClick={this.fetchImages} />}
      </>
    );
  }
}

// console.log(getImages);

export default App;
