import { useContext, useState } from 'react';
import { ScreenContext } from './NavContainer';

function useNavigator() {
  const { screen, setScreen, clearHistoryAndSetScreen } = useContext(
    ScreenContext
  );
  return { screen, setScreen, clearHistoryAndSetScreen };
}

export default useNavigator;
