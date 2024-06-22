import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AccountsMain } from '@pages/Accounts';

import { AccountsParamList, AccountsRoutes } from '@shared/const/routerAccounts';

const Sell = createStackNavigator<AccountsParamList>();

const Accountstack = (): React.ReactElement => {
  return (
    <Sell.Navigator
      initialRouteName={AccountsRoutes.AccountsMain}
      screenOptions={{ headerShown: false }}
    >
      <Sell.Screen component={AccountsMain} name={AccountsRoutes.AccountsMain} />
    </Sell.Navigator>
  );
};

export default Accountstack;
