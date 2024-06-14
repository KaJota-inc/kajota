import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export enum ExploreRoutes {
    ExploreMain = "ExploreMain",
}

export type ExploreParamList = {
    [ExploreRoutes.ExploreMain]: undefined;
};

export type ExploreProps<RouteName extends ExploreRoutes> = StackScreenProps<
  ExploreParamList,
  RouteName
>;

export type ExploreNavigationProps = StackNavigationProp<ExploreParamList>;
