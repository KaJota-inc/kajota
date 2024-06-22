import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeParamList, HomeRoutes } from '@shared/const/routerHome';

import { DOB } from '../../pages/Home';
import BottomBar from '../BottomBar';

const Home = createStackNavigator<HomeParamList>();

const HomeStack = (): React.ReactElement => {
  return (
    <Home.Navigator
      initialRouteName={HomeRoutes.HOME}
      screenOptions={{ headerShown: false }}
    >
      <Home.Screen component={BottomBar} name={HomeRoutes.HOME} />
      <Home.Screen component={DOB} name={HomeRoutes.DOB} />
    </Home.Navigator>
  );
};

export default HomeStack;
