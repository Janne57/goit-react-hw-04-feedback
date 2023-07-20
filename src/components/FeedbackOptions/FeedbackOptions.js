import { Component } from 'react';
import css from './/FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className={css.btn__common}>
        {options.map((option) => (
          <button type="button" className={css.btn__feedback} onClick={() => onLeaveFeedback(option)}>
          {option}</button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;