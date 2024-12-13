import React from 'react';
import { useRoleAuth } from './RoleAuthContext';

const RoleBasedContent = () => {
  const { role, changeRole } = useRoleAuth();

  return (
    <div>
      <h2>Поточна роль: {role}</h2>
      <button onClick={() => changeRole('guest')}>Гість</button>
      <button onClick={() => changeRole('admin')}>Адмін</button>

      <div>
        {role === 'guest' && <p>Ласкаво просимо, Гість! Ви маєте обмежений доступ.</p>}
        {role === 'admin' && <p>Ласкаво просимо, Адмін! Ви маєте повний доступ.</p>}
      </div>
    </div>
  );
};

export default RoleBasedContent;
