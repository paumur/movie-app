import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import './SingleMoviePage.css';
import Header from '../../components/molecules/Header/Header';
import Hero from '../../components/molecules/Hero/Hero';
import Footer from '../../components/molecules/Footer/Footer';
import SingleMovie from '../../components/atoms/SingleMovie/SingleMovie';
import Modal from '../../components/atoms/Modal/Modal';

const SingleMoviePage = ({ token, favorites, toggleFavorite }) => {
  const [movie, setMovie] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [hasAccess, setHasAccess] = useState(true);

  const location = useLocation();
  const id = location.pathname.split('/')[2];

  useEffect(() => {
    fetch(`https://dummy-video-api.onrender.com/content/items/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        // prettier-ignore
        'Authorization': token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === 'Access denied!') {
          setHasAccess(false);
        } else {
          setMovie(result);
        }
      });
  }, []);

  const handleModal = (e) => {
    if (e.target.textContent === 'Watch') setOpenModal(true);
    if (openModal) setOpenModal(false);
  };

  return (
    <div className='App'>
      <Header />
      <Hero />
      <main className='main' onClick={handleModal}>
        {movie && (
          <SingleMovie
            inFavorites={favorites.includes(movie.id)}
            addToFavorite={() =>
              toggleFavorite(movie.id, favorites.includes(movie.id))
            }
            title={movie.title}
            image={movie.image}
            description={movie.description}
          />
        )}
        <Modal open={openModal} src={movie.video} handleModal={handleModal} />
        {!hasAccess && <Navigate to='/signin' />}
      </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleMoviePage);
