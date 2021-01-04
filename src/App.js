import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducer';
import config from '../firebaseConfig';
import LoginForm from './components/LoginForm';
import {Header} from './components/common';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="App" />
        <LoginForm />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
