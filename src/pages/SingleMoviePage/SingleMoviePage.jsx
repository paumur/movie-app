import React from 'react';
import './SingleMoviePage.css';
import Header from '../../components/molecules/Header/Header';
import Hero from '../../components/molecules/Hero/Hero';
import Footer from '../../components/molecules/Footer/Footer';
import SingleMovie from '../../components/atoms/SingleMovie/SingleMovie';
import Modal from '../../components/atoms/Modal/Modal';

class SingleMoviePage extends React.Component {
  state = {
    movieSelected: localStorage.getItem('movieSelected'),
    token: localStorage.getItem('token'),
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    movie: {},
    openModal: false,
    hasAccess: true,
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  handleChange(e) {
    const cardId = e.currentTarget.closest('.single-movie').getAttribute('id');
    this.state.favorites.find((id) => id === cardId)
      ? this.setState({
          favorites: this.state.favorites.filter((id) => id !== cardId),
        })
      : this.setState({ favorites: [...this.state.favorites, cardId] });
  }

  openModal() {
    this.setState({ openModal: !this.state.openModal });
  }

  componentDidMount() {
    fetch(
      `https://dummy-video-api.onrender.com/content/items/${this.state.movieSelected}`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          // prettier-ignore
          'Authorization': this.state.token,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.message === 'Access denied!') {
          this.setState({ hasAccess: false });
        } else {
          this.setState({ movie: result });
        }
      });
  }

  render() {
    const { movie, favorites, openModal, hasAccess } = this.state;
    localStorage.setItem('favorites', JSON.stringify(this.state.favorites));

    return (
      <div className='App'>
        <Header />
        <Hero />
        <main className='main' onClick={openModal ? this.openModal : null}>
          {movie && (
            <SingleMovie
              favorites={favorites}
              openModal={this.openModal}
              addToFavorite={this.handleChange}
              id={movie.id}
              title={movie.title}
              image={movie.image}
              description={movie.description}
            />
          )}
          <Modal open={openModal} src={movie.video} />
          {!hasAccess && <Navigate to='/signin' />}
        </main>
        <Footer />
      </div>
    );
  }
}

export default SingleMoviePage;
