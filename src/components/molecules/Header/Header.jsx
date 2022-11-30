import React from 'react';
import LogoIcon from '../../../assets/icons/LogoIcon';
import Button from '../../atoms/Button/Button';
import './Header.css';

const Header = () => (
  <header className='header'>
    <div className='header__content'>
      <LogoIcon />
      <Button>Sign In</Button>
    </div>
  </header>
);

export default Header;
