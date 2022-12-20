import React from 'react';
import Button from '../../atoms/Button/Button';
import HeroBgPath from '../../../assets/images/HeroBgImg.png';
import './Hero.css';

const Hero = () => (
  <div
    style={{
      backgroundImage: `url(${HeroBgPath})`,
      backgroundSize: 'cover',
    }}
    className='hero'
  >
    <h2 className='hero__title'>Wanna more Content?</h2>
    <Button>Get Access</Button>
    <div className='hero__line-break'></div>
  </div>
);

export default Hero;
