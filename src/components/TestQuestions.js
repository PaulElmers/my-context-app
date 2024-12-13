import React from 'react';
import { useTestDifficulty } from './TestDifficultyContext';

const questions = {
  легкий: ['2 + 2 = ?', '3 + 5 = ?'],
  середній: ['12 x 3 = ?', '15 ÷ 3 = ?'],
  складний: ['√81 = ?', '5! = ?'],
};

const Question = () => {
  const { difficulty, setDifficulty } = useTestDifficulty();

  return (
    <div>
      <h2>Рівень: {difficulty}</h2>
      <ul>
        {questions[difficulty]?.map((q, index) => (
          <li key={index}>{q}</li>
        ))}
      </ul>
      <button onClick={() => setDifficulty('легкий')}>Легкий</button>
      <button onClick={() => setDifficulty('середній')}>Середній</button>
      <button onClick={() => setDifficulty('складний')}>Складний</button>
    </div>
  );
};

export default Question;
