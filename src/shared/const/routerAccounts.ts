import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";


export enum AccountsRoutes {
    DOB = "DOB",
}

export type AccountsParamList = {
    [AccountsRoutes.DOB]: undefined;
};

export type AccountsProps<RouteName extends AccountsRoutes> =
  StackScreenProps<AccountsParamList, RouteName>;

export type AccountsNavigationProps =
  StackNavigationProp<AccountsParamList>;
