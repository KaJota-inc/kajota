import React, { useRef } from 'react';
import { Image, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import { WS1 } from '@pages/Auth/WS/WS1';
import WS2 from '@pages/Auth/WS/WS2';
import WS3 from '@pages/Auth/WS/WS3';

import { COLORS, IMAGES, SIZES } from '@constants/Colors';

import { AuthProps, AuthRoutes } from '@shared/const/routerAuth';

import { Text, View } from '@components/Themed';

type NavigationProps = AuthProps<AuthRoutes.WS>;

const WS: React.FC<NavigationProps> = ({ navigation }) => {
  const swiperRef = useRef<any>(null);

  const goToNextSwipe = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1, true);
    }
  };

  const handleGetStarted = () => {
    goToNextSwipe();
  };

  const handleContinue = () => {
    goToNextSwipe();
  };

  const handleSignUp = () => {
    navigation?.navigate(AuthRoutes.SignUp);
  };

  const handleSignIn = () => {
    navigation?.navigate(AuthRoutes.SignIn);
  };

  const handleSkip = () => {
    navigation?.navigate(AuthRoutes.SignUp);
  };

  return (
    <View style={styles.main}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        {/*<Text style={styles.text}>You sell </Text>*/}
        {/*<Text style={styles.text}>You buy </Text>*/}
        {/*<Text style={styles.text}>You Co-Sell </Text>*/}
        {/*<Text style={styles.text}>You earn </Text>*/}

        <Swiper
          activeDot={<Text />}
          activeDotStyle={styles.activeDot}
          dot={<Text />}
          dotStyle={styles.dot}
          index={0}
          loop={false}
          style={styles.wrapper}
          ref={swiperRef}
          // bounces={true}
          containerStyle={styles.containerStyle}
        >
          <View style={styles.slide1}>
            <WS1
              onGetStarted={() => {
                handleGetStarted();
              }}
              onSkip={() => {
                handleSkip();
              }}
            />
          </View>
          <View style={styles.slide2}>
            <WS2
              onGetStarted={() => {
                handleGetStarted();
              }}
              onSkip={() => {
                handleSkip();
              }}
            />
          </View>
          <View style={styles.slide3}>
            <WS3
              onSkip={() => {
                handleSkip();
              }}
              onGetStarted={() => {
                handleSignUp();
              }}
              // onSignIn={() => {
              //     handleSignIn();
              // }}
            />
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default WS;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.light.colorOne,
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.light.colorOne,
  },
  containerStyle: {
    borderWidth: 1,
    height: '70%',
  },
  wrapper: {
    borderWidth: 1,
  },
  text: {
    color: COLORS.light.background,
    fontSize: SIZES.sizeEight,
    fontWeight: '500',
    textAlign: 'center',
  },

  slide1: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: 'transparent',
    width: '100%',
  },
  slide2: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: 'transparent',
  },
  slide3: {
    flex: 1,
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
    height: 15,
    width: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    // position: "absolute",
    // bottom: "50%",
    borderWidth: 1,
  },
  activeDot: {
    backgroundColor: COLORS.light.colorOne,
    height: 15,
    width: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    // position: "absolute",
    // bottom: "40%",
  },
});
