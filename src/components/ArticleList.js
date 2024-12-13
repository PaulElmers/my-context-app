import React from 'react';
import { useArticle } from './ArticleContext';

const articles = {
  technology: ['AI in 2024', 'New Smartphones', 'Web3 Development'],
  health: ['Tips for Healthy Living', 'Meditation', 'Brain Food'],
};

const ArticleList = () => {
  const { topic, changeTopic } = useArticle();

  return (
    <div>
      <h2>Topic: {topic}</h2>
      <ul>
        {articles[topic]?.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
      <button onClick={() => changeTopic('health')}>Health</button>
      <button onClick={() => changeTopic('technology')}>Technology</button>
    </div>
  );
};

export default ArticleList;
