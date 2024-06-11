import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import BottomBar from "../BottomBar";
import {
    DOB
} from "../../pages/Home";
import {HomeParamList, HomeRoutes} from "@shared/const/routerHome";

const Home = createStackNavigator<HomeParamList>();

const HomeStack = (): React.ReactElement => {
    return (
        <Home.Navigator
            initialRouteName={HomeRoutes.DOB}
            screenOptions={{headerShown: false}}
        >
            <Home.Screen component={BottomBar} name={HomeRoutes.DOB}/>
            <Home.Screen component={DOB} name={HomeRoutes.DOB}/>
        </Home.Navigator>
    );
};

export default HomeStack;
