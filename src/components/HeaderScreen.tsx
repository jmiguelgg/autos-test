import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HeaderScreenProps {
  title: string;
  subtitle?: React.ReactNode;
}

const HeaderScreen = ({
  title,
  subtitle,
}: HeaderScreenProps): React.ReactNode => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#a3a3a3',
    textAlign: 'center',
  },
});

export default HeaderScreen;
