import React from 'react';
import { useSettings } from './SettingsContext';

const SettingsPanel = () => {
  const { notificationsEnabled, toggleNotifications } = useSettings();

  return (
    <div>
      <p>Сповіщення: {notificationsEnabled ? 'Увімкнено' : 'Вимкнено'}</p>
      <button onClick={toggleNotifications}>
        {notificationsEnabled ? 'Вимкнути' : 'Увімкнути'}
      </button>
    </div>
  );
};

export default SettingsPanel;
