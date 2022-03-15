import React, { createContext, useContext, useState, useCallback } from 'react';

const MessageContext = createContext();

export const useMessage = () => {
  return useContext(MessageContext);
};

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const showMessage = useCallback(
    (message, options) => {
      const { persist, onClose } = options;

      setTimeout(() => {
        setMessage(message);
        setIsVisible(true);

        if (!persist) {
          setTimeout(() => {
            setIsVisible(false);
            if (onClose) {
              onClose();
            }
          }, 250);
        }
      }, 0);
    },
    [setMessage, setIsVisible]
  );

  const showError = useCallback(
    (message, options) => {
      showMessage(message, options);
    },
    [showMessage]
  );

  const showSuccess = useCallback(
    (message, options) => {
      showMessage(message, options);
    },
    [showMessage]
  );

  const value = {
    message,
    isVisible,
    showError,
    showSuccess,
  };

  return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
};
