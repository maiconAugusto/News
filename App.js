import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Route from './src/routes/index';
import {Provider} from 'react-redux';
import Store from './src/store/index';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#7B64FF'}}>
      <Provider store={Store}>
        <StatusBar backgroundColor="#7B64FF" barStyle="light-content" />
        <Route />
      </Provider>
    </SafeAreaView>
  );
};
export default App;
