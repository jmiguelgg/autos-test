import React from 'react';
import {Text} from 'react-native';
import {SteepOption} from '../components/NavSteep';
import ScreenLayout from '../components/ScreenLayout';
import {useSelector} from 'react-redux';
import {RootState} from '../Store';

const Data = (): React.ReactNode => {
  const {year, make, model} = useSelector(
    (state: RootState) => state.autoParts,
  );
  return (
    <ScreenLayout navSteep={SteepOption.Data}>
      <Text>Data selected:</Text>
    </ScreenLayout>
  );
};

export default Data;
