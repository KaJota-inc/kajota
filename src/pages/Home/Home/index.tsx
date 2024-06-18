import {Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity} from "react-native";

import React from "react";
import {Text, View} from "@components/Themed";
import {CompositeScreenProps} from "@react-navigation/native";
import {HomeProps, HomeRoutes} from "@shared/const/routerHome";
import {RootRoutes, RootScreenProps} from "@shared/const/routerRoot";
import {COLORS, IMAGES, SIZES} from "@constants/Colors";
import CartIcon from "@shared/components/CartIcon";
import {AntDesign, Feather, SimpleLineIcons} from "@expo/vector-icons";
import Advert from "@pages/Home/Home/advert/Advert";

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
                            <CartIcon count={10}/>
                        </View>
                    </View>
                    <View style={styles.r2}>
                        <View style={styles.r2a}>
                            <TouchableOpacity style={styles.r2a1}>
                                <AntDesign
                                    name="search1"
                                    size={26}
                                    color={COLORS.light.active}
                                />
                                <Text style={styles.r2a1t}>search</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.r2a2}>
                                <SimpleLineIcons
                                    name="camera"
                                    size={24}
                                    color={COLORS.light.active}
                                />
                                <Text style={styles.r2a2t}>Lens search</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.r2b}>
                            <Feather
                                name="sliders"
                                size={24}
                                color={COLORS.light.active}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.scrollContent}
                        style={styles.scroll}
                    >
                        <View style={styles.r3}>
                            <Advert/>
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
        backgroundColor: COLORS.light.hashHomeBackGroundL2,
    },
    container: {
        flex: 1,
        alignItems: "center",
        marginHorizontal: "5%",
        backgroundColor: COLORS.light.hashHomeBackGroundL2,
    },
    subContainer: {
        alignItems: "center",
        width: "100%",
        marginTop: "15%",
        backgroundColor: COLORS.light.hashHomeBackGroundL2,
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
        backgroundColor: "transparent",
        alignItems: "center"
    },
    r1a: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "transparent",

    },
    r1b: {
        backgroundColor: "transparent",
    },
    r1img: {
        height: 50,
        width: 50,
        borderWidth: 1,
        marginRight: 10
    },
    r1imgb: {
        width: 50,
        height: 50,
        marginRight: "6%",
        borderColor: COLORS.light.colorOne,
    },
    r1t: {
        color: COLORS.light.text,
        fontSize: SIZES.sizeSeven,
        fontWeight: "500",
    },
    r2: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginVertical: 5,
        alignItems: "center",
        backgroundColor: COLORS.light.hashHomeBackGroundL2,
    },
    r2a: {
        flexDirection: "row",
        justifyContent: "space-between",
        // borderWidth: 1,
        width: "82%",
        backgroundColor: COLORS.light.backgroundGray,
        padding: 10,
        borderRadius: 13
    },
    r2b: {
        padding: 15,
        borderRadius: 13,
        backgroundColor: COLORS.light.background,
    },
    r2a1: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "transparent",
        padding: 5
    },
    r2a1t: {
        marginLeft:"10%",
        fontSize:SIZES.sizeSix
    },
    r2a2: {
        flexDirection: "row",
        alignItems: "center",
        padding:8,
        borderRadius: 10,
        backgroundColor: COLORS.light.background,
    },
    r2a2t: {
        marginLeft:"5%",
        fontSize:SIZES.sizeSix
    },
    r3:{
        // borderWidth: 1,
        height:220,
        backgroundColor: "transparent",
        width:"100%",
        marginBottom:20

    }
});
