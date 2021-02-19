import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Route from './src/routes/index';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#393939'}}>
      <StatusBar backgroundColor="#4529FF" barStyle="light-content" />
      <Route />
    </SafeAreaView>
  );
};
export default App;
