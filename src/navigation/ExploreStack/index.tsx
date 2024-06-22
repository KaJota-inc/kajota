import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ExploreParamList, ExploreRoutes } from '@shared/const/routerExplore';

import { ExploreMain } from '../../pages/Explore';
import BottomBar from '../BottomBar';

const Explore = createStackNavigator<ExploreParamList>();

const ExploreStack = (): React.ReactElement => {
  return (
    <Explore.Navigator
      initialRouteName={ExploreRoutes.ExploreMain}
      screenOptions={{ headerShown: false }}
    >
      <Explore.Screen component={ExploreMain} name={ExploreRoutes.ExploreMain} />
    </Explore.Navigator>
  );
};

export default ExploreStack;
