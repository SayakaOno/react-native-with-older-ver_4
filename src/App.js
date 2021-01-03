import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducer';
import config from '../firebaseConfig';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Text>Hello</Text>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
