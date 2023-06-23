import React = require('react');
import {NavigationContainer} from '@react-navigation/native';

import {SplashScreen, SignIn} from './pages';
import Router from './router';

function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
