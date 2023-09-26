import * as React from 'react';
import {NavigationContainer,DarkTheme} from '@react-navigation/native';
import Main from './Navigations/Main';
import Auth from './Navigations/Auth';
import Store from './redux/Store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {getAllUsers, loadUser} from './redux/actions/userAction';
import Loader from './src/common/Loader';
import {LogBox} from 'react-native';
import {StatusBar} from 'native-base';
import { getAllPosts } from './redux/actions/postAction';
import SplashScreen from 'react-native-splash-screen'

LogBox.ignoreAllLogs();

function App() {
  return (
    <Provider store={Store}>
      <AppStack />
    </Provider>
  );
}

const AppStack = () => {
  const {isAuthenticated, loading} = useSelector((state: any) => state.user);
  // const dispatch = useDispatch();

  React.useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  React.useEffect(() => {
    SplashScreen.hide();
  }, [])
  
  return (
    <>
      <>
        <StatusBar
          animated={true}
          backgroundColor={'#0d0d0d'}
          barStyle={'light-content'}
          showHideTransition={'fade'}
        />
      </>
      {loading ? (
        <Loader />
      ) : (
        <>
          {isAuthenticated ? (
            <NavigationContainer >
              <Main />
            </NavigationContainer>
          ) : (
            <NavigationContainer>
              <Auth />
            </NavigationContainer>
          )}
        </>
      )}
    </>
  );
};

export default App;
