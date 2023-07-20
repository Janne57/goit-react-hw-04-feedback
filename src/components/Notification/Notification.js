import { Component } from 'react';
import css from './/Notification.module.css';

class Notification extends Component {
  render() {
    const { message } = this.props;

    return (
      <div className={css.notmessage}>
        <span>{message}</span>
      </div>
    );
  }
}

export default Notification;
