import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import LogoIcon from '../../../assets/icons/LogoIcon';
import Button from '../../atoms/Button/Button';
import './Header.css';
import * as authSelector from '../../../auth/selectors';
import { useDispatch } from 'react-redux';
import auth from '../../../auth';

const Header = () => {
  const dispatch = useDispatch();
  const authState = useSelector(authSelector.auth);
  const handleLogout = () => {
    window.localStorage.removeItem('token');
    dispatch(auth.actions.token(''));
  };

  return (
    <header className='header'>
      <div className='header__content'>
        <Button className='nav-icon' to='/'>
          <LogoIcon />
        </Button>
        <Button logout={handleLogout} to={authState.token ? '/' : '/signin'}>
          {authState.token ? 'Logout' : 'Sign In'}
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
