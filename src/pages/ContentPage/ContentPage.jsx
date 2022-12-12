import React from 'react';
import Header from '../../components/molecules/Header/Header';
import Footer from '../../components/molecules/Footer/Footer';
import MovieCard from '../../components/atoms/MovieCard/MovieCard';
import { Navigate } from 'react-router-dom';

class ContentPage extends React.Component {
  state = {
    token: localStorage.getItem('token'),
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    hasAccess: true,
    movies: [],
    movieSelected: null,
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(e) {
    const cardId = e.currentTarget.parentNode.parentNode.getAttribute('id');
    this.state.favorites.find((id) => id === cardId)
      ? this.setState({
          favorites: this.state.favorites.filter((id) => id !== cardId),
        })
      : this.setState({ favorites: [...this.state.favorites, cardId] });
  }

  handleSelect(e) {
    const cardId = e.currentTarget.closest('.card').getAttribute('id');
    this.setState({ movieSelected: cardId });
    localStorage.setItem('movieSelected', cardId);
  }

  componentDidMount() {
    fetch('https://dummy-video-api.onrender.com/content/items', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        // prettier-ignore
        'Authorization': this.state.token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.some((movie) => movie.free === false)) {
          this.setState({ movies: result });
        } else {
          this.setState({ hasAccess: false });
        }
      });
  }

  render() {
    const { hasAccess, movies, favorites, movieSelected } = this.state;
    localStorage.setItem('favorites', JSON.stringify(favorites));

    return (
      <div className='App'>
        <Header />
        <div className='cards-container'>
          {movies.map((movie) => (
            <MovieCard
              selectable
              handleSelect={this.handleSelect}
              addToFavorite={this.handleChange}
              favorites={favorites}
              id={movie.id}
              image={movie.image}
              title={movie.title}
              description={movie.description}
              key={movie.id}
            />
          ))}
        </div>
        {!hasAccess && <Navigate to='/signin' />}
        {movieSelected && <Navigate to={`/content/${movieSelected}`} />}
        <Footer />
      </div>
    );
  }
}

export default ContentPage;
