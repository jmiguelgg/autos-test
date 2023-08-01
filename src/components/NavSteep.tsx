import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

export enum SteepOption {
  Years,
  Make,
  Model,
  Data,
}

const Steeps: Record<SteepOption, string> = {
  [SteepOption.Years]: 'Years',
  [SteepOption.Make]: 'Make',
  [SteepOption.Model]: 'Model',
  [SteepOption.Data]: 'Data',
};

interface NavSteepProps {
  navSteepSelected: SteepOption;
}

const NavSteep = ({navSteepSelected}: NavSteepProps): React.ReactNode => {
  return (
    <FlatList
      data={Object.entries(Steeps)}
      renderItem={({item}) => (
        <Text style={styles(Number(item[0]) === navSteepSelected).vanOption}>
          {item[1]}
        </Text>
      )}
      contentContainerStyle={styles().list}
      keyExtractor={(_, index) => `steep-${index}`}
      horizontal
    />
  );
};

const styles = (selected?: boolean) =>
  StyleSheet.create({
    vanOption: {
      color: selected ? '#000000' : '#a3a3a3',
      fontWeight: selected ? 'bold' : 'normal',
      marginHorizontal: 30,
    },
    list: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 45,
      borderBottomColor: '#e7e7e7',
      borderBottomWidth: 1,
      marginBottom: 2,
    },
  });

export default NavSteep;
