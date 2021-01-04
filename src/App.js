import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducer';
import config from '../firebaseConfig';
import LoginForm from './components/LoginForm';
import {Header} from './components/common';

const App = () => {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }, []);

  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <View>
        <Header headerText="App" />
        <LoginForm />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
