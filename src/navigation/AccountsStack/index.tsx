
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";


import {AccountsParamList, AccountsRoutes} from "@shared/const/routerAccounts";
import {AccountsMain} from "@pages/Accounts";


const Sell = createStackNavigator<AccountsParamList>();

const Accountstack = (): React.ReactElement => {
    return (
        <Sell.Navigator
            initialRouteName={AccountsRoutes.AccountsMain}
            screenOptions={{headerShown: false}}
        >
            <Sell.Screen component={AccountsMain} name={AccountsRoutes.AccountsMain}/>
        </Sell.Navigator>
    );
};

export default Accountstack;
