import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { CompositeScreenProps } from '@react-navigation/native';
import { nanoid } from '@reduxjs/toolkit';

import SearchBar from '@pages/Home/Search/SearchBar';

import { COLORS, IMAGES, SIZES } from '@constants/Colors';
import { ITEMS } from '@constants/values';

import CartIcon from '@shared/components/CartIcon';
import {
  NotificationBellIconSVG,
  PendingIconSVG,
  WishListIconSVG,
} from '@shared/components/SVGS';
import { HomeRoutes } from '@shared/const/routerHome';
import { ItemsProps, ItemsRoutes } from '@shared/const/routerItems';
import { RootRoutes, RootScreenProps } from '@shared/const/routerRoot';
import { ItemType } from '@shared/types/generaltypes';

import { Text, View } from '@components/Themed';

type NavigationProps = CompositeScreenProps<
  ItemsProps<ItemsRoutes.ItemsMain>,
  RootScreenProps<RootRoutes.Items>
>;

const ItemsMain: React.FC<NavigationProps> = ({ navigation }) => {
  const [items, setItems] = React.useState<ItemType[]>(ITEMS);

  const handleBack = () => {
    navigation?.goBack();
  };

  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.r1}>
            <TouchableOpacity
              style={styles.r2t1}
              onPress={() => {
                handleBack();
              }}
            >
              <Feather color={COLORS.light.text} name="chevron-left" size={28} />
            </TouchableOpacity>
            <View style={styles.r1b}>
              <TouchableOpacity
                style={styles.r1c}
                onPress={() => {
                  debug.log('pressed');
                  // navigation?.navigate(HomeRoutes.CART);
                }}
              >
                <CartIcon
                  count={10}
                  onPressed={() => {
                    debug.log('pressed');
                    navigation?.navigate(RootRoutes.Home, {
                      screen: HomeRoutes.CART,
                    });
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.r2t4}
                onPress={() => {
                  debug.log('pressed2');
                  navigation?.navigate(RootRoutes.Items, {
                    screen: ItemsRoutes.Notifications,
                  });
                }}
              >
                <NotificationBellIconSVG />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.r3}>
            <Text style={styles.r3t}>My Items</Text>
          </View>
          <View style={styles.r2}>
            <SearchBar
              width="100%"
              onPressed={() => {
                navigation?.navigate(RootRoutes.Home, {
                  screen: HomeRoutes.SEARCH,
                });
              }}
            />
            {/*<View style={styles.r2a}>*/}
            {/*    <TouchableOpacity style={styles.r2a1}>*/}
            {/*        <AntDesign color={COLORS.light.active} name="search1" size={26}/>*/}
            {/*        <Text style={styles.r2a1t}>search</Text>*/}
            {/*    </TouchableOpacity>*/}
            {/*    <TouchableOpacity style={styles.r2a2}>*/}
            {/*        <SimpleLineIcons color={COLORS.light.active} name="camera" size={24}/>*/}
            {/*        <Text style={styles.r2a2t}>Lens search</Text>*/}
            {/*    </TouchableOpacity>*/}
            {/*</View>*/}
          </View>

          <View style={styles.r4}>
            <TouchableOpacity style={styles.r4a}>
              <View style={styles.r4a1}>
                {/*<Text style={styles.r4a1t1}>*/}
                <WishListIconSVG />
                {/*</Text>*/}
                <Text style={styles.r4a1t2}>Wishlist</Text>
              </View>
              <View style={styles.r4a2}>
                <Text style={styles.r4a2t}>+10</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.r4b}>
              <View style={styles.r4a1}>
                {/*<Text style={styles.r4a1t1}>*/}
                <PendingIconSVG />
                {/*</Text>*/}
                <Text style={styles.r4a1t2}>Pending</Text>
              </View>
              <View style={styles.r4a2}>
                <Text style={styles.r4a2t}>+5</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.r5}>
            <Text style={styles.r5t1}>All Orders</Text>
            <TouchableOpacity>
              <Text style={styles.r5t2}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          style={styles.scroll}
        >
          {items.map((item, idx) => (
            <View key={nanoid()} style={styles.itemContainer}>
              <View style={styles.itemA}>
                <Image resizeMode="cover" source={item.uri} style={styles.itemA1} />
                <View style={styles.itemA2}>
                  <Text style={styles.itemA2t1}>{item.title}</Text>
                  {/*<View style={styles.itemA2t2}>*/}
                  {/*    <AntDesign color={COLORS.light.star} name="star" size={15}/>*/}
                  {/*    <Text style={styles.itemA2t2b}>4.6</Text>*/}
                  {/*    <View style={styles.itemA2t2a}>*/}
                  {/*        <Text style={styles.itemA2t2c}>M</Text>*/}
                  {/*    </View>*/}
                  {/*</View>*/}

                  <Text style={styles.itemA2t3}>
                    {item.date}, {item.time}
                  </Text>
                </View>
              </View>
              <View style={styles.itemB}>
                <TouchableOpacity
                  style={styles.itemBt1}
                  onPress={() => {
                    // if (itemCount > 1) {
                    //     setItemCount(itemCount - 1);
                    // }
                  }}
                >
                  <Text style={styles.itemBText}>
                    {item.ccy}
                    {Number(item.price).toFixed(2)}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemBt2}>
                  <Text style={styles.itemBTextm}>{item.reference}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.itemBt3}
                  onPress={() => {
                    // setItemCount(itemCount + 1);
                  }}
                >
                  {item.deliveryStatus === 'Delivered' && (
                    <Ionicons
                      color={COLORS.light.trackingGreenDark}
                      name="checkmark-circle-outline"
                      size={20}
                    />
                  )}
                  {item.deliveryStatus === 'Pending' && (
                    // <MaterialIcons
                    //     name="progress-download"
                    //     size={24}
                    //
                    // />
                    <MaterialCommunityIcons
                      color={COLORS.light.trackingBlueDark}
                      name="progress-download"
                      size={24}
                    />
                  )}
                  <Text
                    style={[
                      styles.itemBTextc,
                      item.deliveryStatus === 'Pending' && {
                        color: COLORS.light.trackingBlueDark,
                      },
                    ]}
                  >
                    {item.deliveryStatus}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ItemsMain;

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
  r1: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 15,
    backgroundColor: 'transparent',
    alignItems: 'center',
    // borderWidth: 1,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  r4a: {
    backgroundColor: COLORS.light.colorOneLight2,
    // height: 100,
    width: '48%',
    borderRadius: 15,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: '3%',
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
    marginVertical: 20,
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
    paddingVertical: 10,
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
  },
  itemA1: {
    height: 80,
    width: 80,

    borderRadius: 15,
    backgroundColor: 'transparent',
  },
  itemA2: {
    justifyContent: 'space-between',
    gap: 8,
    backgroundColor: 'transparent',
  },
  itemA2t1: {
    fontSize: SIZES.sizeSixB,
    fontWeight: '500',
    backgroundColor: 'transparent',
  },
  itemA2t2: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: 'transparent',
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
    // flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    // borderWidth: 1,
  },
  itemBText: {
    fontSize: SIZES.sizeSeven,
    fontWeight: '700',
  },
  itemBTextm: {
    fontSize: SIZES.sizeSeven,
    fontWeight: '300',
  },
  itemBTextc: {
    fontSize: SIZES.sizeSix,
    fontWeight: '400',
    color: COLORS.light.trackingGreenDark,
  },
  itemBt1: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    // borderBottomStartRadius: 15,
    // borderTopStartRadius: 15,
    // borderWidth: 1,
    // borderColor: COLORS.light.textGray,
  },
  itemBt2: {
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    // borderColor: COLORS.light.textGray,
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
});
