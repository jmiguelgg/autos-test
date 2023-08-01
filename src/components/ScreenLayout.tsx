import React from 'react';
import NavSteep, {SteepOption} from './NavSteep';
import {SafeAreaView, StyleSheet, View} from 'react-native';

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
      <View>
        <NavSteep navSteepSelected={navSteep} />
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
  },
});

export default ScreenLayout;
