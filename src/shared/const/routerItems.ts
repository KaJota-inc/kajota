import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export enum ItemsRoutes {
    DOB = "DOB",
}

export type ItemsParamList = {
    [ItemsRoutes.DOB]: undefined;
};

export type ItemsProps<RouteName extends ItemsRoutes> = StackScreenProps<
  ItemsParamList,
  RouteName
>;

export type ItemsNavigationProps = StackNavigationProp<ItemsParamList>;
