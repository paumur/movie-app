import React, { useState, useEffect } from 'react';
import './SingleMoviePage.css';
import Header from '../../components/molecules/Header/Header';
import Hero from '../../components/molecules/Hero/Hero';
import Footer from '../../components/molecules/Footer/Footer';
import SingleMovie from '../../components/atoms/SingleMovie/SingleMovie';
import Modal from '../../components/atoms/Modal/Modal';

const SingleMoviePage = () => {
  const [movieSelected, setMovieSelected] = useState(
    localStorage.getItem('movieSelected')
  );
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [favorites, setFavorites] =
    useState(JSON.parse(localStorage.getItem('favorites'))) || [];
  const [movie, setMovie] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [hasAccess, setHasAccess] = useState(true);

  useEffect(() => {
    fetch(
      `https://dummy-video-api.onrender.com/content/items/${movieSelected}`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          // prettier-ignore
          'Authorization': token,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.message === 'Access denied!') {
          setHasAccess(false);
        } else {
          setMovie(result);
        }
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleChange = (e) => {
    const card =
      e.currentTarget.closest('.card') ||
      e.currentTarget.closest('.single-movie');
    const cardId = card.getAttribute('id');
    favorites.find((id) => id === cardId)
      ? setFavorites(favorites.filter((id) => id !== cardId))
      : setFavorites([...favorites, cardId]);
  };

  const handleModal = (e) => {
    if (e.target.tagName === 'BUTTON') setOpenModal(true);
    if (openModal) setOpenModal(false);
  };

  return (
    <div className='App'>
      <Header />
      <Hero />
      <main className='main' onClick={handleModal}>
        {movie && (
          <SingleMovie
            favorites={favorites}
            openModal={handleModal}
            addToFavorite={handleChange}
            id={movie.id}
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

export default SingleMoviePage;
