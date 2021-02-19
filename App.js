import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Route from './src/routes/index';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#7B64FF'}}>
      <StatusBar backgroundColor="#7B64FF" barStyle="light-content" />
      <Route />
    </SafeAreaView>
  );
};
export default App;
