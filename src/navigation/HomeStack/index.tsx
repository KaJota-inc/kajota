import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from '@pages/Home/Cart';
import FilterBy from '@pages/Home/Filter';
import Order from '@pages/Home/Order';
import OrderConfirmation from '@pages/Home/OrderConfirmation';
import OrderPayment from '@pages/Home/OrderPayment';
import OrderRating from '@pages/Home/OrderRating';
import OrderTracking from '@pages/Home/OrderTracking';
import Search from '@pages/Home/Search';
import SearchProducts from '@pages/Home/SearchProducts';

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
      <Home.Screen component={Cart} name={HomeRoutes.CART} />
      <Home.Screen component={Order} name={HomeRoutes.ORDER} />
      <Home.Screen component={OrderPayment} name={HomeRoutes.ORDERPAYMENT} />
      <Home.Screen component={OrderTracking} name={HomeRoutes.ORDERTRACKING} />
      <Home.Screen component={OrderConfirmation} name={HomeRoutes.ORDERCONFIRMATION} />
      <Home.Screen component={OrderRating} name={HomeRoutes.ORDERRATING} />
      <Home.Screen component={Search} name={HomeRoutes.SEARCH} />
      <Home.Screen component={SearchProducts} name={HomeRoutes.SEARCHPRODUCTS} />
      <Home.Screen component={FilterBy} name={HomeRoutes.FilterBy} />
    </Home.Navigator>
  );
};

export default HomeStack;
