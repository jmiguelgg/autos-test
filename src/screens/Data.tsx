import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
      <View style={styles.container}>
        <Text style={styles.title}>Data selected</Text>
        <Text style={styles.info}>Year: {year}</Text>
        <Text style={styles.info}>Make: {make.MakeName}</Text>
        <Text style={styles.info}>Manufacture: {make.MfrName}</Text>
        <Text style={styles.info}>Model: {model.Model_Name}</Text>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
  },
  info: {
    fontSize: 20,
    marginBottom: 5,
  },
});

export default Data;
