import React from 'react';
import LogoIcon from '../../../assets/icons/LogoIcon';
import Button from '../../atoms/Button/Button';
import './Header.css';

const Header = () => (
  <header className='header'>
    <LogoIcon />
    <Button textContent='Sign In' />
  </header>
);

export default Header;
