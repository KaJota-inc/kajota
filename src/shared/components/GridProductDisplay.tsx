import { useState } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { COLORS } from '@constants/Colors';
import { PRODUCTS } from '@constants/values';

import { View } from '@components/Themed';

import ProductCard from './ProductCard';

export const GridProductDisplay = () => {
  const [data, setData] = useState(PRODUCTS);
  return (
    <View style={styles.grid}>
      {data &&
        data?.map((item, index) => (
          <View key={`#${item.key}`} style={styles.inner}>
            <ProductCard index={index} item={item} />
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginTop: 20,
    justifyContent: 'space-between',
    // borderWidth: 1,
    backgroundColor: 'transparent',
  },

  inner: {
    width: '48%',
    marginBottom: 35,
    shadowColor: COLORS.light.tabIconDefault,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    // borderWidth: 1,
  },
});
