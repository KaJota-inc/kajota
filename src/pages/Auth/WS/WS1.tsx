import React from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome5, Octicons } from '@expo/vector-icons';
import { nanoid } from '@reduxjs/toolkit';

import { COLORS, IMAGES, SIZES } from '@constants/Colors';

import { Text, View } from '@components/Themed';

type IProps = {
  onSkip: () => void;
  onGetStarted: () => void;
};
export const WS1 = ({ onSkip, onGetStarted }: IProps) => {
  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <ImageBackground
          imageStyle={styles.subContainer2}
          source={IMAGES.FrameWS1}
          style={styles.subContainer}
        >
          <View style={styles.r1}>
            <TouchableOpacity
              onPress={() => {
                onSkip();
              }}
            >
              <Text style={styles.r1t}>Skip</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.r2}>
            <Image resizeMode="contain" source={IMAGES.FrameWS1sub} style={styles.r2t} />
          </View>
        </ImageBackground>
        <View style={styles.r3}>
          <Text style={styles.r3t}>You sell, You buy. </Text>
          <Text style={styles.r3t}>You Co-Sell, You earn.</Text>
        </View>
        <View style={styles.slider}>
          {[1, 2, 3].map((_, idx) => (
            <View key={nanoid()} style={styles.slide}>
              <Octicons
                color={idx + 1 === 1 ? COLORS.light.colorOne : COLORS.light.colorOneLight}
                name="dot-fill"
                size={23}
              />
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={styles.floatingContent2}
          onPress={() => {
            onGetStarted();
          }}
        >
          <Text style={styles.fc2t}>
            <FontAwesome5 color={COLORS.light.background} name="arrow-right" size={28} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.light.background,
    flex: 1,
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.light.background,
  },
  subContainer: {
    // borderWidth: 1,
    backgroundColor: 'transparent',
    height: '55%',
    width: '100%',
    marginTop: '15%',
    borderRadius: 20,
  },
  subContainer2: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
  },
  r1: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    width: '100%',

    marginTop: '8%',
  },
  r2: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: '-22%',
    left: '10%',
    width: '80%',
    height: '60%',
  },
  r3: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: '22%',
  },
  r4: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 20,
  },
  r5: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginVertical: '3%',
    flexDirection: 'row',
    marginBottom: '30%',
  },
  r6: {
    marginBottom: 10,
    marginTop: '25%',
    backgroundColor: 'transparent',
    paddingVertical: 5,
    width: '80%',
  },
  r1t: {
    color: COLORS.light.background,
    fontSize: SIZES.sizeSeven,
    fontWeight: '400',
    marginRight: '5%',
  },
  r2t: {
    width: '100%',
    height: '100%',
  },
  r3t: {
    color: COLORS.light.text,
    fontSize: SIZES.sizeTen,
    fontWeight: '700',
    textAlign: 'center',
  },
  r4t: {
    color: COLORS.light.text,
    fontSize: SIZES.sizeNine,
    fontWeight: '500',
    textAlign: 'center',
  },
  r5t: {
    backgroundColor: COLORS.light.tabIconSelected,
    height: 15,
    width: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  r6t: {
    width: '100%',
  },

  slider: {
    width: 50,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5%',
  },
  slide: {
    // backgroundColor: COLORS.light.colorOneLight,
  },
  floatingContent2: {
    height: 68,
    width: 68,
    marginTop: '10%',
    backgroundColor: COLORS.light.colorOne,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.light.colorOneLight,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10,
  },
  fc2t: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: '8%',
  },
});
