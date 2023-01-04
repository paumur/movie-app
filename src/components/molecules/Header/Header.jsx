import React from 'react';
import { connect } from 'react-redux';
import LogoIcon from '../../../assets/icons/LogoIcon';
import Button from '../../atoms/Button/Button';
import './Header.css';

const Header = ({ token, setToken }) => {
  const handleLogout = () => {
    window.localStorage.removeItem('token');
    setToken('');
  };

  return (
    <header className='header'>
      <div className='header__content'>
        <Button className='nav-icon' to='/'>
          <LogoIcon />
        </Button>
        <Button logout={handleLogout} to={token.length ? '/' : '/signin'}>
          {token.length ? 'Logout' : 'Sign In'}
        </Button>
      </div>
    </header>
  );
};

function mapStateToProps(state) {
  return {
    token: state.auth.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setToken: (token) => {
      dispatch({ type: 'SET_TOKEN', token });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
