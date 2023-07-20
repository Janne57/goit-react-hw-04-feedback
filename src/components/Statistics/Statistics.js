// import { Component } from 'react';
import PropTypes  from 'prop-types';
import Notification from '../Notification/Notification.js';
import css from './/Statistics.module.css';


export default function Statistics ({
      good,
      neutral,
      bad,
      total,
      positivePercentage,
}) {
  return (
    <div className="Counter">
      <div className={css.counter__controls}>
        
        {good || bad || neutral ? (
          <div>
            <ul>
              <li className="Counter__stat__item">
                <span className="">Good: {good}</span>
              </li>
              <li className="Counter__stat__item">
                <span className="">Neutral: {neutral}</span>
              </li>
              <li className="Counter__stat__item">
                <span className="">Bad: {bad}</span>
              </li>
              <li className="Counter__stat__item">
                <span className="">Total: {total}</span>
              </li>
              <li className="Counter__stat__item">
                <span className="">Positive feedback: {positivePercentage}%</span>
              </li>
            </ul>
          </div>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    </div>
  );
}


Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};
