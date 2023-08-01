import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loader = (): React.ReactNode => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ff5100" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;