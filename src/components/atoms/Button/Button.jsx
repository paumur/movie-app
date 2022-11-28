import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  render() {
    return (
      <button
        style={
          this.props.padding
            ? { padding: this.props.padding }
            : { padding: '7px 34px 7px' }
        }
        onClick={this.props.addToFavorite}
      >
        {this.props.textContent}
      </button>
    );
  }
}
