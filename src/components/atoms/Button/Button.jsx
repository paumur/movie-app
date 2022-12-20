import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = (props) => {
  const { to, children, padding, className, addToFavorite, openModal } = props;
  if (to) {
    return <Link to={to}>{children}</Link>;
  } else {
    return (
      <button
        style={padding ? { padding: padding } : { padding: '7px 34px 7px' }}
        className={className}
        onClick={addToFavorite || openModal}
      >
        {children}
      </button>
    );
  }
};

export default Button;
