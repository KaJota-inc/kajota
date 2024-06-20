import React from 'react';
import { StyleSheet } from 'react-native';

import { COLORS } from '@constants/Colors';

import { Text, View } from './Themed';

interface Iprops {
  badgeSize?: number;
  corner?: number;
  text?: string;
  textSize?: number;
  bgColor?: string;
  textColor?: string;
}

const Badge: React.FC<Iprops> = ({
  badgeSize = 28,
  corner = 8,
  text = '9+',
  textSize = 14,
  bgColor = COLORS.light.background,
  textColor = COLORS.light.background,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderRadius: badgeSize / 2,
          backgroundColor: bgColor,
          width: badgeSize,
          height: badgeSize,
          right: -1 * corner,
          top: -1 * corner,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            fontSize: textSize,
            color: textColor,
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    backgroundColor: COLORS.light.background,
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    padding: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
    right: -8,
    top: -8,
  },
  text: {
    color: COLORS.light.background,
    fontSize: 14,
  },
});
