import React from "react";
import {StyleSheet, Image, TouchableOpacity, ImageBackground} from "react-native";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {ProductType} from "@shared/types/generaltypes";
import {Text, View} from "@components/Themed";
import {COLORS, IMAGES, SIZES} from "@constants/Colors";

export default function ProductCard(
    {
        item,
        index,
    }: {
        item: ProductType;
        index: number;
    }) {

    return (
        <>
            <TouchableOpacity
                onPress={() => {
                    debug.log("I am pressed::", index);
                }}
            >
                <ImageBackground
                    style={styles.image}
                    // imageStyle={styles.image}
                    source={item?.uri}
                    resizeMode={"cover"}
                >
                    <View
                        style={styles.imageA}
                    >
                        <View
                            style={styles.imageAa}
                        >
                            <View style={styles.imageAat1w}>
                                <Text style={styles.imageAat1}>Men’s Fashion</Text>
                            </View>
                           <View style={styles.imageAat2w}>
                               <Text style={styles.imageAat2}>New</Text>
                           </View>

                        </View>
                        <View
                            style={styles.imageB}
                        >
                            {/*<Text style={styles.imageAat3}>Fave</Text>*/}
                            <Ionicons
                                name="heart-circle-outline"
                                size={36}
                                color={COLORS.light.backgroundGray}

                            />
                        </View>
                    </View>
                    {/*<View></View>*/}
                </ImageBackground>
            </TouchableOpacity>
            <View style={styles.subInner}>
                <View>
                    <Text style={styles.itemCategory}>
                        {item?.store}
                    </Text>
                </View>
                <View>
                    <Text style={styles.textFont}>{item?.title}</Text>
                </View>
            </View>

            <View style={styles.cardBottom}>
                <View
                    style={styles.cardBottomSub}
                >
                    <View style={styles.cardBottomPriceBody}>
                        <Text
                            style={styles.cardBottomPrice}
                        >
                            {item?.ccy}
                            {Number(item?.price || 0).toFixed(2)}
                        </Text>
                    </View>
                    <View
                        style={styles.cardBottomSubA}
                    >
                        {
                            Array.from({length: item?.rating || 0}).map((_, k) => (
                                    <View key={k}>
                                        <AntDesign name="star" color={COLORS.light.star} size={12}/>
                                    </View>
                                )
                            )}

                        <Text style={styles.cardBottomRating}>
                            {item?.rating}
                        </Text>
                        {/*<View style={styles.cardBottomDot}>*/}
                        {/*    <Text style={styles.cardBottomDotText}>.</Text>*/}
                        {/*</View>*/}

                        {/*<Text style={styles.cardBottomDotText}>{item?.item}</Text>*/}
                    </View>


                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 160,
        // borderWidth: 1,
    },
    textFont: {
        fontSize: SIZES.sizeSevenB,
        fontWeight: "500"
    },
    subInner: {

        flexDirection: "column",
        marginHorizontal: 15,
        marginTop: 20,
        flex: 1,
        marginBottom: 20,
    },
    itemCategory: {
        color: COLORS.light.text,
        marginBottom: 8
    },
    cardBottom: {
        // paddingLeft: 15,
        // paddingRight: 10,
        paddingHorizontal: 5,
        marginBottom: 15,
        alignItems: "center",
        width: "100%"

    },
    cardBottomSub: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        width: "100%"
    },
    cardBottomSubA: {
        flexDirection: "row",
        // justifyContent: "space-around",
        alignItems: "center",
        // flex: 1,
    },
    cardBottomRating: {
        marginHorizontal: 6,
        color: COLORS.light.text
    },
    cardBottomDot: {
        justifyContent: "center",
        marginBottom: 4
    },
    cardBottomDotText: {
        color: COLORS.light.textGray
    },
    cardBottomPriceBody: {
        marginLeft: 5,
        alignItems: "center",
        // borderWidth: 1,
    },
    cardBottomPrice: {
        fontSize: SIZES.sizeSeven,
        color: COLORS.light.price,
        fontWeight: "bold",
        alignItems: "center",
    },
    imageA: {
        backgroundColor: "transparent",
        // alignItems:"center",
        justifyContent: "space-between",
        height: "100%",
        padding: 10

    },
    imageAa: {
        backgroundColor: "transparent",
        flexDirection: "row",
    },
    imageB: {
        backgroundColor: "transparent",
        // opacity: 0.5,
        // borderWidth: 1,
        width: "25%",
        height: "25%",
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center"
    },
    imageAat1w:{
        backgroundColor: COLORS.light.advertGreenLight,
        marginRight: 5,
        borderRadius: 18,
        padding: 8,
    },
    imageAat1: {
        color: COLORS.light.advertGreenDark,
        fontSize: SIZES.sizeFive
    },
    imageAat2w:{
        backgroundColor: COLORS.light.colorOneLight2,
        marginRight: 5,
        padding: 8,
        borderRadius: 12
    },
    imageAat2: {
        color: COLORS.light.colorOne,
        fontSize: SIZES.sizeFive

    },
    imageAat3: {
        backgroundColor: "transparent"
    },

});
