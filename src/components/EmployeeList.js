import _ from 'lodash';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';

const EmployeeList = ({employeesFetch, employees}) => {
  useEffect(() => {
    employeesFetch();
  }, []);

  const renderRow = employee => {
    return <ListItem employee={employee} />;
  };

  return (
    <FlatList
      data={employees}
      renderItem={({item}) => renderRow(item)}
      keyExtractor={item => item.uid}
    />
  );
};

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });

  return {employees};
};

export default connect(
  mapStateToProps,
  {employeesFetch},
)(EmployeeList);
