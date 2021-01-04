import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {emailChanged, passwordChanged, loginUser} from '../actions';

const LoginForm = ({
  email,
  password,
  emailChanged,
  passwordChanged,
  loginUser,
  error,
  loading,
}) => {
  const onEmailChange = text => {
    emailChanged(text);
  };

  const onPasswordChange = text => {
    passwordChanged(text);
  };

  const onButtonPress = () => {
    loginUser(email, password);
  };

  const renderButton = () => {
    if (loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={onButtonPress}>Login</Button>;
  };

  const renderError = () => {
    if (error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>{error}</Text>
        </View>
      );
    }
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
          secureTextEntry
          label="Password"
          placeholder="password"
          onChangeText={onPasswordChange}
          value={password}
        />
      </CardSection>

      {renderError()}

      <CardSection>{renderButton()}</CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading,
});

export default connect(
  mapStateToProps,
  {emailChanged, passwordChanged, loginUser},
)(LoginForm);
