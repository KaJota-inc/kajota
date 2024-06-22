import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { IFLowProps } from '@pages/Auth/LGS/index';

import { COLORS, SIZES } from '@constants/Colors';

import { PickAPLanSVG } from '@shared/components/SVGS';

import { MainButton } from '@components/index';
import { Text, View } from '@components/Themed';

const PickAPlan = ({ handleStep, flow, option, currentIdx, userType }: IFLowProps) => {
  const handleContinue = async () => {
    debug.log('here');
    handleStep(flow[currentIdx + 1]);
  };

  return (
    <View style={styles.r2}>
      <View style={styles.r6}>
        <PickAPLanSVG />
        <View style={styles.r1}>
          <Text style={styles.r1t2}>Pick a plan for better features</Text>
        </View>
        <View style={styles.r3}>
          <Text style={styles.r3t1}>
            To boost your sales, select a plan and unlock powerful features.{' '}
          </Text>
        </View>
      </View>

      <View style={styles.r9}>
        <MainButton
          btnStyle={styles.r9t}
          err={false}
          title="Pick a plan"
          onPressFunction={() => {
            handleContinue();
          }}
        />
      </View>
    </View>
  );
};

export default PickAPlan;

const styles = StyleSheet.create({
  r1: {
    // flexDirection: "row",
    justifyContent: 'center',
    // width: "100%",
    // height: "80%",
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '2%',
    backgroundColor: 'transparent',
  },
  r1t1: {},
  r2: {
    // flexDirection: "row",
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: '25%',
    // marginBottom: "2%",
  },
  r2t1: {
    backgroundColor: COLORS.light.backgroundGray,
    padding: 10,
    borderRadius: 30,
  },
  r1t2: {
    // marginLeft: "8%",
    color: COLORS.light.text,
    fontSize: SIZES.sizeSeven,
    fontWeight: '600',
    // textAlign: "center",
  },
  r3: {
    width: '100%',
    marginTop: 5,
    marginBottom: 15,
  },
  r3t1: {
    marginBottom: '15%',
    fontWeight: '300',
    fontSize: SIZES.sizeSix,
    textAlign: 'center',
  },
  inputContent: {
    fontSize: SIZES.sizeSeven,
    fontWeight: '500',
    color: COLORS.light.backgroundGray,
    width: '100%',
    backgroundColor: COLORS.light.backgroundGray,
    marginBottom: 8,
    paddingLeft: '15%',
    paddingRight: '2%',
    // borderRadius:30,
    // borderWidth:2
  },
  inputOutline: {
    borderRadius: 30,
  },
  error: {
    color: COLORS.light.warning,
    fontSize: SIZES.sizeSix,
    fontWeight: '500',
    // textAlign: "center",
    marginLeft: 5,
  },
  r9: {
    marginBottom: 10,
    marginTop: '2%',
    // backgroundColor: COLORS.light.colorOne,
    paddingVertical: 5,
    width: '100%',
    alignItems: 'center',
    // alignSelf:"flex-end",
    flex: 1,
  },
  r9t: {
    // width: "80%",
    backgroundColor: COLORS.light.colorOne,
  },
  countryPicker: {
    // marginRight: 0,
    backgroundColor: 'transparent',
    // width: "160%",
    // borderWidth: 1,
    alignItems: 'flex-end',
  },
  phoneNumberInput: {
    flex: 1,
  },
  r6: {
    // color: COLORS.light.textGray,
    // fontSize: SIZES.sizeSeven,
    // marginHorizontal: "2%",
    // width: "600%",
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: "10%"
  },
  r6a: {
    flexDirection: 'row',
    // width: "100%",
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    // borderWidth: 1
  },
  r6b: {
    // borderTopWidth: 2,
    // borderTopColor: COLORS.light.textGray,
    // width: "30%",

    backgroundColor: 'transparent',
    marginLeft: 10,
  },
  r6c: {
    borderRightWidth: 2,
    borderRightColor: COLORS.light.textGray,
    height: '70%',
    backgroundColor: 'transparent',
  },

  r6d: {
    // borderTopWidth: 2,
    // borderTopColor: COLORS.light.textGray,
    // width: "30%",
    color: COLORS.light.active,
    fontSize: SIZES.sizeSeven,
    fontWeight: '400',
    backgroundColor: 'transparent',
    marginLeft: '4%',
  },
  r7: {
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginTop: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  r7t1: {
    color: COLORS.light.text,
    fontSize: SIZES.sizeSixB,
    fontWeight: '400',
    textAlign: 'center',
  },
  r7t2: {
    color: COLORS.light.colorOne,
    fontSize: SIZES.sizeSeven,
    fontWeight: '700',
    textAlign: 'center',
  },
});
