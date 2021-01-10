import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import {
  employeeUpdate,
  employeeSave,
  employeeDelete,
} from '../actions/EmployeeActions';
import {Card, CardSection, Button, Confirm} from './common';
import EmployeeForm from './EmployeeForm';

const EmployeeEdit = props => {
  const {
    name,
    phone,
    shift,
    employee,
    employeeUpdate,
    employeeSave,
    employeeDelete,
  } = props;

  const [showModal, setShowModal] = useState(false);

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

  const onAccept = () => {
    employeeDelete({uid: employee.uid});
  };

  const onDecline = () => {
    setShowModal(false);
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

      <CardSection>
        <Button onPress={() => setShowModal(!showModal)}>Fire Employee</Button>
      </CardSection>

      <Confirm visible={showModal} onAccept={onAccept} onDecline={onDecline}>
        Are you sure you want to delete this?
      </Confirm>
    </Card>
  );
};

const mapPropsToState = state => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(
  mapPropsToState,
  {employeeUpdate, employeeSave, employeeDelete},
)(EmployeeEdit);
