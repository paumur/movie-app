import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

export default class Button extends Component {
  render() {
    {
      if (this.props.to) {
        return <Link to={this.props.to}>{this.props.children}</Link>;
      } else {
        return (
          <button
            style={
              this.props.padding
                ? { padding: this.props.padding }
                : { padding: '7px 34px 7px' }
            }
            className={this.props.className}
            onClick={this.props.addToFavorite || this.props.openModal}
          >
            {this.props.children}
          </button>
        );
      }
    }
  }
}
