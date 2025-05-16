import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ListScreen} from '../screens';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();
export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="list-screen"
        component={ListScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="details-screen"
        component={DetailsScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};
