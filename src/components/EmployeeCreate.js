import React from 'react';
import {Picker, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions/EmployeeActions';
import {Card, CardSection, Input, Button, Spinner} from './common';

const EmployeeCreate = ({name, phone, shift, employeeUpdate}) => {
  return (
    <Card>
      <CardSection>
        <Input
          label="Name"
          placeholder="Jane"
          value={name}
          onChangeText={value => employeeUpdate({porps: 'name', value})}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Phone"
          placeholder="555-555-5555"
          value={phone}
          onChangeText={value => employeeUpdate({prop: 'phone', value})}
        />
      </CardSection>

      <CardSection style={{flexDirection: 'column'}}>
        <Text style={styles.pickerTextStyle}>Shift</Text>
        <Picker
          selectedValue={shift}
          onValueChange={value => employeeUpdate({prop: 'shift', value})}>
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>

      <CardSection>
        <Button>Create</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
});

const mapPropsToState = state => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(
  mapPropsToState,
  {employeeUpdate},
)(EmployeeCreate);
