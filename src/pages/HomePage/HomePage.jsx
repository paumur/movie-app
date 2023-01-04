import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './HomePage.css';
import MovieCard from '../../components/atoms/MovieCard/MovieCard';
import Header from '../../components/molecules/Header/Header';
import Hero from '../../components/molecules/Hero/Hero';
import Footer from '../../components/molecules/Footer/Footer';

const HomePage = ({ toggleFavorite, favorites, setMovies, movies }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://dummy-video-api.onrender.com/content/free-items')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setError(null);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className='App'>
      <Header />
      <Hero />
      <main className='main'>
        <div className='cards-container'>
          {loading && <p>Loading...</p>}
          {error && <p>Whoops! Failed to Load!</p>}
          {movies.map((movie) => (
            <MovieCard
              addToFavorite={() =>
                toggleFavorite(movie.id, favorites.includes(movie.id))
              }
              inFavorites={favorites.includes(movie.id)}
              id={movie.id}
              image={movie.image}
              title={movie.title}
              description={movie.description}
              key={movie.id}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    favorites: state.content.favorites || [],
    movies: state.content.movies || [],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFavorite: (id, isFavorite) => {
      if (isFavorite) {
        dispatch({ type: 'REMOVE_FAVORITE', id });
      } else {
        dispatch({ type: 'ADD_FAVORITE', id });
      }
    },
    setMovies: (data) => {
      dispatch({ type: 'SET_MOVIES', data });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
