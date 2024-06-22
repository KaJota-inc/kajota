import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootParamList, RootRoutes } from '@shared/const/routerRoot';

import AccountsStack from '../AccountsStack';
import AuthStack from '../AuthStack';
import BottomBar from '../BottomBar';
import ExploreStack from '../ExploreStack';
import HomeStack from '../HomeStack';
import ItemsStack from '../ItemsStack';
import SellStack from '../SellsStack';

const RootStack = createStackNavigator<RootParamList>();

const RootStackApp = (): React.ReactElement => {
  return (
    <RootStack.Navigator
      initialRouteName={RootRoutes.Auth}
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen component={AuthStack} name={RootRoutes.Auth} />
      <RootStack.Screen component={HomeStack} name={RootRoutes.Home} />
      <RootStack.Screen component={BottomBar} name={RootRoutes.Tabs} />
      <RootStack.Screen component={SellStack} name={RootRoutes.Sells} />
      <RootStack.Screen component={AccountsStack} name={RootRoutes.Accounts} />
      <RootStack.Screen component={ItemsStack} name={RootRoutes.Items} />
      <RootStack.Screen component={ExploreStack} name={RootRoutes.Explore} />
    </RootStack.Navigator>
  );
};

export default RootStackApp;
