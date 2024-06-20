import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

import { IFLowProps } from '@pages/Auth/LGS/index';

import { COLORS, SIZES } from '@constants/Colors';

import { validateObject } from '@shared/helper';
import ValidateData from '@shared/lib/validateData';

import { MainButton } from '@components/index';
import { Text, View } from '@components/Themed';

const ConfirmPassword = ({ handleStep, flow, option, currentIdx }: IFLowProps) => {
  const cWidth = 100;

  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [errorCount, setErrorCount] = useState<number>(0);

  const [progressPercent, setProgressPercent] = useState<number>(100); //5-97.5
  const handleSetProgressPercent = (val: number) => {
    setProgressPercent(val);
  };

  const SCHEME = {
    user: (user: string) => user?.length >= 4,
    password: (password: string) => ValidateData.special(password),
  };

  type TypeValidation = {
    data: Record<keyof typeof SCHEME, { isValid: boolean }>;
    isValid: boolean;
  };

  let validation: TypeValidation = validateObject(
    {
      password: password,
    },
    // @ts-ignore
    SCHEME,
  );

  const filledFields = () => {
    return !!password;
  };

  const handleContinue = async () => {
    debug.log('here');
    validation = validateObject(
      {
        password: password,
      },
      // @ts-ignore
      SCHEME,
    );
    debug.log('validation', validation);

    // if (!validation.isValid) {
    //     // setError(true)
    //     return;
    // }

    handleStep(flow[currentIdx + 1]);
  };

  useEffect(() => {
    setErrorCount(errorCount + 1);
    validation = validateObject(
      {
        password: password,
      },
      // @ts-ignore
      SCHEME,
    );
    if (!validation.isValid && errorCount >= 1 && filledFields()) {
      setError(true);
    }
  }, [password]);

  return (
    <>
      <View style={styles.r1}>
        <Text style={styles.r1t2}>Protect your account.</Text>
      </View>

      <View style={styles.progressMain}>
        <View style={styles.progressInner}>
          <View style={[styles.progressActual, { width: `${progressPercent}%` }]} />
        </View>
        <Text style={styles.mr2t1}>{`${progressPercent}%`}</Text>
      </View>
      {/*<View style={styles.mr2}>*/}
      {/* */}
      {/*</View>*/}
      <View style={styles.r3}>
        <Text style={styles.r3t1}>Hint: Don’t use password from other accounts.</Text>
      </View>

      <View style={styles.r3}>
        <Text style={styles.r7t1}>Confirm Password</Text>
        <TextInput
          activeOutlineColor={
            validation?.data?.password.isValid && error
              ? COLORS.light.colorOne
              : COLORS.light.warning
          }
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          mode="outlined"
          outlineColor={
            !validation?.data?.password.isValid && error
              ? COLORS.light.warning
              : COLORS.light.inactive
          }
          outlineStyle={styles.inputOutline}
          placeholderTextColor={COLORS.light.active}
          right={
            <TextInput.Icon
              icon={hidePassword ? 'eye-off' : 'eye'}
              color={COLORS.light.active}
              onPress={() => setHidePassword(!hidePassword)}
            />
          }
          secureTextEntry={hidePassword}
          selectionColor={
            validation?.data?.password.isValid && error
              ? COLORS.light.colorOne
              : COLORS.light.warning
          }
          style={{ ...styles.inputContent }}
          textContentType="password"
          value={password}
          onChangeText={val => {
            setPassword(val);
          }}
          textColor={COLORS.light.text}
          // label={"Full Name"}
          placeholder="Password"
        />
        {!validation?.data?.password.isValid && error && (
          <Text style={styles.error}>Invalid Password</Text>
        )}
      </View>

      <View style={styles.r9}>
        <MainButton
          btnStyle={styles.r9t}
          err={false}
          title="Next"
          onPressFunction={() => {
            handleContinue();
          }}
        />
      </View>
    </>
  );
};

export default ConfirmPassword;

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
    fontSize: SIZES.sizeEightB,
    fontWeight: '400',
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
    paddingLeft: '2%',
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
    alignItems: 'flex-end',
  },
  r9t: {
    width: '30%',
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
    fontSize: SIZES.sizeNine,
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 20,
  },
  r7t2: {
    color: COLORS.light.colorOne,
    fontSize: SIZES.sizeSeven,
    fontWeight: '700',
    textAlign: 'center',
  },
  buttonStyle: {
    // borderWidth: 5,
    borderColor: COLORS.light.progress,
    backgroundColor: COLORS.light.progress,
    // position: "absolute",
  },
  progressMain: {
    marginVertical: '2%',
    // marginBottom: 75,
    //   borderWidth: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  progressInner: {
    backgroundColor: COLORS.light.progressBg,
    borderRadius: 5,
    width: '88%',
    height: 6,
    // borderWidth: 1,
  },
  progressActual: {
    backgroundColor: COLORS.light.progress,
    height: 6,
    borderRadius: 5,
  },
  mr2t1: {
    color: COLORS.light.text,
  },
});
