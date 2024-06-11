import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RootParamList, RootRoutes } from "@shared/const/routerRoot";
import AuthStack from "../AuthStack";
import HomeStack from "../HomeStack";
import AccountsStack from "../AccountsStack";
import SellStack from "../SellsStack";
import ItemsStack from "../ItemsStack";
import ExploreStack from "../ExploreStack";
import BottomBar from "../BottomBar";

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
      <RootStack.Screen
        component={SellStack}
        name={RootRoutes.Sells}
      />
      <RootStack.Screen component={AccountsStack} name={RootRoutes.Accounts} />
      <RootStack.Screen component={ItemsStack} name={RootRoutes.Items} />
      <RootStack.Screen component={ExploreStack} name={RootRoutes.Explore} />
    </RootStack.Navigator>
  );
};

export default RootStackApp;
