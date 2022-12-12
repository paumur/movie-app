import React, { Component } from 'react';
import Button from '../Button/Button';
import './SingleMovie.css';

export default class MovieCard extends Component {
  render() {
    return (
      <div id={this.props.id} className='single-movie'>
        <div className='single-movie__left'>
          <img src={this.props.image}></img>
        </div>
        <div className='single-movie__right'>
          <h2 className='single-movie__title'>{this.props.title}</h2>
          <p className='single-movie__description'>{this.props.description}</p>
          <div className='single-movie__buttons'>
            <Button openModal={this.props.openModal}>Watch</Button>
            <Button
              padding='2px 20px 2px'
              addToFavorite={this.props.addToFavorite}
              className={
                this.props.favorites.find((id) => id === this.props.id)
                  ? 'card-content__button card-content__button--favorite'
                  : 'card-content__button'
              }
            >
              {this.props.favorites.find((id) => id === this.props.id)
                ? 'Remove 💔'
                : 'Favorite'}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
