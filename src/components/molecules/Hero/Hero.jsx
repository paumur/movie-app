import React, { Component } from 'react';
import Button from '../../atoms/Button/Button';
import HeroBgPath from '../../../assets/images/HeroBgImg.png';
import './Hero.css';

export default class Hero extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${HeroBgPath})`,
          backgroundSize: 'cover',
        }}
        className='hero'
      >
        <h2 className='hero__title'>Wanna more Content?</h2>
        <Button textContent='Get Access' />
        <div className='hero__line-break'></div>
      </div>
    );
  }
}
