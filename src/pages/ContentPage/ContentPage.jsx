import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/molecules/Header/Header';
import Footer from '../../components/molecules/Footer/Footer';
import MovieCard from '../../components/atoms/MovieCard/MovieCard';
import content from '../../content';
import * as contentSelector from '../../content/selectors';
import * as authSelector from '../../auth/selectors';

const ContentPage = () => {
  const dispatch = useDispatch();
  const contentState = useSelector(contentSelector.content);
  const authState = useSelector(authSelector.auth);

  useEffect(() => {
    dispatch(content.actions.setMovies(authState.token || true));
  }, []);

  return (
    <div className='App'>
      <Header />
      <div className='cards-container'>
        {contentState.loading && <p>Loading...</p>}
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
      {!contentState.hasAccess && <Navigate to='/' />}
      <Footer />
    </div>
  );
};

export default ContentPage;
