/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import useNavigator from './useNavigator';

const Nav = (props) => {
  const { screen, setScreen } = useNavigator();

  const children = Array.isArray(props.children)
    ? props.children
    : React.Children.toArray(props.children);

  useEffect(() => {
    props.defaultScreen
      ? setScreen(props.defaultScreen)
      : children.length > 0 && setScreen(children[0].props.name);
  }, [props.children]);

  const child =
    children.length > 0
      ? children.find((child) => child.props.name === screen)
      : null;
  const Component = child && child.props.component;

  return <>{Component && <Component {...child.props} />}</>;
};

export default Nav;
