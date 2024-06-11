import {StackNavigationProp, StackScreenProps} from "@react-navigation/stack";

export enum SellsRoutes {
    DOB = "DOB",
}

export type SellsParamList = {
    [SellsRoutes.DOB]: undefined;
};

export type SellsProps<RouteName extends SellsRoutes> = StackScreenProps<
    SellsParamList,
    RouteName
>;

export type SellsNavigationProps = StackNavigationProp<SellsParamList>;
