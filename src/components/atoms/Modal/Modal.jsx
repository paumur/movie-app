import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
  render() {
    if (!this.props.open) return null;
    return (
      <div className='modal'>
        <iframe src={this.props.src} frameBorder='0' allowFullScreen />
      </div>
    );
  }
}
