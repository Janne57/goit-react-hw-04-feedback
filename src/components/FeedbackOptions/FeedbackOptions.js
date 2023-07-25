import css from './/FeedbackOptions.module.css';

function FeedbackOptions ({ options, onLeaveFeedback }){

    return (
      <div className={css.btn__common}>
        {options.map((option) => (
          <button type="button" className={css.btn__feedback} onClick={() => onLeaveFeedback(option)}>
          {option}</button>
        ))}
      </div>
    );
  }

export default FeedbackOptions;