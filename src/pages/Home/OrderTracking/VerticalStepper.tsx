import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { nanoid } from '@reduxjs/toolkit';

import { TrackingStepType } from '@pages/Home/OrderTracking/index';

import { COLORS, SIZES } from '@constants/Colors';

import { LocationIconSVG } from '@shared/components/SVGS';

import { Text, View } from '@components/Themed';

type IProps = {
  steps: TrackingStepType[];
  currentStep: number;
  onStepPress: (val: number) => void;
};

const VerticalStepper = ({ steps, currentStep, onStepPress }: IProps) => {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <TouchableOpacity
          key={nanoid()}
          style={styles.stepContainer}
          onPress={() => onStepPress(index)}
        >
          <View style={[styles.circle, currentStep === index && styles.activeCircle]}>
            {index === 3 ? (
              <LocationIconSVG height={18} width={18} />
            ) : (
              <View style={styles.innerCircle} />
            )}
          </View>
          <View style={[styles.line, index === steps.length - 1 && styles.activeLine]} />
          <View style={styles.stepContent}>
            <Text style={styles.stepText1}>
              {step.date}, {step.time}
            </Text>
            <Text style={styles.stepText2}>{step.detail}</Text>
            <Text style={styles.stepText3}>{step.address}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default VerticalStepper;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: 'transparent',
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  line: {
    width: 2.5,
    height: '100%',
    backgroundColor: COLORS.light.colorOne,
    position: 'absolute',
    marginLeft: 14,
    zIndex: -1,
  },
  activeLine: {
    backgroundColor: 'transparent',
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: COLORS.light.colorOneLight2,
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.light.colorOne,
  },
  activeCircle: {},
  circleText: {
    fontSize: 16,
    color: '#000',
  },
  stepContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '5%',
    paddingTop: 5,
    marginBottom: 10,
    backgroundColor: 'transparent',
    gap: 10,
  },
  stepText1: {
    fontSize: SIZES.sizeSix,
    color: COLORS.light.textGray,
  },
  stepText2: {
    fontSize: SIZES.sizeSeven,
    fontWeight: '600',
  },
  stepText3: {
    fontSize: SIZES.sizeSixC,
    color: COLORS.light.active,
  },
});
