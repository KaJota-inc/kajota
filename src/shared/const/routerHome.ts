import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export enum HomeRoutes {
  DOB = 'DOB',
  HOME = 'HOME',
  CART = 'CART',
  ORDER = 'ORDER',
  ORDERPAYMENT = 'ORDERPAYMENT',
}

export type HomeParamList = {
  [HomeRoutes.DOB]: undefined;
  [HomeRoutes.HOME]: undefined;
  [HomeRoutes.CART]: undefined;
  [HomeRoutes.ORDER]: undefined;
  [HomeRoutes.ORDERPAYMENT]: undefined;
};

export type HomeProps<RouteName extends HomeRoutes> = StackScreenProps<
  HomeParamList,
  RouteName
>;

export type HomeNavigationProps = StackNavigationProp<HomeParamList>;
