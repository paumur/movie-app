import React from 'react';
import { connect } from 'react-redux';
import Button from '../../atoms/Button/Button';
import HeroBgPath from '../../../assets/images/HeroBgImg.png';
import './Hero.css';

const Hero = ({ token }) => {
  const hasAccess = token.length !== 0;
  return (
    <div
      style={{
        backgroundImage: `url(${HeroBgPath})`,
        backgroundSize: 'cover',
      }}
      className='hero'
    >
      <h2 className='hero__title'>Wanna more Content?</h2>
      <Button className='button' to={hasAccess ? '/content' : '/signin'}>
        Get Access
      </Button>
      <div className='hero__line-break'></div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    token: state.auth.token,
  };
}

export default connect(mapStateToProps)(Hero);
