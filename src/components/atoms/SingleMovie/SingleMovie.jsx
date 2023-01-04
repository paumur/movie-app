import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import './SingleMovie.css';

const SingleMovie = (props) => {
  const { image, title, description, addToFavorite, inFavorites } = props;

  return (
    <div className='single-movie'>
      <div className='single-movie__left'>
        <img src={image} />
      </div>
      <div className='single-movie__right'>
        <h2 className='single-movie__title'>{title}</h2>
        <p className='single-movie__description'>{description}</p>
        <div className='single-movie__buttons'>
          <Button>Watch</Button>
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
    </div>
  );
};

function mapStateToProps(state) {
  return {
    favorites: state.content.favorites || [],
  };
}

export default connect(mapStateToProps)(SingleMovie);
