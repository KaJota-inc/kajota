import React from "react";
import {TouchableOpacity} from "react-native";
import {Text, View} from "@components/Themed";
import {SimpleLineIcons} from "@expo/vector-icons";
import {StyleSheet} from "react-native";
import {COLORS} from "@constants/Colors";
import {BasketSVG} from "@shared/components/SVGS";

type CartIconType = {
    count?: number
}

export default function CartIcon({count = 1}: CartIconType) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.cartText}>{count}</Text>
            </View>

            {/*<SimpleLineIcons size={20} name="basket" color={COLORS.light.text} />*/}
            <BasketSVG/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
        backgroundColor: "transparent",
        height: 50,
        marginRight: 20,
        // borderWidth:1,
        marginBottom: 10
    },
    body: {
        borderRadius: 10,
        backgroundColor: COLORS.light.colorOneLight,
        alignItems: "center",
        justifyContent: "center",
        width: 20,
        height: 15,
        padding: 1,
        alignSelf: "flex-end",
        // borderWidth:1,

    },
    cartText: {
        color: COLORS.light.colorOneDark,
        fontSize: 12,
    },
});
