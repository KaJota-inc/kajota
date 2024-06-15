import {StyleSheet, TouchableOpacity} from "react-native";

import React, {useEffect, useState} from "react";
import {Text, View} from "@components/Themed";
import {TextInput, Avatar} from 'react-native-paper';
import CountryPicker from 'react-native-country-picker-modal';
import {COLORS, SIZES} from "@constants/Colors";
import {MainButton} from "@components/index";
import ValidateData from "@shared/lib/validateData";
import {validateObject} from "@shared/helper";
import {IFLowProps} from "@pages/Auth/LGS/index";

const ResetPassword = ({handleStep, flow, option, currentIdx}: IFLowProps) => {

    const [error, setError] = useState<boolean>(false);
    const [errorCount, setErrorCount] = useState<number>(0);

    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");


    const [hidePassword, setHidePassword] = useState<boolean>(true);
    const [hideConfirmPassword, setHideConfirmPassword] = useState<boolean>(true);


    const SCHEME = {
        newP: (newP: string) => ValidateData.special(newP),
        confirmP: (confirmP: string) => password === confirmPassword
    };

    type TypeValidation = {
        data: Record<keyof typeof SCHEME, { isValid: boolean }>;
        isValid: boolean;
    };

    let validation: TypeValidation = validateObject(
        {
            newP: password,
            confirmP: confirmPassword,
        },
        // @ts-ignore
        SCHEME,
    );

    const filledFields = () => {
        return !!confirmPassword && !!password
    }

    const handleContinue = async () => {
        debug.log("here")
        validation = validateObject(
            {
                newP: password,
                confirmP: confirmPassword,
            },
            // @ts-ignore
            SCHEME,
        );
        debug.log("validation", validation)

        // if (!validation.isValid) {
        //     // setError(true)
        //     return;
        // }
        handleStep(flow[currentIdx + 1])

    }

    useEffect(() => {
        setErrorCount(errorCount + 1)
        validation = validateObject(
            {
                newP: password,
                confirmP: confirmPassword,
            },
            // @ts-ignore
            SCHEME,
        );
        if (!validation.isValid && errorCount >= 1 && filledFields()) {
            setError(true)
        }
    }, [password, confirmPassword]);

    return (
        <>
            <View style={styles.r1}>
                <Text style={styles.r1t2}>Reset Password</Text>
            </View>

            <View style={styles.r3}>
                <Text style={styles.r3t1}>Reset your password securely to regain access to your account.</Text>
            </View>

            <View style={styles.r3}>
                {/*<Text style={styles.r3t1}>Password</Text>*/}
                <TextInput
                    mode="outlined"
                    textColor={COLORS.light.text}
                    // label={"Full Name"}
                    placeholder={"Password"}
                    placeholderTextColor={COLORS.light.active}
                    textContentType="password"
                    secureTextEntry={hidePassword}
                    style={{...styles.inputContent}}
                    outlineStyle={styles.inputOutline}
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    selectionColor={
                        validation?.data?.newP.isValid && error ?
                            COLORS.light.colorOne
                            : COLORS.light.warning
                    }
                    outlineColor={
                        !validation?.data?.newP.isValid && error
                            ? COLORS.light.warning
                            : COLORS.light.inactive
                    }
                    activeOutlineColor={
                        validation?.data?.newP.isValid && error ?
                            COLORS.light.colorOne
                            : COLORS.light.warning
                    }
                    value={password}
                    onChangeText={(val) => {
                        setPassword(val);
                    }}
                    right={
                        <TextInput.Icon
                            icon={hidePassword ? "eye-off" : "eye"}
                            color={COLORS.light.active}
                            onPress={() => setHidePassword(!hidePassword)}
                        />
                    }
                />
                {
                    (!validation?.data?.newP.isValid && error) &&
                    <Text style={styles.error}>{"Invalid Password"}</Text>}

            </View>

            <View style={styles.r3}>
                {/*<Text style={styles.r3t1}>Password</Text>*/}
                <TextInput
                    mode="outlined"
                    textColor={COLORS.light.text}
                    // label={"Full Name"}
                    placeholder={"Confirm password"}
                    placeholderTextColor={COLORS.light.active}
                    textContentType="password"
                    secureTextEntry={hideConfirmPassword}
                    style={{...styles.inputContent}}
                    outlineStyle={styles.inputOutline}
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    selectionColor={
                        validation?.data?.confirmP.isValid && error ?
                            COLORS.light.colorOne
                            : COLORS.light.warning
                    }
                    outlineColor={
                        !validation?.data?.confirmP.isValid && error
                            ? COLORS.light.warning
                            : COLORS.light.inactive
                    }
                    activeOutlineColor={
                        validation?.data?.confirmP.isValid && error ?
                            COLORS.light.colorOne
                            : COLORS.light.warning
                    }
                    value={confirmPassword}
                    onChangeText={(val) => {
                        setConfirmPassword(val);
                    }}
                    right={
                        <TextInput.Icon
                            icon={hideConfirmPassword ? "eye-off" : "eye"}
                            color={COLORS.light.active}
                            onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
                        />
                    }
                />
                {
                    (!validation?.data?.confirmP.isValid && error) &&
                    <Text style={styles.error}>{"Password does not match"}</Text>}

            </View>

            <View style={styles.r9}>
                <MainButton
                    title={"Reset Password"}
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

export default ResetPassword;

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
        fontSize: SIZES.sizeNine,
        fontWeight: "700",
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
        fontSize: SIZES.sizeSixB,
    },
    inputContent: {
        fontSize: SIZES.sizeSeven,
        fontWeight: "500",
        color: COLORS.light.backgroundGray,
        width: "100%",
        backgroundColor: COLORS.light.backgroundGray,
        marginBottom: 8,
        // paddingLeft: "15%",
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
        alignItems: "center"
    },
    r9t: {
        // width: "30%",
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