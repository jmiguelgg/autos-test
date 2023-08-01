/* eslint-disable react/no-unstable-nested-components */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Years from './screens/Years';
import Make from './screens/Make';
import {NavigationContainer} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from './Store';
import HeaderScreen from './components/HeaderScreen';
import Model from './screens/Model';
import Data from './screens/Data';

type RootStackParamList = {
  Years: undefined;
  Make: undefined;
  Model: undefined;
  Data: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

const StackRouter = (): React.ReactNode => {
  const {year, make, model} = useSelector(
    (state: RootState) => state.autoParts,
  );
  const Stack = createStackNavigator<Props>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Years"
          component={Years}
          options={{headerTitle: () => <HeaderScreen title="Choose Year" />}}
        />
        <Stack.Screen
          name="Make"
          component={Make}
          options={{
            headerTitle: () => (
              <HeaderScreen title="Choose Make" subtitle={year} />
            ),
          }}
        />
        <Stack.Screen
          name="Model"
          component={Model}
          options={{
            headerTitle: () => (
              <HeaderScreen
                title="Choose Model"
                subtitle={`${year} ${make.MakeName}`}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Data"
          component={Data}
          options={{
            headerTitle: () => (
              <HeaderScreen
                title="Data"
                subtitle={`${year} ${make.MakeName} ${model.Model_Name}`}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouter;
