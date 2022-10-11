import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {act} from 'react-test-renderer';

const Tab: React.FC<{name: string; active?: boolean}> = ({name, active}) => {
  return (
    <TouchableOpacity
      style={active ? styles.activeContainer : styles.container}>
      <Text style={active ? styles.activeText: styles.textStyle}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({
  activeContainer: {
    backgroundColor: '#CE1567',
    borderWidth: 0.6,
    borderColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderWidth: 0.6,
    borderColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 16,
    fontFamily: 'Syne-Regylar',
    color: 'black',
  },
  activeText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Syne-Regylar',
  },
});
