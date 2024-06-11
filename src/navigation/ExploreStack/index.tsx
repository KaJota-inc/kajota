
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import BottomBar from "../BottomBar";
import {
    DOB
} from "../../pages/Explore";
import {ExploreParamList, ExploreRoutes} from "@shared/const/routerExplore";

const Explore = createStackNavigator<ExploreParamList>();

const ExploreStack = (): React.ReactElement => {
    return (
        <Explore.Navigator
            initialRouteName={ExploreRoutes.DOB}
            screenOptions={{headerShown: false}}
        >
            <Explore.Screen component={DOB} name={ExploreRoutes.DOB}/>
        </Explore.Navigator>
    );
};

export default ExploreStack;
