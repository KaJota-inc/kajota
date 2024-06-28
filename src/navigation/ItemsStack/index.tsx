import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ItemsMain } from '@pages/Items';
import NoNotifications from '@pages/Items/NoNotifications';

import { ItemsParamList, ItemsRoutes } from '@shared/const/routerItems';

const Items = createStackNavigator<ItemsParamList>();

const ItemsStack = (): React.ReactElement => {
  return (
    <Items.Navigator
      initialRouteName={ItemsRoutes.ItemsMain}
      screenOptions={{ headerShown: false }}
    >
      <Items.Screen component={ItemsMain} name={ItemsRoutes.ItemsMain} />
      <Items.Screen component={NoNotifications} name={ItemsRoutes.NoNotifications} />
    </Items.Navigator>
  );
};

export default ItemsStack;
