import React from 'react';
import './Modal.css';

const Modal = (props) => {
  const { src, open } = props;
  if (!open) return null;
  return (
    <div className='modal'>
      <iframe src={src} frameBorder='0' allowFullScreen />
    </div>
  );
};
export default Modal;
