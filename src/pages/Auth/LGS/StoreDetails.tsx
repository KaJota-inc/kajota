import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

import { IFLowProps } from '@pages/Auth/LGS/index';

import { COLORS, SIZES } from '@constants/Colors';
import Layout from '@constants/Layout';

import { AIStarSVG } from '@shared/components/SVGS';
import { validateObject } from '@shared/helper';

import { MainButton } from '@components/index';
import { Text, View } from '@components/Themed';

const StoreDetails = ({ handleStep, flow, option, currentIdx, userType }: IFLowProps) => {
  const [fullName, setFullName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [errorCount, setErrorCount] = useState<number>(0);

  const SCHEME = {
    user: (user: string) => user?.length >= 4,
    desc: (desc: string) => desc?.length >= 4,
  };

  type TypeValidation = {
    data: Record<keyof typeof SCHEME, { isValid: boolean }>;
    isValid: boolean;
  };

  let validation: TypeValidation = validateObject(
    {
      user: fullName,
      desc: description,
    },
    // @ts-ignore
    SCHEME,
  );

  const filledFields = () => {
    return !!fullName && !!description;
  };

  const handleContinue = async () => {
    debug.log('here');
    validation = validateObject(
      {
        user: fullName,
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
    handleStep(flow[currentIdx + 1]);
  };

  useEffect(() => {
    setErrorCount(errorCount + 1);
    validation = validateObject(
      {
        user: fullName,
        desc: description,
      },
      // @ts-ignore
      SCHEME,
    );
    if (!validation.isValid && errorCount >= 1 && filledFields()) {
      setError(true);
    }
  }, [fullName, description]);

  return (
    <>
      <View style={styles.r1}>
        <Text style={styles.r1t2}>Store Details</Text>
      </View>
      <View style={styles.r3}>
        <Text style={styles.r3t1}>Input your store name and address.</Text>
      </View>

      <View style={styles.r3}>
        <TextInput
          activeOutlineColor={
            validation?.data?.user.isValid && error
              ? COLORS.light.colorOne
              : COLORS.light.warning
          }
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          mode="outlined"
          outlineColor={
            !validation?.data?.user.isValid && error
              ? COLORS.light.warning
              : COLORS.light.inactive
          }
          outlineStyle={styles.inputOutline}
          placeholderTextColor={COLORS.light.active}
          selectionColor={
            validation?.data?.user.isValid && error
              ? COLORS.light.colorOne
              : COLORS.light.warning
          }
          value={fullName}
          onChangeText={val => {
            setFullName(val);
          }}
          textColor={COLORS.light.text}
          // label={"Full Name"}
          placeholder="Store Name"
          textContentType="username"
          // secureTextEntry={hidePassword}
          style={{ ...styles.inputContent }}
        />
        {!validation?.data?.user.isValid && error && (
          <Text style={styles.error}>name too short</Text>
        )}
      </View>

      <View style={styles.r3}>
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
          placeholder="Store Description"
          placeholderTextColor={COLORS.light.active}
          selectionColor={
            validation?.data?.desc.isValid && error
              ? COLORS.light.colorOne
              : COLORS.light.warning
          }
          style={[styles.inputContent, { height: 250 }]}
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

        <TouchableOpacity
          style={styles.floatingContent2}
          onPress={() => {
            // onGetStarted()
          }}
        >
          <View style={styles.fc2t}>
            <AIStarSVG height={42} width={42} />
            <Text style={styles.fc2t1}>Write with AI</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.r9}>
        <MainButton
          btnStyle={styles.r9t}
          err={false}
          title="Proceed"
          onPressFunction={() => {
            handleContinue();
          }}
        />
      </View>
    </>
  );
};

export default StoreDetails;

const styles = StyleSheet.create({
  r1: {
    flexDirection: 'row',
    // justifyContent: "center",
    width: '100%',
    // alignItems: "center",
    marginTop: '5%',
    marginBottom: '2%',
    backgroundColor: 'transparent',
  },
  r1t1: {},

  r1t2: {
    // marginLeft: "8%",
    color: COLORS.light.text,
    fontSize: SIZES.sizeNine,
    fontWeight: '700',
    // textAlign: "center",
  },
  r3: {
    width: '100%',
    marginTop: 5,
    marginBottom: 15,
  },
  r3t1: {
    marginBottom: 18,
    fontWeight: '300',
    fontSize: SIZES.sizeSixB,
  },

  r9: {
    marginBottom: 10,
    marginTop: '2%',
    // backgroundColor: COLORS.light.colorOne,
    // paddingVertical: 5,
    width: '100%',
    // alignItems: "flex-end"
  },
  r9t: {
    // width: "30%",
    backgroundColor: COLORS.light.colorOne,
  },
  r8t3: {
    justifyContent: 'center',
    // textAlign: "center",
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingTop: '5%',
    width: Layout.window.width * 0.25,
    // marginTop:"2%"
  },
  r8t5: {
    color: COLORS.light.background,
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: SIZES.sizeSeven,
    fontWeight: '500',
    marginRight: 10,
  },
  cat: {
    flexDirection: 'row',
  },
  catContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  catBody: {
    backgroundColor: COLORS.light.background,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 2,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 20,
  },
  catName: {
    color: COLORS.light.text,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
  },
  r7t1: {
    color: COLORS.light.text,
    fontSize: SIZES.sizeNineB,
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 20,
  },
  inputContent: {
    fontSize: SIZES.sizeSeven,
    fontWeight: '500',
    color: COLORS.light.backgroundGray,
    width: '100%',
    backgroundColor: COLORS.light.backgroundGray,
    marginBottom: 8,
    paddingLeft: '2%',
    paddingRight: '2%',
    lineHeight: 24,
    // borderRadius:30,
    // borderWidth:2
  },
  inputOutline: {
    borderRadius: 30,
  },
  error: {
    color: COLORS.light.warning,
    fontSize: SIZES.sizeSix,
    fontWeight: '500',
    // textAlign: "center",
    marginLeft: 5,
  },
  floatingContent2: {
    height: 60,
    width: 170,
    backgroundColor: COLORS.light.background,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.light.colorOne,
    alignSelf: 'flex-end',
    // bottom: 80,
    // right: 10,
    bottom: '25%',
    right: '3%',
    padding: 15,
  },
  fc2t: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    // marginLeft: "8%",
    flexDirection: 'row',
  },
  fc2t1: {
    textAlign: 'center',
    marginLeft: '8%',
    fontSize: SIZES.sizeSixC,
    fontWeight: '400',
  },
});
