import React from 'react';
import Button from '../Button/Button';
import './SingleMovie.css';

const SingleMovie = (props) => {
  const { id, image, title, description, openModal, addToFavorite } = props;
  return (
    <div id={id} className='single-movie'>
      <div className='single-movie__left'>
        <img src={image}></img>
      </div>
      <div className='single-movie__right'>
        <h2 className='single-movie__title'>{title}</h2>
        <p className='single-movie__description'>{description}</p>
        <div className='single-movie__buttons'>
          <Button openModal={openModal}>Watch</Button>
          <Button
            padding='2px 20px 2px'
            addToFavorite={addToFavorite}
            className={
              favorites.find((id) => id === id)
                ? 'card-content__button card-content__button--favorite'
                : 'card-content__button'
            }
          >
            {favorites.find((id) => id === id) ? 'Remove 💔' : 'Favorite'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
