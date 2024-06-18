import {
    Image,
    ImageBackground, ImageSourcePropType,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

import React from "react";
import {Text, View} from "@components/Themed";
import {IMAGES, COLORS, SIZES} from "@constants/Colors";
import {FontAwesome5, Octicons} from "@expo/vector-icons";


type IProps = {
    onSkip: () => void;
    onGetStarted: () => void;
    title: string;
    subtitle: string;
    btnText: string;
    backgroundColor: string;
    textColor: string;
    image: ImageSourcePropType

};
export const Slide = ({onSkip, onGetStarted, title, subtitle, btnText, backgroundColor, textColor, image}: IProps) => {
    return (
        <View style={[styles.main, {backgroundColor: backgroundColor}]}>
            <View style={styles.r1}>
                <Text style={[styles.r3t, {color: textColor}]}>{title}</Text>
                <Text style={[styles.r4t, {color: textColor}]}>{subtitle}</Text>
                <TouchableOpacity
                    style={styles.r1t}
                    onPress={() => {
                        onGetStarted();
                    }}
                >
                    <Text style={[styles.r1ta, {color: textColor}]}>{btnText}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.r2}>
                <Image
                    source={image}
                    style={styles.r2t}
                    resizeMode="cover"
                />
            </View>


        </View>
    );
};


const styles = StyleSheet.create({
    main: {
        backgroundColor: COLORS.light.advertBlue,
        marginRight: 10,
        height: "90%",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20
    },
    r1: {
        backgroundColor: "transparent",
        width: "70%",
        justifyContent: "space-between"
    },
    r1t: {
        backgroundColor: COLORS.light.background,
        marginTop: 15,
        padding: 8,
        borderRadius: 20,
        width: "70%",
    },
    r1ta: {
        color: COLORS.light.advertBlueDark,
        fontSize: SIZES.sizeSeven,
        fontWeight: "500",
        textAlign: "center"
    },
    r2: {
        backgroundColor: "transparent",
        marginBottom: "1%"

    },
    r2t: {
        // width: "90%",
        height: "120%",
        // borderWidth:1,
    },
    r3t: {
        color: COLORS.light.advertBlueDark,
        fontSize: SIZES.sizeSeven,
        fontWeight: "700",
        marginBottom: 12
    },
    r4t: {
        color: COLORS.light.advertBlueDark,
        fontSize: SIZES.sizeSixB,
        fontWeight: "400",
    },

});


