import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { Country, CountryCode } from 'react-native-country-picker-modal/lib/types';
import { TextInput } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { CompositeScreenProps } from '@react-navigation/native';

import CartItems from '@pages/Home/Cart/CartItems';

import { COLORS, SIZES } from '@constants/Colors';

import { LocationIconSVG } from '@shared/components/SVGS';
import { HomeProps, HomeRoutes } from '@shared/const/routerHome';
import { RootRoutes, RootScreenProps } from '@shared/const/routerRoot';
import { validateObject } from '@shared/helper';
import ValidateData from '@shared/lib/validateData';

import { MainButton } from '@components/index';
import { Text, View } from '@components/Themed';

type NavigationProps = CompositeScreenProps<
  HomeProps<HomeRoutes.ORDER>,
  RootScreenProps<RootRoutes.Home>
>;

const Order: React.FC<NavigationProps> = ({ navigation, route }) => {
  const [phoneNo, setPhoneNo] = useState<string>('');
  const [userAddress, setUserAddress] = useState<string>('');

  const [error, setError] = useState<boolean>(false);
  const [errorCount, setErrorCount] = useState<number>(0);

  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [callingCode, setCallingCode] = useState<string>('1');
  const [flag, setFlag] = useState<string>('🇺🇸');

  const handleBack = () => {
    // navigation?.navigate(AuthRoutes.SignUp);
    navigation?.goBack();
  };

  const onSelect = (country: Country) => {
    debug.log('country', country);
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
    setFlag(country.flag);
  };

  const SCHEME = {
    user: (user: string) => user?.length >= 4,
    phonenumber: (phone: string) => ValidateData.number(phone),
  };

  type TypeValidation = {
    data: Record<keyof typeof SCHEME, { isValid: boolean }>;
    isValid: boolean;
  };

  let validation: TypeValidation = validateObject(
    {
      phonenumber: phoneNo,
      user: userAddress,
    },
    // @ts-ignore
    SCHEME,
  );

  const filledFields = () => {
    return !!phoneNo && !!userAddress;
  };

  const handleContinue = async () => {
    debug.log('here');
    validation = validateObject(
      {
        phonenumber: phoneNo,
        user: userAddress,
      },
      // @ts-ignore
      SCHEME,
    );
    debug.log('validation', validation);

    // if (!validation.isValid) {
    //     // setError(true)
    //     return;
    // }
  };

  useEffect(() => {
    setErrorCount(errorCount + 1);
    validation = validateObject(
      {
        phonenumber: phoneNo,
        user: userAddress,
      },
      // @ts-ignore
      SCHEME,
    );
    if (!validation.isValid && errorCount >= 1 && filledFields()) {
      setError(true);
    }
  }, [phoneNo]);

  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.r2}>
            <TouchableOpacity
              style={styles.r2t1}
              onPress={() => {
                handleBack();
              }}
            >
              <Feather color={COLORS.light.text} name="chevron-left" size={28} />
            </TouchableOpacity>
            <Text style={styles.r2t4}>Order</Text>
          </View>

          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <View style={styles.r3}>
              <Text style={styles.r7t1}>Delivery Details</Text>
              <TextInput
                activeOutlineColor={
                  validation?.data?.user.isValid && error
                    ? COLORS.light.colorOne
                    : COLORS.light.warning
                }
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                left={
                  <TextInput.Icon
                    style={styles.r6loc}
                    icon={() => (
                      <TouchableOpacity>
                        <LocationIconSVG />
                      </TouchableOpacity>
                    )}
                  />
                }
                mode="outlined"
                outlineColor={
                  !validation?.data?.user.isValid && error
                    ? COLORS.light.warning
                    : COLORS.light.inactive
                }
                outlineStyle={styles.inputOutline}
                placeholderTextColor={COLORS.light.active}
                selectionColor={
                  validation?.data?.user.isValid && error
                    ? COLORS.light.colorOne
                    : COLORS.light.warning
                }
                value={userAddress}
                onChangeText={val => {
                  setUserAddress(val);
                }}
                textColor={COLORS.light.text}
                // label={"Full Name"}
                placeholder="Shipping address"
                textContentType="fullStreetAddress"
                // secureTextEntry={hidePassword}
                style={{ ...styles.inputContentLoc }}
              />
              {!validation?.data?.user.isValid && error && (
                <Text style={styles.error}>name too short</Text>
              )}
              <TextInput
                activeOutlineColor={
                  validation?.data?.phonenumber.isValid && error
                    ? COLORS.light.colorOne
                    : COLORS.light.warning
                }
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="phone-pad"
                left={
                  <TextInput.Icon
                    style={styles.r6}
                    icon={() => (
                      <TouchableOpacity style={styles.r6a}>
                        <CountryPicker
                          countryCode={countryCode}
                          withFilter
                          withFlag
                          withCallingCode
                          withEmoji
                          onSelect={onSelect}
                          containerButtonStyle={styles.countryPicker}
                        />
                        <View style={styles.r6c} />
                        <Text style={styles.r6d}>{`+${callingCode}`}</Text>
                      </TouchableOpacity>
                    )}
                  />
                }
                mode="outlined"
                outlineColor={
                  !validation?.data?.phonenumber.isValid && error
                    ? COLORS.light.warning
                    : COLORS.light.inactive
                }
                outlineStyle={styles.inputOutline}
                placeholderTextColor={COLORS.light.active}
                selectionColor={
                  validation?.data?.phonenumber.isValid && error
                    ? COLORS.light.colorOne
                    : COLORS.light.warning
                }
                style={styles.inputContent}
                textContentType="telephoneNumber"
                value={phoneNo}
                onChangeText={val => {
                  setPhoneNo(val);
                }}
                textColor={COLORS.light.text}
                // label={"Full Name"}
                placeholder=""
              />
              {!validation?.data?.phonenumber.isValid && error && (
                <Text style={styles.error}>Invalid Phone number</Text>
              )}
            </View>

            <View style={styles.cartItems}>
              <Text style={styles.r7t1}>Order List</Text>
              <CartItems />
            </View>
            <View style={styles.r8}>
              <View style={styles.r8a}>
                <Text style={styles.r8at1}>Sum Total</Text>
                <Text style={styles.r8at2}>$300.00</Text>
              </View>
              <View style={styles.r8a}>
                <Text style={styles.r8at1}>Delivery</Text>
                <Text style={styles.r8at2}>$15.00</Text>
              </View>
              <View style={styles.r8b}>
                <Text style={styles.r8at1}>Total</Text>
                <Text style={styles.r8at2}>$315.00</Text>
              </View>
            </View>

            <View style={styles.r10}>
              <View style={styles.r10a}>
                <Text style={styles.r10at1}>Total Price</Text>
                <Text style={styles.r10at2}>$315.00</Text>
              </View>
              <View style={styles.r9}>
                <MainButton
                  btnStyle={styles.r9t}
                  err={false}
                  title="Payment"
                  onPressFunction={() => {
                    handleContinue();
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // borderWidth: 1,
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
  },
  container: {
    // borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    // justifyContent: "center",
    marginHorizontal: '5%',
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
    marginBottom: 100,
  },
  subContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: '15%',
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
    // marginBottom: 100,
  },
  scroll: {
    // borderWidth: 1,
    width: '100%',
    marginTop: 10,
    backgroundColor: 'transparent',
    // marginBottom: 100,
  },
  scrollContent: {
    // borderWidth: 1,
    width: '100%',
    // height: "500%",
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingTop: 5,
    paddingBottom: 50,
  },
  r2: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginTop: '5%',
    // marginBottom: 5,
    backgroundColor: 'transparent',
  },
  r2t1: {
    backgroundColor: COLORS.light.backgroundGray,
    padding: 10,
    borderRadius: 30,
  },
  r2t4: {
    fontSize: SIZES.sizeSevenB,
    fontWeight: '700',
    textAlign: 'center',
    marginLeft: '32%',
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
  },
  r9: {
    marginBottom: 10,
    marginTop: '2%',
    backgroundColor: 'transparent',
    paddingVertical: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  r9t: {
    width: '50%',
    backgroundColor: COLORS.light.colorOne,
  },
  r8: {
    // marginHorizontal: "5%",
    width: '90%',
    paddingHorizontal: '10%',
    paddingTop: 25,
    paddingBottom: 20,
    marginBottom: 25,
    borderRadius: 15,
  },
  r8a: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  r8at1: {
    fontSize: SIZES.sizeSixC,
    fontWeight: '500',
  },
  r8at2: {
    fontSize: SIZES.sizeSixC,
    fontWeight: '400',
  },
  r8b: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 30,
    borderTopWidth: 1,
    borderColor: COLORS.light.textGray,
  },
  r3: {
    width: '100%',
    // marginTop: 5,
    marginBottom: 15,
    backgroundColor: 'transparent',
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
    paddingLeft: '15%',
    paddingRight: '2%',
    // borderRadius:30,
    // borderWidth:2
  },
  inputContentLoc: {
    fontSize: SIZES.sizeSeven,
    fontWeight: '500',
    color: COLORS.light.backgroundGray,
    width: '100%',
    backgroundColor: COLORS.light.backgroundGray,
    marginBottom: 8,
    // paddingLeft: '15%',
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
  r7t1: {
    color: COLORS.light.text,
    fontSize: SIZES.sizeEight,
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 20,
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
  r6loc: {
    // color: COLORS.light.textGray,
    // fontSize: SIZES.sizeSeven,
    // marginHorizontal: "2%",
    // width: '600%',
    // borderWidth: 1,
    // alignItems: 'flex-end',
    // marginLeft: '10%',
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
  countryPicker: {
    // marginRight: 0,
    backgroundColor: 'transparent',
    // width: "160%",
    // borderWidth: 1,
    alignItems: 'flex-end',
  },
  cartItems: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  r10: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  r10a: {
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    gap: 15,
  },
  r10at1: {
    fontSize: SIZES.sizeSix,
    fontWeight: '400',
    color: COLORS.light.active,
  },
  r10at2: {
    fontSize: SIZES.sizeEightA,
    fontWeight: '500',
  },
});
