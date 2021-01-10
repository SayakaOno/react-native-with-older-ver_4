import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import {employeeUpdate, employeeSave} from '../actions/EmployeeActions';
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';

const EmployeeEdit = props => {
  const {name, phone, shift, employee, employeeUpdate, employeeSave} = props;

  useEffect(() => {
    _.each(employee, (value, prop) => {
      employeeUpdate({prop, value});
    });
  }, [employeeUpdate]);

  const onButtonPress = () => {
    employeeSave({name, phone, shift, uid: employee.uid});
  };

  const onTextPress = () => {
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  };

  return (
    <Card>
      <EmployeeForm {...props} />
      <CardSection>
        <Button onPress={onButtonPress}>Save Changes</Button>
      </CardSection>
      <CardSection>
        <Button onPress={onTextPress}>Text Schedule</Button>
      </CardSection>
    </Card>
  );
};

const mapPropsToState = state => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(
  mapPropsToState,
  {employeeUpdate, employeeSave},
)(EmployeeEdit);
