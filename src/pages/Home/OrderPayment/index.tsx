import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { Country, CountryCode } from 'react-native-country-picker-modal/lib/types';
import { TextInput } from 'react-native-paper';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { CompositeScreenProps } from '@react-navigation/native';

import CartItems from '@pages/Home/Cart/CartItems';
import PaymentMethodModal from '@pages/Home/OrderPayment/PaymentOptionModal';

import { COLORS, SIZES } from '@constants/Colors';
import Layout from '@constants/Layout';

import {
  AppleLogoSVG,
  GoogleLogoSVG,
  LocationIconSVG,
  PayPalLogoSVG,
  WalletLogoLogoSVG,
} from '@shared/components/SVGS';
import { HomeProps, HomeRoutes } from '@shared/const/routerHome';
import { RootRoutes, RootScreenProps } from '@shared/const/routerRoot';

import { MainButton } from '@components/index';
import { Text, View } from '@components/Themed';

type NavigationProps = CompositeScreenProps<
  HomeProps<HomeRoutes.ORDERPAYMENT>,
  RootScreenProps<RootRoutes.Home>
>;

const OrderPayment: React.FC<NavigationProps> = ({ navigation, route }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<boolean>(false);
  const [displayPaymentModal, setDisplayPaymentModal] = useState<boolean>(false);

  const togglePaymentModal = () => {
    setDisplayPaymentModal(!displayPaymentModal);
  };

  const handleBack = () => {
    // navigation?.navigate(AuthRoutes.SignUp);
    navigation?.goBack();
  };

  const handleContinue = async () => {
    navigation?.navigate(HomeRoutes.ORDERTRACKING);
  };

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
            <Text style={styles.r2t4}>My Order</Text>
          </View>

          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <View style={styles.r3}>
              <Text style={styles.r3t1}>Payment Method</Text>
              <TouchableOpacity
                style={styles.r3b}
                onPress={() => {
                  togglePaymentModal();
                }}
              >
                <Text style={styles.r3bt1}>+</Text>
                <Text style={styles.r3bt2}>Top up</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[
                styles.r4,
                !selectedItemIndex && { borderColor: COLORS.light.textGray },
              ]}
              onPress={() => {
                setSelectedItemIndex(!selectedItemIndex);
              }}
            >
              <View style={styles.r4a}>
                <View style={styles.r4a1}>
                  <WalletLogoLogoSVG />
                </View>
                <View style={styles.r4a2}>
                  <Text style={styles.r4at1}>£654.41</Text>
                  <Text style={styles.r4at2}>Wallet</Text>
                </View>
              </View>
              <View style={styles.r4b}>
                <MaterialIcons
                  color={
                    selectedItemIndex ? COLORS.light.colorOne : COLORS.light.textGray
                  }
                  name={selectedItemIndex ? 'radio-button-on' : 'radio-button-unchecked'}
                  size={24}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.r9}>
              <MainButton
                btnStyle={styles.r9t}
                err={false}
                title="Place Order"
                onPressFunction={() => {
                  handleContinue();
                }}
              />
            </View>

            <View style={styles.r6}>
              <View style={styles.r6a} />
              <Text style={styles.r6b}>OR</Text>
              <View style={styles.r6c} />
            </View>

            <View style={styles.r8}>
              <MainButton
                btnStyle={styles.r8t1}
                err={false}
                title={
                  <View style={styles.r8t3}>
                    <AppleLogoSVG />
                    <Text style={styles.r8t4}>Pay</Text>
                  </View>
                }
                onPressFunction={() => {}}
              />
            </View>
            <View style={styles.r8}>
              <MainButton
                btnStyle={styles.r8t2paypal}
                err={false}
                title={
                  <View style={styles.r8t3paypal}>
                    <PayPalLogoSVG />
                  </View>
                }
                onPressFunction={() => {}}
              />
            </View>
          </ScrollView>
          <PaymentMethodModal
            isModalVisible={displayPaymentModal}
            setModalVisible={() => {
              togglePaymentModal();
            }}
            onSave={val => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default OrderPayment;

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
  r3: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  r3t1: {
    // marginBottom: 18,
    fontWeight: '600',
    fontSize: SIZES.sizeSixC,
  },
  r3b: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: COLORS.light.topup,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
  },
  r3bt1: {
    fontWeight: '400',
    fontSize: SIZES.sizeSixC,
    color: COLORS.light.background,
  },
  r3bt2: {
    fontWeight: '700',
    fontSize: SIZES.sizeSixB,
    color: COLORS.light.background,
  },
  r7t1: {
    color: COLORS.light.text,
    fontSize: SIZES.sizeEight,
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 20,
  },
  r6: {
    flexDirection: 'row',
    marginVertical: '5%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  r6a: {
    borderTopWidth: 2,
    borderTopColor: COLORS.light.textGray,
    width: '35%',
  },
  r6b: {
    color: COLORS.light.textGray,
    fontSize: SIZES.sizeSeven,
    marginHorizontal: '2%',
  },
  r6c: {
    borderTopWidth: 2,
    borderTopColor: COLORS.light.textGray,
    width: '35%',
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
    // backgroundColor: COLORS.light.background,
    paddingVertical: 10,
    marginVertical: 10,
    // borderColor: COLORS.light.text,
    // borderWidth: 1,
  },
  r8t2paypal: {
    backgroundColor: COLORS.light.paypal,
    // paddingVertical: 10,
    // marginVertical: 10,
    // borderColor: COLORS.light.text,
    // borderWidth: 1,
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
  r8t3paypal: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    // paddingVertical: '1%',
    width: Layout.window.width * 0.8,
  },
  r8t4: {
    color: COLORS.light.background,
    justifyContent: 'space-between',
    // borderColor: COLORS.light.background,
    textAlign: 'center',
    marginLeft: '2%',
    alignItems: 'center',
    marginTop: '2%',
    height: '100%',
    fontSize: SIZES.sizeEight,
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
  r4: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.light.colorOne,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 40,
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  r4a: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  r4a1: {},
  r4a2: {
    gap: 6,
  },
  r4at1: {
    fontSize: SIZES.sizeSixC,
    fontWeight: '500',
  },
  r4at2: {
    fontSize: SIZES.sizeSixC,
    fontWeight: '400',
    color: COLORS.light.active,
  },
  r4b: {
    backgroundColor: 'transparent',
    width: '10%',
  },
});
