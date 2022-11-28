import React, { Component } from 'react';
import Button from '../Button/Button';
import './MovieCard.css';

export default class MovieCard extends Component {
  render() {
    return (
      <div id={this.props.id} className='card'>
        <img className='card__img' src={this.props.image}></img>
        <div className='card-content'>
          <div>
            <h3 className='card-content__title'>{this.props.title}</h3>
            <p className='card-content__description'>
              {this.props.description}
            </p>
          </div>
          <Button
            addToFavorite={this.props.addToFavorite}
            cardId={this.props.id}
            padding='2px 20px 2px'
            className={
              this.props.favorites.find((id) => id === this.props.id)
                ? 'card-content__button card-content__button--favorite'
                : 'card-content__button'
            }
            textContent={
              this.props.favorites.find((id) => id === this.props.id)
                ? 'Remove 💔'
                : 'Favorite'
            }
          ></Button>
        </div>
      </div>
    );
  }
}
