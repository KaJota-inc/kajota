import {StyleSheet, TouchableOpacity} from "react-native";

import React, {useEffect, useState} from "react";
import {Text, View} from "@components/Themed";
import {COLORS, SIZES} from "@constants/Colors";
import {MainButton} from "@components/index";
import {IFLowProps} from "@pages/Auth/LGS/index";
import {MaterialIcons} from "@expo/vector-icons";

type UtilityOptType = {
    subject: string;
    desc: string;
}

const HWYJ = ({handleStep, flow, option, currentIdx, handleUserType}: IFLowProps) => {

    const [code, setCode] = useState<string>("");
    const [errorText, setErrorText] = useState<string>("");
    const [selectedItemIndex, setSelectedItemIndex] = useState<number>();


    const utilityOptions: UtilityOptType[] = [
        {
            subject: "Co-Sell",
            desc: "Earn by selling for a vendor and increase your income as a co-seller."
        },
        {
            subject: "Sell",
            desc: "Unlock your potential as a seller and reach new heights in the marketplace"
        },
        {
            subject: "All options",
            desc: "Sell products independently and also earn by co-selling"
        },
        {
            subject: "Just want to buy",
            desc: "Experience the ease and convenience of shopping with us."
        },
    ]

    const handleContinue = async () => {
        debug.log("here")
        handleStep(flow[currentIdx + 1])
    }

    const handleChooseUserType = (val: number) => {

        switch (val) {
            case 0:
                handleUserType?.("CO_SELL")
                break;
            case 1:
                handleUserType?.("SELL")
                break;
            case 2:
                handleUserType?.("ALL")
                break;
            case 3:
                handleUserType?.("BUY")
                break;
            default:
                handleUserType?.("SELL")
                break;
        }

    }

    return (
        <>
            <View style={styles.r1}>
                <Text style={styles.r1t2}>How would you like to use Jota?</Text>
            </View>
            <View style={styles.r3}>
                <Text style={styles.r3t1}>Choose your preferred way to utilize Jota's services.</Text>
            </View>

            {
                utilityOptions.map(
                    (opt, idx) => (
                        <TouchableOpacity
                            key={idx}
                            style={styles.utilityOpt}
                            onPress={() => {
                                setSelectedItemIndex(idx)
                                handleChooseUserType(idx)
                            }}
                        >
                            <View style={styles.radioButton}>
                                <MaterialIcons
                                    name={
                                        selectedItemIndex === idx
                                            ? "radio-button-on"
                                            : "radio-button-unchecked"
                                    }
                                    size={24}
                                    color={selectedItemIndex === idx ? COLORS.light.colorOne : COLORS.light.active}
                                />
                            </View>
                            <View style={styles.utilityOptB}>
                                <Text style={styles.utilityOptB1}>{opt.subject}</Text>
                                <Text style={styles.utilityOptB2}>{opt.desc}</Text>
                            </View>

                        </TouchableOpacity>
                    )
                )
            }

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

export default HWYJ;

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
    r7: {
        width: "100%",
        backgroundColor: "transparent",
        flexDirection: "row",
        marginTop: "7%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        flexWrap: "wrap"
    },
    r7t1: {
        color: COLORS.light.text,
        fontSize: SIZES.sizeSixB,
        fontWeight: "400",
        textAlign: "center",
    },
    r7t2: {
        color: COLORS.light.colorOne,
        fontSize: SIZES.sizeSeven,
        fontWeight: "700",
        textAlign: "center",
    },
    utilityOpt: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        borderWidth: 0.5,
        borderRadius: 15,
        marginBottom: 10,
        borderColor: COLORS.light.textGray
    },
    radioButton: {
        backgroundColor: "transparent",
        width: "10%"
    },
    utilityOptB: {
        justifyContent: "space-between",
        paddingRight: 5,
        flex: 1
        // height:"100%"

    },
    utilityOptB1: {
        fontSize: SIZES.sizeSeven,
        fontWeight: "600",

    },
    utilityOptB2: {
        fontSize: SIZES.sizeSix,
        fontWeight: "400",
        textAlign: "left",
        flexWrap: "wrap"
    },

});
