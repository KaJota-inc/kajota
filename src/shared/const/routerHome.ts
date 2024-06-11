import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export enum HomeRoutes {
    DOB = "DOB",
}

export type HomeParamList = {
    [HomeRoutes.DOB]: undefined;
};

export type HomeProps<RouteName extends HomeRoutes> = StackScreenProps<
  HomeParamList,
  RouteName
>;

export type HomeNavigationProps = StackNavigationProp<HomeParamList>;
