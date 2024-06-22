import React, { useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons';
import { CompositeScreenProps } from '@react-navigation/native';
import { nanoid } from '@reduxjs/toolkit';

import Advert from '@pages/Home/Home/advert/Advert';

import { COLORS, IMAGES, SIZES } from '@constants/Colors';
import { CATEGORIES } from '@constants/values';

import CartIcon from '@shared/components/CartIcon';
import { GridProductDisplay } from '@shared/components/GridProductDisplay';
import { AuthRoutes } from '@shared/const/routerAuth';
import { HomeProps, HomeRoutes } from '@shared/const/routerHome';
import { RootRoutes, RootScreenProps } from '@shared/const/routerRoot';

import { Text, View } from '@components/Themed';

type NavigationProps = CompositeScreenProps<
  HomeProps<HomeRoutes.HOME>,
  RootScreenProps<RootRoutes.Home>
>;

const Home: React.FC<NavigationProps> = ({ navigation }) => {
  const [catIndex, setCatIndex] = useState(0);

  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.r1}>
            <View style={styles.r1a}>
              {/*<View style={styles.r1img}>*/}
              <Image source={IMAGES.ProfileImage} style={styles.r1imgb} />
              {/*</View>*/}
              <Text style={styles.r1t}>Hi Jane</Text>
            </View>
            <TouchableOpacity
              style={styles.r1b}
              onPress={() => {
                debug.log('pressed');
                navigation?.navigate(HomeRoutes.CART);
              }}
            >
              <CartIcon
                count={10}
                onPressed={() => {
                  debug.log('pressed');
                  navigation?.navigate(HomeRoutes.CART);
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.r2}>
            <View style={styles.r2a}>
              <TouchableOpacity style={styles.r2a1}>
                <AntDesign color={COLORS.light.active} name="search1" size={26} />
                <Text style={styles.r2a1t}>search</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.r2a2}>
                <SimpleLineIcons color={COLORS.light.active} name="camera" size={24} />
                <Text style={styles.r2a2t}>Lens search</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.r2b}>
              {/*<Feather*/}
              {/*    name="sliders"*/}
              {/*    size={24}*/}
              {/*    color={COLORS.light.active}*/}
              {/*/>*/}
              <SimpleLineIcons color={COLORS.light.active} name="equalizer" size={24} />
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <View style={styles.r3}>
              <Advert />
            </View>

            <View style={styles.r4}>
              <Text style={styles.r4t}>Categories</Text>
              <ScrollView
                contentContainerStyle={styles.categoriesContentStyle}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles.categoriesStyle}
              >
                {CATEGORIES.map((d, index) => {
                  return (
                    <TouchableOpacity
                      key={`#${index + nanoid()}`}
                      style={catIndex !== index ? styles.category : styles.categoryActive}
                      onPress={() => {
                        setCatIndex(index);
                      }}
                    >
                      <Text
                        style={[
                          styles.categoryText,
                          {
                            color: `${catIndex != index ? 'grey' : COLORS.light.text}`,
                          },
                        ]}
                      >
                        {d}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>

            <View style={styles.r5}>
              <Text style={styles.r5a}>Popular</Text>
              <Text style={styles.r5b} onPress={() => {}}>
                View All
              </Text>
            </View>
            <View>
              <GridProductDisplay />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
  },
  container: {
    flex: 1,
    alignItems: 'center',
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
  r1: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 15,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  r1a: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  r1b: {
    backgroundColor: 'transparent',

    // paddingLeft: 15,
    // borderWidth: 1,
  },
  r1img: {
    height: 50,
    width: 50,
    borderWidth: 1,
    marginRight: 10,
  },
  r1imgb: {
    width: 50,
    height: 50,
    marginRight: '6%',
    borderColor: COLORS.light.colorOne,
  },
  r1t: {
    color: COLORS.light.text,
    fontSize: SIZES.sizeSeven,
    fontWeight: '500',
  },
  r2: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 5,
    alignItems: 'center',
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
  },
  r2a: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    width: '82%',
    backgroundColor: COLORS.light.backgroundGray,
    padding: 10,
    borderRadius: 13,
  },
  r2b: {
    padding: 15,
    borderRadius: 13,
    backgroundColor: COLORS.light.background,
  },
  r2a1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 5,
  },
  r2a1t: {
    marginLeft: '10%',
    fontSize: SIZES.sizeSix,
  },
  r2a2: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 10,
    backgroundColor: COLORS.light.background,
  },
  r2a2t: {
    marginLeft: '5%',
    fontSize: SIZES.sizeSix,
  },
  r3: {
    height: 220,
    backgroundColor: 'transparent',
    width: '100%',
    marginBottom: 20,
  },
  r4: {
    height: 100,
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  r4t: {
    fontSize: SIZES.sizeSixC,
    fontWeight: '700',
    marginBottom: 5,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 30,
    alignItems: 'center',
  },
  categoryIcon: {
    paddingRight: 10,
    fontSize: 25,
    fontWeight: 'normal',
  },
  categoryText: {
    fontSize: SIZES.sizeSix,
    fontWeight: '500',
  },
  categoriesStyle: {
    // marginTop: 20,
    // backgroundColor: COLORS.light.textGray,
    // borderWidth: 1,
  },
  categoriesContentStyle: {
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 50,
    // borderWidth: 1,
  },
  category: {
    marginRight: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  categoryActive: {
    backgroundColor: COLORS.light.background,
    marginRight: 15,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.light.tabIconDefault,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderRadius: 10,
  },
  r5: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  r5a: {
    fontSize: SIZES.sizeSevenB,
    fontWeight: '700',
  },
  r5b: {
    fontSize: SIZES.sizeSixC,
    // fontWeight: "700",
  },
});
