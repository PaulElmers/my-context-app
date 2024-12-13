import React, { createContext, useState, useContext } from 'react';

const FavoritePostsContext = createContext();

export const FavoritePostsProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addPostToFavorites = (post) => setFavorites((prev) => [...prev, post]);
  const removePostFromFavorites = (id) =>
    setFavorites((prev) => prev.filter((post) => post.id !== id));

  return (
    <FavoritePostsContext.Provider value={{ favorites, addPostToFavorites, removePostFromFavorites }}>
      {children}
    </FavoritePostsContext.Provider>
  );
};

export const useFavoritePosts = () => useContext(FavoritePostsContext);
