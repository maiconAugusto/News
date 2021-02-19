import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Icon} from 'react-native-elements';
import Text from '../components/text';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

import Initial from '../pages/Initial';
import Home from '../pages/home';
import NewSpaper from '../pages/newSpaper';
import News from '../pages/new';

const MainTabs = () => (
  <Tab.Navigator
    swipeEnabled={false}
    tabBarOptions={{
      indicatorStyle: {backgroundColor: 'transparent'},
      activeTintColor: '#00A0FF',
      inactiveTintColor: 'white',
      showIcon: true,
      contentContainerStyle: {height: 70, backgroundColor: '#393939'},
    }}
    tabBarPosition="bottom">
    <Tab.Screen
      name="Main"
      component={Home}
      options={{
        title: ({color}) => (
          <Text style={{fontFamily: 'Quicksand-Bold', color}}>Início</Text>
        ),
        tabBarIcon: ({focused, color}) => (
          <Icon
            name={focused ? 'newspaper-outline' : 'newspaper'}
            type="ionicon"
            color={color}
            size={25}
          />
        ),
      }}
    />
    <Tab.Screen
      name="newSpaper"
      component={NewSpaper}
      options={{
        title: ({color}) => (
          <Text style={{fontFamily: 'Quicksand-Bold', color}}>Seus posts</Text>
        ),
        tabBarIcon: ({focused, color}) => (
          <Icon
            name={focused ? 'add-circle-outline' : 'add'}
            type="ionicon"
            color={color}
            size={25}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="initial">
        <Stack.Screen
          name="initial"
          component={Initial}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="new"
          component={News}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditNewSpaper"
          component={NewSpaper}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
