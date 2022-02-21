import { useState } from 'react';
import 'index.css';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import NoFeedback from 'components/NoFeedback/NoFeedback';

const options = ['good', 'neutral', 'bad'];

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.round((good * 100) / countTotalFeedback())
      : 0;
  };

  const handleUpdate = type => {
    switch (type) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback" />
      <FeedbackOptions options={options} onLeaveFeedback={handleUpdate} />
      <Section title={'Statistics'} />
      {countTotalFeedback() === 0 ? (
        <NoFeedback message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedbacks={countTotalFeedback()}
          positiveFeedbacksShare={countPositiveFeedbackPercentage()}
        />
      )}
    </div>
  );
}
// }
