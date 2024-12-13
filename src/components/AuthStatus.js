import React from 'react';
import { useAuth } from './AuthContext';

const AuthStatus = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Ви авторизовані!</p>
          <button onClick={logout}>Вийти</button>
        </>
      ) : (
        <>
          <p>Ви не авторизовані</p>
          <button onClick={login}>Увійти</button>
        </>
      )}
    </div>
  );
};

export default AuthStatus;
