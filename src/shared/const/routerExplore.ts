import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export enum ExploreRoutes {
    DOB = "DOB",
}

export type ExploreParamList = {
    [ExploreRoutes.DOB]: undefined;
};

export type ExploreProps<RouteName extends ExploreRoutes> = StackScreenProps<
  ExploreParamList,
  RouteName
>;

export type ExploreNavigationProps = StackNavigationProp<ExploreParamList>;
