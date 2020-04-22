import React, { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';

export const ScreenContext = React.createContext();

export default ({ children }) => {
  const [screen, setScreen] = useState();

  const [screenStack, setScreenStack] = useState([]);
  const [poppedScreen, setPoppedScreen] = useState('');

  useEffect(() => {
    if (
      screen &&
      poppedScreen !== screen &&
      screen !== screenStack[screenStack.length - 1]
    ) {
      setScreenStack([...screenStack, screen]);
      setPoppedScreen('');
    }
  }, [screen]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);

    return () =>
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick
      );
  });

  const handleBackButtonClick = () => {
    if (screenStack.length > 1) {
      setScreen(screenStack[screenStack.length - 2]);
      setPoppedScreen(screenStack[screenStack.length - 1]);
      let newStack = screenStack.slice(0, screenStack.length - 1);
      setScreenStack(newStack);
      return true;
    }
  };

  const clearHistoryAndSetScreen = (screen) => {
    setScreenStack([screen]);
    setScreen(screen);
  };

  return (
    <ScreenContext.Provider
      value={{ screen, setScreen, clearHistoryAndSetScreen }}
    >
      {children}
    </ScreenContext.Provider>
  );
};
