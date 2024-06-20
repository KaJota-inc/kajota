import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

const InactivityWrapper = ({ children }: any) => {
  return <View style={styles.container}>{children}</View>;
};

export default InactivityWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
