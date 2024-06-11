
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";


import {AccountsParamList, AccountsRoutes} from "@shared/const/routerAccounts";
import {DOB} from "@pages/Accounts";


const Sell = createStackNavigator<AccountsParamList>();

const Accountstack = (): React.ReactElement => {
    return (
        <Sell.Navigator
            initialRouteName={AccountsRoutes.DOB}
            screenOptions={{headerShown: false}}
        >
            <Sell.Screen component={DOB} name={AccountsRoutes.DOB}/>
        </Sell.Navigator>
    );
};

export default Accountstack;
