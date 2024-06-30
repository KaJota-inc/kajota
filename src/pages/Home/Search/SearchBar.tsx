import React, { useState } from 'react';
import { DimensionValue, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';

import { COLORS, SIZES } from '@constants/Colors';

import { Text, View } from '@components/Themed';

type SearchBarType = {
  width: DimensionValue;
  onPressed: () => void;
};

const SearchBar = ({ onPressed, width = '100%' }: SearchBarType) => {
  return (
    <View
      style={[
        styles.r2a,
        {
          width: width,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.r2a1}
        onPress={() => {
          onPressed();
          // navigation?.navigate(HomeRoutes.SEARCH);
        }}
      >
        <AntDesign color={COLORS.light.active} name="search1" size={26} />
        <Text style={styles.r2a1t}>search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.r2a2}
        onPress={() => {
          onPressed();
          // navigation?.navigate(HomeRoutes.SEARCH);
        }}
      >
        <SimpleLineIcons color={COLORS.light.active} name="camera" size={24} />
        <Text style={styles.r2a2t}>Lens search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  r2a: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    width: '82%',
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
});
