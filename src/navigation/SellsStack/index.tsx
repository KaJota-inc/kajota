
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";


import {SellsParamList, SellsRoutes} from "@shared/const/routerSells";
import {DOB} from "@pages/Sells";


const Sell = createStackNavigator<SellsParamList>();

const SellStack = (): React.ReactElement => {
    return (
        <Sell.Navigator
            initialRouteName={SellsRoutes.DOB}
            screenOptions={{headerShown: false}}
        >
            <Sell.Screen component={DOB} name={SellsRoutes.DOB}/>
        </Sell.Navigator>
    );
};

export default SellStack;
