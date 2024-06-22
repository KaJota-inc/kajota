import React, { useRef } from 'react';
import { Image, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import { Slide } from '@pages/Home/Home/advert/Slide';

import { COLORS, IMAGES, SIZES } from '@constants/Colors';

import { Text, View } from '@components/Themed';

const Advert = () => {
  const swiperRef = useRef<any>(null);

  const goToNextSwipe = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1, true);
    }
  };

  const handleContinue = () => {
    goToNextSwipe();
  };

  return (
    <Swiper
      ref={swiperRef}
      activeDotStyle={styles.activeDot}
      bounces={true}
      dotStyle={styles.dot}
      index={0}
      loop={true}
      style={styles.wrapper}
      containerStyle={styles.containerStyle}
      // dot={<Text></Text>}
      // activeDot={<Text></Text>}
    >
      <View style={styles.slide1}>
        <Slide
          backgroundColor={COLORS.light.advertBlue}
          btnText="Start Earning"
          image={IMAGES.AdvertShirts}
          subtitle="Make extra money from selling for vendors."
          textColor={COLORS.light.advertBlueDark}
          title="Earn by Co-Selling!"
          onGetStarted={() => {}}
          onSkip={() => {}}
        />
      </View>
      <View style={styles.slide2}>
        <Slide
          backgroundColor={COLORS.light.advertGreen}
          btnText="Sell for free"
          image={IMAGES.AdvertShirts}
          subtitle="Make more from your pre-owned clothes."
          textColor={COLORS.light.advertGreenDark}
          title="Selling clothes, now free!!"
          onGetStarted={() => {}}
          onSkip={() => {}}
        />
      </View>
      <View style={styles.slide3}>
        <Slide
          backgroundColor={COLORS.light.colorOneLight2}
          btnText="Start Earning"
          image={IMAGES.AdvertShirts}
          subtitle="Make extra money from selling for vendors."
          textColor={COLORS.light.colorOneDark}
          title="Earn by Co-Selling!"
          onGetStarted={() => {}}
          onSkip={() => {}}
        />
      </View>
    </Swiper>
  );
};

export default Advert;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.light.colorOneLight,
    // flex: 1,
  },
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.light.colorOne,
  },
  containerStyle: {
    // borderWidth: 1,
    // height: "50%",
  },
  wrapper: {
    // borderWidth: 1,
    // height: "50%",
  },
  text: {
    color: COLORS.light.background,
    fontSize: SIZES.sizeEight,
    fontWeight: '500',
    textAlign: 'center',
  },
  slide1: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: 'transparent',
    // height:"100%",
    // width: "100%",
  },
  slide2: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: 'transparent',
  },
  slide3: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: 'transparent',
  },

  dot: {
    backgroundColor: COLORS.light.tabIconDefault,
    // width: 8,
    // height: 8,
    // borderRadius: 4,
    // margin: 3,
    height: 12,
    width: 12,
    marginHorizontal: 20,
    borderRadius: 10,
    // position: "absolute",
    top: '6%',
    // borderWidth: 1
  },
  activeDot: {
    backgroundColor: COLORS.light.text,
    height: 12,
    width: 18,
    marginHorizontal: 15,
    borderRadius: 10,
    // borderWidth: 1,
    // position: "absolute",
    top: '6%',
  },
});
