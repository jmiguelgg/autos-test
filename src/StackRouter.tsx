import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Years from './screens/Years';
import Make from './screens/Make';
import {NavigationContainer} from '@react-navigation/native';

const StackRouter = (): React.ReactNode => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Years"
          component={Years}
          options={{title: 'Choose Year'}}
        />
        <Stack.Screen
          name="Make"
          component={Make}
          options={{title: 'Choose Make'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouter;
