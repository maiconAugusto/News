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

const MainTabs = () => (
  <Tab.Navigator
    swipeEnabled={false}
    tabBarOptions={{
      indicatorStyle: {backgroundColor: 'transparent'},
      activeTintColor: '#FFBE3D',
      inactiveTintColor: 'white',
      showIcon: true,
      contentContainerStyle: {height: 70, backgroundColor: '#4529FF'},
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
            name={focused ? 'home' : 'home-outline'}
            type="ionicon"
            color={color}
            size={25}
          />
        ),
      }}
    />
    <Tab.Screen
      name="MyPosts"
      component={Initial}
      options={{
        title: ({color}) => (
          <Text style={{fontFamily: 'Quicksand-Bold', color}}>Seus posts</Text>
        ),
        tabBarIcon: ({focused, color}) => (
          <Icon
            name={focused ? 'heart' : 'heart-outline'}
            type="ionicon"
            color={color}
            size={25}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Initial}
      options={{
        title: ({color}) => (
          <Text style={{fontFamily: 'Quicksand-Bold', color}}>Perfil</Text>
        ),
        tabBarIcon: ({focused, color}) => (
          <Icon
            name={focused ? 'user' : 'user-o'}
            type="font-awesome"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
