# React Native Stack navigator

**The simplest stack navigator for react native applications which has no bloatware unlike other alternates.**
**Works with React Native vanilla as well as expo. No native code involved.**
_React 16.8.x+_

To install simply type:

```
npm i rn-stack-navigator --save
```

or

```
yarn add rn-stack-navigator
```

**Usage**
You get 3 Components and 1 hook from rn-stack-navigator

```
import { NavContainer, Nav, NavScreen, useNavigator } from 'rn-stack-navigator';
```

Use _NavContainer_ component as the root of your App.
All your Screens lie inside _Nav_ component.
_Nav_ component as an optional props: _defaultScreen_, where you can pass the name of the screen which you want to appear first, if not passed it will use the first _NavScreen_ component's name.
_NavScreen_ component takes 2 props: _name_, where you name your component, and _component_, where you pass your actual component.
Also _NavScreen_ component takes any other props you pass and sends it to the respective screen as props.
And _useNavigator_ gives 2 functions, _setScreen_, _clearHistoryAndSetScreen_.
_setScreen_ takes the name of the screen and navigates to that screen, _clearHistoryAndSetScreen_ takes the name of the screen, clears the previous screen history and sets the new screen.

**Example:**
**App.js**

```
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';

import { NavContainer, Nav, NavScreen } from 'rn-stack-navigator';

export default function App() {
  return (
    <NavContainer>
      <View style={styles.container}>
        <Nav defaultScreen="screen3">
          <NavScreen name="screen1" component={Screen1} />
          <NavScreen
            name="screen2"
            component={Screen2}
            propPassingExample={{ arr: [1, 2, 3] }}
          />
          <NavScreen name="screen3" component={Screen3} />
          <NavScreen name="screen4" component={Screen4} />
        </Nav>
      </View>
    </NavContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```

**Screen1.js**

```
import React from 'react';
import { View } from 'react-native';
import CustomText from '../CustomText';

import { useNavigator } from 'rn-stack-navigator';

export default () => {
  const { setScreen, clearHistoryAndSetScreen } = useNavigator();
  return (
    <View style={{ backgroundColor: 'yellow' }}>
      <CustomText text="Screen1" onPress={() => setScreen('screen1')} />
      <CustomText
        text="Screen2"
        style={{ color: 'blue' }}
        onPress={() => setScreen('screen2')}
      />
      <CustomText
        text="Screen3"
        style={{ color: 'blue' }}
        onPress={() => setScreen('screen3')}
      />
      <CustomText
        text="Screen4"
        style={{ color: 'blue' }}
        onPress={() => {
          clearHistoryAndSetScreen('screen4');
        }}
      />
    </View>
  );
};
```
