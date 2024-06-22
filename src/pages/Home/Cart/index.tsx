import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { CompositeScreenProps } from '@react-navigation/native';

import CartItems from '@pages/Home/Cart/CartItems';

import { COLORS, SIZES } from '@constants/Colors';

import { AuthRoutes } from '@shared/const/routerAuth';
import { HomeProps, HomeRoutes } from '@shared/const/routerHome';
import { RootRoutes, RootScreenProps } from '@shared/const/routerRoot';
import { validateObject } from '@shared/helper';

import { MainButton } from '@components/index';
import { Text, View } from '@components/Themed';

type NavigationProps = CompositeScreenProps<
  HomeProps<HomeRoutes.CART>,
  RootScreenProps<RootRoutes.Home>
>;

const Cart: React.FC<NavigationProps> = ({ navigation, route }) => {
  const handleBack = () => {
    // navigation?.navigate(AuthRoutes.SignUp);
    navigation?.goBack();
  };

  const handleContinue = async () => {};

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
            <Text style={styles.r2t4}>Cart</Text>
          </View>

          <CartItems />

          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
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

            <View style={styles.r9}>
              <MainButton
                btnStyle={styles.r9t}
                err={false}
                title="Check Out"
                onPressFunction={() => {
                  handleContinue();
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Cart;

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
  },
  subContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: '15%',
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
  },
  scroll: {
    // borderWidth: 1,
    width: '100%',
    marginTop: 10,
    backgroundColor: 'transparent',
    marginBottom: 100,
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
    marginBottom: '5%',
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
    // backgroundColor: COLORS.light.colorOne,
    paddingVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  r9t: {
    // width: "80%",
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
});

// <View style={styles.r8}>
//     <View style={styles.r8a}>
//         <Text style={styles.r8at1}></Text>
//         <Text style={styles.r8at2}></Text>
//     </View>
//     <View style={styles.r8a}>
//         <Text style={styles.r8at1}></Text>
//         <Text style={styles.r8at2}></Text>
//     </View>
//     <View style={styles.r8b}>
//         <Text style={styles.r8at1}></Text>
//         <Text style={styles.r8at2}></Text>
//     </View>
// </View>
