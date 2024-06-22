import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export enum HomeRoutes {
  DOB = 'DOB',
  HOME = 'HOME',
  CART = 'CART',
}

export type HomeParamList = {
  [HomeRoutes.DOB]: undefined;
  [HomeRoutes.HOME]: undefined;
  [HomeRoutes.CART]: undefined;
};

export type HomeProps<RouteName extends HomeRoutes> = StackScreenProps<
  HomeParamList,
  RouteName
>;

export type HomeNavigationProps = StackNavigationProp<HomeParamList>;
