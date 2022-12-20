import React, { useState, useEffect } from 'react';
import Header from '../../components/molecules/Header/Header';
import Footer from '../../components/molecules/Footer/Footer';
import MovieCard from '../../components/atoms/MovieCard/MovieCard';
import { Navigate } from 'react-router-dom';

const ContentPage = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );
  const [hasAccess, setHasAccess] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movieSelected, setMovieSelected] = useState(null);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    fetch('https://dummy-video-api.onrender.com/content/items', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        // prettier-ignore
        'Authorization': localStorage.getItem('token'),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.some((movie) => movie.free === false)) {
          setMovies(result);
        } else {
          setHasAccess(false);
        }
      });
  }, []);

  const handleChange = (e) => {
    const cardId = e.currentTarget.closest('.card').getAttribute('id');
    favorites.find((id) => id === cardId)
      ? setFavorites(favorites.filter((id) => id !== cardId))
      : setFavorites([...favorites, cardId]);
  };

  const handleSelect = (e) => {
    const cardId = e.currentTarget.closest('.card').getAttribute('id');
    setMovieSelected(cardId);
  };

  useEffect(() => {
    localStorage.setItem('movieSelected', movieSelected);
  }, [movieSelected]);

  return (
    <div className='App'>
      <Header />
      <div className='cards-container'>
        {movies &&
          movies.map((movie) => (
            <MovieCard
              selectable
              handleSelect={handleSelect}
              addToFavorite={handleChange}
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
};

export default ContentPage;
