import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { AntDesign, Feather } from '@expo/vector-icons';
import { CompositeScreenProps } from '@react-navigation/native';
import { nanoid } from '@reduxjs/toolkit';

import { COLORS, SIZES } from '@constants/Colors';

import { AIStarSVG, ConfirmationLogoSVG } from '@shared/components/SVGS';
import { HomeProps, HomeRoutes } from '@shared/const/routerHome';
import { RootRoutes, RootScreenProps } from '@shared/const/routerRoot';
import { validateObject } from '@shared/helper';

import { MainButton } from '@components/index';
import { Text, View } from '@components/Themed';

type NavigationProps = CompositeScreenProps<
  HomeProps<HomeRoutes.ORDERRATING>,
  RootScreenProps<RootRoutes.Home>
>;

const OrderRating: React.FC<NavigationProps> = ({ navigation }) => {
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [errorCount, setErrorCount] = useState<number>(0);
  const [rating, setRating] = useState<number>(3);

  const SCHEME = {
    desc: (desc: string) => desc?.length >= 4,
  };

  type TypeValidation = {
    data: Record<keyof typeof SCHEME, { isValid: boolean }>;
    isValid: boolean;
  };

  let validation: TypeValidation = validateObject(
    {
      desc: description,
    },
    // @ts-ignore
    SCHEME,
  );

  const filledFields = () => {
    return !!description;
  };

  const handleContinue = async () => {
    debug.log('here');
    validation = validateObject(
      {
        desc: description,
      },
      // @ts-ignore
      SCHEME,
    );
    debug.log('validation', validation);

    // if (!validation.isValid) {
    //     // setError(true)
    //     return;
    // }
    navigation?.navigate(HomeRoutes.HOME);
  };

  useEffect(() => {
    setErrorCount(errorCount + 1);
    validation = validateObject(
      {
        desc: description,
      },
      // @ts-ignore
      SCHEME,
    );
    if (!validation.isValid && errorCount >= 1 && filledFields()) {
      setError(true);
    }
  }, [description]);

  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.r2}>
            <View style={styles.r6}>
              <TouchableOpacity
                style={styles.rx}
                onPress={() => {
                  navigation?.navigate(HomeRoutes.HOME);
                }}
              >
                <Feather
                  color={COLORS.light.active}
                  name="x"
                  size={24}
                  style={styles.rxt}
                />
              </TouchableOpacity>
              <View style={styles.r1}>
                <Text style={styles.r1t2}>How would you rate Zee’s Store?</Text>
              </View>
              <View style={styles.rstar}>
                {[1, 2, 3, 4, 5].map((s, index) => (
                  <TouchableOpacity
                    key={nanoid()}
                    style={styles.rstarx}
                    onPress={() => {
                      setRating(s);
                    }}
                  >
                    <AntDesign
                      color={rating >= index + 1 ? COLORS.light.star : COLORS.light.text}
                      name={rating >= index + 1 ? 'star' : 'staro'}
                      size={20}
                    />
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.r3}>
                <Text style={styles.r3t1}>
                  Your feedback is important and greatly appreciated
                </Text>

                {/*<View style={styles.inputContainer}>*/}
                <TextInput
                  multiline
                  activeOutlineColor={
                    validation?.data?.desc.isValid && error
                      ? COLORS.light.colorOne
                      : COLORS.light.warning
                  }
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="default"
                  mode="outlined"
                  outlineColor={
                    !validation?.data?.desc.isValid && error
                      ? COLORS.light.warning
                      : COLORS.light.inactive
                  }
                  outlineStyle={styles.inputOutline}
                  placeholder="Feedback"
                  placeholderTextColor={COLORS.light.active}
                  selectionColor={
                    validation?.data?.desc.isValid && error
                      ? COLORS.light.colorOne
                      : COLORS.light.warning
                  }
                  style={[styles.inputContent, { height: 150 }]}
                  textColor={COLORS.light.text}
                  textContentType="none"
                  value={description}
                  onChangeText={val => {
                    setDescription(val);
                  }}
                />
                {!validation?.data?.desc.isValid && error && (
                  <Text style={styles.error}>description too short</Text>
                )}
                {/*</View>*/}
              </View>
            </View>

            <View style={styles.r9}>
              <MainButton
                btnStyle={styles.r9t}
                err={false}
                title="Submit Rating"
                onPressFunction={() => {
                  handleContinue();
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderRating;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.light.hashBackGroundL4,
  },
  container: {
    alignItems: 'center',
    marginHorizontal: '5%',
    backgroundColor: COLORS.light.hashBackGroundL4,
  },
  subContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: '15%',
    backgroundColor: COLORS.light.hashBackGroundL4,
  },
  r1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '2%',
    backgroundColor: COLORS.light.background,
  },
  r2: {
    backgroundColor: COLORS.light.background,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: '50%',
    borderRadius: 15,
  },
  r2t1: {
    backgroundColor: COLORS.light.background,
    padding: 10,
    borderRadius: 30,
  },
  r1t2: {
    color: COLORS.light.text,
    fontSize: SIZES.sizeSixC,
    fontWeight: '700',
  },
  r3: {
    width: '65%',
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: COLORS.light.background,
  },
  r3t1: {
    marginBottom: '15%',
    fontWeight: '300',
    fontSize: SIZES.sizeFiveC,
    textAlign: 'center',
    backgroundColor: COLORS.light.background,
  },
  r9: {
    marginBottom: 10,
    marginTop: '2%',
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  r9t: {
    backgroundColor: COLORS.light.colorOne,
    paddingHorizontal: '15%',
  },
  r9b: {
    marginBottom: 10,
    paddingVertical: 5,
    width: '100%',
    alignItems: 'center',
    borderColor: COLORS.light.text,
    backgroundColor: 'transparent',
  },
  r6: {
    backgroundColor: COLORS.light.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  r6a: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
  },
  r6b: {
    backgroundColor: 'transparent',
    marginLeft: 10,
  },
  r6c: {
    borderRightWidth: 2,
    borderRightColor: COLORS.light.textGray,
    height: '70%',
    backgroundColor: 'transparent',
  },
  r6d: {
    color: COLORS.light.active,
    fontSize: SIZES.sizeSeven,
    fontWeight: '400',
    backgroundColor: 'transparent',
    marginLeft: '4%',
  },
  inputContent: {
    fontSize: SIZES.sizeSeven,
    fontWeight: '400',
    color: COLORS.light.backgroundGray,
    backgroundColor: COLORS.light.backgroundGray,
    marginBottom: 8,
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  inputOutline: {
    borderRadius: 20,
  },
  inputContainer: {
    // width: '100%',
  },
  error: {
    color: COLORS.light.warning,
    fontSize: SIZES.sizeSix,
    fontWeight: '500',
    marginLeft: 5,
  },
  rx: {
    alignSelf: 'flex-end',
    marginTop: '5%',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: COLORS.light.textGray,
    padding: 2,
  },
  rxt: {},
  rstar: {
    flexDirection: 'row',
    marginVertical: '5%',
    gap: 3,
  },
  rstarx: {},
});
