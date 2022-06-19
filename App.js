import * as React from 'react';
import AppIndex from './src/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthProvider} from './src/components/navigation/AuthProvider';

// If the user start use the app for the first time, he should see the onboardign pg. if not he can skip it
function App() {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  React.useEffect(() => {
    AsyncStorage.getItem('alreadyLunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);
  // If it is the first time go to the onboarding then navigate to the login pg.
  if (isFirstLaunch === null) {
    return null;
  } else {
    return (
      <>
        <AuthProvider>
          <AppIndex />
        </AuthProvider>
      </>
    );
  }
}

export default App;
