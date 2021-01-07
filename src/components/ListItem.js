import React from 'react';
import {Text, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from './common';
import {Actions} from 'react-native-router-flux';

const ListItem = ({employee}) => {
  const onRowPress = () => {
    Actions.employeeEdit({employee});
  };

  return (
    <TouchableWithoutFeedback onPress={onRowPress}>
      <View>
        <CardSection>
          <Text style={styles.titleStyle}>{employee.name}</Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

export default ListItem;
