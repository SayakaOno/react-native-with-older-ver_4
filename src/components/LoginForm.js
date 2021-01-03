import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Input, Button} from './common';
import {emailChanged} from '../actions';

const LoginForm = ({}) => {
  const onEmailChange = text => {
    emailChanged(text);
  };

  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="email@gmail.com"
          onChangeText={onEmailChange}
        />
      </CardSection>

      <CardSection>
        <Input label="Password" placeholder="password" />
      </CardSection>

      <CardSection>
        <Button>Login</Button>
      </CardSection>
    </Card>
  );
};

const mapStateToProps = state => {
  email: state.email;
};

export default connect(
  mapStateToProps,
  emailChanged,
)(LoginForm);
