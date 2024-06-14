import {StackNavigationProp, StackScreenProps} from "@react-navigation/stack";

export enum SellsRoutes {
    SellsMain = "SellsMain",
}

export type SellsParamList = {
    [SellsRoutes.SellsMain]: undefined;
};

export type SellsProps<RouteName extends SellsRoutes> = StackScreenProps<
    SellsParamList,
    RouteName
>;

export type SellsNavigationProps = StackNavigationProp<SellsParamList>;
