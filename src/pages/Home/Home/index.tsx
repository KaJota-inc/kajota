import {Image, ScrollView, StatusBar, StyleSheet} from "react-native";

import React from "react";
import {Text, View} from "@components/Themed";
import {CompositeScreenProps} from "@react-navigation/native";
import {HomeProps, HomeRoutes} from "@shared/const/routerHome";
import {RootRoutes, RootScreenProps} from "@shared/const/routerRoot";
import {COLORS, IMAGES, SIZES} from "@constants/Colors";
import CartIcon from "@shared/components/CartIcon";

type NavigationProps = CompositeScreenProps<
    HomeProps<HomeRoutes.HOME>,
    RootScreenProps<RootRoutes.Home>
>;

const Home: React.FC<NavigationProps> = () => {
    return (
        <View style={styles.main}>
            <StatusBar barStyle="dark-content"/>
            <View style={styles.container}>

                <View style={styles.subContainer}>
                    <View style={styles.r1}>
                        <View style={styles.r1a}>
                            {/*<View style={styles.r1img}>*/}
                            <Image source={IMAGES.ProfileImage} style={styles.r1imgb}/>
                            {/*</View>*/}
                            <Text style={styles.r1t}>Hi Jane</Text>
                        </View>
                        <View style={styles.r1b}>
                            <CartIcon count={10} />
                            {/*<Text>Cart</Text>*/}
                        </View>
                    </View>
                    <View>
                        <View>
                            <View>
                                <Text>S</Text>
                                <Text>Search</Text>
                            </View>
                            <View>
                                <Text>C</Text>
                                <Text>Lens Search</Text>
                            </View>
                        </View>
                        <View>
                            <Text>Filter</Text>
                        </View>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.scrollContent}
                        style={styles.scroll}
                    >
                        <View>
                            <Text>Advert</Text>
                        </View>
                        <View>
                            <Text>Categories</Text>
                            <View>
                                <Text>All</Text>
                                <Text>Electronics</Text>
                                <Text>Computer</Text>
                            </View>
                        </View>

                        <View>
                            <Text>Popular</Text>
                            <Text>View All</Text>
                            <View>
                                <View>
                                    <Text>All</Text>
                                    <Text>Electronics</Text>
                                    <Text>Computer</Text>
                                </View>
                                <View>
                                    <Text>All</Text>
                                    <Text>Electronics</Text>
                                    <Text>Computer</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // borderWidth: 1,
    },
    container: {
        // borderWidth: 1,
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        marginHorizontal: "5%",
    },
    subContainer: {
        // flex: 1,
        // borderWidth: 1,
        // justifyContent: "center",
        alignItems: "center",
        // height: "60%",
        width: "100%",
        marginTop: "15%",
        // paddingHorizontal: "5%",
    },
    scroll: {
        // borderWidth: 1,
        width: "100%",
        marginTop: 10,
        backgroundColor: "transparent",
        marginBottom: 20,
    },
    scrollContent: {
        // borderWidth: 1,
        width: "100%",
        // height: "500%",
        alignItems: "center",
        backgroundColor: "transparent",
        marginBottom: 20,
        paddingVertical: 5,
    },
    r1: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginVertical: 15,
        alignItems: "center"
    },
    r1a: {
        flexDirection: "row",
        alignItems: "center"

    },
    r1b: {},
    r1img: {
        height: 50,
        width: 50,
        borderWidth: 1,
        marginRight: 10
    },
    r1imgb: {
        width: 50,
        height: 50,
        // borderWidth: 1,
        marginRight: "6%",
        borderColor: COLORS.light.colorOne,
    },
    r1t:{
        color: COLORS.light.text,
        fontSize: SIZES.sizeSeven,
        fontWeight: "500",
    }
});
