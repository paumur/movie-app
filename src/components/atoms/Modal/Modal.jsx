import React from 'react';
import './Modal.css';

const Modal = (props) => {
  const { open } = props;
  if (!open) return null;
  return (
    <div className='modal'>
      <iframe src={this.props.src} frameBorder='0' allowFullScreen />
    </div>
  );
};
export default Modal;
