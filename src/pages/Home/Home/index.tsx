import {StyleSheet} from "react-native";

import React from "react";
import {Text, View} from "@components/Themed";
import {CompositeScreenProps} from "@react-navigation/native";
import {HomeProps, HomeRoutes} from "@shared/const/routerHome";
import {RootRoutes, RootScreenProps} from "@shared/const/routerRoot";

type NavigationProps = CompositeScreenProps<
    HomeProps<HomeRoutes.HOME>,
    RootScreenProps<RootRoutes.Explore>
>;

const Home: React.FC<NavigationProps> = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({});
