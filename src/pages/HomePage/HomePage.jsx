import React, { useState, useEffect } from 'react';
import './HomePage.css';
import MovieCard from '../../components/atoms/MovieCard/MovieCard';
import Header from '../../components/molecules/Header/Header';
import Hero from '../../components/molecules/Hero/Hero';
import Footer from '../../components/molecules/Footer/Footer';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://dummy-video-api.onrender.com/content/free-items')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const cardId = e.target.closest('.card').getAttribute('id');
    favorites.find((id) => id === cardId)
      ? setFavorites(favorites.filter((id) => id !== cardId))
      : setFavorites([...favorites, cardId]);
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className='App'>
      <Header />
      <Hero />
      <main className='main'>
        <div className='cards-container'>
          {loading && <p>Loading...</p>}
          {error && <p>Whoops! Failed to Load!</p>}
          {data &&
            data.map((movie) => (
              <MovieCard
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
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
