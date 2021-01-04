import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Input, Button} from './common';
import {emailChanged, passwordChanged} from '../actions';

const LoginForm = ({email, password, emailChanged, passwordChanged}) => {
  const onEmailChange = text => {
    emailChanged(text);
  };

  const onPasswordChange = text => {
    passwordChanged(text);
  };

  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="email@gmail.com"
          onChangeText={onEmailChange}
          value={email}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Password"
          placeholder="password"
          onChangeText={onPasswordChange}
          value={password}
        />
      </CardSection>

      <CardSection>
        <Button>Login</Button>
      </CardSection>
    </Card>
  );
};

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
});

export default connect(
  mapStateToProps,
  {emailChanged, passwordChanged},
)(LoginForm);
