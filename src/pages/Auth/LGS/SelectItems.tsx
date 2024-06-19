import {StyleSheet, TouchableOpacity} from "react-native";

import React, {useEffect, useState} from "react";
import {Text, View} from "@components/Themed";
import {COLORS, SIZES} from "@constants/Colors";
import {MainButton} from "@components/index";
import {IFLowProps} from "@pages/Auth/LGS/index";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import Layout from "@constants/Layout";
import {CATEGORIES2} from "@constants/values";

type ItemsType = {
    subject: string;
    desc: string;
}

const SelectItems = ({handleStep, flow, option, currentIdx, userType}: IFLowProps) => {

    const [selectedItemIndex, setSelectedItemIndex] = useState<number[]>([]);


    const handleContinue = async () => {
        debug.log("here")
        handleStep(flow[currentIdx + 1])
    }

    const handlePress = (val: number) => {
        if (selectedItemIndex.includes(val)) {
            setSelectedItemIndex(selectedItemIndex.filter(sii => sii !== val))
        } else {
            setSelectedItemIndex([...selectedItemIndex, val])
        }

    }


    return (
        <>
            <View style={styles.r1}>
                <Text
                    style={styles.r1t2}>{userType === "SELL" ? "Select items you’d like to sell" : "Choose your favorites"}</Text>
            </View>
            <View style={styles.r3}>
                <Text style={styles.r3t1}>{
                    userType === "SELL" ?
                        "Your selections are the building blocks of your store." :
                        "Your preference helps us personalize your shopping experience."
                }</Text>
            </View>


            <View
                style={styles.catContainer}
            >
                {CATEGORIES2?.map((item, idx) => (
                    <TouchableOpacity
                        key={idx.toString()}
                        style={[styles.catBody, selectedItemIndex.includes(idx) && {
                            backgroundColor: COLORS.light.text,
                        }]}
                        onPress={() => {
                            handlePress(idx)
                        }}
                    >
                        <Text>{item?.icon}</Text>
                        <Text
                            style={[
                                styles.catName,
                                selectedItemIndex.includes(idx) && {color: COLORS.light.background},
                            ]}
                        >
                            {item?.name}
                        </Text>


                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.r9}>
                <MainButton
                    title={
                        <View style={styles.r8t3}>
                            <Text style={styles.r8t5}>
                                Next
                            </Text>
                            <AntDesign
                                name="arrowright"
                                size={24}
                                color={COLORS.light.background}
                            />
                        </View>
                    }
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

export default SelectItems;

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

    r9: {
        marginBottom: 10,
        marginTop: "2%",
        // backgroundColor: COLORS.light.colorOne,
        // paddingVertical: 5,
        width: "100%",
        alignItems: "flex-end"
    },
    r9t: {
        width: "30%",
        backgroundColor: COLORS.light.colorOne,
    },
    r8t3: {
        justifyContent: "center",
        // textAlign: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "transparent",
        paddingTop: "5%",
        width: Layout.window.width * 0.25,
        // marginTop:"2%"
    },
    r8t5: {
        color: COLORS.light.background,
        justifyContent: "space-between",
        textAlign: "center",
        alignItems: "center",
        fontSize: SIZES.sizeSeven,
        fontWeight: "500",
        marginRight: 10
    },
    cat: {
        flexDirection: "row"
    },
    catContainer: {
        marginVertical: 10,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    catBody: {
        backgroundColor: COLORS.light.background,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 2,
        flexDirection: "row",
        borderWidth: 0.5,
        borderRadius: 20
    },
    catName: {
        color: COLORS.light.text,
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 5,
    }
});
