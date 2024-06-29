import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';

import { COLORS, SIZES } from '@constants/Colors';

import {
  ConfirmationLogoSVG,
  NoNotificationsLogoSVG,
  PickAPLanSVG,
} from '@shared/components/SVGS';
import { HomeProps, HomeRoutes } from '@shared/const/routerHome';
import { ItemsProps, ItemsRoutes } from '@shared/const/routerItems';
import { RootRoutes, RootScreenProps } from '@shared/const/routerRoot';

import { MainButton } from '@components/index';
import { Text, View } from '@components/Themed';

type NavigationProps = CompositeScreenProps<
  ItemsProps<ItemsRoutes.NoNotifications>,
  RootScreenProps<RootRoutes.Items>
>;

const NoNotifications: React.FC<NavigationProps> = ({ navigation }) => {
  const handleContinue = async () => {
    debug.log('here');
    // navigation?.navigate(RootRoutes.Home);
    navigation?.goBack();
  };

  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.r2}>
            <View style={styles.r6}>
              <NoNotificationsLogoSVG />
              <View style={styles.r1}>
                <Text style={styles.r1t2}>No Notifications Yet!</Text>
              </View>
              <View style={styles.r3}>
                <Text style={styles.r3t1}>
                  You'll get updates on your account and shopping activities here.
                </Text>
              </View>
            </View>
            <View style={styles.r9}>
              <MainButton
                btnStyle={styles.r9t}
                err={false}
                title="Start Shopping"
                onPressFunction={() => {
                  handleContinue();
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NoNotifications;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // borderWidth: 1,
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
  },
  container: {
    // borderWidth: 1,
    // flex: 1,
    alignItems: 'center',
    // justifyContent: "center",
    marginHorizontal: '5%',
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
    // marginBottom: 100,
  },
  subContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: '15%',
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
    // borderWidth: 1,
  },
  scroll: {
    // borderWidth: 1,
    width: '100%',
    marginTop: 10,
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
  },
  scrollContent: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
    paddingTop: 5,
    paddingBottom: 50,
    paddingHorizontal: '5%',
  },
  r1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '2%',
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
  },
  r1t1: {},
  r2: {
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: '30%',
    // gap:0
  },
  r2t1: {
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
    padding: 10,
    borderRadius: 30,
  },
  r1t2: {
    color: COLORS.light.text,
    fontSize: SIZES.sizeSixC,
    fontWeight: '700',
  },
  r3: {
    width: '65%',
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
  },
  r3t1: {
    marginBottom: '15%',
    fontWeight: '300',
    fontSize: SIZES.sizeFiveC,
    textAlign: 'center',
  },
  r9: {
    // marginBottom: 10,
    marginTop: '25%',
    paddingVertical: 5,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
  },
  r9t: {
    backgroundColor: COLORS.light.colorOne,
  },
  r9b: {
    marginBottom: 10,
    paddingVertical: 5,
    width: '100%',
    alignItems: 'center',
    borderColor: COLORS.light.text,
    backgroundColor: 'transparent',
  },
  r9bt: {
    color: COLORS.light.text,
    backgroundColor: 'transparent',
    // borderColor: COLORS.light.text,
  },
  r9bbtn: {
    backgroundColor: 'transparent',
    borderColor: COLORS.light.text,
    borderWidth: 0.5,
  },
  r6: {
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
    alignItems: 'center',
    justifyContent: 'center',
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
});
