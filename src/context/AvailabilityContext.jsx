import React, { createContext, useState, useEffect } from 'react';

export const AvailabilityContext = createContext();

export const AvailabilityProvider = ({ children }) => {
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    // Check if user has availability preference in localStorage
    const savedAvailability = localStorage.getItem('availability');
    if (savedAvailability === 'false') {
      setIsAvailable(false);
    }
  }, []);

  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
    localStorage.setItem('availability', String(!isAvailable));
  };

  return (
    <AvailabilityContext.Provider value={{ isAvailable, toggleAvailability }}>
      {children}
    </AvailabilityContext.Provider>
  );
};