import {StyleSheet} from "react-native";

import React from "react";
import {Text, View} from "@components/Themed";
import {COLORS, SIZES} from "@constants/Colors";
import {StatusBar} from "react-native";
import {AuthProps, AuthRoutes} from "@shared/const/routerAuth";

type NavigationProps = AuthProps<AuthRoutes.WS>;

const WS: React.FC<NavigationProps> = () => {
    return (
        <View style={styles.main}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.container}>
                <Text style={styles.text}>You sell </Text>
                <Text style={styles.text}>You buy </Text>
                <Text style={styles.text}>You Co-Sell </Text>
                <Text style={styles.text}>You earn </Text>
            </View>
        </View>
    );
};

export default WS;

const styles = StyleSheet.create({
    main: {
        backgroundColor: COLORS.light.colorOne,
        flex: 1,
    },
    container: {

        flex: 1,
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: COLORS.light.colorOne,
    },
    text: {
        color: COLORS.light.background,
        fontSize: SIZES.sizeEight,
        fontWeight: "500",
        textAlign: "center",
    },
});
