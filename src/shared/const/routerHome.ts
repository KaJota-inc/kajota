import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export enum HomeRoutes {
  DOB = 'DOB',
  HOME = 'HOME',
  CART = 'CART',
  ORDER = 'ORDER',
  ORDERPAYMENT = 'ORDERPAYMENT',
  ORDERTRACKING = 'ORDERTRACKING',
  ORDERCONFIRMATION = 'ORDERCONFIRMATION',
  ORDERRATING = 'ORDERRATING',
  SEARCH = 'SEARCH',
  SEARCHPRODUCTS = 'SEARCHPRODUCTS',
}

export type HomeParamList = {
  [HomeRoutes.DOB]: undefined;
  [HomeRoutes.HOME]: undefined;
  [HomeRoutes.CART]: undefined;
  [HomeRoutes.ORDER]: undefined;
  [HomeRoutes.ORDERPAYMENT]: undefined;
  [HomeRoutes.ORDERTRACKING]: undefined;
  [HomeRoutes.ORDERCONFIRMATION]: undefined;
  [HomeRoutes.ORDERRATING]: undefined;
  [HomeRoutes.SEARCH]: undefined;
  [HomeRoutes.SEARCHPRODUCTS]: undefined;
};

export type HomeProps<RouteName extends HomeRoutes> = StackScreenProps<
  HomeParamList,
  RouteName
>;

export type HomeNavigationProps = StackNavigationProp<HomeParamList>;
