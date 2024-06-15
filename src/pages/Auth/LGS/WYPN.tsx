import {StyleSheet, TouchableOpacity} from "react-native";

import React, {useEffect, useState} from "react";
import {Text, View} from "@components/Themed";
import {TextInput, Avatar} from 'react-native-paper';
import CountryPicker from 'react-native-country-picker-modal';
import {COLORS, SIZES} from "@constants/Colors";
import {MainButton} from "@components/index";
import ValidateData from "@shared/lib/validateData";
import {validateObject} from "@shared/helper";
import {Feather} from "@expo/vector-icons";
import {Country, CountryCode} from "react-native-country-picker-modal/lib/types";
import {IFLowProps} from "@pages/Auth/LGS/index";

const WYPN = ({handleStep, flow, option, currentIdx}: IFLowProps) => {

    const [phoneNo, setPhoneNo] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [errorCount, setErrorCount] = useState<number>(0);

    const [countryCode, setCountryCode] = useState<CountryCode>('US');
    const [callingCode, setCallingCode] = useState<string>('1');
    const [flag, setFlag] = useState<string>('🇺🇸');

    const [progressPercent, setProgressPercent] = useState<number>(40); //5-97.5
    const handleSetProgressPercent = (val: number) => {
        setProgressPercent(val);
    };

    const onSelect = (country: Country) => {
        debug.log("country", country)
        setCountryCode(country.cca2);
        setCallingCode(country.callingCode[0]);
        setFlag(country.flag);
    };


    const SCHEME = {
        phonenumber: (phone: string) => ValidateData.number(phone),
    };

    type TypeValidation = {
        data: Record<keyof typeof SCHEME, { isValid: boolean }>;
        isValid: boolean;
    };

    let validation: TypeValidation = validateObject(
        {
            phonenumber: phoneNo,
        },
        // @ts-ignore
        SCHEME,
    );


    const filledFields = () => {
        return !!phoneNo
    }


    const handleContinue = async () => {
        debug.log("here")
        validation = validateObject(
            {
                phonenumber: phoneNo,
            },
            // @ts-ignore
            SCHEME,
        );
        debug.log("validation", validation)

        // if (!validation.isValid) {
        //     // setError(true)
        //     return;
        // }

        // navigation?.dispatch(resetAction);
    }


    useEffect(() => {
        setErrorCount(errorCount + 1)
        validation = validateObject(
            {
                phonenumber: phoneNo,
            },
            // @ts-ignore
            SCHEME,
        );
        if (!validation.isValid && errorCount >= 1 && filledFields()) {
            setError(true)
        }
    }, [phoneNo]);

    return (
        <>
            <View style={styles.r1}>
                <Text style={styles.r1t2}>We’re almost there!</Text>
            </View>

            <View style={styles.progressMain}>
                <View style={styles.progressInner}>
                    <View
                        style={[styles.progressActual, {width: `${progressPercent}%`}]}
                    ></View>
                </View>
                <Text style={styles.mr2t1}>{`${progressPercent}%`}</Text>
            </View>

            <View style={styles.r3}>
                <Text style={styles.r7t1}>What’s your phone number?</Text>
                <TextInput
                    mode="outlined"
                    textColor={COLORS.light.text}
                    // label={"Full Name"}
                    placeholder={""}
                    placeholderTextColor={COLORS.light.active}
                    textContentType="telephoneNumber"
                    style={{...styles.inputContent}}
                    outlineStyle={styles.inputOutline}
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    selectionColor={
                        validation?.data?.phonenumber.isValid && error
                            ? COLORS.light.colorOne
                            : COLORS.light.warning
                    }
                    outlineColor={
                        !validation?.data?.phonenumber.isValid && error
                            ? COLORS.light.warning
                            : COLORS.light.inactive
                    }
                    activeOutlineColor={
                        validation?.data?.phonenumber.isValid && error ?
                            COLORS.light.colorOne
                            : COLORS.light.warning
                    }
                    value={phoneNo}
                    onChangeText={(val) => {
                        setPhoneNo(val);
                    }}
                    left={
                        <TextInput.Icon
                            style={styles.r6}
                            icon={() =>
                                <TouchableOpacity style={styles.r6a}>
                                    <CountryPicker
                                        countryCode={countryCode}
                                        withFilter
                                        withFlag
                                        withCallingCode
                                        withEmoji
                                        onSelect={onSelect}
                                        containerButtonStyle={styles.countryPicker}
                                    />
                                    {/*<Feather*/}
                                    {/*    name="chevron-down"*/}
                                    {/*    size={18}*/}
                                    {/*    color={COLORS.light.text}*/}
                                    {/*    style={styles.r6b}*/}
                                    {/*/>*/}
                                    {/*<Avatar.Icon*/}
                                    {/*    size={28}*/}
                                    {/*    icon="chevron-down"*/}
                                    {/*    color={COLORS.light.text}*/}
                                    {/*    style={{*/}
                                    {/*        backgroundColor: "transparent",*/}
                                    {/*        borderWidth: 1*/}
                                    {/*    }}*/}
                                    {/*/>*/}
                                    <View style={styles.r6c}/>
                                    <Text style={styles.r6d}>{`+${callingCode}`}</Text>
                                </TouchableOpacity>


                            }
                        />
                    }
                />
                {
                    (!validation?.data?.phonenumber.isValid && error) &&
                    <Text style={styles.error}>{"Invalid Phone number"}</Text>}
            </View>

            <View style={styles.r9}>
                <MainButton
                    title={"Next"}
                    onPressFunction={() => {
                        handleContinue()
                    }}
                    err={false}
                    btnStyle={styles.r9t}

                />
            </View>
        </>
    );
};

