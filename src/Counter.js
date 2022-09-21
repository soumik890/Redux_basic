import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addition, substraction} from './store/action';

const Counter = props => {
  const data = useSelector(state => state.counter);
  const dispatch = useDispatch();

  // console.log(data);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'red', fontSize: 25, fontWeight: 'bold'}}>
        {data}
      </Text>
      <Text>{'\n'}</Text>
      <Button title="Add" onPress={() => dispatch(addition())} />
      <Text>{'\n'}</Text>
      <Button title="Substract" onPress={() => dispatch(substraction())} />
    </View>
  );
};

export default Counter;
