import React from 'react';
import LogoIcon from '../../../assets/icons/LogoIcon';
import Button from '../../atoms/Button/Button';
import './Header.css';

const Header = () => {
  const logout =
    window.location.pathname === '/content' ||
    window.location.pathname.includes('/content/');

  return (
    <header className='header'>
      <div className='header__content'>
        <LogoIcon />
        <Button to={logout ? '/' : '/signin'}>
          {logout ? 'Logout' : 'Sign In'}
        </Button>
      </div>
    </header>
  );
};

export default Header;
