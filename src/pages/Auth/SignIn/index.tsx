import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { CommonActions, CompositeScreenProps } from '@react-navigation/native';

import { COLORS, SIZES } from '@constants/Colors';
import Layout from '@constants/Layout';

import { AppleLogoSVG, EmailLogoSVG, GoogleLogoSVG } from '@shared/components/SVGS';
import { AuthProps, AuthRoutes } from '@shared/const/routerAuth';
import { HomeRoutes } from '@shared/const/routerHome';
import { RootRoutes, RootScreenProps } from '@shared/const/routerRoot';
import { validateObject } from '@shared/helper';
import ValidateData from '@shared/lib/validateData';

import { MainButton } from '@components/index';
import { Text, View } from '@components/Themed';

// type NavigationProps = AuthProps<AuthRoutes.SignIn>;

type NavigationProps = CompositeScreenProps<
  AuthProps<AuthRoutes.SignIn>,
  RootScreenProps<RootRoutes.Auth>
>;

const SignIn: React.FC<NavigationProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [errorCount, setErrorCount] = useState<number>(0);

  const resetAction = CommonActions.reset({
    index: 1,
    routes: [
      {
        name: RootRoutes.Home,
        params: {
          screen: HomeRoutes.HOME,
        },
      },
    ],
  });

  const SCHEME = {
    // user: (user: string) => user?.length >= 4,
    password: (password: string) => ValidateData.special(password),
    user: (user: string) => ValidateData.email(user),
  };

  type TypeValidation = {
    data: Record<keyof typeof SCHEME, { isValid: boolean }>;
    isValid: boolean;
  };

  let validation: TypeValidation = validateObject(
    {
      user: email,
      password: password,
    },
    // @ts-ignore
    SCHEME,
  );

  const filledFields = () => {
    return !!password && !!email;
  };

  const handleContinue = async () => {
    debug.log('here');
    validation = validateObject(
      {
        user: email,
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

    navigation?.dispatch(resetAction);
  };

  useEffect(() => {
    setErrorCount(errorCount + 1);
    validation = validateObject(
      {
        user: email,
        password: password,
      },
      // @ts-ignore
      SCHEME,
    );
    if (!validation.isValid && errorCount >= 1 && filledFields()) {
      setError(true);
    }
  }, [password, email]);

  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <View style={styles.r1}>
              <Text style={styles.r1t2}>Login to your account</Text>
            </View>

            <View style={styles.r3}>
              <Text style={styles.r3t1}>
                Access your account securely with a few clicks.
              </Text>
            </View>

            <View style={styles.r8}>
              <MainButton
                btnStyle={styles.r8t1}
                err={false}
                title={
                  <View style={styles.r8t3}>
                    <AppleLogoSVG />
                    <Text style={styles.r8t4}>Continue with Apple</Text>
                  </View>
                }
                onPressFunction={() => {}}
              />
            </View>
            <View style={styles.r8}>
              <MainButton
                btnStyle={styles.r8t2}
                err={false}
                title={
                  <View style={styles.r8t3}>
                    <GoogleLogoSVG />
                    <Text style={styles.r8t5}>Continue with Google</Text>
                  </View>
                }
                onPressFunction={() => {}}
              />
            </View>

            <View style={styles.r6}>
              <View style={styles.r6a} />
              <Text style={styles.r6b}>OR</Text>
              <View style={styles.r6c} />
            </View>

            <View style={styles.r3}>
              {/*<Text style={styles.r3t1}>Username/Email</Text>*/}
              <TextInput
                activeOutlineColor={
                  validation?.data?.user.isValid && error
                    ? COLORS.light.colorOne
                    : COLORS.light.warning
                }
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
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
                style={{ ...styles.inputContent }}
                textContentType="emailAddress"
                value={email}
                onChangeText={val => {
                  setEmail(val);
                }}
                textColor={COLORS.light.text}
                // label={"Full Name"}
                placeholder="Email"
              />
              {!validation?.data?.user.isValid && error && (
                <Text style={styles.error}>Invalid email</Text>
              )}
            </View>

            <View style={styles.r3}>
              {/*<Text style={styles.r3t1}>Password</Text>*/}
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

            <TouchableOpacity
              style={styles.fp}
              onPress={() => {
                navigation.navigate(RootRoutes.Auth, {
                  screen: AuthRoutes.LGS,
                  params: {
                    option: 'forgot-password',
                  },
                });
              }}
            >
              <Text style={styles.fpt}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.r9}>
              <MainButton
                btnStyle={styles.r9t}
                err={false}
                title="Sign In"
                onPressFunction={() => {
                  handleContinue();
                }}
              />
            </View>

            <View style={styles.r7}>
              <Text style={styles.r7t1}>Don’t have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation?.navigate(AuthRoutes.SignUp);
                }}
              >
                <Text style={styles.r7t2}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // borderWidth: 1,
  },
  container: {
    // borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    // justifyContent: "center",
    marginHorizontal: '5%',
  },
  subContainer: {
    // flex: 1,
    // borderWidth: 1,
    // justifyContent: "center",
    alignItems: 'center',
    // height: "60%",
    width: '100%',
    marginTop: '15%',
    // paddingHorizontal: "5%",
  },
  scroll: {
    // borderWidth: 1,
    width: '100%',
    marginTop: 10,
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  scrollContent: {
    // borderWidth: 1,
    width: '100%',
    // height: "500%",
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: 20,
    paddingVertical: 5,
  },
  r1: {
    flexDirection: 'row',
    // justifyContent: "center",
    width: '100%',
    // alignItems: "center",
    marginTop: '8%',
    marginBottom: '2%',
    backgroundColor: 'transparent',
  },
  r1t1: {},
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
    borderRadius: 30,
  },
  r3t1: {
    marginBottom: 18,
    fontWeight: '300',
    fontSize: SIZES.sizeSixB,
  },
  r8: {
    backgroundColor: 'transparent',
    marginVertical: '1%',
    width: '100%',
  },
  r8t1: {
    backgroundColor: COLORS.light.text,
    paddingVertical: 10,
    marginVertical: 10,
  },
  r8t2: {
    backgroundColor: COLORS.light.background,
    paddingVertical: 10,
    marginVertical: 10,
    borderColor: COLORS.light.text,
    borderWidth: 1,
  },
  r8t3: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingVertical: '1%',
    width: Layout.window.width * 0.8,
  },
  r8t4: {
    color: COLORS.light.background,
    justifyContent: 'space-between',
    // borderColor: COLORS.light.background,
    textAlign: 'center',
    marginLeft: '5%',
    alignItems: 'center',
    marginTop: '2%',
    height: '100%',
    fontSize: SIZES.sizeSeven,
    fontWeight: '500',
  },
  r8t5: {
    color: COLORS.light.text,
    justifyContent: 'space-between',
    // borderColor: COLORS.light.background,
    textAlign: 'center',
    marginLeft: '5%',
    alignItems: 'center',
    marginTop: '1%',
    height: '100%',
    fontSize: SIZES.sizeSeven,
    fontWeight: '500',
  },
  r7: {
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginTop: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  r7t1: {
    color: COLORS.light.text,
    fontSize: SIZES.sizeSixC,
    fontWeight: '500',
    textAlign: 'center',
  },
  r7t2: {
    color: COLORS.light.colorOne,
    fontSize: SIZES.sizeSixC,
    fontWeight: '500',
    textAlign: 'center',
  },
  r6: {
    flexDirection: 'row',
    marginVertical: '5%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1
  },
  r6a: {
    borderTopWidth: 2,
    borderTopColor: COLORS.light.textGray,
    width: '30%',
  },
  r6b: {
    color: COLORS.light.textGray,
    fontSize: SIZES.sizeSeven,
    marginHorizontal: '2%',
  },
  r6c: {
    borderTopWidth: 2,
    borderTopColor: COLORS.light.textGray,
    width: '30%',
  },
  inputContent: {
    fontSize: SIZES.sizeSeven,
    fontWeight: '500',
    color: COLORS.light.backgroundGray,
    width: '100%',
    backgroundColor: COLORS.light.backgroundGray,
    marginBottom: 8,
    padding: 2,
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
  fp: {
    // marginTop: 10,
    marginBottom: 30,
    // borderWidth: 1,
    width: '100%',
    alignItems: 'flex-end',
  },
  fpt: {
    color: COLORS.light.text,
    fontSize: SIZES.sizeSeven,
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
});
