import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { COLORS } from '@constants/Colors';

import { MainButtonContainer } from '@shared/types/generaltypes';

const MainButton: React.FC<MainButtonContainer> = ({
  title = '',
  disabled = false,
  onPressFunction = () => {},
  err = false,
  btnStyle = {},
  textStyle = {},
  loading = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: err
            ? `${COLORS.light.tabIconSelected}`
            : `${COLORS.light.colorOne}`,
        },
        // {
        //   backgroundColor: disabled
        //     ? `${COLORS.Light.colorThree}`
        //     : `${COLORS.Light.colorOne}`,
        // },
        btnStyle,
        {
          opacity: disabled ? 0.5 : 1,
        },
      ]}
      onPress={onPressFunction}
    >
      {loading ? (
        <ActivityIndicator color={COLORS.light.background} size="large" />
      ) : (
        <Text style={[styles.textStyle, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 30,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 15,

    // marginVertical: 10,
  },
  textStyle: {
    color: COLORS.light.background,
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    // borderWidth: 1,
    margin: 2,
  },
  opacity: {
    opacity: 0.8,
  },
});

export default MainButton;
