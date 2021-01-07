import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {employeeUpdate, employeeSave} from '../actions/EmployeeActions';
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';

const EmployeeEdit = props => {
  useEffect(() => {
    _.each(props.employee, (value, prop) => {
      props.employeeUpdate({prop, value});
    });
  }, [props.employeeUpdate]);

  const onButtonPress = () => {
    const {name, phone, shift} = props;
    props.employeeSave({name, phone, shift, uid: props.employee.uid});
  };

  return (
    <Card>
      <EmployeeForm {...props} />
      <CardSection>
        <Button onPress={onButtonPress}>Save Changes</Button>
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
