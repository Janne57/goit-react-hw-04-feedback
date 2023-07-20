import { useState } from 'react';
import Section from '..//components/Section/Section.js';
import FeedbackOptions from '..//components/FeedbackOptions/FeedbackOptions.js';
import Statistics from '..//components/Statistics/Statistics.js';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];


  const increment = option => {

    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

        case 'neutral':
          setNeutral(prevNeutral => prevNeutral + 1);
          break;

        case 'bad':
          setBad(prevBad => prevBad + 1);
          break;

          default: return;  
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = bad + good + neutral;
    return Math.trunc((good / total) * 100);
  };

 
  

  return (
    <div>
      <Section title="Please leave feedback">
          <FeedbackOptions
            // options={['good', 'neutral', 'bad']}
            options={options}
            onLeaveFeedback={increment}
          />
        </Section>
      <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
    </div>
  );
};

export default App;








// class App extends Component {

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   increment = option => {
//     this.setState(prevState => {
//       return {
//         [option]: prevState[option] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     return this.state.bad + this.state.good + this.state.neutral;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.state.bad + this.state.good + this.state.neutral;
//     return Math.trunc((this.state.good / total) * 100);
//   };

//   render() {
//     const options = Object.keys(this.state);
//     console.log('options', options);
//     const totalFeedback = this.countTotalFeedback();
//     const feedbackPercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             // options={['good', 'neutral', 'bad']}
//             options={options}
//             onLeaveFeedback={this.increment}
//           />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={totalFeedback}
//             positivePercentage={feedbackPercentage}
//           />
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
