import React = require('react');
import {NavigationContainer} from '@react-navigation/native';

import {SplashScreen, SignIn} from './pages';

function App() {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      <SignIn />
    </NavigationContainer>
  );
}

export default App;
