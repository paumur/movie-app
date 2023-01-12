import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css';
import MovieCard from '../../components/atoms/MovieCard/MovieCard';
import Header from '../../components/molecules/Header/Header';
import Hero from '../../components/molecules/Hero/Hero';
import Footer from '../../components/molecules/Footer/Footer';
import content from '../../content';
import * as selector from '../../content/selectors';

const HomePage = () => {
  const dispatch = useDispatch();
  const contentState = useSelector(selector.content);

  useEffect(() => {
    dispatch(content.actions.setMovies());
  }, [dispatch]);

  return (
    <div className='App'>
      <Header />
      <Hero />
      <main className='main'>
        <div className='cards-container'>
          {contentState.loading && <p>Loading...</p>}
          {contentState.error && <p>Whoops! Failed to Load!</p>}
          {contentState.movies.map((movie) => (
            <MovieCard
              addToFavorite={() =>
                dispatch(content.actions.addFavorite(movie.id))
              }
              inFavorites={contentState.favorites.includes(movie.id)}
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
