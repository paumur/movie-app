import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = (props) => {
  const { to, children, padding, className, addToFavorite, logout } = props;
  if (to) {
    return (
      <Link
        to={to}
        onClick={logout ? logout : null}
        className={className ? className : 'link'}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        style={padding ? { padding: padding } : { padding: '7px 34px 7px' }}
        className={className ? className : 'button'}
        onClick={addToFavorite}
      >
        {children}
      </button>
    );
  }
};

export default Button;
