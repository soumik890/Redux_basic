import {View, Text} from 'react-native';
import React from 'react';
import Counter from './src/Counter';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = props => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
