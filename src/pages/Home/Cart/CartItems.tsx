import React from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { nanoid } from '@reduxjs/toolkit';

import { COLORS, IMAGES, SIZES } from '@constants/Colors';

import { DeleteIconSVG } from '@shared/components/SVGS';

import { Text, View } from '@components/Themed';

const CartItems = () => {
  const data = [{ key: 'Item 1' }, { key: 'Item 2' }, { key: 'Item 3' }];

  return (
    <GestureHandlerRootView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.scrollContent}
        data={data}
        horizontal={false}
        renderItem={({ item }) => (
          <Swipeable
            key={nanoid()}
            renderRightActions={() => (
              <TouchableOpacity
                style={styles.right}
                onPress={() => {
                  debug.log('deleting...');
                }}
              >
                {/*<Text>Delete</Text>*/}
                <DeleteIconSVG />
              </TouchableOpacity>
            )}
            // renderLeftActions={() => <Text>Edit</Text>}
          >
            <View style={styles.itemContainer}>
              <View style={styles.itemA}>
                <Image resizeMode="cover" source={IMAGES.ShoeFem} style={styles.itemA1} />
                <View style={styles.itemA2}>
                  <Text style={styles.itemA2t1}>Fashion Nova</Text>
                  <View style={styles.itemA2t2}>
                    <AntDesign color={COLORS.light.star} name="star" size={15} />
                    <Text style={styles.itemA2t2b}>4.6</Text>
                    <View style={styles.itemA2t2a}>
                      <Text style={styles.itemA2t2c}>M</Text>
                    </View>
                  </View>

                  <Text style={styles.itemA2t3}>£100.00</Text>
                </View>
              </View>
              <View style={styles.itemB}>
                <TouchableOpacity style={styles.itemBt1}>
                  <Text style={styles.itemBText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemBt2}>
                  <Text style={styles.itemBText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemBt3}>
                  <Text style={styles.itemBText}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Swipeable>
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
      />
    </GestureHandlerRootView>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    marginBottom: 50,
    backgroundColor: 'transparent',
    // borderWidth: 1,
  },
  scroll: {
    // borderWidth: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
  scrollContent: {
    // borderWidth: 1,
    // padding: 20,
    width: '100%',
    // alignItems: 'center',
    backgroundColor: 'transparent',
    // gap:10
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
    // borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'transparent',
  },
  itemA2: {
    justifyContent: 'space-between',
    gap: 8,
    backgroundColor: 'transparent',
  },
  itemA2t1: {
    fontSize: SIZES.sizeSix,
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
    fontSize: SIZES.sizeSixC,
    fontWeight: '700',
  },
  itemB: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  itemBText: {
    fontSize: SIZES.sizeSixB,
    fontWeight: '600',
  },
  itemBt1: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderBottomStartRadius: 15,
    borderTopStartRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.light.textGray,
  },
  itemBt2: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderColor: COLORS.light.textGray,
  },
  itemBt3: {
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderBottomEndRadius: 15,
    borderTopEndRadius: 15,
    borderColor: COLORS.light.textGray,
  },
  right: {
    backgroundColor: COLORS.light.delete,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});
