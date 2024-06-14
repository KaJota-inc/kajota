import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export enum ItemsRoutes {
    ItemsMain = "ItemsMain",
}

export type ItemsParamList = {
    [ItemsRoutes.ItemsMain]: undefined;
};

export type ItemsProps<RouteName extends ItemsRoutes> = StackScreenProps<
  ItemsParamList,
  RouteName
>;

export type ItemsNavigationProps = StackNavigationProp<ItemsParamList>;
