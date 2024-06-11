
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";


import {ItemsParamList, ItemsRoutes} from "@shared/const/routerItems";
import {DOB} from "@pages/Items";


const Items = createStackNavigator<ItemsParamList>();

const ItemsStack = (): React.ReactElement => {
    return (
        <Items.Navigator
            initialRouteName={ItemsRoutes.DOB}
            screenOptions={{headerShown: false}}
        >
            <Items.Screen component={DOB} name={ItemsRoutes.DOB}/>
        </Items.Navigator>
    );
};

export default ItemsStack;
