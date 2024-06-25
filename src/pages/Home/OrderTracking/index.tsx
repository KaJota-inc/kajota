import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { CompositeScreenProps } from '@react-navigation/native';

import PaymentMethodModal from '@pages/Home/OrderPayment/PaymentOptionModal';
import VerticalStepper from '@pages/Home/OrderTracking/VerticalStepper';

import { COLORS, SIZES } from '@constants/Colors';
import Layout from '@constants/Layout';

import { HomeProps, HomeRoutes } from '@shared/const/routerHome';
import { RootRoutes, RootScreenProps } from '@shared/const/routerRoot';

import { Text, View } from '@components/Themed';

type NavigationProps = CompositeScreenProps<
  HomeProps<HomeRoutes.ORDERTRACKING>,
  RootScreenProps<RootRoutes.Home>
>;

export type TrackingStepType = {
  date: string;
  time: string;
  detail: string;
  address?: string;
};
const OrderTracking: React.FC<NavigationProps> = ({ navigation, route }) => {
  const [len, setLen] = useState<number>(1);
  const mainTrackingSteps: TrackingStepType[] = [
    {
      date: '10 April 2024',
      detail: 'Order from',
      time: '6:00pm',
    },
    {
      date: '10 April 2024',
      detail: 'Order has been picked up',
      time: '6:30pm',
    },
    {
      date: '10 April 2024',
      detail: 'Order in transit',
      time: '6:35pm',
    },
    {
      date: '10 April 2024',
      detail: 'Order delivered',
      time: '8:00pm',
      address: 'Grove House, Vans Lane, SW12 4PU',
    },
  ];

  const trackingSteps: TrackingStepType[] = mainTrackingSteps.slice(0, len);

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
    // navigation?.navigate(HomeRoutes.ORDERPAYMENT);
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
            <Text style={styles.r2t4}>Order Tracking</Text>
          </View>

          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <View style={styles.r3}>
              <View style={styles.r3a}>
                <Text style={styles.r3at1}>Tracking ID</Text>
                <Text style={styles.r3at2}>ZN18283893940</Text>
              </View>
              <TouchableOpacity
                style={styles.r3b}
                onPress={() => {
                  if (len < 4) {
                    setLen(len + 1);
                  }
                  if (len === 4) {
                    navigation?.navigate(HomeRoutes.ORDERCONFIRMATION);
                  }
                }}
              >
                {trackingSteps.length === 1 && (
                  <View style={styles.r3br}>
                    <Text style={styles.r3bt}>Collected</Text>
                  </View>
                )}
                {trackingSteps.length === 2 && (
                  <View
                    style={[styles.r3br, { backgroundColor: COLORS.light.trackingBlue }]}
                  >
                    <Text style={[styles.r3bt, { color: COLORS.light.trackingBlueDark }]}>
                      Picked Up
                    </Text>
                  </View>
                )}
                {trackingSteps.length === 3 && (
                  <View
                    style={[
                      styles.r3br,
                      { backgroundColor: COLORS.light.trackingYellow },
                    ]}
                  >
                    <Text
                      style={[styles.r3bt, { color: COLORS.light.trackingYellowDark }]}
                    >
                      In Transit
                    </Text>
                  </View>
                )}
                {trackingSteps.length === 4 && (
                  <View
                    style={[styles.r3br, { backgroundColor: COLORS.light.trackingGreen }]}
                  >
                    <Text
                      style={[styles.r3bt, { color: COLORS.light.trackingGreenDark }]}
                    >
                      Delivered
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.r6}>
              <View style={styles.r6a} />
              {/*<Text style={styles.r6b}>OR</Text>*/}
              {/*<View style={styles.r6c}/>*/}
            </View>

            <VerticalStepper
              currentStep={1}
              steps={trackingSteps}
              onStepPress={(val: number): void => {}}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default OrderTracking;

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
    paddingHorizontal: '5%',
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
    marginLeft: '22%',
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
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
    borderTopWidth: 1,
    borderTopColor: COLORS.light.textGray,
    width: '100%',
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
  r3: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    marginTop: 30,
  },
  r3a: {
    backgroundColor: 'transparent',
    gap: 20,
  },
  r3at1: {
    color: COLORS.light.textGray,
    fontSize: SIZES.sizeSixB,
    fontWeight: '400',
  },
  r3at2: {
    color: COLORS.light.text,
    fontSize: SIZES.sizeSixB,
    fontWeight: '500',
  },
  r3b: {
    backgroundColor: 'transparent',
  },
  r3br: {
    borderRadius: 20,
    backgroundColor: COLORS.light.colorOneLight2,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  r3bt: {
    color: COLORS.light.colorOne,
    fontSize: SIZES.sizeSixC,
    fontWeight: '500',
  },
});