export default WYPN;

const styles = StyleSheet.create({
    r1: {
        flexDirection: "row",
        // justifyContent: "center",
        width: "100%",
        // alignItems: "center",
        marginTop: "5%",
        marginBottom: "2%",
        backgroundColor: "transparent",
    },
    r1t1: {},
    r2: {
        flexDirection: "row",
        // justifyContent: "center",
        width: "100%",
        // alignItems: "flex-start",
        marginTop: "8%",
        // marginBottom: "2%",

    },
    r2t1: {
        backgroundColor: COLORS.light.backgroundGray,
        padding: 10,
        borderRadius: 30
    },
    r1t2: {
        // marginLeft: "8%",
        color: COLORS.light.text,
        fontSize: SIZES.sizeEightB,
        fontWeight: "400",
        // textAlign: "center",
    },
    r3: {
        width: "100%",
        marginTop: 5,
        marginBottom: 15,
    },
    r3t1: {
        marginBottom: 18,
        fontWeight: "300",
        fontSize: SIZES.sizeSeven,
    },
    inputContent: {
        fontSize: SIZES.sizeSeven,
        fontWeight: "500",
        color: COLORS.light.backgroundGray,
        width: "100%",
        backgroundColor: COLORS.light.backgroundGray,
        marginBottom: 8,
        paddingLeft: "15%",
        paddingRight: "2%",
        // borderRadius:30,
        // borderWidth:2
    },
    inputOutline: {
        borderRadius: 30,
    },
    error: {
        color: COLORS.light.warning,
        fontSize: SIZES.sizeSix,
        fontWeight: "500",
        // textAlign: "center",
        marginLeft: 5
    },
    r9: {
        marginBottom: 10,
        marginTop: "2%",
        // backgroundColor: COLORS.light.colorOne,
        paddingVertical: 5,
        width: "100%",
        alignItems: "flex-end"
    },
    r9t: {
        width: "30%",
        backgroundColor: COLORS.light.colorOne,
    },
    countryPicker: {
        // marginRight: 0,
        backgroundColor: "transparent",
        // width: "160%",
        // borderWidth: 1,
        alignItems: "flex-end"

    },
    phoneNumberInput: {
        flex: 1,
    },
    r6: {
        // color: COLORS.light.textGray,
        // fontSize: SIZES.sizeSeven,
        // marginHorizontal: "2%",
        width: "600%",
        // borderWidth: 1,
        alignItems: "flex-end",
        marginLeft: "10%"
    },
    r6a: {
        flexDirection: "row",
        // width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "transparent",
        // borderWidth: 1
    },
    r6b: {
        // borderTopWidth: 2,
        // borderTopColor: COLORS.light.textGray,
        // width: "30%",

        backgroundColor: "transparent",
        marginLeft: 10
    },
    r6c: {
        borderRightWidth: 2,
        borderRightColor: COLORS.light.textGray,
        height: "70%",
        backgroundColor: "transparent",
    },

    r6d: {
        // borderTopWidth: 2,
        // borderTopColor: COLORS.light.textGray,
        // width: "30%",
        color: COLORS.light.active,
        fontSize: SIZES.sizeSeven,
        fontWeight: "400",
        backgroundColor: "transparent",
        marginLeft: "4%"
    },
    progressMain: {
        marginVertical: "2%",
        // marginBottom: 75,
        //   borderWidth: 1,
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    progressInner: {
        backgroundColor: COLORS.light.progressBg,
        borderRadius: 5,
        width: "88%",
        height: 6,
        // borderWidth: 1,
    },
    progressActual: {
        backgroundColor: COLORS.light.progress,
        height: 6,
        borderRadius: 5,
    },
    mr2t1: {
        color: COLORS.light.text,
    },
    r7t1: {
        color: COLORS.light.text,
        fontSize: SIZES.sizeNine,
        fontWeight: "600",
        marginTop: 40,
        marginBottom: 20,
    },
});
