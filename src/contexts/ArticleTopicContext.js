import React, { createContext, useContext, useState } from 'react';

const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [topic, setTopic] = useState('technology');

  const changeTopic = (newTopic) => {
    setTopic(newTopic);
  };

  return (
    <ArticleContext.Provider value={{ topic, changeTopic }}>
      {children}
    </ArticleContext.Provider>
  );
};

// Hook to use the article context
export const useArticle = () => {
  return useContext(ArticleContext);
};
