import React, { createContext, useState, useContext } from 'react';

const RoleAuthContext = createContext();

export const RoleAuthProvider = ({ children }) => {
  const [role, setRole] = useState('guest');

  const changeRole = (newRole) => setRole(newRole);

  return (
    <RoleAuthContext.Provider value={{ role, changeRole }}>
      {children}
    </RoleAuthContext.Provider>
  );
};

export const useRoleAuth = () => useContext(RoleAuthContext);
