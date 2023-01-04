import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/molecules/Header/Header';
import Footer from '../../components/molecules/Footer/Footer';
import MovieCard from '../../components/atoms/MovieCard/MovieCard';

const ContentPage = ({
  toggleFavorite,
  favorites,
  setMovies,
  movies,
  token,
}) => {
  const [hasAccess, setHasAccess] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummy-video-api.onrender.com/content/items', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        // prettier-ignore
        'Authorization': token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.some((movie) => movie.free === false)) {
          setMovies(result);
          setLoading(false);
        } else {
          setHasAccess(false);
        }
      });
  }, []);

  return (
    <div className='App'>
      <Header />
      <div className='cards-container'>
        {loading && <p>Loading...</p>}
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
      {!hasAccess && <Navigate to='/signin' />}
      <Footer />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    favorites: state.content.favorites || [],
    movies: state.content.movies || [],
    token: state.auth.token,
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

export default connect(mapStateToProps, mapDispatchToProps)(ContentPage);
