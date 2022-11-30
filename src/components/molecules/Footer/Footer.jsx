import React, { Component } from 'react';
import CreditCardsIcon from '../../../assets/icons/CreditCardsIcon';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer__content'>
          <small className='footer__copyright'>
            We care about your entertainment. Copyright © 2019–2022 felix.com
          </small>
          <CreditCardsIcon />
        </div>
      </footer>
    );
  }
}
