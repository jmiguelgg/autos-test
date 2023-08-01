import React from 'react';
import NavSteep, {SteepOption} from './NavSteep';
import {SafeAreaView, StyleSheet} from 'react-native';

interface ScreenLayoutProps {
  navSteep: SteepOption;
  children: React.ReactNode;
}

const ScreenLayout = ({
  children,
  navSteep,
}: ScreenLayoutProps): React.ReactNode => {
  return (
    <SafeAreaView style={styles.container}>
      <NavSteep navSteepSelected={navSteep} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default ScreenLayout;
