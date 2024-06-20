import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { Country, CountryCode } from 'react-native-country-picker-modal/lib/types';
import { Avatar, TextInput } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

import { IFLowProps } from '@pages/Auth/LGS/index';

import { COLORS, SIZES } from '@constants/Colors';

import { validateObject } from '@shared/helper';
import ValidateData from '@shared/lib/validateData';

import { MainButton } from '@components/index';
import { Text, View } from '@components/Themed';

const WYC = ({ handleStep, flow, option, currentIdx }: IFLowProps) => {
  const [error, setError] = useState<boolean>(false);
  const [errorCount, setErrorCount] = useState<number>(0);

  const [country, setCountry] = useState<string>('United States');
  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [callingCode, setCallingCode] = useState<string>('1');
  const [flag, setFlag] = useState<string>('🇺🇸');

  const [visible, setVisible] = useState<boolean>(false);

  const [progressPercent, setProgressPercent] = useState<number>(20); //5-97.5
  const handleVisible = () => {
    setVisible(!visible);
  };

  const onSelect = (cntry: Country) => {
    debug.log('cntry', cntry);
    setCountryCode(cntry.cca2);
    setCallingCode(cntry.callingCode[0]);
    setFlag(cntry.flag);
    setCountry(cntry.name as string);
  };

  const SCHEME = {
    country: (val: string) => val?.length >= 3,
    // country: (val: string) => ValidateData.number(country),
  };

  type TypeValidation = {
    data: Record<keyof typeof SCHEME, { isValid: boolean }>;
    isValid: boolean;
  };

  let validation: TypeValidation = validateObject(
    {
      country: country,
    },
    // @ts-ignore
    SCHEME,
  );

  const filledFields = () => {
    return !!country;
  };

  const handleContinue = async () => {
    debug.log('here');
    validation = validateObject(
      {
        country: country,
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
        country: country,
      },
      // @ts-ignore
      SCHEME,
    );
    if (!validation.isValid && errorCount >= 1 && filledFields()) {
      setError(true);
    }
  }, [country]);

  return (
    <>
      <View style={styles.r1}>
        <Text style={styles.r1t2}>Let’s get started!</Text>
      </View>

      <View style={styles.progressMain}>
        <View style={styles.progressInner}>
          <View style={[styles.progressActual, { width: `${progressPercent}%` }]} />
        </View>
        <Text style={styles.mr2t1}>{`${progressPercent}%`}</Text>
      </View>

      <View style={styles.r3}>
        <Text style={styles.r7t1}>What’s your Country?</Text>

        <TextInput
          activeOutlineColor={
            validation?.data?.country.isValid && error
              ? COLORS.light.colorOne
              : COLORS.light.warning
          }
          textColor={COLORS.light.text}
          // label={"Full Name"}
          // disabled={true}
          autoCapitalize="none"
          autoCorrect={false}
          editable={false}
          keyboardType="phone-pad"
          left={
            <TextInput.Icon
              style={styles.r6}
              icon={
                () => (
                  // <TouchableOpacity style={styles.r6a}>
                  <CountryPicker
                    countryCode={countryCode}
                    withFilter
                    withFlag
                    withCallingCode
                    withEmoji
                    onSelect={onSelect}
                    containerButtonStyle={styles.countryPicker}
                    visible={visible}
                    onClose={() => setVisible(false)}
                    onOpen={() => setVisible(true)}
                  />
                )

                // </TouchableOpacity>
              }
            />
          }
          mode="outlined"
          outlineColor={
            !validation?.data?.country.isValid && error
              ? COLORS.light.warning
              : COLORS.light.inactive
          }
          outlineStyle={styles.inputOutline}
          placeholder="Country"
          placeholderTextColor={COLORS.light.active}
          right={
            <TextInput.Icon
              style={styles.r6}
              icon={() => (
                <TouchableOpacity style={styles.r6a} onPress={handleVisible}>
                  <Feather
                    name={visible ? 'chevron-up' : 'chevron-down'}
                    size={28}
                    color={COLORS.light.text}
                    style={styles.r6b}
                  />
                  {/*<Avatar.Icon*/}
                  {/*    size={28}*/}
                  {/*    icon="chevron-down"*/}
                  {/*    color={COLORS.light.text}*/}
                  {/*    style={{*/}
                  {/*        backgroundColor: "transparent",*/}
                  {/*        borderWidth: 1*/}
                  {/*    }}*/}
                  {/*/>*/}
                </TouchableOpacity>
              )}
            />
          }
          selectionColor={
            validation?.data?.country.isValid && error
              ? COLORS.light.colorOne
              : COLORS.light.warning
          }
          style={{ ...styles.inputContent }}
          textContentType="telephoneNumber"
          value={country}
          onChangeText={val => {
            setCountry(val);
          }}
          onPressIn={handleVisible}
        />
        {!validation?.data?.country.isValid && error && (
          <Text style={styles.error}>Invalid Country</Text>
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

export default WYC;

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
    fontSize: SIZES.sizeSeven,
  },
  inputContent: {
    fontSize: SIZES.sizeSeven,
    fontWeight: '500',
    color: COLORS.light.backgroundGray,
    width: '100%',
    backgroundColor: COLORS.light.backgroundGray,
    marginBottom: 8,
    paddingLeft: '5%',
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
    // alignItems: "flex-end"
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
    // alignItems: "flex-end",
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
    // marginLeft: 10
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
  r7t1: {
    color: COLORS.light.text,
    fontSize: SIZES.sizeNine,
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 20,
  },
});
