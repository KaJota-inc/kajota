import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export enum ItemsRoutes {
  ItemsMain = 'ItemsMain',
  NoNotifications = 'NoNotifications',
  Notifications = 'Notifications',
}

export type ItemsParamList = {
  [ItemsRoutes.ItemsMain]: undefined;
  [ItemsRoutes.NoNotifications]: undefined;
  [ItemsRoutes.Notifications]: undefined;
};

export type ItemsProps<RouteName extends ItemsRoutes> = StackScreenProps<
  ItemsParamList,
  RouteName
>;

export type ItemsNavigationProps = StackNavigationProp<ItemsParamList>;
