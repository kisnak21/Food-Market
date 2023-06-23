import React = require('react');
import {NavigationContainer} from '@react-navigation/native';

import {SplashScreen} from './pages';

function App() {
  return (
    <NavigationContainer>
      <SplashScreen />
    </NavigationContainer>
  );
}

export default App;
