import React from 'react';
import Button from '../Button/Button';
import './MovieCard.css';

export const MovieCard = (props) => {
  const {
    id,
    image,
    title,
    selectable,
    handleSelect,
    description,
    addToFavorite,
    favorites,
  } = props;

  return (
    <div id={id} className='card'>
      <img
        className='card__img'
        src={image}
        onClick={selectable && handleSelect}
      ></img>
      <div className='card-content'>
        <div>
          <h3
            className='card-content__title'
            onClick={selectable && handleSelect}
          >
            {title}
          </h3>
          <p
            className='card-content__description'
            onClick={selectable && handleSelect}
          >
            {description}
          </p>
        </div>
        <Button
          addToFavorite={addToFavorite}
          cardId={id}
          padding='2px 20px 2px'
          className={
            favorites.find((favoritesId) => favoritesId === id)
              ? 'card-content__button card-content__button--favorite'
              : 'card-content__button'
          }
        >
          {favorites.find((favoritesId) => favoritesId === id)
            ? 'Remove 💔'
            : 'Favorite'}
        </Button>
      </div>
    </div>
  );
};

export default MovieCard;
