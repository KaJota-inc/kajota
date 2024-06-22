import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { CompositeScreenProps } from '@react-navigation/native';

import { COLORS, SIZES } from '@constants/Colors';

import { HomeProps, HomeRoutes } from '@shared/const/routerHome';
import { RootRoutes, RootScreenProps } from '@shared/const/routerRoot';

import { Text, View } from '@components/Themed';

type NavigationProps = CompositeScreenProps<
  HomeProps<HomeRoutes.CART>,
  RootScreenProps<RootRoutes.Home>
>;

const Cart: React.FC<NavigationProps> = ({ navigation, route }) => {
  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.r2}>
            <TouchableOpacity
              style={styles.r2t1}
              onPress={() => {
                // handleBack()
              }}
            >
              <Feather color={COLORS.light.text} name="chevron-left" size={28} />
            </TouchableOpacity>
            <Text style={styles.r2t4}>Cart</Text>
          </View>

          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          />
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
  },
  container: {
    // borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    // justifyContent: "center",
    marginHorizontal: '5%',
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
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '5%',
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
  },
});
