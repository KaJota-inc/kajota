import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SellsMain } from '@pages/Sells';

import { SellsParamList, SellsRoutes } from '@shared/const/routerSells';

const Sell = createStackNavigator<SellsParamList>();

const SellStack = (): React.ReactElement => {
  return (
    <Sell.Navigator
      initialRouteName={SellsRoutes.SellsMain}
      screenOptions={{ headerShown: false }}
    >
      <Sell.Screen component={SellsMain} name={SellsRoutes.SellsMain} />
    </Sell.Navigator>
  );
};

export default SellStack;
