import {StyleSheet} from "react-native";
import {TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import {Text, View} from "@components/Themed";
import {COLORS, SIZES} from "@constants/Colors";
import {MainButton} from "@components/index";
import {IFLowProps} from "@pages/Auth/LGS/index";


type IPlanType = {
    name: string;
    price: string;
    noOfCosellers: string;
    bill: string;
}
const Plan = ({handleStep, flow, option, currentIdx, userType}: IFLowProps) => {

    const periods: string[] = ["ANNUALLY", "MONTHLY"]

    const annualPlans: IPlanType[] = [
        {
            name: "Basic Plan",
            price: "4.99",
            noOfCosellers: "3",
            bill: "59.88"
        },
        {
            name: "Basic Plan",
            price: "9.99",
            noOfCosellers: "6",
            bill: "119.88"
        }
    ]

    const monthPlans: IPlanType[] = [
        {
            name: "Basic Plan",
            price: "5.99",
            noOfCosellers: "3",
            bill: ""
        },
        {
            name: "Basic Plan",
            price: "11.99",
            noOfCosellers: "6",
            bill: ""
        }
    ]


    const [selectedIdx, setSelectedIdx] =
        useState<number>(0);


    const handleContinue = async () => {
        debug.log("here")
        handleStep(flow[currentIdx + 1])
    }


    return (
        <View style={styles.r2}>

            <View style={styles.r1}>
                <TouchableOpacity
                    style={[selectedIdx == 0 ? styles.r1a : styles.r1b]}
                    onPress={() => {
                        setSelectedIdx(0)
                    }}
                >
                    <Text
                        style={[
                            styles.r1t2,
                            {color: selectedIdx === 0 ? COLORS.light.text : COLORS.light.textHash}
                        ]}
                    >Annually</Text>
                    <Text
                        style={[
                            styles.r1t2a,
                            {color: selectedIdx === 0 ? COLORS.light.text : COLORS.light.textHash}
                        ]}
                    >Save 17%</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[selectedIdx == 1 ? styles.r1a : styles.r1b]}
                    onPress={() => {
                        setSelectedIdx(1)
                    }}
                >
                    <Text
                        style={[
                            styles.r1t2b,
                            {color: selectedIdx === 1 ? COLORS.light.text : COLORS.light.textHash}
                        ]}
                    >Monthly</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.r6}>
                <View style={styles.r3}>
                    <Text style={styles.r3t1}>Free</Text>
                    <Text style={styles.r3t2}>30 Days</Text>
                </View>
                <View style={styles.r3b}/>
                <View style={styles.r3c}>
                    <View style={styles.r3cv}>
                        <Text style={styles.r3bt1}>1 Co-Seller</Text>
                    </View>
                    {/*<Text style={styles.r3bt2}>1 Co-Seller</Text>*/}
                </View>
            </View>

            {
                (selectedIdx === 0 ? annualPlans : monthPlans).map(
                    (pl, idx) => (
                        <View
                            key={idx}
                            style={styles.r6}
                        >
                            <View style={styles.r3}>
                                <Text style={styles.r3t1}>{pl.name}</Text>
                                {pl.price &&  <Text style={styles.r3t2b}>{`£${pl.price}`}
                                    <Text style={styles.r3t2c}>/month</Text>
                                </Text>}
                            </View>
                            <View style={styles.r3b}/>
                            <View style={styles.r3c}>
                                <View style={styles.r3cv}>
                                    <Text style={styles.r3bt1}>{`${pl.noOfCosellers} Co-Sellers`}</Text>
                                </View>
                                {pl.bill && <Text style={styles.r3bt2}>{`£${pl.bill} billed annually`}</Text>}
                            </View>
                        </View>
                    )
                )
            }

            {/*<View style={styles.r6}>*/}
            {/*    <View style={styles.r3}>*/}
            {/*        <Text style={styles.r3t1}>Basic Plan</Text>*/}
            {/*        <Text style={styles.r3t2b}>£9.99*/}
            {/*            <Text style={styles.r3t2c}>/month</Text>*/}
            {/*        </Text>*/}
            {/*    </View>*/}
            {/*    <View style={styles.r3b}/>*/}
            {/*    <View style={styles.r3c}>*/}
            {/*        <View style={styles.r3cv}>*/}
            {/*            <Text style={styles.r3bt1}>6 Co-Sellers</Text>*/}
            {/*        </View>*/}
            {/*        <Text style={styles.r3bt2}>£119.88 billed annually</Text>*/}
            {/*    </View>*/}
            {/*</View>*/}


            <View style={styles.r9}>
                <MainButton
                    title={"Proceed"}
                    onPressFunction={() => {
                        handleContinue()
                    }}
                    err={false}
                    btnStyle={styles.r9t}

                />
            </View>

        </View>
    );
};

