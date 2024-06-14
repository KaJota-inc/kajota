import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Platform, StyleSheet} from "react-native";
import {COLORS, SIZES} from "@constants/Colors";
import {TabOptions} from "@shared/const/routerBottomBar";
import {View, Text} from "@components/Themed";
import {Octicons} from "@expo/vector-icons";


import {
    FifaLogoSVG,
    TabAccountLogoSVG,
    TabExploreLogoSVG, TabHomeLogoSVG,
    TabItemsLogoSVG,
    TabSellLogoSVG
} from "@shared/components/SVGS";
import {DOB, Home} from "@pages/Home";
import {ExploreMain} from "@pages/Explore";
import {SellsMain} from "@pages/Sells";
import {ItemsMain} from "@pages/Items";
import {AccountsMain} from "@pages/Accounts";

const Tab = createBottomTabNavigator();

const TAB_OPTIONS: TabOptions = {
    Home: {
        label: "Home",
        icon: ({color}: { color: string }) => {
            return (
                <>
                    <TabHomeLogoSVG/>
                </>
            );
        },
        component: Home as React.FC,
    },

    Explore: {
        label: "Explore",
        icon: ({color}: { color: string }) => {
            return (
                <>
                    <TabExploreLogoSVG/>
                </>
            );
        },
        component: ExploreMain as React.FC,
    },

    Sell: {
        label: "Sell",
        icon: ({color}: { color: string }) => {
            return (
                <>
                    <TabSellLogoSVG/>
                </>
            );
        },
        component: SellsMain as React.FC,
    },

    Items: {
        label: "Items",
        icon: ({color}: { color: string }) => {
            return (
                <>
                    <TabItemsLogoSVG />
                </>
            );
        },
        component: ItemsMain as React.FC,
    },

    Account: {
        label: "Account",
        icon: ({color}: { color: string }) => {
            return (
                <>
                    <TabAccountLogoSVG/>
                </>
            );
        },
        component: AccountsMain as React.FC,
    },


};

const BottomTabNavigator = (): React.ReactElement => {
    const getTabOptions = (name: keyof typeof TAB_OPTIONS) => ({
        tabBarIcon: ({focused}: { focused: boolean }) => {
            const CompToRender = TAB_OPTIONS[name].icon;
            return (
                <View style={styles.containerItem}>
                    <View
                        style={[
                            styles.containerIcon,
                            // focused &&
                            //   TAB_OPTIONS[name].label === "Account" &&
                            //   styles.focusIcon,
                        ]}
                    >
                        <CompToRender
                            color={
                                focused ? COLORS.light.colorOne : COLORS.light.text
                            }
                        />
                    </View>

                    <Text
                        style={{
                            color: focused
                                ? COLORS.light.colorOne
                                : COLORS.light.text,
                            fontSize: SIZES.sizeFiveB,
                            fontWeight: "400",
                        }}
                    >
                        {focused ? (
                            <Octicons
                                name="dot-fill"
                                size={20}
                                color={COLORS.light.colorOne}
                            />
                        ) : (
                            TAB_OPTIONS[name].label
                        )}
                    </Text>
                </View>
            );
        },
    });

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
            }}
        >
            {Object.keys(TAB_OPTIONS).map((name) => (
                <Tab.Screen
                    key={name}
                    component={TAB_OPTIONS[name].component}
                    name={name}
                    options={getTabOptions(name)}
                />
            ))}
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBarStyle: {
        height: Platform.OS === "android" ? 70 : 100,
        backgroundColor: COLORS.light.background,
        borderTopWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    containerItem: {
        alignItems: "center",
        gap: 8,
        marginBottom: Platform.OS === "android" ? 20 : 25,
    },
    containerIcon: {
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
    },
    focusIcon: {
        backgroundColor: COLORS.light.colorOne,
    },
});

export default BottomTabNavigator;
