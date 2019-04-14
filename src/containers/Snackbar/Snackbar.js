import React, { PureComponent } from 'react';
import Styles from './Snackbar.css';

export class Snackbar extends PureComponent {
  message = ''

  state = {
    isActive: false,
  }

  openSnackBar = (message) => {
    this.message = message;
    this.setState({ isActive: true })
    setTimeout(() => {
      this.setState({ isActive: false });
    }, 100);
    console.log(this.state)
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className = {isActive ? [Styles.snackbar, Styles.show].join(" ") : Styles.snackbar}>
        {this.message}
      </div>
    )
  }
}