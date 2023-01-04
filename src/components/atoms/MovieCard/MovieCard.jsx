import React from 'react';
import Button from '../Button/Button';
import './MovieCard.css';

export const MovieCard = (props) => {
  const { id, image, title, description, addToFavorite, inFavorites } = props;

  return (
    <div
      id={id}
      className='card'
      tabIndex='0'
      role='button'
      aria-pressed='false'
    >
      <Button to={`/content/${id}`} className='navigator'>
        <img className='card__img' src={image} />
      </Button>
      <div className='card-content'>
        <Button to={`/content/${id}`} className='navigator'>
          <div>
            <h3 className='card-content__title'>{title}</h3>
            <p className='card-content__description'>{description}</p>
          </div>
        </Button>
        <Button
          addToFavorite={addToFavorite}
          padding='2px 20px 2px'
          className={
            inFavorites ? 'button  card-content__button--favorite' : 'button '
          }
        >
          {inFavorites ? 'Remove 💔' : 'Favorite'}
        </Button>
      </div>
    </div>
  );
};

export default MovieCard;
