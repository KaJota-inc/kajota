import React, { useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { CompositeScreenProps } from '@react-navigation/native';
import { nanoid } from '@reduxjs/toolkit';

import SearchBar from '@pages/Home/Search/SearchBar';

import { COLORS, IMAGES, SIZES } from '@constants/Colors';
import {
  CATEGORIES2,
  ITEMS,
  TestNotifications,
  TRENDINGSEARCHES,
} from '@constants/values';

import CartIcon from '@shared/components/CartIcon';
import { GridProductDisplay } from '@shared/components/GridProductDisplay';
import {
  NotificationBellIconSVG,
  PendingIconSVG,
  WishListIconSVG,
} from '@shared/components/SVGS';
import { HomeProps, HomeRoutes } from '@shared/const/routerHome';
import { ItemsProps, ItemsRoutes } from '@shared/const/routerItems';
import { RootRoutes, RootScreenProps } from '@shared/const/routerRoot';
import { ItemType, NotificationType } from '@shared/types/generaltypes';

import { Text, View } from '@components/Themed';

type NavigationProps = CompositeScreenProps<
  HomeProps<HomeRoutes.SEARCHPRODUCTS>,
  RootScreenProps<RootRoutes.Home>
>;

const SearchProducts: React.FC<NavigationProps> = ({ navigation }) => {
  const opts = [
    {
      name: 'Popular',
    },
    { name: 'Color' },
    { name: 'Popular' },
    { name: 'Popular' },
    { name: 'Color' },
  ];

  const handleBack = () => {
    navigation?.goBack();
  };

  const [selectedItemIndex, setSelectedItemIndex] = useState<number[]>([]);

  const handlePress = (val: number) => {
    if (selectedItemIndex.includes(val)) {
      setSelectedItemIndex(selectedItemIndex.filter(sii => sii !== val));
    } else {
      setSelectedItemIndex([...selectedItemIndex, val]);
    }
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

            <SearchBar
              width="85%"
              onPressed={() => {
                navigation?.navigate(RootRoutes.Home, {
                  screen: HomeRoutes.SEARCH,
                });
              }}
            />
          </View>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          style={styles.scroll}
        >
          <View style={styles.r4}>
            <ScrollView
              contentContainerStyle={styles.categoriesContentStyle}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              style={styles.categoriesStyle}
            >
              <View style={styles.r4a}>
                <TouchableOpacity style={styles.catBody}>
                  {/*<FontAwesome name="sliders" size={24} color={COLORS.light.active} />*/}
                  <SimpleLineIcons
                    color={COLORS.light.active}
                    name="equalizer"
                    size={20}
                  />
                </TouchableOpacity>
                {opts?.map((item, idx) => (
                  <TouchableOpacity
                    key={nanoid()}
                    style={[
                      styles.catBody,
                      selectedItemIndex.includes(idx) && {
                        backgroundColor: COLORS.light.text,
                      },
                    ]}
                    onPress={() => {
                      // handlePress(idx);
                    }}
                  >
                    <Text
                      style={[
                        styles.catName,
                        selectedItemIndex.includes(idx) && {
                          color: COLORS.light.background,
                        },
                      ]}
                    >
                      {item?.name}
                    </Text>
                    {item.name === 'Color' && (
                      <Text>
                        <Entypo color="black" name="chevron-down" size={15} />
                      </Text>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          <View style={styles.r5}>
            <Text style={styles.r5t2}>
              Showing <Text style={styles.r5t1}>results</Text> from all shops
            </Text>
          </View>

          <View>
            <GridProductDisplay />
            <GridProductDisplay />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchProducts;

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
    // borderWidth: 1,
  },
  subContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: '15%',
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
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
  r1: {
    flexDirection: 'row',
    width: '100%',
    // justifyContent: 'space-between',
    marginVertical: 15,
    backgroundColor: 'transparent',
    alignItems: 'center',
    // borderWidth: 1,
  },
  r2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  r2t2: {
    fontSize: SIZES.sizeSevenB,
    fontWeight: '700',
    textAlign: 'center',
    marginLeft: '25%',
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
  },
  r2t4: {
    // fontSize: SIZES.sizeSevenB,
    // fontWeight: '700',
    // textAlign: 'center',
    marginTop: 10,
    backgroundColor: COLORS.light.hashHomeBackGroundL2,
    // borderWidth: 1,
  },
  r1b: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    // borderWidth: 1,
    // paddingLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '20%',
  },
  r1c: {
    // borderWidth: 1,
  },
  r2a: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    width: '100%',
    backgroundColor: COLORS.light.backgroundGray,
    padding: 5,
    borderRadius: 13,
  },
  r2b: {
    padding: 15,
    backgroundColor: 'transparent',
    // marginRight: 5,
    color: COLORS.light.text,
    fontWeight: '500',
    fontSize: SIZES.sizeSixB,
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
  scroll: {
    // borderWidth: 1,
    width: '100%',
    // marginTop: 10,
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
  r3: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  r3t: {
    fontSize: SIZES.sizeNine,
    fontWeight: '700',
  },
  r4: {
    backgroundColor: 'transparent',
    width: '100%',
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  r4a: {
    backgroundColor: 'transparent',
    // // height: 100,
    // width: '48%',
    // borderRadius: 15,
    // flexDirection: 'row',
    // // alignItems: 'center',
    // paddingVertical: 15,
    // paddingHorizontal: '3%',
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  r4b: {
    backgroundColor: COLORS.light.pendingBlue,
    // height: 100,
    width: '48%',
    borderRadius: 15,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: '3%',
  },
  r4a1: {
    backgroundColor: 'transparent',
    // width: '100%',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    gap: 20,
  },
  r4a1t1: {
    backgroundColor: 'transparent',
  },
  r4a1t2: {
    fontSize: SIZES.sizeSeven,
    fontWeight: '400',
  },
  r4a2: {
    backgroundColor: 'transparent',
  },
  r4a2t: {
    fontSize: SIZES.sizeNine,
    fontWeight: '500',
  },
  r5: {
    backgroundColor: 'transparent',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  r5t1: {
    fontSize: SIZES.sizeSeven,
    fontWeight: '700',
  },
  r5t2: {
    fontSize: SIZES.sizeSixB,
    fontWeight: '400',
  },
  itemContainer: {
    paddingTop: 10,
    paddingBottom: 25,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: COLORS.light.textGray,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    padding: 20,
    width: '100%',

    color: COLORS.light.text,
  },
  itemA: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
  },
  itemA1: {
    height: 50,
    width: 50,
    borderRadius: 13,
    backgroundColor: 'transparent',
    // borderWidth: 1,
  },
  itemA2: {
    justifyContent: 'space-between',
    gap: 8,
    backgroundColor: 'transparent',
    flexWrap: 'wrap',
  },
  itemA2t1: {
    fontSize: SIZES.sizeSix,
    fontWeight: '400',
    backgroundColor: 'transparent',
    flexWrap: 'wrap',
  },
  itemA2t2: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexWrap: 'wrap',
  },
  itemA2t2a: {
    backgroundColor: COLORS.light.textGray,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 8,
  },
  itemA2t2b: {},
  itemA2t2c: {
    fontSize: SIZES.sizeFive,
  },
  itemA2t3: {
    fontSize: SIZES.sizeSix,
    fontWeight: '400',
    color: COLORS.light.active,
  },
  itemB: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    gap: 5,
    marginRight: 5,
  },
  itemBText: {
    fontSize: SIZES.sizeSeven,
    fontWeight: '700',
  },
  itemBTextm: {
    fontSize: SIZES.sizeSix,
    fontWeight: '400',
    color: COLORS.light.text,
    opacity: 0.6,
  },
  itemBTextc: {
    fontSize: SIZES.sizeSix,
    fontWeight: '400',
    color: COLORS.light.trackingGreenDark,
  },
  itemBt1: {
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  itemBt2: {
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 20,
  },
  itemBt3: {
    // borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    // borderBottomEndRadius: 15,
    // borderTopEndRadius: 15,
    // borderColor: COLORS.light.textGray,
  },
  catBody: {
    backgroundColor: COLORS.light.background,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginVertical: 8,
    marginHorizontal: 4,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 12,
    alignItems: 'center',
  },
  catName: {
    color: COLORS.light.text,
    fontSize: 16,
    fontWeight: '400',
    marginRight: 5,
  },
  catBody2: {
    backgroundColor: COLORS.light.background,
    // paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 8,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    width: '46%',
    justifyContent: 'center',
    height: 58,
  },
  catName2: {
    color: COLORS.light.text,
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 5,
    textAlign: 'center',
  },
});
