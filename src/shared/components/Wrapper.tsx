import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';

type props = {
  child: any;
};

export default function Wrapper({ child }: props) {
  const toast = useToast();

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={5}
          style={styles.subContainer}
        >
          <View style={styles.subBody}>{child}</View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  body: {
    height: '100%',
  },
  subContainer: {
    flex: 1,
  },
  subBody: {
    height: '100%',
    width: '100%',
  },
});
