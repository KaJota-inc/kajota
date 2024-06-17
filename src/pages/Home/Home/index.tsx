import {ScrollView, StatusBar, StyleSheet} from "react-native";

import React from "react";
import {Text, View} from "@components/Themed";
import {CompositeScreenProps} from "@react-navigation/native";
import {HomeProps, HomeRoutes} from "@shared/const/routerHome";
import {RootRoutes, RootScreenProps} from "@shared/const/routerRoot";

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
                            <View>
                                <Text>img</Text>
                            </View>
                            <Text>Hi Jane</Text>
                        </View>
                        <View style={styles.r1b}>
                            <Text>Cart</Text>
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
});
