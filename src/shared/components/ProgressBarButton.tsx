import React, { useEffect, useRef, useState } from 'react';
import { Easing, StyleProp, ViewStyle } from 'react-native';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

import { COLORS } from '@constants/Colors';

import { View } from '@components/Themed';

export const ProgressBarButton = ({
  buttonStyle,
  cWidth,
  pad,
  setExternalProgress,
  children,
  initialPercentage = 0,
}: {
  buttonStyle: StyleProp<ViewStyle>;
  cWidth: number;
  pad: number;
  setExternalProgress: (value: number) => void;
  children?: any;
  initialPercentage?: number;
}) => {
  const BUTTON_WIDTH = cWidth || 50;
  const DEVICE_WIDTH = Dimensions.get('window').width;
  const BUTTON_HEIGHT = cWidth || 50;
  const ALLOWANCE = DEVICE_WIDTH - BUTTON_WIDTH * 2;

  const position = useRef(new Animated.Value(0));
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    position?.current.setValue((initialPercentage * ALLOWANCE) / 100);
  }, []);

  const onHandlerStateChange = (event: {
    nativeEvent: { state: number; translationX?: any };
  }) => {
    const { translationX } = event.nativeEvent;
    const oldPosition = position?.current?._value || 0;

    const newPosition = Math.min(Math.max(oldPosition + translationX, pad), ALLOWANCE);

    position?.current.setValue(newPosition);

    const newPercentage = Math.round((newPosition / ALLOWANCE) * 100);
    setExternalProgress(newPercentage);
    setPercentage(newPercentage);
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler onHandlerStateChange={onHandlerStateChange}>
        <Animated.View
          style={[
            styles.button,
            {
              width: BUTTON_WIDTH,
              height: BUTTON_HEIGHT,
              borderRadius: BUTTON_HEIGHT / 2,
            },
            { transform: [{ translateX: position?.current }] },
            buttonStyle,
          ]}
        >
          {/* <Text style={styles.buttonText}>{percentage}</Text> */}
          {children}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: COLORS.light.background,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 3,
    borderColor: COLORS.light.progress,
  },
  buttonText: {
    color: COLORS.light.progress,
    fontSize: 12,
    fontWeight: '500',
  },
});
