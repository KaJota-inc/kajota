import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { IFLowProps } from '@pages/Auth/LGS/index';

import { COLORS, SIZES } from '@constants/Colors';

import { ConfirmationCode } from '@shared/components/ConfirmationCode';

import { MainButton } from '@components/index';
import { Text, View } from '@components/Themed';

const Digit6Code = ({ handleStep, flow, option, currentIdx }: IFLowProps) => {
  const [code, setCode] = useState<string>('');
  const [errorText, setErrorText] = useState<string>('');

  const handleContinue = async () => {
    debug.log('here');
    handleStep(flow[currentIdx + 1]);
  };

  const verifyCode = async () => {
    handleStep(flow[currentIdx + 1]);
  };

  useEffect(() => {
    setErrorText('');
    if (code?.length === 7) {
      verifyCode();
    }
  }, [code]);

  return (
    <>
      <View style={styles.r1}>
        <Text style={styles.r1t2}>Enter 6 Digits Code</Text>
      </View>
      <View style={styles.r3}>
        <Text style={styles.r3t1}>Input the 6-digit code we've sent to your number</Text>
      </View>

      <ConfirmationCode
        error={!!errorText}
        errorMessage={errorText}
        setValue={val => {
          setCode(val);
        }}
        value={code}
      />

      <View style={styles.r9}>
        <MainButton
          btnStyle={styles.r9t}
          err={false}
          title="Continue"
          onPressFunction={() => {
            handleContinue();
          }}
        />
      </View>
      {option !== 'forgot-password' && (
        <View style={styles.r7}>
          <Text style={styles.r7t1}>Yet to get an email? </Text>
          <TouchableOpacity
            onPress={() => {
              // navigation?.navigate(AuthRoutes.SignUp);
            }}
          >
            <Text style={styles.r7t2}>Resend SMS </Text>
          </TouchableOpacity>
          <Text style={styles.r7t1}>in 54s </Text>
        </View>
      )}
    </>
  );
};

export default Digit6Code;

const styles = StyleSheet.create({
  r1: {
    flexDirection: 'row',
    // justifyContent: "center",
    width: '100%',
    // alignItems: "center",
    marginTop: '5%',
    marginBottom: '2%',
    backgroundColor: 'transparent',
  },
  r1t1: {},
  r2: {
    flexDirection: 'row',
    // justifyContent: "center",
    width: '100%',
    // alignItems: "flex-start",
    marginTop: '8%',
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
    fontSize: SIZES.sizeNine,
    fontWeight: '700',
    // textAlign: "center",
  },
  r3: {
    width: '100%',
    marginTop: 5,
    marginBottom: 15,
  },
  r3t1: {
    marginBottom: 18,
    fontWeight: '300',
    fontSize: SIZES.sizeSixB,
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
    width: '600%',
    // borderWidth: 1,
    alignItems: 'flex-end',
    marginLeft: '10%',
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
