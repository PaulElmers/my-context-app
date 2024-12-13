import React from 'react';
import { useUserRating } from './UserRatingContext';

const UserRating = () => {
  const { ratings } = useUserRating();

  const topRatings = [...ratings].sort((a, b) => b.points - a.points).slice(0, 3);

  return (
    <div>
      <h2>Рейтинг користувачів</h2>
      <ul>
        {topRatings.map((user) => (
          <li key={user.id}>
            {user.name}: {user.points} балів
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRating;
