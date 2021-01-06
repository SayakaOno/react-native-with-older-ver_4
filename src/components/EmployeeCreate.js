import React from 'react';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions/EmployeeActions';
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';

const EmployeeCreate = props => {
  const {name, phone, shift, employeeCreate} = props;
  const onButtonPress = () => {
    employeeCreate({name, phone, shift: shift || 'Monday'});
  };

  return (
    <Card>
      <EmployeeForm {...props} />
      <CardSection>
        <Button onPress={onButtonPress}>Create</Button>
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
  {employeeUpdate, employeeCreate},
)(EmployeeCreate);
