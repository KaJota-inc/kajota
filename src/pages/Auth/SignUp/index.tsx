import React from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';

import { COLORS, SIZES } from '@constants/Colors';
import Layout from '@constants/Layout';

import { AppleLogoSVG, EmailLogoSVG, GoogleLogoSVG } from '@shared/components/SVGS';
import { AuthProps, AuthRoutes } from '@shared/const/routerAuth';
import { RootRoutes, RootScreenProps } from '@shared/const/routerRoot';

import { MainButton } from '@components/index';
import { Text, View } from '@components/Themed';

// type NavigationProps = AuthProps<AuthRoutes.SignUp>;

type NavigationProps = CompositeScreenProps<
  AuthProps<AuthRoutes.SignUp>,
  RootScreenProps<RootRoutes.Auth>
>;

const SignUp: React.FC<NavigationProps> = ({ navigation }) => {
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
              <Text style={styles.r1t2}>Start your journey with Jota!</Text>
            </View>

            <View style={styles.r3}>
              <Text style={styles.r3t1}>Please select your desired signup option</Text>
            </View>

            {/*<View style={styles.r8}>*/}
            <MainButton
              btnStyle={styles.r8t1}
              err={false}
              title={
                <View style={styles.r8t3}>
                  <AppleLogoSVG />
                  <Text style={styles.r8t4}>Continue with Apple</Text>
                </View>
              }
              onPressFunction={() => {
                navigation.navigate(RootRoutes.Auth, {
                  screen: AuthRoutes.LGS,
                  params: {
                    option: 'apple',
                  },
                });
              }}
            />
            {/*</View>*/}

            {/*<View style={styles.r8}>*/}
            <MainButton
              btnStyle={styles.r8t2}
              err={false}
              title={
                <View style={styles.r8t3}>
                  <GoogleLogoSVG />
                  <Text style={styles.r8t5}>Continue with Google</Text>
                </View>
              }
              onPressFunction={() => {
                navigation.navigate(RootRoutes.Auth, {
                  screen: AuthRoutes.LGS,
                  params: {
                    option: 'google',
                  },
                });
              }}
            />
            {/*</View>*/}

            {/*<View style={styles.r8}>*/}
            <MainButton
              btnStyle={styles.r8t2}
              err={false}
              title={
                <View style={styles.r8t3}>
                  <EmailLogoSVG />
                  <Text style={styles.r8t5}>Continue with Email</Text>
                </View>
              }
              onPressFunction={() => {
                navigation.navigate(RootRoutes.Auth, {
                  screen: AuthRoutes.LGS,
                  params: {
                    option: 'email',
                  },
                });
              }}
            />
            {/*</View>*/}

            <View style={styles.r7}>
              <Text style={styles.r7t1}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation?.navigate(AuthRoutes.SignIn);
                }}
              >
                <Text style={styles.r7t2}> Sign In</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // width: '100%',
    // borderWidth: 1,
  },
  container: {
    // borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    // justifyContent: "center",
    marginHorizontal: '5%',
    // width: '100%',
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
    // width: "100%",
    marginTop: 10,
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  scrollContent: {
    // borderWidth: 1,
    // width: "100%",
    // height: "500%",
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: 20,
    paddingVertical: 5,
  },
  r1: {
    flexDirection: 'row',
    // justifyContent: "center",
    // width: "100%",
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
    // width: "100%",
    marginTop: 5,
    marginBottom: 15,
  },
  r3t1: {
    marginBottom: 18,
    fontWeight: '300',
    fontSize: SIZES.sizeSeven,
  },
  r8: {
    backgroundColor: 'transparent',
    marginVertical: '1%',
    flex: 1,
    // width: "100%",
  },
  r8t1: {
    backgroundColor: COLORS.light.text,
    paddingVertical: 10,
    marginVertical: 10,
    height: 60,
    // width: 250,
  },
  r8t2: {
    backgroundColor: COLORS.light.background,
    paddingVertical: 10,
    marginVertical: 10,
    borderColor: COLORS.light.text,
    borderWidth: 1,
    height: 60,
  },
  r8t3: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingVertical: '2%',
    width: Layout.window.width * 0.8,

    // flex: 1
    // width: 250
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
    // width: "100%",
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
});
