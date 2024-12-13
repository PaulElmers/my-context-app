import React, { createContext, useState, useContext } from 'react';

const UserRatingContext = createContext();

export const UserRatingProvider = ({ children }) => {
  const [ratings, setRatings] = useState([
    { id: 1, name: 'Користувач A', points: 120 },
    { id: 2, name: 'Користувач B', points: 150 },
    { id: 3, name: 'Користувач C', points: 100 },
    { id: 4, name: 'Користувач D', points: 200 },
  ]);

  return (
    <UserRatingContext.Provider value={{ ratings }}>
      {children}
    </UserRatingContext.Provider>
  );
};

export const useUserRating = () => useContext(UserRatingContext);
