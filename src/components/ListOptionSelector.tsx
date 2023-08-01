import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

interface ListOptionSelectorProps {
  children: React.ReactNode;
  onPress: () => void;
}

const ListOptionSelector = ({
  children,
  onPress,
}: ListOptionSelectorProps): React.ReactNode => {
  return (
    <TouchableHighlight
      activeOpacity={0.7}
      underlayColor="#cbcbcb"
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: 1,
  },
  buttonText: {
    fontSize: 20,
    color: '#000000',
  },
});

export default ListOptionSelector;
