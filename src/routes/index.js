import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
// const Tab = createMaterialTopTabNavigator();

import Initial from '../pages/Initial';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="initial">
        <Stack.Screen
          name="initial"
          component={Initial}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