export default Plan;

const styles = StyleSheet.create({
    r1: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20,
        // width: "100%",
        // height: "80%",
        alignItems: "center",
        marginTop: "3%",
        marginBottom: "1%",
        backgroundColor: COLORS.light.hashBackGroundL2,
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 12
    },
    r1a: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: COLORS.light.background,
    },
    r1b: {
        backgroundColor: "transparent",
        flexDirection: "row",
        padding: 10,
    },
    r1t1: {},
    r1t2: {
        // marginLeft: "8%",
        color: COLORS.light.text,
        fontSize: SIZES.sizeFive,
        fontWeight: "600",
        textAlign: "center",
    },
    r1t2a: {
        marginLeft: "3%",
        color: COLORS.light.text,
        fontSize: SIZES.sizeFour,
        fontWeight: "300",
        textAlign: "center",
    },
    r1t2b: {
        marginLeft: "2%",
        color: COLORS.light.textHash,
        fontSize: SIZES.sizeFive,
        fontWeight: "500",
        textAlign: "center",
    },
    r2: {
        // flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        // marginTop: "25%",
        // marginBottom: "2%",

    },
    r2t1: {
        backgroundColor: COLORS.light.backgroundGray,
        padding: 10,
        borderRadius: 30
    },

    r3: {
        width: "100%",
        marginVertical: 5,
        // marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    r3b: {
        width: "100%",
        marginVertical: 10,
        borderTopWidth: 1,
        borderColor: COLORS.light.textGray,
    },
    r3c: {
        width: "100%",
        marginVertical: "5%",
        // marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    r3cv: {
        // width: "100%",
        // marginVertical: "5%",
        // marginBottom: 15,
        // flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        backgroundColor: COLORS.light.text,
        borderRadius: 12,
        alignItems: "center"
    },

    r3t1: {
        fontWeight: "500",
        fontSize: SIZES.sizeSixB,
        textAlign: "center",
        color: COLORS.light.text,
    },
    r3bt1: {
        fontWeight: "500",
        fontSize: SIZES.sizeSeven,
        textAlign: "center",
        color: COLORS.light.background,
    },
    r3bt2: {
        fontWeight: "400",
        fontSize: SIZES.sizeSix,
        textAlign: "center",
        color: COLORS.light.text,
    },

    r3t2: {
        fontWeight: "300",
        fontSize: SIZES.sizeSixB,
        textAlign: "center"
    },
    r3t2b: {
        fontWeight: "500",
        fontSize: SIZES.sizeEightB,
        textAlign: "center"
    },
    r3t2c: {
        fontWeight: "300",
        fontSize: SIZES.sizeSevenB,
        textAlign: "center"
    },

    r9: {
        marginBottom: 10,
        marginTop: "8%",
        // backgroundColor: COLORS.light.colorOne,
        paddingVertical: 5,
        width: "100%",
        alignItems: "center",
        // alignSelf:"flex-end",
        flex: 1
    },
    r9t: {
        // width: "80%",
        backgroundColor: COLORS.light.colorOne,
    },

    r6: {
        // color: COLORS.light.textGray,
        // fontSize: SIZES.sizeSeven,
        marginTop: "5%",
        width: "99%",
        // borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        shadowColor: COLORS.light.hashHomeBackGroundL3,
        shadowOffset: {
            width: 8,
            height: 5,
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 30,
        borderRadius: 15
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
});

