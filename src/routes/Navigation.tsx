import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderList from '../views/OrderList';
import Schedule from '../views/Schedule';
import Details from '../views/Details';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="OrderList"
          component={OrderList}
          options={({navigation, route}) => ({
            title: 'Orders List',
            headerTitleAlign: 'center',
          })}
        /> */}
        <Stack.Screen name="Schedule" component={Schedule}
        options={({navigation, route}) => ({
            title: 'Schedule a pickup',
            headerTitleAlign: 'center',
            headerLeft: navigation.goBack()
          })} />
        <Stack.Screen name="Details" component={Details}
        options={({navigation, route}) => ({
            title: 'Order Detail',
            headerTitleAlign: 'center',
            headerLeft: navigation.goBack()
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
