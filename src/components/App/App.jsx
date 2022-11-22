import { useState } from 'react';

import { Container } from './App.styled';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Sections } from '../Section/Section';
import { Notification } from '../Notification/Notification';

const arrayButton = ['good', 'neutral', 'bad'];

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackIncrement = e => {
    const name = e.target.name;
    const value = prevState => prevState + 1;

    if (name === 'good') {
      setGood(value);
      return;
    }
    if (name === 'neutral') {
      setNeutral(value);
      return;
    }
    if (name === 'bad') {
      setBad(value);
      return;
    }
  };

  const countTotalFeedback = () => good + bad + neutral;
  const countPositiveFeedbackPercentage = () =>
    (good / countTotalFeedback()) * 100;

  return (
    <>
      <Container>
        <Sections title="Please leave feedback">
          <FeedbackOptions
            options={arrayButton}
            onLeaveFeedback={feedbackIncrement}
          />
        </Sections>

        <Sections title="Satatistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Sections>
      </Container>
    </>
  );
}
