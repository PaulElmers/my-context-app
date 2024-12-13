import React from 'react';
import { useFavoritePosts } from './FavoritePostsContext';

const posts = [
  { id: 1, title: 'Стаття 1' },
  { id: 2, title: 'Стаття 2' },
  { id: 3, title: 'Стаття 3' },
];

const FavoritePosts = () => {
  const { favorites, addPostToFavorites, removePostFromFavorites } = useFavoritePosts();

  return (
    <div>
      <h2>Всі пости</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => addPostToFavorites(post)}>Додати до обраних</button>
          </li>
        ))}
      </ul>
      <h2>Обрані пости</h2>
      <ul>
        {favorites.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => removePostFromFavorites(post.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritePosts;
